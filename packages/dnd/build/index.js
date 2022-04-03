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
        this.startRect = { x: 0, y: 0, w: 0, h: 0, mouseX: 0, mouseY: 0 };
        this.events = [];
        this.initEvents();
    }
    initEvents() {
        this.setDragStartHandler();
        // this.setDragEndHandler()
    }
    setDragStartHandler() {
        this.el.addEventListener('mousedown', (e) => {
            const { pageX, pageY } = e;
            monitor.isDragging = true;
            const { x, y, width: w, height: h } = this.el.getBoundingClientRect();
            this.startRect = { x, y, w, h, mouseX: pageX, mouseY: pageY };
            this.dragPreviewEl = this.el.cloneNode(true);
            this.dragPreviewEl.style.position = 'fixed';
            this.dragPreviewEl.style.left = `${x}px`;
            this.dragPreviewEl.style.top = `${y}px`;
            this.dragPreviewEl.style.transform = `translate(0, 0)`;
            document.body.appendChild(this.dragPreviewEl);
            const dragMoveHandler = (e) => {
                const { pageX, pageY } = e;
                const deltaX = pageX - this.startRect.mouseX;
                const deltaY = pageY - this.startRect.mouseY;
                this.dragPreviewEl.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            };
            document.addEventListener('mousemove', dragMoveHandler);
            const listener = this.setDragEndHandler.bind(this);
            document.addEventListener('mouseup', listener);
            this.events.push({ target: document, type: 'mouseup', listener });
            this.dragMoveHandler = dragMoveHandler;
        });
    }
    setDragEndHandler() {
        document.removeEventListener('mousemove', this.dragMoveHandler);
        document.body.removeChild(this.dragPreviewEl);
        this.events.forEach(({ target, type, listener }) => {
            target.removeEventListener(type, listener);
        });
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
