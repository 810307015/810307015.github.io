import { ref, onMounted } from 'vue';

export type RecorderParam = {
  onEnd: (chunks: Blob[]) => void;
  onSpeakChange?: (rms: number) => void;
  onStreamChange?: (buffer: ArrayBuffer) => void; // 处理流式数据可以传入这个回调，拿到buffer
  mimeType?: string;
};

export class Recorder {
  chunks: Blob[];
  onEnd: (chunks: Blob[]) => void;
  onSpeakChange?: (rms: number) => void;
  onStreamChange?: (buffer: ArrayBuffer) => void;
  stream: MediaStream | null;
  mediaRecorder: MediaRecorder | null;
  audioContext: AudioContext | null;
  mediaStreamSource: MediaStreamAudioSourceNode | null;
  processor: ScriptProcessorNode | null;
  mimeType: string;
  isCancel: boolean; // 是否是取消了录音
  constructor(param: RecorderParam) {
    const { onEnd, onSpeakChange, onStreamChange, mimeType } = param;
    this.chunks = [];
    this.onEnd = onEnd;
    this.onSpeakChange = onSpeakChange;
    this.onStreamChange = onStreamChange;
    this.stream = null;
    this.mediaRecorder = null;
    this.audioContext = null;
    this.mediaStreamSource = null;
    this.processor = null;
    this.isCancel = false;
    this.mimeType = mimeType || "audio/mp4"; // 目前MediaRecorder在safari上只支持MP4的格式
  }

  async start() {
    this.isCancel = false;
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.audioContext = new AudioContext();
    this.mediaStreamSource = this.audioContext.createMediaStreamSource(
      this.stream
    );
    this.processor = this.audioContext.createScriptProcessor(2048, 1, 1);
    this.processor.onaudioprocess = (e) => {
      let buffer = e.inputBuffer.getChannelData(0);
      const numberArr: number[] = [];
      for (let i = 0; i < buffer.length; i++) {
        numberArr.push(buffer[i]);
      }
      let rms = Math.max.apply(null, numberArr);
      if (!this.isCancel) {
        this.onSpeakChange?.(rms);
        this.onStreamChange?.(buffer); // 流式交互可以用这个处理
      }
    };
    this.mediaStreamSource.connect(this.processor);
    this.processor.connect(this.audioContext.destination);

    this.mediaRecorder = new MediaRecorder(this.stream, {
      mimeType: this.mimeType,
    });
    this.mediaRecorder.ondataavailable = (event) => {
      this.chunks.push(event.data);
    };
    this.mediaRecorder.onstop = () => {
      if (!this.isCancel) {
        this.onEnd?.([...this.chunks]);
        this.onSpeakChange?.(0);
      }
      this.chunks = [];
    };
    this.mediaRecorder.start();
  }

  async stop() {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
      this.mediaRecorder = null;
    }
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
    if (this.audioContext) {
      await this.audioContext.close();
      this.audioContext = null;
    }
    this.mediaStreamSource = null;
    this.processor = null;
  }

  // 取消录音
  async cancel() {
    this.isCancel = true;
    await this.stop();
  }
}

export type GetRecorderFuncParam = {
  onEnd: (file: File) => void;
  onSpeakChange?: (rms: number) => void;
  mimeType?: string;
};

export const useRecordAudioFunc = (param: GetRecorderFuncParam) => {
  const { onEnd, onSpeakChange } = param;

  const recorder = ref<Recorder>();

  onMounted(() => {
    recorder.value =
      new Recorder({
        onEnd: (chunks: Blob[]) => {
          const blob = new Blob(chunks, {
            type: "audio/webm",
          });
          const file = new File([blob], "record.webm", {
            type: "audio/webm",
          });
          onEnd?.(file);
        },
        onSpeakChange: (rms: number) => {
          onSpeakChange?.(rms);
        },
      });
  });

  // 不需要每次组件更新都重新获取
  return {
    start: () => recorder.value?.start(), // 开始录音
    stop: () => recorder.value?.stop(), // 结束录音
    cancel: () => recorder.value?.cancel(), // 取消录音
  }
};

export type AudioPlayerProps = {
  arrayBuffer: ArrayBuffer; // 音频流
  rate: number; // 播放速率
  onEnd: () => {}; // 播放结束后的回调
  onReady: () => {}; // 准备好播放之后
};
export class AudioPlayer {
  audioBuffer: AudioBuffer | null;
  audioContext: AudioContext;
  source: AudioBufferSourceNode | null;
  startTime: number;
  offset: number;
  rate: number;
  isEndByStop: boolean;
  onEnd: () => void;
  onReady: () => void;
  constructor(props) {
    const { arrayBuffer, rate = 1, onEnd, onReady } = props;
    this.audioContext = new AudioContext();
    this.rate = rate;
    this.onEnd = onEnd;
    this.onReady = onReady;
    this.isEndByStop = false;
    this.startTime = 0;
    this.offset = 0;
    this.audioBuffer = null;
    this.source = null;
    this.audioContext.decodeAudioData(arrayBuffer).then((buffer) => {
      this.audioBuffer = buffer;
      this.onReady?.();
    });
  }

  start() {
    this.isEndByStop = false;
    this.source = this.audioContext.createBufferSource();
    this.source.buffer = this.audioBuffer;
    this.source.playbackRate.value = this.rate || 1;
    this.source.connect(this.audioContext.destination);
    this.source.onended = () => {
      if (!this.isEndByStop) {
        this.offset = 0; // 正常播放完成的重置offset
      } else {
        // 记录播放的时长
        this.offset =
          this.audioContext.currentTime - this.startTime + this.offset;
      }
      this.onEnd?.();
    };
    this.source.start(0, this.offset);
    this.startTime = this.audioContext.currentTime; // 记录开始时间
  }

  stop() {
    if (this.source) {
      // 手动停止的播放
      this.isEndByStop = true;
      this.source.stop();
      this.source.disconnect(this.audioContext.destination);
      this.source = null;
    }
  }
}
