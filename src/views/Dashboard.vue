<template>
  <div>
    <div class="w-screen flex">
      <div class="bg-neutral-800 h-screen w-full flex items-center">
        <div class="bg-zinc-800 h-screen w-1/5 shadow-xl">
          <NavDashboardVue />
        </div>
        <div><router-view> </router-view></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      isActive: true,
    };
  },
};
</script>
<script setup>
import NavDashboardVue from "../components/NavDashboard.vue";
</script>

<style lang="scss" scoped></style>
