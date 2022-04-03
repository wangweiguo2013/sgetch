<template>
    <div class="drag-item" ref="dragEl">
        <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from '@vue/composition-api'
import { DragManager } from '@sgetch/dnd'

export default defineComponent({
    setup(props, { emit }) {
        const dragEl = ref<HTMLElement | null>(null)
        let dragManager: any
        onMounted(() => {
            const dragSource = {
                tag: 'div',
                attrs: {
                    style: { width: 200, height: 200, backgroundColor: '#ff0000' },
                    textContent: 'From drag!'
                }
            }
           dragManager = new DragManager(dragEl.value as HTMLElement, dragSource)
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
