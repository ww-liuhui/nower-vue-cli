## [vue-meta](https://github.com/declandewet/vue-meta) HTML Meta 数据管理


>安装

```text
npm install --save vue-meta

```

> 使用

```text
import Meta from 'vue-meta'

Vue.use(Meta)

```


```text
<script>
  export default {
    name: 'App',
    metaInfo: {
      // 指定默认的标题
      title: 'Default Title',
      // 标题将使用以下模板构造
      titleTemplate: '%s | My Awesome Webapp'
    }
  }
</script>
```
