## 安装 [npm.js](https://www.npmjs.com/)

```
npm install npm -g

```

## 初始化项目

```
npm init

```

## 下载模块

```
npm install

```

-g  安装到全局模块内   
--save  安装到本地模块, 成为生产代码集合的一部分   
--save-dev  安装到本地模块, 主要在开发活动时使用, 不会成为代码分发的一部分


## 创建测试

```
npm test

```


## 本地运行

```
npm run

````

## 获取帮助

```
npm [command] -h

```


## 修改全局模块的位置

```
mkdir ~/.npm

npm config set prefix '~/.npm'

```

vi /etc/profile  或者  vi ~/.bashrc

```
export PATH="$HOME/".npm/bin:$PATH"

```

source /etc/profile

重新安装 npm 本身

```
npm install npm -g

```


## 检查版本

```
npm view [...]

```


## 更新版本

```
npm update [...]

# 全部更新
npm update -g

```
