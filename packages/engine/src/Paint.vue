<template>
  <div>
    <div class="simple-page">
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "@vue/composition-api";
import { applyDrag, generateItems } from "./utils";
export default {
  name: "Simple",
  setup(){
    const state = reactive({
      items: generateItems(50, i => ({ id: i, data: "Draggable " + i }))
    })

    return {
      ...toRefs(state)
    }
  }
};
</script>
