<template>
    <h2>Работает</h2>
    <app-button 
        :disabled="(appStore.selectedItem === '---' || appStore.isLoading)"
        @click="getItem"
    >
        <span class="loader" v-if="appStore.isLoading"></span>
        <span v-else>Создать</span>
    </app-button>
    <select v-model="appStore.selectedItem" class="appSelect">
        <option 
            v-for="option in options"
            :key="option.value" 
            :value="option.value"
        >
        {{ option.text }}
        </option>
    </select>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import { useAppStore } from "./stores/appStore"
import axios from 'axios'


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
    },
    methods: {
        async getItem() {
            this.appStore.isLoading = true
            setTimeout(() => this.appStore.isLoading = false, 3000)
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

.appSelect {
    width: 200px;
    font-size: 1.3rem;
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
