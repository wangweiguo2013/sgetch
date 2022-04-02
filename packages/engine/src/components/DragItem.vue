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
}

</style>
