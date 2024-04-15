<template>
  <div v-for="i in 5" :key="i">
    <div class="relative mt-8 mb-14">
      <img class="w-full fade-zoom" src="../assets/images/gym.png" alt="" />
      <div class="rectangle">
        <h1 class="font-Montserrat font-bold text-3xl mt-2">SPOR SALONU</h1>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.rectangle {
  width: 450px;
  height: 55px;
  position: absolute;
  left: 50%;
  top: 98%;
  background-color: white;
  transform: translateX(-50%) translateY(-50%);
}
</style>
