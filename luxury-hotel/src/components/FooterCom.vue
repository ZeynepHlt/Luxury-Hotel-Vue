<template>
  <div class="h-56 w-full bg-Green z-10 relative">
    <div class="polygon">
      <img src="../assets/images/Polygon.png" alt="" />
    </div>
    <div class="container">
      <div class="flex justify-center text-White font-Montserrat pt-12">
        <div class="basis-1/4 px-12">
          <img src="../assets/images/footerlogo.png" alt="" />
          <p class="mt-4 text-sm">
            497 Evergreen Rd. Roseville, CA 95673 <br />
            +44 345 678 903 <br />
            luxury_hotels@gmail.com
          </p>
        </div>
        <div class="basis-1/4 px-12 font-bold text-sm">
          <p class="mb-2"><a>Hakkımızda</a></p>
          <p class="mb-2"><a>İletişim</a></p>
          <p class="mb-2"><a href="">Şartlar ve Koşullar</a></p>
        </div>
        <div class="basis-1/4 px-16 font-bold text-sm">
          <div class="mb-2 flex space-x-2">
            <img src="../assets/images/icons/facebook.svg" alt="" /><span>Facebook</span>
          </div>
          <div class="mb-2 flex space-x-1">
            <img src="../assets/images/icons/twitter.svg" alt="" /><span>Twitter</span>
          </div>
          <div class="mb-2 flex space-x-1">
            <img src="../assets/images/icons/instagram.svg" alt="" /><span>İnstagram</span>
          </div>
        </div>
        <div class="basis-1/4 px-12 font-bold text-sm">
          <p class="mb-2">Haber bültenimize abone olun</p>
          <div class="flex">
            <input
              type="text"
              placeholder="E-Posta"
              class="border-2 border-Yellow bg-Green py-1 rounded-l-md placeholder:text-White px-2 placeholder:text-xs focus:outline-none"
            /><button class="bg-Yellow px-2 rounded-r-md">Ok</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.polygon {
  position: absolute;
  left: 50%;
  top: -10px;
  z-index: -1;
  transform: translateX(-50%) translateY(-50%);
}
</style>
