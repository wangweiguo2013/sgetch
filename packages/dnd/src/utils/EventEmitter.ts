class EventEmitter {
    events: Record<string, Function[]>
    
    constructor(){
        this.events = {}
    }
    on(eventType: string, fn: Function){
        this.events[eventType] = this.events[eventType] || []
        this.events[eventType].push(fn)
    }
    off(eventType: string, fn: Function){
        if(this.events[eventType]) return

        this.events[eventType] = this.events[eventType].filter(listener => {
            return listener !== fn
        })
    }
}
export default EventEmitter