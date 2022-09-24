<template>
  <div class="z-50">
    <Nav></Nav>
  </div>

  <nav></nav>
  <div
    class="bg-hola bg-cover bg-center z-0 flex h-screen w-screen justify-center"
  >
    <router-view />
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
</script>

<style lang="scss" scoped></style>
