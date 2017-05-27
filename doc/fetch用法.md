## [Fetch](https://github.com/github/fetch) 数据提取

它是一个 promise 支持的异步数据提取框架


## 安装

```
npm install whatwg-fetch --save

```


## Post Form

```
var form = document.querySelector('form')

fetch('/users', {
  method: 'POST',
  body: new FormData(form)
})

```


## Post JSON

```
fetch('/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Hubot',
    login: 'hubot',
  })
})

```


## File upload

```
var input = document.querySelector('input[type="file"]')

var data = new FormData()
data.append('file', input.files[0])
data.append('user', 'hubot')

fetch('/avatars', {
  method: 'POST',
  body: data
})

```


## Handle Error

```
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

```


## Send Cookie

```
fetch('/users', {
  credentials: 'same-origin'
})

```


## CORS

```
fetch('https://example.com:1234/users', {
  credentials: 'include'
})

```
