<template>
    <div class="drag-item" ref="dragEl">
        <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent, h, onMounted, onUnmounted, ref } from '@vue/composition-api'
import { DragManager } from '@sgetch/dnd/src/index'

export default defineComponent({
    props: {
        dragSource: {
            type: Object
        }
    },
    setup(props, { emit }) {
        const dragEl = ref<HTMLElement | null>(null)
        let dragManager: any
        onMounted(() => {
           dragManager = new DragManager(dragEl.value as HTMLElement, props.dragSource)
        })
        onUnmounted(() => {
            dragManager && dragManager.destroy()
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
