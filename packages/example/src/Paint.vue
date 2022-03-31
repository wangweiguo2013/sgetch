<template>
  <div>
    <div class="simple-page">
      <Container @drop="onDrop">
        <Draggable v-for="item in items" :key="item.id">
          <div class="draggable-item">
            {{ item.data }}
          </div>
        </Draggable>
      </Container>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "@vue/composition-api";
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "./utils";
export default {
  name: "Simple",
  components: { Container, Draggable },
  setup(){
    const state = reactive({
      items: generateItems(50, i => ({ id: i, data: "Draggable " + i }))
    })

    const onDrop = (dropResult) => {
      const res = applyDrag(state.items, dropResult);
      console.log('on drop', res)
      state.items = res
    }
    return {
      ...toRefs(state),
      onDrop
    }
  }
};
</script>
