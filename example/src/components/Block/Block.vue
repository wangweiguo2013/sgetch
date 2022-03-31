<script lang="tsx">
import { defineComponent, onMounted } from "@vue/composition-api"
import SuImage from '../demo/SuImage.vue'
import SuText from '../demo/SuText.vue'
import getDndInstance from '@/mouse-dnd/MouseDnD'
export default defineComponent({
  name: "Block",
  components: { SuImage, SuText },
  props: {
    data: {
      type: Object,
      required: true
    },
  },
  setup(props) { 
    onMounted(()=>{
    }) 
  },
  render() {
    const { data, isActive, onWidgetClick } = this
    const tag = data.tag
    
    getDndInstance('drag', this.$el)


    
    return (
      <div class="block-item">
        <div class="mask"></div>
        <tag
          data={data}
          vOn:click_native={onWidgetClick}
          widget={data}
          isActive={isActive}
        >
        </tag>
      </div>
    )
  },
})
</script>
<style lang="scss" scoped>
.block-item {
  position: relative;
  .mask {
    position: absolute;
  }
}
</style>
