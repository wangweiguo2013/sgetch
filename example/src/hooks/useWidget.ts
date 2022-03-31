import { loadScript } from '@/utils/widget'
import { computed } from '@vue/composition-api'
export const useWidgetStyle = (widget) => {

    const { height = 'auto', width = 'auto'} = widget.attrs.style
    const style = computed(() => {
      return {
        height,
        width
      }
    })
    return style
}

/**
 * 加载cdn，返回render函数
 * @param widget 
 * @returns 
 */
export const useWidgetBundle = async (widget) => {
    const getBundleUrl = widget => {
      const { tag, group, version, source } = widget;

      const assetsHost =
        source === "online"
          ? "//assets.xiaojukeji.com/"
          : "//assets-daily.kuaidadi.com/";
      return `${assetsHost}${group}/${tag}/${version}/index.js`;
    };

    const cdn = getBundleUrl(widget);
    await loadScript(cdn)
    const Vue = window.Vue;
    const Ctor = (Vue as any).options.components[widget.tag];
    const instance = new Ctor();

    return instance
}
