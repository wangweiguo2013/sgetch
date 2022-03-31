# Vue 2 + Typescript + Vite2 + Pinia1

> node >= 14


模板来自 [awesome-vite#templates](https://github.com/vitejs/awesome-vite#templates) [ Vue2 + ts + Vue-Router3 + Pinia1 + Composition API.](https://github.com/nabaonan/todos-action)
## Depends

- [Vue 2.x](https://github.com/vuejs/vue)
- [Vue-Router 3.x](https://github.com/vuejs/vue-router)
- [CompositionApi](https://github.com/vuejs/composition-api)
- [Pinia1](https://github.com/posva/pinia/tree/v1) - manage state instead of vuex
- [ElementUI 2.x](https://github.com/ElemeFE/element) 
- [ViewUI](https://github.com/view-design/ViewUI)
- [Vuesax 4.x](https://github.com/lusaxweb/vuesax-next) - still in alpha 
- [Vite-Plugin-Commonjs](https://github.com/originjs/vite-plugins/tree/main/packages/vite-plugin-commonjs) - a plugin resolve commonjs syntax
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - a vite plugin can auto import ui library on demand
- TypeScript, of course

## Installation

1. Clone repository `git clone https://github.com/nabaonan/todos-action.git `
2. `cd vue2-vite-ts`
3. `yarn` or `npm i`

## Usage

1. Run `yarn`
2. `yarn dev`

## Build

Run `yarn build`


## FAQ
1. 启动报错`EACCES: permission denied, unlink`
```bash
#给当前用户操作工程目录的权限
sudo chown -R ${USER} .
```

## 