<template>
  <div class="container">
    <div class="flex justify-between items-center absolute top-0 z-10">
      <img class="w-24 pl-4 lg:pl-0 lg:w-48" src="../assets/images/logo.png" alt="" />
      <div
        class="space-x-3 lg:space-x-16 pl-10 lg:pl-96 text-xs lg:text-base font-Montserrat text-White"
      >
        <RouterLink class="active" to="/">Anasayfa</RouterLink>
        <RouterLink to="/facilities">Tesisler</RouterLink>
        <RouterLink to="/rooms">Odalar</RouterLink>
        <RouterLink to="/contact">İletişim</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
