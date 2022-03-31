class Monitor {
    // 正在拖拽
    isDragging: boolean
    //当前拖拽的数据
    activeDragData: Record<string, unknown>
    activeDragTarget: HTMLElement | null
    // 当前要放置的数据
    activeDropTarget: HTMLElement | null
    constructor(){
        this.isDragging = false
        this.activeDragElement = null
        this.activeDropTarget = null
    }

}

export default Monitor