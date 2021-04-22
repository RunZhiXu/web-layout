module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, // 处理容器宽高比
    "postcss-cssnext": {}, // 使用较新的CSS样式
    "postcss-write-svg": {utf8: false}, // 移动端1px的解决方案
    "postcss-px-to-viewport": { // px转vw
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1, // 大于1px的才会转化为vw
      mediaQuery: false // 媒体查询不进行转化
    },
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}
