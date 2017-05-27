<template>
  <span id="imgTxt">
    <image-component
      :src="src"
      :width="width"
      :height="height"
      :style="imgStyle"
      :class="{ active: active }"
    ></image-component><br>
    <div :style="txtStyle">{{ text }}</div>
  </span>
</template>
<script>
    import ImageComponent from './image.vue'
    export default{
        name: 'imgTxt',
        props: {
          data: {
            default: {}
          },
          src: {
            default: 'http://wx.weiwuu.com/wx/img/logo.png',
            required: true
          },
          width:{
            default: '24px',
            required: true
          },
          height: {
            default: '24px',
            required: true
          },
          imgStyle:{
            default: 'border-radius:50%;'
          },
          text: {
            default: '帮帮',
            required: false
          },
          txtStyle:{
            default: 'color:#fff;font-size:8px;margin-top:3px;'
          },
          active: false
        },
        components:{
          'image-component': ImageComponent
        }
    }
</script>
<style>
  #imgTxt .active{
    border: 1px solid #ffc000;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }
</style>
