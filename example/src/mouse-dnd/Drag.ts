class Drag {
  el: Element
  events: Record<string, Function[]>
  constructor(el: Element) {
      this.el = el
      this.events = {
        mousemove: [],
        mousedown: []
      }
  }
  bindHoverEvent(){
    const hoverFn = (e:Event) => {

    }
    this.el.addEventListener('mousemove', hoverFn)
    this.events.mousemove.push(hoverFn)

  }
  bindDragEvent() {
      this.el.addEventListener('mousedown', ()=>{})
  }
  // 拖拽时的动画
  bindPreviewEvent(){}
  unbindEvent(){
      Object.entries(this.events).forEach(([eventType, fns]) => {
        fns.forEach(fn => {
            this.el.removeEventListener(eventType, fn as EventListenerOrEventListenerObject)
         })
      })
    
  }
}

export default Drag
