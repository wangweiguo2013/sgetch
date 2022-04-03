class Monitor {
    isDragging: boolean
    //当前拖拽的数据
    dragSource!: Recordable | null
    dragElement: HTMLElement | null
    dropElement: HTMLElement | null

    constructor(){
        this.isDragging = false
        this.dragElement = null
        this.dropElement = null
    }
    
    setDragSource(dragSource: Recordable | null){
        this.dragSource = dragSource
    }

    getDragSource() {
        return this.dragSource
    }

    setDragElement(){}
    
    setDropElement(){}

}

export const monitor =  new Monitor()