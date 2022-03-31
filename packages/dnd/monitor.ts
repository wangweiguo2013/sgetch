class Monitor {
    isDragging: boolean
    //当前拖拽的数据
    dragSource!: Record<string, unknown>
    dragElement: HTMLElement | null
    dropElement: HTMLElement | null

    constructor(){
        this.isDragging = false
        this.dragElement = null
        this.dropElement = null
    }
    
    setDragSource(){}

    setDragElement(){}
    
    setDropElement(){}

}

export default new Monitor()