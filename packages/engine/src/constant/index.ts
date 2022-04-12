import { h } from "@vue/composition-api"

export const CMP = [
  {
    id: 1,
    name: 'text',
    tag: 'div',
    attrs: {
      style: { width: 200, height: 200, backgroundColor: '#ff0000' },
      textContent: 'From drag!'
    }
  },
  {
    id: 2,
    name: 'custom render',
    tag: 'div',
    attrs: {
      style: { width: 200, height: 200, backgroundColor: '#ff0000' },
    },
    customRender(source) {
      const { tag, attrs, id } = source
      return h(tag, { style: { color: 'red' } }, id + ': I am custom render!')
    }
  }
]