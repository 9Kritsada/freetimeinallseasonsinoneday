<script setup lang="ts">
// Components
import Navbar from './components/Navbar.vue'
import Content from './views/Content.vue'
import Footer from './components/Footer.vue'

// Style 
import 'animate.css';

// Router
import { onMounted, ref } from "vue";
import router from "./router";

const isActive = ref(false);
const isFixed = ref(false);
onMounted(() => {
  window.addEventListener("scroll", (e) => {
    isActive.value = window.scrollY > 200 && isFixed.value;
  });
});

router.beforeEach((to, form) => {
  isFixed.value = to.name === 'home'
})

</script>

<template>
  <main class="h-screen">
    <!-- Navbar -->
    <div class="bg-white z-10">
      <div class="sticky top-0 h-20 border-b border-[#000000] ">
        <Navbar/>
      </div>
    </div>

    <!-- Content -->
    <div class="bg-fixed bg-center min-h-screen" style="background-image: url(https://m1r.ai/9/x6jte.png)" >
      <div class="animate__animated animate__fadeInUp">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>

    <!-- Footer -->
    <div class="sticky top-[100vh] h-20 border-t border-[#000000]">
      <Footer class="bg-white z-10"/>
    </div>
  </main>
</template>

