<template>
  <div class="fade-down">
    <a-carousel autoplay class="relative">
      <div><img src="../assets/images/slider1.png" alt="" /></div>
      <div><img src="../assets/images/slider2.png" alt="" /></div>
      <div><img src="../assets/images/slider3.png" alt="" /></div>
    </a-carousel>
    <div class="absolute top-20 lg:top-1/3 left-4 lg:left-32 text-white w-1/2 lg:w-1/4 text-White">
      <p class="font-Montserrat text-sm lg:text-3xl">WELCOME TO</p>
      <h1 class="font-Actor text-2xl lg:text-8xl">LUXURY</h1>
      <p class="font-Montserrat text-sm lg:text-3xl mb-1">HOTELS</p>
      <p class="font-Montserrat text-xs lg:text-sm hidden lg:block">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae, dignissimos
        laborum optio qui pariatur.
      </p>
    </div>
    <div
      class="absolute top-44 left-16 lg:top-3/4 lg:left-1/2 lg:-translate-x-32 ml-3 mt-8 -translate-x-12"
    >
      <button class="button">
        <img
          class="inline-block mb-1 w-4 h-4"
          src="../assets/images/icons/rezervation.svg"
          alt=""
        />
        REZERVASYON YAPTIR
      </button>
    </div>
  </div>
</template>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 610px;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>

<script setup></script>
