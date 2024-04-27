<template>
  <div class="fade-down mb-16">
    <div class="h-36 bg-Green flex justify-center items-center mb-6"></div>
    <div class="container">
      <h1 class="text-2xl font-bold font-Montserrat text-Green text-center">UYGUN ODA ARA</h1>
      <div class="flex justify-center space-x-20 mt-8">
        <div>
          <h1 class="font-Montserrat text-Green mb-3">Giriş-Çıkış Tarihleri</h1>
          <a-space direction="vertical" :size="32">
            <a-range-picker
              v-model:value="value1"
              :placeholder="['Giriş Tarihi', 'Çıkış Tarihi']"
              class="w-80"
            />
            {{ value1 }}
          </a-space>
        </div>
        <div>
          <h1 class="font-Montserrat text-Green mb-3">Kişi Sayısı</h1>

          <a-space>
            <a-select
              defaultValue="Yetişkin"
              style="width: 150px; margin-right: 16px"
              @change="handleChangeY"
            >
              <a-select-option v-for="(i, index) in 5" :key="index" :value="index"
                >{{ index }}
              </a-select-option>
            </a-select>
          </a-space>
          <a-space>
            <a-select defaultValue="Çocuk" style="width: 150px" @change="handleChangeC">
              <a-select-option v-for="(i, index) in 5" :key="index" :value="index"
                >{{ index }}
              </a-select-option>
            </a-select>
          </a-space>
        </div>
      </div>
      <div class="text-center mt-8 mb-8"><button class="button w-60">Ara</button></div>
      <hr class="text-Green" />
      <h1 class="text-2xl font-bold font-Montserrat text-Green text-center my-6">UYGUN ODALAR</h1>
      <div class="flex justify-center flex-wrap">
        <div v-for="i in 6" :key="i" class="w-128 mb-12 mr-6 ml-6">
          <img src="../assets/images/rooms/u_double.png" alt="" />
          <div class="h-16 bg-Green flex justify-around items-center rounded-b-xl">
            <router-link to="/room-details">
              <a class="text-White flex items-center font-medium font-Montserrat">
                <img class="w-6 mr-2" src="../assets/images/icons/add.svg" alt="" /> Oda Detaylarını
                Gör
              </a></router-link
            >
            <div class="bg-Yellow py-1 px-8 font-Montserrat font-bold rounded-lg">1.999 ₺</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function handleChangeY(value) {
  console.log(`yetişkin sayısı ${value}`)
}
function handleChangeC(value) {
  console.log(`çocuk sayısı ${value}`)
}
</script>

<style lang="scss" scoped></style>
