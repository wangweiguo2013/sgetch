export declare class DragManager {
    el: HTMLElement;
    dragPreviewEl: HTMLElement;
    events: {
        target: HTMLElement | Document;
        type: string;
        listener: EventListenerOrEventListenerObject;
    }[];
    startRect: Rect & {
        mouseX: number;
        mouseY: number;
    };
    dragMoveHandler: Function;
    constructor(el: HTMLElement | string);
    initEvents(): void;
    setDragStartHandler(): void;
    setDragEndHandler(): void;
    removeHandlers(): void;
}
