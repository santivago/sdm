<template>
  <div class="container mx-auto">
    <div class="w-full h-screen flex justify-center items-center">
      <div class="w-full h-screen bg-black opacity-25 absolute z-0"></div>
      <div class="flex flex-row w-screen z-10">
        <div
          class="w-3/6 h-screen flex justify-center flex-col items-end pr-20"
        >
          <div class="text-8xl font-fjalla text-white">Welcome!</div>
          <div class="text-white text-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            enim dolor, natus incidunt voluptatum architecto?
          </div>
          <div class="pt-10">
            <BtnBorder class="font-black"> REGISTRATI </BtnBorder>
          </div>
        </div>

        <div
          class="w-3/6 h-screen text-white flex flex-col justify-center px-20"
        >
          <div class="text-5xl font-black font-fjalla">Sign In</div>
          <div class="text-left">Ingressa con il tuo acount</div>
          <form @submit.prevent="handleSubmit">
            <div class="flex flex-col pt-10">
              <label for="email" class="text-lg font-black">Email</label>
              <!-- <span v-if="errors.name">{{ errors.name }}</span> -->
              <input
                type="email"
                placeholder="Email"
                class="p-2"
                v-model="email"
              />
            </div>
            <div class="flex flex-col pt-3">
              <label for="password" class="text-lg font-black">Password</label>
              <input
                type="password"
                placeholder="Password"
                class="p-2"
                v-model="password"
              />
              <div class="text-dorado">
                <router-link to="/" class="nav-link text-dorado pt-2"
                  >Hai dimenticato la password?</router-link
                >
              </div>
            </div>

            <button
              class="pt-10"
              type="submit"
              :disabled="userStore.loadingUser"
            >
              <Btn class="font-black"> Sign in </Btn>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import Btn from "../components/Btn.vue";
import BtnBorder from "../components/BtnBorder.vue";
//import { useRouter } from "vue-router";
import { async } from "@firebase/util";

const userStore = useUserStore();
//const router = useRouter();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert("llena los campos");
  }
  await userStore.loginUser(email.value, password.value);
  //router.push("/");
};
</script>

<style lang="scss" scoped></style>
