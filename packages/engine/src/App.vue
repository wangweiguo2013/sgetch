<template>
  <div class="app">
    <DragItem>drag me</DragItem>
    <DropItem>drop me </DropItem>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from "@vue/composition-api";
import { monitor } from "@sgetch/dnd";
import DragItem from "./components/DragItem.vue";
import DropItem from "@/components/DropItem.vue"

export default defineComponent({
  name: "App",
  components: { DragItem, DropItem },
  setup() {
    const state = reactive({
      activeWidgetId: '2123'
    });

    onMounted(() => {
      console.log(monitor)
    })
    return {
      ...toRefs(state)
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
