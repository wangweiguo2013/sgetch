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
            const dragMoveHandler = (e) => {
                this.dragPreviewEl = this.el.cloneNode(true);
                const { pageX, pageY } = e;
                this.dragPreviewEl.style.cssText = `
                    position: fixed;
                    left: ${pageX}px;
                `;
                document.appendChild(this.dragPreviewEl);
            };
            document.addEventListener('mousemove', dragMoveHandler);
            this.dragMoveHandler = dragMoveHandler;
        });
    }
    setDragEndHandler() {
        document.removeEventListener('mousemove', this.dragMoveHandler);
        document.removeChild(this.dragPreviewEl);
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
