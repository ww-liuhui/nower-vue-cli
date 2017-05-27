<template>
    <img
      :src="src"
      :width="width"
      :height="height"
      :class="{ imgactive: active }"
    />
</template>
<script>
    export default{
      name: 'image',
      props: {
        src: {
          default: 'http://wx.weiwuu.com/wx/img/logo.png',
          required: true
        },
        width:{
          default: '100px'
        },
        height: {
          default: '100px'
        },
        active: {
          default: false
        }
      },
      components:{
      }
    }


</script>
