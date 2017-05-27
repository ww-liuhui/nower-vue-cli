## [vue-cookie](https://github.com/alfhen/vue-cookie) 

> 安装

```
npm install --save vue-cookie

```

> 保存

```
this.$cookie.set('test', 'Hello world!', 1);

this.$cookie.set('test', 'Random value', {expires: 1, domain: 'localhost'});

```


> 读取

```
this.$cookie.get('test');

```


> 删除

```
this.$cookie.delete('test');

this.$cookie.delete('test', {domain: 'localhost'});

```


> 编码

```
var date = new Date;
date.setDate(date.getDate() + 21);

this.$cookie.set('dateObject', 'A date object', { expires: date });
this.$cookie.set('dateString', 'A parsable date string', { expires: date.toGMTString() });
this.$cookie.set('integer', 'Seven days later', { expires: 7 });
this.$cookie.set('stringSuffixY', 'One year later', { expires: '1Y' });
this.$cookie.set('stringSuffixM', 'One month later', { expires: '1M' });
this.$cookie.set('stringSuffixD', 'One day later', { expires: '1D' });
this.$cookie.set('stringSuffixh', 'One hour later', { expires: '1h' });
this.$cookie.set('stringSuffixm', 'Ten minutes later', { expires: '10m' });
this.$cookie.set('stringSuffixs', 'Thirty seconds later', { expires: '30s' });

```
