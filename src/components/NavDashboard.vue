<template>
  <div class="flex flex-col items-end w-full h-full p-10 pt-40" id="navDash">
    <router-link to="/dashboard/users" class="nav-link text-white py-3"
      >Users
    </router-link>
    <router-link to="/dashboard" class="nav-link text-white py-3"
      >Corsi
    </router-link>
  </div>
</template>

<script setup></script>

<style>
#navDash .router-link-exact-active {
  color: darkgoldenrod;
}
</style>
