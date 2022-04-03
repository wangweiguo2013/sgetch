<template>
    <div class="drag-item" ref="dragEl">
        <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import { DragManager } from '@sgetch/dnd'

export default defineComponent({
    setup() {
        const dragEl = ref<HTMLElement | null>(null)
        onMounted(() => {
            new DragManager(dragEl.value)
        })

        return {
            dragEl
        }
    },
})
</script>
<style scoped>
.drag-item {
    user-select: none;
    width: 100px;
    height: 100px;
    border: 1px solid #787878;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

</style>
