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
        this.el.addEventListener('mousedown', (e: Event) => {
            monitor.isDragging = true

            const dragMoveHandler = (e:MouseEvent) => {
                this.dragPreviewEl = this.el.cloneNode(true) as HTMLElement
                const { pageX, pageY } = e
                this.dragPreviewEl.style.cssText = `
                    position: fixed;
                    left: ${pageX}px;
                `
                document.appendChild(this.dragPreviewEl)


            }
            document.addEventListener('mousemove', dragMoveHandler)
            this.dragMoveHandler = dragMoveHandler
        })
    }

    setDragEndHandler() {
        document.removeEventListener('mousemove' ,this.dragMoveHandler as any)
        document.removeChild(this.dragPreviewEl)
    }

    removeHandlers() {

    }

}
