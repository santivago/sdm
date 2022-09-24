<template>
  <div>home</div>
  <p>{{ userStore.userData?.email }}</p>
</template>

<script setup>
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
