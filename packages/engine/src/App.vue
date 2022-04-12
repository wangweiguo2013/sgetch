<script lang="tsx">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from "@vue/composition-api";
import { monitor } from "@sgetch/dnd";
import DragItem from "./components/DragItem.vue";
import DropItem from "@/components/DropItem.vue"

interface State {
  activeWidgetId: string,
  schema: {
    id: number,
    children: any[]
  }
}

export default defineComponent({
  name: "App",
  components: { DragItem, DropItem },
  setup() {
    const state = reactive<State>({
      activeWidgetId: '2123',
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
    const { handelDrop, schema } = this
    return (
      <div class="app">
        <DragItem>drag me</DragItem>
        <DropItem style={{marginLeft: '300px'}} id={1} vOn:drop={handelDrop}>
          <p>drop me </p>
          {schema.children.map((item, index) => {
            if(item.render) return item.render(item)
            return (<item.tag> {item.attrs.textContent} </item.tag>)
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
