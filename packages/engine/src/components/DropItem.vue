<template>
    <div class="drop-item" ref="drop"> 
        <slot />
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const dropEl: HTMLElement  = ref()

        onMounted(() => {

        })
        return {
            dropEl
        }
    },
})
</script>
<style scoped>

</style>
