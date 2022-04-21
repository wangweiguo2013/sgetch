class EventEmitter {
    events: Record<string, Set<Function>>
    
    constructor(){
        this.events = {}
    }
    on(eventType: string, fn: Function){
        this.events[eventType] = this.events[eventType] || new Set()
        this.events[eventType].add(fn)
    }
    off(eventType: string, fn: Function){
        if(!this.events[eventType]) return

        this.events[eventType].delete(fn)
    }
}
export default EventEmitter