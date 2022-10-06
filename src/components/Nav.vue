<template>
  <nav
    class="container px-4 mx-auto flex flex-wrap items-center justify-between"
  >
    <div
      class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
    >
      <router-link to="/" class="nav-brand">
        <img src="../assets/logo.png" class="h-10" />
      </router-link>
      <button
        class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        v-on:click="toggleNavbar()"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div
      v-bind:class="{ hidden: !showMenu, flex: showMenu }"
      class="lg:flex lg:flex-grow items-center"
    >
      <ul class="flex flex-col lg:flex-row list-none ml-auto"></ul>

      <ul class="flex flex-col lg:flex-row list-none ml-auto">
        <li class="nav-item">
          <router-link
            to="/register"
            class="nav-link text-white px-4"
            v-if="!userStore.userData"
            >Register</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/login"
            class="nav-link text-white px-4"
            v-if="!userStore.userData"
            >Login</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/dashboard"
            class="nav-link text-white px-4"
            v-if="userStore.userData"
            >dashboard</router-link
          >
        </li>
        <li class="nav-item">
          <button
            class="nav-link text-white"
            @click="userStore.logoutUser"
            v-if="userStore.userData"
          >
            LogOut
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<script setup>
import { useUserStore } from "../stores/user";
const showMenu = false;
function toggleNavbar() {
  this.showMenu = !this.showMenu;
}

const userStore = useUserStore();
</script>

<script></script>
