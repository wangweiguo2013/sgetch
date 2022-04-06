<template>
    <div class="drop-item" ref="dropEl"> 
        <div class="child" style="width: 50px; height:50px; background: #ff0080;"></div>
        <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from '@vue/composition-api'
import { DropManager } from '@sgetch/dnd'

export default defineComponent({
    props: {
        id: { type: Number }
    },
    setup(props, { emit }) {
        const id = props.id
        const dropEl = ref<HTMLElement | null>(null)
        let dropManager: any


        onMounted(() => {
            dropManager = new DropManager(dropEl.value as HTMLElement, 'active-drop')
            console.log('on mounted')
            dropManager.on('drop', (dragSource:any) => {
                emit('drop',id, dragSource )
            })
        })

        onUnmounted(() => {
            dropManager && dropManager.destroy()
        })

        return {
            dropEl
        }
    },
})
</script>
<style scoped>
.drop-item {
    width: 200px;
    min-height: 50px;
    text-align: center;
    border: 1px solid salmon;
}
.active-drop {
    background-color: salmon;
}

</style>
