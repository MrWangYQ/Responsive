<template>
  <div class="hello">
    <div id="title">
      <span>Mircale STARS</span>
    </div>
    <div>
      <div class="start" id="start1"></div>
      <div class="start" id="start2"></div>
      <div class="start" id="start3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 浏览器宽度

@windowWidth: 2000;

//  + Math.floor(Math.random() * (100000 - 900000) + 900000)

.mixin(@n) when(@n > 0) {
  box-shadow+: ~`Math.round(Math.random() * @{windowWidth}) + "px" + " " +
    Math.round(Math.random() * @{windowWidth}) + "px #fff"`;
  .mixin((@n - 1));
}

#start1 {
  .mixin(700);
  width: 2px;
  height: 2px;
  animation: star-ani 50s linear infinite;
  animation-delay: -10s;
}
#start2 {
  .mixin(200);
  width: 4px;
  height: 8px;
  border-radius: 100%;
  animation: star-ani 100s linear infinite;
  animation-delay: -8s;
}
#start3 {
  .mixin(100);
  width: 3px;
  height: 6px;
  border-radius: 10%;
  animation: star-ani 150s linear infinite;
  animation-delay: -5s;
}
#title {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: courier;
  font-size: 102px;
}

.start {
  position: relative;
  // animation: star-ani 4s linear infinite;
  z-index: 2;
}
.start::after {
  content: "";
  display: block;
  top: 0px;
  left: 4px;
  border: 0px solid #fff;
  border-width: 0px 90px 2px 90px;
  border-color: transparent transparent transparent rgba(255, 255, 255, 0.3);
  transform: rotate(-45deg) translate3d(1px, 3px, 0);
  box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
  transform-origin: 0% 100%;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
    transform: scale(0) translate3d(0, 0, 0);
  }
  to {
    transform: translateY(-2000px);
  }
}
@keyframes star-ani {
  0% {
    opacity: 0;
    transform: scale(0) translate3d(0, 0, 0);
  }
  20% {
    opacity: 0.8;
    transform: scale(0.2) translate3d(100px, 0px, 0);
  }
  40% {
    opacity: 0.8;
    transform: scale(0.4) translate3d(200px, 50px, 0);
  }
  60% {
    opacity: 0.8;
    transform: scale(0.6) translate3d(300px, 100px, 0);
  }
  80% {
    opacity: 1;
    transform: scale(1) translate3d(350px, 150px, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1.2) translate3d(-400px, 380px, 0);
  }
}
</style>
