<template>
  <div>
    <div class="h-screen container mx-auto">
      <div class="h-screen w-auto font-bold flex items-center">
        <div class="container">
          <div class="text-5xl font-barlow italic text-white mt-10">
            UN CENTRO SPECIALIZZATO IN
          </div>
          <div class="text-8xl font-fjalla text-white">DANZA E FITNESS</div>
          <div class="text-2xl font-barlow text-white pt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <span class="text-dorado">
              Pariatur perspiciatis id sit facilis</span
            >
          </div>

          <div class="pt-2 flex flex-row">
            <BtnBorder class="mr-5">NOSTRI CORSI</BtnBorder>
            <Btn> CONTATTACI </Btn>
          </div>
        </div>
      </div>
    </div>

    <!------------------------------------------------------- section 2 ------------------------------------------>
    <div
      class="bg-neutral-800 w-screen h-4/6 text-gray-300 font-barlow relative m-0"
    >
      <div class="text-gray-300 flex flex-col items-center font-black pt-16">
        <div class="text-3xl font-fjalla">IL SEGRETO PER ANDARE</div>
        <div class="text-3xl font-fjalla">AVANTI E' INIZIARE</div>
        <div class="w-1/12 border-b-2 border-dorado pt-4"></div>

        <div
          class="flex items-center w-5/6 justify-around pt-3 font-barlow text-center"
        >
          <Card v-for="card in cards" :key="card.id" :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";
import BtnBorder from "../components/BtnBorder.vue";
import Btn from "../components/Btn.vue";
import Card from "../components/Card.vue";
import { useDatabaseStore } from "../stores/database";

const databaseStore = useDatabaseStore();

databaseStore.getCorsi();

const cards = [
  {
    tittle: "TORNA E RESTA IN FORMA",
    info: "Serie di corsi rivolti a chi vuole allenarsi tornare o mantenere la propria forma fisica; ideale per chi vuole perdere qualche chilo o per chi vuole dare tono al proprio corpo",
    src: "img/icons/pesi.png",
  },
  {
    tittle: "MIGLIORA IL TUO BENESSERE",
    info: "Serie di corsi dedicati al relax, al tuo benessere, alla tua mente, puntando insieme ad un miglior status psico-fisico ",
    src: "img/icons/cuore.png",
  },
  {
    tittle: "SCOPRI PLUS +",
    info: "Desideri il ventre piatto, le gambe sode e i glutei da vip? In arrivo un palinsesto veramente 'plus+' solo per i piu determinati ad ottenere il cambiamento! ",
    src: "img/icons/heart.png",
  },
];
const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
