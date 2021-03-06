import EventEmitter from './utils/EventEmitter';
export declare class DropManager extends EventEmitter {
    el: HTMLElement;
    activeClassName: string;
    canDrop: boolean;
    isOver: boolean;
    dragOverListener: EventListener;
    dragLeaveListener: EventListener;
    dropHandler: EventListener;
    constructor(el: HTMLElement | string, activeClassName: string);
    initDrop(): void;
    dragOver(): void;
    dragLeave(): void;
    setCanDrop(canDrop: boolean): void;
    destroy(): void;
}
