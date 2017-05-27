#Promise.all()，Promise.race()

Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。

```
var p = Promise.all([p1,p2,p3]);
上面代码中，Promise.all方法接受一个数组作为参数，p1、p2、p3都是Promise对象的实例。（Promise.all方法的参数不一定是数组，但是必须具有iterator接口，且返回的每个成员都是Promise实例。）

p的状态由p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
```

Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。

```
var p = Promise.race([p1,p2,p3]);
上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的返回值。

如果Promise.all方法和Promise.race方法的参数，不是Promise实例，就会先调用下面讲到的Promise.resolve方法，将参数转为Promise实例，再进一步处理。

```

next 方法的参数

```
yield 语句本身没有返回值，或者说总是返回 undefined。next 方法可以带一个参数，该参数就会被当作上一个yield 语句的返回值。
```


// promise
export function releasePromise (payload) {
  let url
  return Vue.http.get(url)
}

/**
 * generator + promise
 * 使用 : 每次调用next方法，就从函数体的头部或者上一次停下来的地方开始执行（可以理解成恢复执行），直到遇到下一个 yield 语句为止。
 * var it = releaseGeneratorPromise()   var get = it.next() var post = it.next()
 * 返回数据：{ value: data, done: true }  获取：postResult。value
 */
export function* releaseGeneratorPromise () {
  let url = ''
  let body = ''
  var get = yield Vue.http.get(url)
  var post = yield Vue.http.post(url, body)
  console.log(get, post)
}
