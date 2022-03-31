<script lang="tsx">
import { defineComponent } from "@vue/composition-api"
export default defineComponent({
  name: "SuImage",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  render() {
    const src = this.data?.attrs.src
    return <img src={src} />
  },
})
</script>
<style></style>
