export const MOCK_LIST = [
  {
    source: "online",
    tech: "vue",
    group: "starcomp/standard",
    version: "0.0.1",
    pkgname: "@didi/dcms-star-components-header-btn-rewardlist",
    isEngineX: true,
    name: "活动头部按钮-奖品列表",
    tag: "header-btn-rewardlist",
    children: [],
    componentId: "module_YYsd1hJs5_",
    repoKey: "starcomp/standard",
    attrs: {
      MODULEID: "module_YYsd1hJs5_",
      giftBtnColor: "ffffff",
      giftBtnBgColor: "06b8ae",
      "@handleClick": "handleShowMyPrize",
      COMMON_STYLE_MAP: {
        position: "relative",
        width: "auto",
        height: "auto",
        resizeDragType: ["constrainMode", "autoHeight"],
        left: "0rem",
        top: "0rem",
        horizon: "",
        vertical: "",
      },
      style: {
        position: "relative",
        width: "auto",
        height: "auto",
        resizeDragType: ["constrainMode", "autoHeight"],
        left: 200,
        top: 200,
        horizon: "",
        vertical: "",
      },
    },
    fields: [
      {
        name: "命名空间",
        type: "text",
        key: "MODULEID",
        desc: {
          info: "每个组件特定命名",
        },
        value: "headerBtnRewardlist",
      },
      {
        name: "礼物按钮色",
        key: "giftBtnColor",
        type: "color",
        value: "ffffff",
      },
      {
        name: "礼物按钮背景色",
        key: "giftBtnBgColor",
        type: "color",
        value: "06b8ae",
      },
      {
        name: "按钮-礼物",
        type: "text",
        key: "@handleClick",
        category: "action",
        desc: {
          info: "前往礼物列表",
        },
        value: "handleShowMyPrize",
      },
    ],
  },
  // {
  //   componentId: "ccc",
  //   tag: "homework-test",
  //   attrs: {
  //     style: { marginTop: ".5rem", marginLeft: ".5rem", marginRight: ".5rem" },
  //     data: '{word: "可配置你的文案"}',
  //     "@showPop": "handleShow",
  //     "@login": "handleLogin",
  //     "@getPosition": "handlePosition",
  //     bgColor: "eb5533",
  //   },
  //   isEngineX: true,
  //   version: "0.0.2",
  //   pkgname: "@didi/dcms-star-components-homework-test",
  //   name: "",
  //   group: "starcomp/test",
  //   fields: [
  //     { name: "数字", type: "number", value: 66.66, key: "num" },
  //     { name: "背景颜色", type: "color", key: "bgColor" },
  //   ],
  //   require: [""],
  // },
  {
    componentId: "1b33o8yg5bq80",
    name: "image",
    tag: "star-image",
    layout: "selfPosition",
    attrs: {
      imgUrl:
        "//pt-starimg.didistatic.com/static/starimg/img/16PyDXvPIw1603186082498.jpg",
      useFullScreen: false,
      style: {
        height: 100,
        width: 200,
        left: 200,
        top: 20,
        position: "absolute",
      },
    },
    isEngineX: true,
    tech: "vue",
    version: "0.0.13",
    group: "cms/components",
    source: "develop",
    pkgname: "@didi/dcms-star-components-star-image",
  },
]

export const EASY_MOCK = [
  {
    componentId: "1",
    name: "文本",
    tag: "su-text",
    attrs: {
      text:
        "//pt-starimg.didistatic.com/static/starimg/img/16PyDXvPIw1603186082498.jpg",
      useFullScreen: false,
      style: { height: 100, width: 200, left: 200, top: 20 },
    },
  },
  {
    componentId: "2",
    name: "image",
    tag: "su-image",
    attrs: {
      src:
        "//pt-starimg.didistatic.com/static/starimg/img/16PyDXvPIw1603186082498.jpg",
      useFullScreen: false,
      style: {
        height: 100,
        width: 200,
        left: 200,
        top: 20,
        position: "absolute",
      },
    },
  },
]
