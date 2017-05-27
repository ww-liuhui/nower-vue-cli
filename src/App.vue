<template>
    <div id="app" style="height: 100%;width: 100%;">
        <header v-show="headerShow">
            <header-component></header-component>
        </header>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    data: function () {
      return {
        message: 'this is starter section'
      }
    },
    created: function () {
    },
    computed: {
      ...mapGetters(['headerShow'])
    },
    components: {
    },
    methods: {
    },
    mounted () {
      //
    },
    watch: {
      '$route' (to, from) {
        // react to route changes...
      }
    }
  }
</script>

<style>
  html{
    height: 100%;
  }

  body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin:0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #work-area {
    /* 将 flex-grow 设置为1，该元素会占用所有的可使用空间, 而其他元素该属性值为0，因此不会得到多余的空间 */
    /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 1 0 auto;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    background-color: #f9fafc;
  }
</style>
