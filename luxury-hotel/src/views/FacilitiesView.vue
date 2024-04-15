<template>
  <div class="fade-down">
    <SliderCom></SliderCom>
    <div class="container">
      <div class="text-center mt-8">
        <h1 class="text-4xl font-Actor text-Green">TESİSLERİMİZ</h1>
        <p class="font-Montserrat text-Green mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eveniet debitis itaque
          corrupti velit reprehenderit praesentium voluptas voluptatem placeat neque officiis ut
          similique tempore officia harum mollitia explicabo. Ducimus, maxime.
        </p>
        <FacilitiesItemCom></FacilitiesItemCom>
      </div>
    </div>
    <TestimonialsCom></TestimonialsCom>
  </div>
</template>

<script setup>
import SliderCom from '../components/SliderCom.vue'
import FacilitiesItemCom from '../components/FacilitiesItemCom.vue'
import TestimonialsCom from '../components/TestimonialsCom.vue'
</script>

<style scoped></style>
