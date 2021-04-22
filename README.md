# web-layout

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 移动端页面适配

配置详情在 /.postcssrc.js

> 注意长宽比的写法不能与样式写在一起

```
// good
[w-188-246] { 
    width: 188px; 
    background-color: red; 
} 
[w-188-246] {
    aspect-ratio: '188:246'; 
 }

// bad
[w-188-246] {
    aspect-ratio: '188:246'; 
    width: 188px; 
    background-color: red; 
}
```

> 建议写成自定义属性

```
 <div aspectratio w-188-246>
    <div aspectratio-content></div> 
 </div>
 
 // 样式
 [aspectratio] {
    /**/
 }
 
 [aspectratio-content] {
    /**/
 }
```

