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
    <div class="sticky top-0 bg-white z-10">
      <div class="h-20 border-b">
        <Navbar/>
      </div>
    </div>

    <!-- Content -->
    <div class="bg-fixed bg-center" style="background-image: url(https://m1r.ai/9/x6jte.png)" >
      <div class="animate__animated animate__fadeInDown">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>

    <!-- Footer -->
    <div class="sticky top-[100vh] h-20 border-t">
      <Footer class="bg-white z-10" />
    </div>
  </main>
</template>

