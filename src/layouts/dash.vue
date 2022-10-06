<template>
  <div class="z-50">
    <div
      class="flex flex-wrap items-center justify-between px-10 py-2 mb-3 fixed w-screen z-40 bg-zinc-800 shadow-lg"
    >
      <Nav></Nav>
    </div>
  </div>
  <div
    class="bg-hola bg-cover bg-center z-0 flex h-screen w-screen justify-center"
  >
    <router-view />
  </div>
</template>

<script setup>
import Nav from "../components/Nav.vue";
</script>

<style lang="scss" scoped></style>
