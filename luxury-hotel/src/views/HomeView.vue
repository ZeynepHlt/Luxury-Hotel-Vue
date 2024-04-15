<script setup>
import TestimonialsCom from '../components/TestimonialsCom.vue'
import SliderCom from '../components/SliderCom.vue'
</script>

<template>
  <div class="fade-down">
    <SliderCom></SliderCom>

    <div class="container">
      <p class="font-Montserrat text-Green text-center font-medium mt-10 mb-10 fade-left">
        Tüm oda tiplerimize ücretsiz kahvaltı dahildir.
      </p>

      <div class="flex">
        <div class="border-s-2 h-64 border-Green my-auto"></div>
        <div class="basis-1/2 py-20 pl-10 pr-32">
          <h1 class="font-Actor text-4xl text-Green">Luxury redefined</h1>
          <p class="font-Montserrat text-Green font-medium mt-4 mb-4">
            Our rooms are designed to transport you into an environment made for leisure. Take your
            mind off the day-to-day of home life and find a private paradise for yourself.
          </p>
          <button class="button">KEŞFET</button>
        </div>
        <div class="basis-1/2 fade-zoom">
          <img src="../assets/images/explore1.png" alt="" />
        </div>
      </div>
      <div class="flex mt-10">
        <div class="border-s-2 h-64 border-Green my-auto"></div>
        <div class="basis-1/2 py-20 pl-10 pr-32">
          <h1 class="font-Actor text-4xl text-Green">Leave your worries in the sand</h1>
          <p class="font-Montserrat text-Green font-medium mt-4 mb-4">
            We love life at the beach. Being close to the ocean with access to endless sandy beach
            ensures a relaxed state of mind. It seems like time stands still watching the ocean.
          </p>
          <button class="button">KEŞFET</button>
        </div>
        <div class="basis-1/2 fade-zoom">
          <img src="../assets/images/explore2.png" alt="" />
        </div>
      </div>
    </div>
    <TestimonialsCom></TestimonialsCom>
  </div>
</template>
