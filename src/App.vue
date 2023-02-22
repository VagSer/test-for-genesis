<template>
    <h2>Работает</h2>
    <app-button 
        :disabled="appStore.selectedItem === '---'"
        @click="appStore.isLoading=!appStore.isLoading"
    >
        <span class="loader" v-if="appStore.isLoading"></span>
        <span v-else>Создать</span>
    </app-button>
    <app-select v-model="appStore.selectedItem">
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
        >
        {{ option.text }}
        </option>
    </app-select>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import { useAppStore } from "./stores/appStore"

export default defineComponent({
    setup() {
        const appStore = useAppStore()
        const options = [
            {value: '---', text: 'Не выбрано'},
            {value: 'deal', text: 'Сделка'},
            {value: 'contact', text: 'Контакт'},
            {value: 'company', text: 'Компания'},
        ]
        return {
            appStore, options
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
