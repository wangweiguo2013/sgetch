<script lang="tsx">
import { defineComponent, h, onMounted, onUnmounted, ref } from '@vue/composition-api'
import { DragManager } from '@sgetch/dnd'

export default {
    name: "Block",
    props: {
        data: Object,
    },
    render(){
        const { data } = this as any
        
        if(data.customRender) return data.customRender(data)

        const { tag, attrs } = data
        return (
            <div className="block-item" ref="dragEl">
                    <tag>{attrs.textContent}</tag>
            </div>
        )
    }
}
</script>
<style scoped>
.block-item {
    width: 100px;
    height: 100px;
}

</style>
