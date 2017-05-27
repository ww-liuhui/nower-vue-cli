## IDE

使用 Material 风格

/Settings/Preferences (OSX/Unix: ⌘,, Windows: Ctrl+Alt+S) 
Plugins (Click Browse repositories... and search for Material Theme UI)



## node 和 npm

安装 node， 然后设置 npm 的运行环境，主要目的是不使用默认的安装位置，避免依赖 sudo 去授权的风险

```
npm config set prefix '/Users/leon/.npm'

```

通过 vi /etc/profile 把路径信息写入环境变量里

```
export NPM_HOME=/Users/leon/.npm
export PATH="$NPM_HOME/bin:$PATH"

```

然以上的设置生效

```
source /etc/profile

```

重新安装 npm 本身， 它会把自己安装到新的位置

```
# 包管理
npm install -g npm

# 检查包的更新
npm install -g npm-check

```


## 用国内的 npm 镜像

临时使用

```
npm [COMMAND] --registry https://registry.npm.taobao.org

```

持久使用

```
# 重置默认的仓库
npm config set registry https://registry.npm.taobao.org

# 验证是否成功 ？
npm config get registry

```


## 安装脚手架 vue-cli

```
npm install -g vue-cli

vue init webpack <project-name>

cd <project-name>

```


## 构造项目的基本目录架构

```
mkdir tool

mkdir -p src/actions
mkdir -p src/components
mkdir -p src/containers
mkdir -p src/filters
mkdir -p src/reducers
mkdir -p src/store
mkdir -p src/utils

mkdir -p static/js
mkdir -p static/img
mkdir -p static/css
mkdir -p static/scss
mkdir -p static/font

```





## 拉取开发项目的依赖

```
npm install --save-dev autoprefixer
npm install --save-dev chalk
npm install --save-dev connect-history-api-fallback
npm install --save-dev eventsource-polyfill

npm install --save-dev babel-cli
npm install --save-dev babel-core
npm install --save-dev babel-loader
npm install --save-dev babel-runtime
npm install --save-dev babel-preset-react
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-stage-0
npm install --save-dev babel-preset-stage-1
npm install --save-dev babel-preset-stage-2
npm install --save-dev babel-polyfill
npm install --save-dev babel-register
npm install --save-dev babel-plugin-component 
npm install --save-dev babel-plugin-transform-runtime
npm install --save-dev babel-plugin-add-module-exports
npm install --save-dev babel-plugin-transform-class-properties
npm install --save-dev babel-plugin-transform-es2015-arrow-functions
npm install --save-dev babel-plugin-transform-es2015-block-scoping
npm install --save-dev babel-plugin-transform-es2015-computed-properties
npm install --save-dev babel-plugin-syntax-trailing-function-commas
npm install --save-dev babel-plugin-transform-inline-environment-variables
npm install --save-dev babel-plugin-transform-object-rest-spread
npm install --save-dev babel-plugin-syntax-jsx
npm install --save-dev babel-helper-vue-jsx-merge-props
npm install --save-dev babel-plugin-transform-vue-jsx

npm install --save-dev eslint
npm install --save-dev eslint-loader
npm install --save-dev eslint-plugin-import
npm install --save-dev eslint-plugin-jsx-a11y
npm install --save-dev eslint-config-airbnb
npm install --save-dev eslint-config-airbnb-base
npm install --save-dev eslint-friendly-formatter
npm install --save-dev eslint-plugin-html

npm install --save-dev eslint-plugin-react

npm install --save-dev eslint-plugin-vue
npm install --save-dev eslint-config-vue
npm install --save-dev eslint-import-resolver-webpack
npm install --save-dev babel-eslint

npm install --save-dev webpack
npm install --save-dev webpack-dev-server
npm install --save-dev webpack-merge

npm install --save-dev html-webpack-plugin
npm install --save-dev extract-text-webpack-plugin

npm install --save-dev file-loader
npm install --save-dev json-loader
npm install --save-dev url-loader
npm install --save-dev style-loader
npm install --save-dev css-loader
npm install --save-dev inject-loader
npm install --save-dev isparta-loader

npm install --save-dev vue-loader
npm install --save-dev vue-style-loader
npm install --save-dev vue-html-loader

npm install --save-dev vue-hot-reload-api
npm install --save-dev to-camel-case
npm install --save-dev metalsmith-layouts
npm install --save-dev metalsmith-in-place

npm install --save-dev chai
npm install --save-dev mocha
npm install --save-dev karma
npm install --save-dev karma-chai
npm install --save-dev karma-coverage
npm install --save-dev karma-mocha
npm install --save-dev karma-sourcemap-loader
npm install --save-dev karma-spec-reporter
npm install --save-dev karma-webpack
npm install --save-dev karma-phantomjs-launcher
npm install --save-dev karma-sinon-chai

npm install --save-dev express
npm install --save-dev http-proxy-middleware
npm install --save-dev function-bind

```



## 项目的开发组件

```


```


## 通用组件

```
npm install --save bulma
npm install --save barba.js
npm install --save hashids
npm install --save push.js
npm install --save shelljs
npm install --save query-string

# https://github.com/louischatriot/nedb
# 本地化数据库，使用 localStorage
npm install --save nedb

npm install --save mobx
npm install --save rxjs
npm install --save lodash
npm install --save bluebird

npm install --save vue
npm install --save vue-async-data
npm install --save vue-resource
npm install --save vue-router

npm install --save vuex
npm install --save vuex-router-sync

npm install --save vue-validator
npm install --save vue-touch
npm install --save vue-rx

```


  

## 安装其他支持工具

```
npm install --save ioredis
npm install --save redis-commands
npm install --save redis-splitargs

npm install --save reselect
npm install --save sortablejs
npm install --save normalize.css

```


## 内部变量

$event: 内部事件
$refs
$emit('element', function)


## 组件关系

原则: 属性向下传播, 事件向上传播  
父组件要给子组件传递数据，子组件需要将它内部发生的事情告知给父组件  
父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息


## 使用子部件

<input v-model='父部件的属性'>
<child v-bind:子部件名='父部件的属性'>

这里的含义是, 把父部件的属性, 传递给子部件, 当父部件的数据变化时, 子部件也会得到通知

可以简写为 <child :my-message="parentMsg"></child>


## 数据传递

除非子组件模板包含至少一个 <slot> 插口，否则父组件的内容将会被丢弃

