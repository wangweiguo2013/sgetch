export declare class DragManager {
    el: HTMLElement;
    dragPreviewEl: HTMLElement;
    events: Function[];
    dragMoveHandler: Function;
    constructor(el: HTMLElement | string);
    initEvents(): void;
    setDragStartHandler(): void;
    setDragEndHandler(): void;
    removeHandlers(): void;
}
