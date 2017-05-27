## [Element](http://element.eleme.io/) 

## 安装

```
npm install --save-dev element-ui

```

## 引入

```
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(ElementUI);

```


## 精简引入

```
npm install --save-dev babel-plugin-component

```

修改 .bablerc

```text
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
}

```

```text
import Vue from 'vue';
import { Button, Select } from 'element-ui';

Vue.use(Button);
Vue.use(Select);
 
```


## 更改主题

> 工具

```text
npm install --save-dev element-theme 
npm install --save-dev element-theme-default

```

> 初始化

```text
./node_modules/.bin/et -i

```
执行后当前目录会有一个 element-variables.css 文件。内部包含了主题所用到的所有变量

> 修改

直接编辑 element-variables.css 文件

> 保存

```text
./node_modules/.bin/et -w

```
修改后的定义, 将在当前目录下, 创建一个文件夹 theme, 并写入更新后的 css 文件

> 使用

```text
import Vue from 'vue'
import '../theme/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

```

