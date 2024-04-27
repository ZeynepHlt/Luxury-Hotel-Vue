<template>
  <div class="fade-down">
    <SliderCom></SliderCom>
    <div class="container">
      <div class="text-center mt-8 mb-8">
        <h1 class="text-4xl font-Actor text-Green">ODALARIMIZ</h1>
        <p class="font-Montserrat text-Green mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eveniet debitis itaque
          corrupti velit reprehenderit praesentium voluptas voluptatem placeat neque officiis ut
          similique tempore officia harum mollitia explicabo. Ducimus, maxime.
        </p>
      </div>
      <div>
        <div class="mb-16 fade-zoom">
          <a-carousel autoplay>
            <div><img src="../assets/images/rooms/single1.png" alt="" /></div>
            <div><img src="../assets/images/rooms/single2.png" alt="" /></div>
            <div><img src="../assets/images/rooms/single3.png" alt="" /></div>
          </a-carousel>
          <div
            class="h-20 text-White w-full bg-Green flex justify-center items-center rounded-b-xl"
          >
            <h1 class="font-medium text-3xl font-Montserrat">TEK KİŞİLİK ODALAR</h1>
            <!-- <div class="font-medium font-Montserrat">
              <button>
                <img class="inline-block mr-2" src="../assets/images/icons/add.svg" alt="" /> TÜM
                ODALARI GÖR
              </button>
            </div> -->
          </div>
        </div>
        <div class="mb-16 fade-zoom">
          <a-carousel autoplay>
            <div><img src="../assets/images/rooms/double1.png" alt="" /></div>
            <div><img src="../assets/images/rooms/double2.png" alt="" /></div>
            <div><img src="../assets/images/rooms/double3.png" alt="" /></div>
          </a-carousel>
          <div
            class="h-20 text-White w-full bg-Green flex justify-center items-center rounded-b-xl"
          >
            <h1 class="font-medium text-3xl font-Montserrat">ÇİFT KİŞİLİK ODALAR</h1>
            <!-- <div class="font-medium font-Montserrat">
              <button>
                <img class="inline-block mr-2" src="../assets/images/icons/add.svg" alt="" /> TÜM
                ODALARI GÖR
              </button>
            </div> -->
          </div>
        </div>
        <div class="mb-16 fade-zoom">
          <a-carousel autoplay>
            <div><img src="../assets/images/rooms/suite1.png" alt="" /></div>
            <div><img src="../assets/images/rooms/suite2.png" alt="" /></div>
            <div><img src="../assets/images/rooms/suite3.png" alt="" /></div>
          </a-carousel>
          <div
            class="h-20 text-White w-full bg-Green flex justify-center items-center rounded-b-xl"
          >
            <h1 class="font-medium text-3xl font-Montserrat">AİLE SUITE ODALAR</h1>
            <!-- <div class="font-medium font-Montserrat">
              <button>
                <img class="inline-block mr-2" src="../assets/images/icons/add.svg" alt="" /> TÜM
                ODALARI GÖR
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SliderCom from '../components/SliderCom.vue'
</script>

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
