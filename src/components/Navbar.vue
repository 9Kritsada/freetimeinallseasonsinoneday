<script setup lang="ts">
import Icon from "../assets/krits.png"
</script>

<template>
  <div class="h-full max-w-[1240px] mx-auto px-2 space-y-5">
    <div class="h-full flex items-center justify-between">
      <ul class="flex space-x-5 items-center">
        <li class="bg-[#F0B719] rounded-full border-[#000000] border overflow-hidden">
          <img :src="Icon" alt="Icon" class="w-10 h-10">
        </li>                                 
        <li>Home</li>
        <li>About</li>
      </ul>
      <div class="space-x-2">
        <button class="bg-gray-300 px-3 py-1  rounded-lg">SIGN IN</button>
        <button class="bg-gray-300 px-3 py-1 rounded-lg">SIGN UP</button>
      </div>
    </div>
  </div>
</template>