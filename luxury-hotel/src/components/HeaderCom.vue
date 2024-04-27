<template>
  <div class="container">
    <div class="flex justify-between items-center absolute top-0 z-10">
      <img class="w-24 pl-4 lg:pl-0 lg:w-48" src="../assets/images/logo.png" alt="" />

      <div
        class="space-x-3 lg:space-x-10 pl-6 lg:pl-80 text-xs lg:text-base font-Montserrat text-White"
      >
        <RouterLink class="active" to="/">Anasayfa</RouterLink>
        <RouterLink to="/facilities">Tesisler</RouterLink>
        <RouterLink to="/rooms">Odalar</RouterLink>
        <RouterLink to="/contact">İletişim</RouterLink>
      </div>
      <div
        class="font-Montserrat text-White text-xs lg:text-base pl-2 lg:pl-16 flex items-center space-x-1"
      >
        <img class="inline-block h-5" src="../assets/images/icons/login.svg" alt="" />
        <RouterLink to="/login"> Giriş Yap</RouterLink><span class="lg:text-lg">|</span>
        <RouterLink to="/signup">Kaydol</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
