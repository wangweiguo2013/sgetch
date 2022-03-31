# engine



`dragSource`
```ts
{
    tag: 'p',
    attrs: {},
    code: {
        css: ``, // css添加作用域
        js: `function(data, state){  }` //data是组件attrs， state是全局数据 
    },

    render(): string | HTMLElement {
        return ''
    }
}
```

自定义组件渲染
1. 
```js
render(widget){
    if(widget.tag === 'p') {
        return `<h1>${widget.attrs.textContent}</h1>`
    }
}
```

2. 自定于vue组件
```js
import Engine from '@sgetch/engine'

Engine.registerVueComponents([])
// 或者手动在new Vue之前全局注册组件
```