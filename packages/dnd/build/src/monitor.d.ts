declare class Monitor {
    isDragging: boolean;
    dragSource: Recordable | null;
    dragElement: HTMLElement | null;
    dropElement: HTMLElement | null;
    constructor();
    setDragSource(dragSource: Recordable | null): void;
    getDragSource(): Recordable | null;
    setDragElement(): void;
    setDropElement(): void;
}
export declare const monitor: Monitor;
export {};
