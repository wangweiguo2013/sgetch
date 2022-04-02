declare class Monitor {
    isDragging: boolean;
    dragSource: Record<string, unknown>;
    dragElement: HTMLElement | null;
    dropElement: HTMLElement | null;
    constructor();
    setDragSource(): void;
    setDragElement(): void;
    setDropElement(): void;
}
export declare const monitor: Monitor;
export {};
