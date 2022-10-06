<template>
  <div>
    <div>
      <form @submit.prevent="handleSubmit" class="flex flex-col">
        <input type="text" placeholder="nome" v-model="corsiNome" />
        <input
          type="datetime-local"
          placeholder="data inizio"
          v-model="corsiDInizio"
        />
        <input
          type="datetime-local"
          placeholder="data fine"
          v-model="corsiDFine"
        />
        <input
          type="text"
          placeholder="numeri di utenti"
          v-model="corsiUtenti"
        />
        <button type="submit">agregar</button>
      </form>
    </div>
    <div>
      <li v-for="item of databaseStore.documents" :key="item.id">
        {{ item.nome }}
        <br />
        {{ item.dataInizio }}
        <br />
        {{ item.dataFine }}
        <br />
        {{ item.maxUtenti }}
        <br />
        <button @click="databaseStore.deleteCorsi(item.id)">eliminar</button>

        <!------------------------------------------ modal ------------------------------------>
        <button
          @click="isOpen = true"
          class="px-6 py-2 text-white bg-blue-600 rounded shadow"
          type="button"
        >
          Open Model
        </button>
        <div
          v-show="isOpen"
          class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
        >
          <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl">editar {{ item.id }}</h3>
              <svg
                @click="isOpen = false"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-red-900 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <form
              @submit.prevent="
                handleSubmitEditar(
                  item.id,
                  item.dataFine,
                  item.dataInizio,
                  item.maxUtenti,
                  item.nome
                )
              "
              class="flex flex-col"
            >
              <label class="text-lg font-black">Corso</label>
              <input type="text" placeholder="" v-model="item.nome" />
              <label class="text-lg font-black">Data inizio</label>
              <input
                type="datetime-local"
                placeholder="data inizio"
                v-model="item.dataInizio"
              />
              <label for="email" class="text-lg font-black">dataFine</label>
              <input
                type="datetime-local"
                placeholder="data fine"
                v-model="item.dataFine"
              />

              <input
                type="text"
                placeholder="numeri di utenti"
                v-model="item.maxUtenti"
              />
              <button type="submit" @click="isOpen = false">editar</button>
            </form>
          </div>
        </div>

        <!------------------------------------------- fine modal ------------------------>
      </li>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from "../stores/user";
import { useDatabaseStore } from "../stores/database";
import { ref } from "vue";

const userStore = useUserStore();
const databaseStore = useDatabaseStore();
databaseStore.getCorsi();

const corsiNome = ref("");
const corsiDFine = ref("");
const corsiDInizio = ref("");
const corsiUtenti = ref();

const handleSubmit = () => {
  //validaciones
  databaseStore.addCorsi(
    corsiDFine.value,
    corsiDInizio.value,
    corsiUtenti.value,
    corsiNome.value
  );
  (corsiDFine.value = ""),
    (corsiDInizio.value = ""),
    (corsiUtenti.value = ""),
    (corsiNome.value = "");
};

const handleSubmitEditar = (id, dataFine, dataInizio, maxUtenti, nome) => {
  databaseStore.updateCorso(id, dataFine, dataInizio, maxUtenti, nome);
};
</script>
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

<style lang="scss" scoped></style>
