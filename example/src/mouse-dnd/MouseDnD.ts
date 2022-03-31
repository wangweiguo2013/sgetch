
import Drag from './Drag'
import Drop from './Drop'

const map = {
    drag: Drag,
    drop: Drop
}

export default function getDndInstance(dndType: 'drag' | 'drop', el: Element){
    const Ctor = map[dndType]
    return new Ctor(el)
}