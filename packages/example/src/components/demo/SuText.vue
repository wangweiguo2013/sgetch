<script lang="tsx">
import { defineComponent } from "@vue/composition-api"
export default defineComponent({
  name: "SuText",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  render() {
    const text = this.data?.attrs.text
    return <div >{text}</div>
  }
})
</script>
<style></style>
