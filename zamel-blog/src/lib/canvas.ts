type Rect = {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    draggable?: boolean;
};

export class EasyCanvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private rects: Rect[] = [];
    private draggingRect: Rect | null = null;
    private offsetX: number = 0;
    private offsetY: number = 0;

    constructor(width: number = 300, height: number = 150, container?: HTMLElement) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d')!;
        if (container) {
            container.appendChild(this.canvas);
        }
        this.initEvents();
    }

    private initEvents() {
        this.canvas.addEventListener('mousedown', this.onMouseDown);
        this.canvas.addEventListener('mousemove', this.onMouseMove);
        this.canvas.addEventListener('mouseup', this.onMouseUp);
        this.canvas.addEventListener('mouseleave', this.onMouseUp);
    }

    private onMouseDown = (e: MouseEvent) => {
        const { x, y } = this.getMousePos(e);
        for (let i = this.rects.length - 1; i >= 0; i--) {
            const rect = this.rects[i];
            if (rect.draggable && this.isPointInRect(x, y, rect)) {
                this.draggingRect = rect;
                this.offsetX = x - rect.x;
                this.offsetY = y - rect.y;
                // Bring the dragged rect to the top
                this.rects.splice(i, 1);
                this.rects.push(rect);
                break;
            }
        }
    };

    private onMouseMove = (e: MouseEvent) => {
        if (this.draggingRect) {
            const { x, y } = this.getMousePos(e);
            this.draggingRect.x = x - this.offsetX;
            this.draggingRect.y = y - this.offsetY;
            this.redraw();
        }
    };

    private onMouseUp = (_e: MouseEvent) => {
        this.draggingRect = null;
    };

    private getMousePos(e: MouseEvent) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }

    private isPointInRect(x: number, y: number, rect: Rect) {
        return (
            x >= rect.x &&
            x <= rect.x + rect.width &&
            y >= rect.y &&
            y <= rect.y + rect.height
        );
    }

    // Drawing and shape management
    addRect(x: number, y: number, width: number, height: number, color: string, draggable: boolean = false) {
        this.rects.push({ x, y, width, height, color, draggable });
        this.redraw();
    }

    clearRects() {
        this.rects = [];
        this.redraw();
    }

    private redraw() {
        this.clear();
        for (const rect of this.rects) {
            this.fillRect(rect.x, rect.y, rect.width, rect.height, rect.color);
        }
    }

    // --- Existing methods ---
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    fillRect(x: number, y: number, w: number, h: number, color?: string) {
        if (color) this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
    }

    // ... (other drawing methods as before) ...

    get element(): HTMLCanvasElement {
        return this.canvas;
    }
}
