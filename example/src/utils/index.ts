/**
 * 生成一个用不重复的ID
 * @param { Number } randomLength
 */
function getUUID(randomLength: number = 6) {
  return Number(
    Math.random().toString().substr(2, randomLength) + Date.now()
  ).toString(36);
}

export { getUUID };

export const printSchema = (children)=>{
  const schema = {
    "layout": {
      "name": "View",
      "type": "page",
      "tag": "div",
      "attrs": {},
      "views": [
        {
          "name": "首页",
          "pageId": "SuWrapper_suPage",
          "tag": "div",
          "attrs": {
            "style": {
              "height": "50%",
              "position": "relative",
              "overflow": "hidden"
            },
            "class": "",
            "suId": "suPage1",
            ":suStyle": {
              "height": "50%",
              "position": "relative",
              "overflow": "hidden"
            },
            "desc": "首页"
          },
          "children":  children,
          "type": "page"
        }
      ],
      "portals": [
        {
          "tag": "page-popup",
          "attrs": {
            "style": {},
            ":data": "pagePopup_0",
            "desc": "弹窗",
            "@popupHide": "onPopupHide0",
            "@popupShow": "onPopupShow0",
            "@contextClick": "onContextClick0"
          },
          "children": [
            {
              "componentId": "bbb",
              "tag": "su-vue-component",
              "attrs": {
                "style": {
                  "marginTop": "3rem",
                  "marginLeft": ".5rem",
                  "marginRight": ".5rem"
                },
                "bgColor": "24C7BA"
              },
              "isEngineX": true,
              "version": "0.0.1",
              "pkgname": "@didi/dcms-star-components-su-vue-component",
              "name": "",
              "group": "starcomp/test",
              "fields": [
                { "name": "标题", "type": "text", "key": "title" },
                { "name": "背景色", "type": "color", "key": "bgColor" }
              ],
              "require": []
            }
          ],
          "type": "popup"
        }
      ],
      "router": []
    },
    "pageInfo": {
      "name": "none",
      "title": "none",
      "shareConfig": {
        "link": "",
        "title": "none",
        "content": "none",
        "isMpShare": false,
        "mpPreLogin": false,
        "mpShareChn": "",
        "mpShareImg": "//pt-starimg.didistatic.com/static/starimg/img/ykjdLb2loD1565858127017.jpg",
        "shareChannel": ["weixin_appmsg", "weixin_timeline", "qq_appmsg", "qzone"]
      }
    }
  }
  console.log(JSON.stringify(schema))
  
}
export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }
  itemToAdd.componentId = getUUID()

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }
  printSchema(result)

  return result;
};



export const generateItems = (
  count,
  creator: Function
): { data: string; id: number }[] => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(creator(i));
  }
  return result;
};
