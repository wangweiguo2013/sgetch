export declare class DragManager {
    el: HTMLElement;
    dragPreviewEl: HTMLElement;
    dragSource: Recordable | null;
    startRect: Rect & {
        mouseX: number;
        mouseY: number;
    };
    dragMoveHandler: EventListener;
    dragEndHandler: EventListener;
    constructor(el: HTMLElement | string, dragSource: Recordable);
    initDrag(): void;
    setDragStartHandler(): void;
    setDragEndHandler(): void;
    destroy(): void;
}
