<template>
  <div>
    <div class="relative fade-down">
      <img src="../assets/images/sea.png" alt="" />
    </div>
    <div class="container absolute top-20 lg:top-1/4 left-4 lg:left-28 fade-down">
      <h1 class="text-2xl font-medium font-Montserrat text-White text-center">GİRİŞ YAP</h1>
      <div class="w-1/3 h-auto rounded-xl bg-White bg-opacity-30 shadow-lg mx-auto mt-4">
        <div class="flex font-medium text-Green flex-col justify-center items-center p-6 pb-10">
          <div class="">
            <label for="">E-posta</label><br />
            <input class="input border-none w-60 focus:outline-none" type="text" />
          </div>
          <div class="">
            <label for="">Şifre</label><br />
            <input class="input border-none w-60 focus:outline-none" type="text" />
          </div>
          <button class="button w-60 mt-4 font-bold text-Green">Giriş Yap</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
