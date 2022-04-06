import { monitor } from "./monitor"
import { getElement } from "./utils"
import EventEmitter from './utils/EventEmitter'
export class DropManager extends EventEmitter {
    el!: HTMLElement
    activeClassName!: string
    canDrop!: boolean
    isOver!: boolean
    dragOverListener!: EventListener
    dragLeaveListener!: EventListener
    dropHandler!: EventListener
    constructor(el: HTMLElement | string, activeClassName: string) {
        super()
        const element = getElement(el)
        if(!element) {
            console.error('invalid html element')
            return
        }
        this.el = element
        this.activeClassName = activeClassName
        this.initDrop()
        this.canDrop = true
        this.isOver = false
    }

    initDrop(){
        this.dragOverListener = this.dragOver.bind(this) 
        this.el.addEventListener('mouseover', this.dragOverListener)

        this.dragLeaveListener = this.dragLeave.bind(this)
        this.el.addEventListener('mouseleave', this.dragLeaveListener)

    }

    dragOver(){
        if(!monitor.isDragging) return
        this.isOver = true
        this.el.classList.add(this.activeClassName)
        //  发布消息
        const that = this
        this.dropHandler = () => {
            that.events['drop'] && that.events['drop'].forEach(sub => {
                sub(monitor.getDragSource())
            })
        }
        this.el.addEventListener('mouseup', this.dropHandler)
    }


    dragLeave(){
        this.isOver = false
        this.el.classList.remove(this.activeClassName)
        this.dropHandler && this.el.removeEventListener('mouseup', this.dropHandler)
    }

    setCanDrop(canDrop: boolean){
        this.canDrop = canDrop
    }

    destroy(){
        Object.keys(this.events).forEach(eventType => {
            this.events[eventType] = []
        })
    }



    
}
 