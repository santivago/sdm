<template>
    <div class="flex flex-col items-center w-1/5">
        <img :src="card.src" alt="" class="h-10" />
        <div class="text-2xl font-bold pt-3">{{ card.tittle }}</div>

        <div class="font-normal text-lg leading-none pt-2">
            {{ card.info }}
        </div>
        <div class="font-normal leading-none pt-2 text-dorado">Leggi di +</div>
    </div>
</template>

<script>
import BtnBorder from "../components/BtnBorder.vue";

export default {
    components: { BtnBorder },
    name: "card",
    props: ["card"],
};
</script>

<style lang="scss" scoped></style>
