class Monitor {
    constructor() {
        this.isDragging = false;
        this.dragElement = null;
        this.dropElement = null;
    }
    setDragSource() { }
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
    constructor(el) {
        const element = getElement(el);
        if (!el) {
            console.error('invalid html element');
            return;
        }
        this.el = element;
        this.events = [];
        this.initEvents();
    }
    initEvents() {
        this.setDragStartHandler();
        // this.setDragEndHandler()
    }
    setDragStartHandler() {
        this.el.addEventListener('mousedown', (e) => {
            monitor.isDragging = true;
            this.dragPreviewEl = this.el.cloneNode(true);
            const { pageX, pageY } = e;
            this.dragPreviewEl.style.cssText = `
                position: fixed;
                left: 0px;
                top: 0px;
                transform: translate(${pageX}px, ${pageY}px);
            `;
            document.body.appendChild(this.dragPreviewEl);
            const dragMoveHandler = (e) => {
                const { pageX, pageY } = e;
                this.dragPreviewEl.style.cssText = `transform: translate(${pageX}px, ${pageY}px);`;
            };
            document.addEventListener('mousemove', dragMoveHandler);
            document.addEventListener('mouseup', this.setDragEndHandler.bind(this));
            this.dragMoveHandler = dragMoveHandler;
        });
    }
    setDragEndHandler() {
        document.removeEventListener('mousemove', this.dragMoveHandler);
        document.body.removeChild(this.dragPreviewEl);
    }
    removeHandlers() {
    }
}

class DropManager {
}

const foo = () => {
    console.log('foo 0');
};

export { DragManager, DropManager, foo, monitor$1 as monitor };
