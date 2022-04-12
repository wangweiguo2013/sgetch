<script lang="tsx">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from "@vue/composition-api";
import { monitor } from "@sgetch/dnd";
import DragItem from "@/components/DragItem.vue";
import DropItem from "@/components/DropItem.vue"
import Block from "@/components/Block.vue"
import { CMP } from "@/constant/index"

interface State {
  activeWidgetId: string
  componentList: any[]
  schema: {
    id: number
    children: any[]
  }
}

export default defineComponent({
  name: "App",
  components: { DragItem, DropItem, Block },
  setup() {
    const state = reactive<State>({
      activeWidgetId: '2123',
      componentList: CMP,
      schema: {
        id: 1,
        children: []
      }
    });

    const handelDrop = (id: number, dragSource: any) => {
      console.log(id, dragSource)
      state.schema.children.push(dragSource)
    }

    onMounted(() => {
      console.log(monitor)
    })
    return {
      ...toRefs(state),
      handelDrop,
    };
  },
  render(){
    const { handelDrop, schema, componentList } = this
    return (
      <div class="app">
        {
          componentList.map(cmp => {
            return <DragItem dragSource={cmp} key={cmp.id}>{cmp.name}</DragItem>
          })
        }
        <DropItem style={{marginLeft: '300px'}} id={1} vOn:drop={handelDrop}>
          <p>drop me </p>
          {schema.children.map((item, index) => {
            return (<Block data={item}></Block>)
          })}
        </DropItem>
      </div>
    )
  }
});
</script>
<style>
.app {
  display: flex;
}

.sketch-con {
  width: 350px;
  margin: 20px auto;
  min-height: 1000px;
  position: relative;
  border: 1px solid rgb(209, 209, 209);
}

.sketch {
  height: 100%;
}

.draggable-item {
  cursor: pointer;
  user-select: none;
}

.draggable-component-item {
  cursor: pointer;
  user-select: none;
  border: px solid #eeeeee;
  margin-top: 10px;
  font-size: 16px;
}
</style>
