<script setup>
import { RouterView } from 'vue-router'
import HeaderCom from './components/HeaderCom.vue'
// eslint-disable-next-line no-unused-vars
import FooterCom from './components/FooterCom.vue'
</script>

<template>
  <HeaderCom></HeaderCom>
  <div class="fade-down">
    <RouterView />
    <FooterCom></FooterCom>
  </div>
</template>

<style>
@keyframes fade-down {
  from {
    opacity: 0.9;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes fade-zoom {
  from {
    /* opacity: 0.9; */
    transform: scale(0.9);
  }
  to {
    /* opacity: 1; */
    transform: scale(1);
  }
}
@keyframes fade-left {
  from {
    opacity: 0;
    transform: translateX(-400px);
  }
  to {
    opacity: 1;
  }
}
.fade-down {
  animation: fade-down 2s;
}
.fade-zoom {
  animation: fade-zoom 2s;
}
.fade-left {
  animation: fade-left 2s;
}
</style>
