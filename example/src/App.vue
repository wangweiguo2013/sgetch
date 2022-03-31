<template>
  <div class="app">
    <div class="layers-con">
        <div v-for="item in components" :key="item.componentId">
          <div class="draggable-component-item">
            {{ item.name }}
          </div>
        </div>
    </div>
    <div class="sketch-con">
      <div
        class="sketch"
      >
        <!-- <Draggable
          v-for="item in items"
          :key="item.componentId"
        > -->
        <Block
          v-for="item in items"
          :key="item.componentId"
          :data="item"
          :activeWidgetId="activeWidgetId"
          @attrsChange="onChange(item.componentId, $event)"
          @active="onWidgetActive"
        />
        <!-- </Draggable> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from "@vue/composition-api";
import Block from "@/components/Block/Block.vue";
import { applyDrag, printSchema } from "./utils";
import { componentList, CMP } from "@/constant";
import { MOCK_LIST, EASY_MOCK } from '@/mock'
import "vue-draggable-resizable/dist/VueDraggableResizable.css";

export default defineComponent({
  name: "App",
  components: { Block },
  setup() {
    const state = reactive({
      items: EASY_MOCK,
      components: EASY_MOCK,
      activeWidgetId: ''
    });

    const getComponentPayload = (index: number) => {
      return state.components[index];
    };
    const onChange = (componentId, attrs) => {
      console.log("onChange", componentId, attrs);
      state.items = state.items.map(item => {
        if (item.componentId === componentId) {
          item.attrs = { ...item.attrs, ...attrs };
        }
        return item;
      });
      printSchema(state.items);
    };
    const onWidgetActive = (id) => {
      state.activeWidgetId = id
    }
    return {
      ...toRefs(state),
      onChange,
      getComponentPayload,
      onWidgetActive,
    };
  },
});
</script>
<style>
.app {
  display: flex;
  justify-content: space-between;
}
.sketch-con {
  width: 350px;
  margin: 20px auto;
  min-height: 1000px;
  position: relative;
  border: 1px solid rgb(209, 209, 209);
}
.sketch {
  height: 100%;
}
.draggable-item {
  cursor: pointer;
  user-select: none;
}
.draggable-component-item {
  cursor: pointer;
  user-select: none;
  border: px solid #eeeeee;
  margin-top: 10px;
  font-size: 16px;
}
</style>
