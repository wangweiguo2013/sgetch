export const componentList = [
  {
    componentId: "logo",
    name: "LOGO",
    tag: "logo",
    layout: "selfPosition",
    attrs: {
      style: { position: "absolute", left: "0rem", top: "0rem", height: '2rem' },
      card: {
        isUseCard: false,
        borderRadius: 8,
        isUseBackgroundColor: true,
        backgroundColor: "#ffffff",
        isUseBorder: true,
        border: { style: "solid", color: "#63dfca", width: 1 },
        isUseShadow: true,
        shadow: {
          offsetX: 0,
          offsetY: 0,
          blur: 12,
          spread: 0,
          color: "#48A38B",
        },
        padding: { left: 8, top: 8, right: 8, bottom: 8 },
      },
      logo: {
        imgUrl:
          "//pt-starimg.didistatic.com/static/starimg/img/s0LUNPq8Wu1624268134506.png",
        logoType: "滴滴",
        logoColor: "gray",
        upload: {
          isUse: false,
          imgUrl:
            "//pt-starimg.didistatic.com/static/starimg/img/pX9wISsbMY1610963968489.png",
          width: 25,
        },
        backgroundColor: "#ffffff",
        borderLine: {
          style: "solid",
          height: 1,
          color: "#cccccc",
        },
      },
    },
    isEngineX: true,
    tech: "vue",
    version: "0.0.21",
    group: "cms/components",
    source: "develop",
    pkgname: "@didi/dcms-star-components-logo",
    
  },
  {
    componentId: "image",
    name: "image",
    tag: "star-image",
    attrs: {
      imgUrl:
        "//pt-starimg.didistatic.com/static/starimg/img/16PyDXvPIw1603186082498.jpg",
      useFullScreen: false,
      style: {
        height: 100,
        width: 200,
        left: 200,
        top: 200,
        position: 'absolute'
      }
    },
    isEngineX: true,
    tech: "vue",
    version: "0.0.13",
    group: "cms/components",
    source: "develop",
    pkgname: "@didi/dcms-star-components-star-image",
  },
  {
    componentId: "container",
    name: "container",
    tag: "container",
    layout: "selfPosition",
    attrs: {
      style: {
        display: "flex",
        "flex-direction": "row",
        "background-color": "#ffffff",
        border: "1px solid #d5c3f1",
        "min-height": "60px",
      },
      "group-name": "sketch",
    },
    isEngineX: false,
  },
];

export const CMP = {
  componentId: "ccc",
  tag: "homework-test",
  attrs: {
    style: {
      marginTop: ".5rem",
      marginLeft: ".5rem",
      marginRight: ".5rem",
    },
    data: '{word: "可配置你的文案"}',
    "@showPop": "handleShow",
    "@login": "handleLogin",
    "@getPosition": "handlePosition",
    bgColor: "eb5533",
  },
  isEngineX: true,
  version: "0.0.2",
  pkgname: "@didi/dcms-star-components-homework-test",
  name: "",
  group: "starcomp/test",
  fields: [
    {
      name: "数字",
      type: "number",
      value: 66.66,
      key: "num",
    },
    { name: "背景颜色", type: "color", key: "bgColor" },
  ],
  require: [""],
};
