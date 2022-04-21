declare class EventEmitter {
    events: Record<string, Set<Function>>;
    constructor();
    on(eventType: string, fn: Function): void;
    off(eventType: string, fn: Function): void;
}
export default EventEmitter;
