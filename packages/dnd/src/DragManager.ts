import { getElement } from './utils'
import { monitor } from './monitor'

export class DragManager {
    el!: HTMLElement
    dragPreviewEl!: HTMLElement
    events!: Function[] 
    dragMoveHandler!: Function
    constructor(el: HTMLElement | string) {
        const element = getElement(el)
        if(!el) {
            console.error('invalid html element')
            return
        }
        this.el = element as HTMLElement
        this.events = []
        this.initEvents()
    }

    initEvents() {
        this.setDragStartHandler()
        // this.setDragEndHandler()
    }

    setDragStartHandler() {
        this.el.addEventListener('mousedown', (e: MouseEvent) => {
            monitor.isDragging = true
            this.dragPreviewEl = this.el.cloneNode(true) as HTMLElement
            const { pageX, pageY } = e
            this.dragPreviewEl.style.cssText = `
                position: fixed;
                left: 0px;
                top: 0px;
                transform: translate(${pageX}px, ${pageY}px);
            `
            document.body.appendChild(this.dragPreviewEl)

            const dragMoveHandler = (e: MouseEvent) => {
                const { pageX, pageY } = e
                this.dragPreviewEl.style.cssText = `transform: translate(${pageX}px, ${pageY}px);`
            }
            document.addEventListener('mousemove', dragMoveHandler)
            document.addEventListener('mouseup', this.setDragEndHandler.bind(this))

            this.dragMoveHandler = dragMoveHandler
        })
    }

    setDragEndHandler() {
        document.removeEventListener('mousemove' ,this.dragMoveHandler as any)
        document.body.removeChild(this.dragPreviewEl)
        
    }

    removeHandlers() {

    }

}
