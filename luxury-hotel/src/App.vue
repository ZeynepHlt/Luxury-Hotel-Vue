<script setup>
import { RouterView } from 'vue-router'
import HeaderCom from './components/HeaderCom.vue'
</script>

<template>
  <HeaderCom></HeaderCom>
  <!-- <router-link to="/">HOME</router-link><br />
  <router-link to="/about">ABOUT</router-link> -->

  <RouterView />
</template>
