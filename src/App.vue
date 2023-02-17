<template>
    <h2>Работает</h2>
    <app-button @click="isLoading=!isLoading">
        <span class="loader" v-if="isLoading"></span>
        <span v-else>Создать</span>
    </app-button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    data() {
        return {
            isLoading: false
        }
    }
})
</script>


<style scoped>
.loader {
    width: 1.5rem;
    height: 1.5rem;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>
