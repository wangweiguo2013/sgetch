import { getElement } from './utils'
import { monitor } from './monitor'
import { cloneDeep } from 'lodash-es'

export class DragManager {
    el!: HTMLElement
    dragPreviewEl!: HTMLElement
    dragSource!: Recordable | null
    startRect!: Rect & { mouseX: number, mouseY: number }
    dragMoveHandler!: EventListener
    dragEndHandler!: EventListener
    constructor(el: HTMLElement | string, dragSource: Recordable) {
        const element = getElement(el)
        if(!element) {
            console.error('invalid html element')
            return
        }
        this.el = element as HTMLElement
        this.startRect = { x: 0, y: 0, w: 0, h: 0, mouseX: 0, mouseY: 0 }
        this.dragSource = cloneDeep(dragSource)
        this.initDrag()
    }

    initDrag() {
        this.setDragStartHandler()
    }

    setDragStartHandler() {
        this.el.addEventListener('mousedown', (e: MouseEvent) => {
            const { pageX, pageY } = e

            monitor.isDragging = true
            monitor.setDragSource(this.dragSource)

            const { x, y, width: w, height: h } = this.el.getBoundingClientRect()
            this.startRect = { x, y, w, h, mouseX: pageX, mouseY: pageY}
            this.dragPreviewEl = this.el.cloneNode(true) as HTMLElement
            this.dragPreviewEl.style.position = 'fixed'
            this.dragPreviewEl.style.left = `${x}px`
            this.dragPreviewEl.style.top = `${y}px`
            this.dragPreviewEl.style.transform = `translate(0, 0)`
            this.dragPreviewEl.style.pointerEvents = 'none'
            document.body.appendChild(this.dragPreviewEl)

            const dragMoveHandler = (e: Event) => {
                const { pageX, pageY } = e as MouseEvent
                const deltaX = pageX - this.startRect.mouseX
                const deltaY = pageY - this.startRect.mouseY
                this.dragPreviewEl.style.transform = `translate(${deltaX}px, ${deltaY}px)`
            }
            document.addEventListener('mousemove', dragMoveHandler)
            this.dragEndHandler = this.setDragEndHandler.bind(this)
            document.addEventListener('mouseup', this.dragEndHandler)

            this.dragMoveHandler = dragMoveHandler
        })
    }

    setDragEndHandler() {
        document.removeEventListener('mousemove' ,this.dragMoveHandler)
        document.removeEventListener('mouseup' ,this.dragEndHandler)
        document.body.removeChild(this.dragPreviewEl)
        monitor.isDragging = false
        console.log('monitor', monitor.isDragging);
        
    }

    destroy() {

    }

}
