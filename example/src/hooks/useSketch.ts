import { reactive, watch } from "@vue/composition-api";

export default function useSketch() {
    
    const sketchState = reactive({
        activeWidgetId: ''
    })

    const setActiveWidgetId = (id) => {
        console.log(id)
        sketchState.activeWidgetId = id
    }

    return {
        sketchState,
        setActiveWidgetId,
    }
}
