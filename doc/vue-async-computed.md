## [vue-async-computed](https://github.com/foxbenjaminfox/vue-async-computed) 异步计算

> 安装

```text
npm install --save vue-async-computed

```

> 注册

```text
import AsyncComputed from 'vue-async-computed'

Vue.use(AsyncComputed)

```

> 使用

// This assumes that this endpoint will send us a response that contains something like this:  
// {   
//   "username": "username-goes-here"  
// }  

使用 vue-resource
```text
computed: {
    username() {
      return Vue.http.get('/get-username-by-id/' + this.userId)
        .then(response => response.data.username)
    }
  }
}

```

使用 vue-async-computed
```text
asyncComputed: {
    username () {
      return Vue.http.get('/get-username-by-id/' + this.userId)
        .then(response => response.data.username)
    }
}
```

使用 ES7 + vue-async-computed
```text
asyncComputed: {
    async someCalculation () {
      const x = await someAsycFunction()
      const y = await anotherAsyncFunction()
      return x + y
    }
}
```
