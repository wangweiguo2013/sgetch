class Monitor {
    constructor() {
        this.isDragging = false;
        this.dragElement = null;
        this.dropElement = null;
    }
    setDragSource(dragSource) {
        this.dragSource = dragSource;
    }
    getDragSource() {
        return this.dragSource;
    }
    setDragElement() { }
    setDropElement() { }
}
const monitor = new Monitor();

var monitor$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    monitor: monitor
});

const getElement = (el) => {
    if (typeof el === 'string') {
        return document.querySelector(el);
    }
    return el;
};

class DragManager {
    constructor(el, dragSource) {
        const element = getElement(el);
        if (!element) {
            console.error('invalid html element');
            return;
        }
        this.el = element;
        this.startRect = { x: 0, y: 0, w: 0, h: 0, mouseX: 0, mouseY: 0 };
        this.dragSource = dragSource;
        this.initDrag();
    }
    initDrag() {
        this.setDragStartHandler();
    }
    setDragStartHandler() {
        this.el.addEventListener('mousedown', (e) => {
            const { pageX, pageY } = e;
            monitor.isDragging = true;
            monitor.setDragSource(this.dragSource);
            const { x, y, width: w, height: h } = this.el.getBoundingClientRect();
            this.startRect = { x, y, w, h, mouseX: pageX, mouseY: pageY };
            this.dragPreviewEl = this.el.cloneNode(true);
            this.dragPreviewEl.style.position = 'fixed';
            this.dragPreviewEl.style.left = `${x}px`;
            this.dragPreviewEl.style.top = `${y}px`;
            this.dragPreviewEl.style.transform = `translate(0, 0)`;
            this.dragPreviewEl.style.pointerEvents = 'none';
            document.body.appendChild(this.dragPreviewEl);
            const dragMoveHandler = (e) => {
                const { pageX, pageY } = e;
                const deltaX = pageX - this.startRect.mouseX;
                const deltaY = pageY - this.startRect.mouseY;
                this.dragPreviewEl.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            };
            document.addEventListener('mousemove', dragMoveHandler);
            this.dragEndHandler = this.setDragEndHandler.bind(this);
            document.addEventListener('mouseup', this.dragEndHandler);
            this.dragMoveHandler = dragMoveHandler;
        });
    }
    setDragEndHandler() {
        document.removeEventListener('mousemove', this.dragMoveHandler);
        document.removeEventListener('mouseup', this.dragEndHandler);
        document.body.removeChild(this.dragPreviewEl);
        monitor.isDragging = false;
        console.log('monitor', monitor.isDragging);
    }
    destroy() {
    }
}

class DropManager {
    constructor(el, activeClassName) {
        const element = getElement(el);
        if (!element) {
            console.error('invalid html element');
            return;
        }
        this.el = element;
        this.activeClassName = activeClassName;
        this.initDrop();
        this.canDrop = true;
        this.isOver = false;
    }
    initDrop() {
        this.dragOverListener = this.dragOver.bind(this);
        this.el.addEventListener('mouseover', this.dragOverListener);
        this.dragLeaveListener = this.dragLeave.bind(this);
        this.el.addEventListener('mouseleave', this.dragLeaveListener);
    }
    dragOver() {
        console.log('dragOver', monitor.isDragging);
        if (!monitor.isDragging)
            return;
        this.isOver = true;
        this.el.classList.add(this.activeClassName);
        this.dropHandler = () => {
            console.log(monitor.getDragSource());
        };
        this.el.addEventListener('mouseup', this.dropHandler);
    }
    dragLeave() {
        this.isOver = false;
        this.el.classList.remove(this.activeClassName);
        this.dropHandler && this.el.removeEventListener('mouseup', this.dropHandler);
    }
    setCanDrop(canDrop) {
        this.canDrop = canDrop;
    }
}

const foo = () => {
    console.log('foo 0');
};

export { DragManager, DropManager, foo, monitor$1 as monitor };
