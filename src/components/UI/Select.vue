<template>
    <select>
        <slot>
        </slot>
    </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'app-select'
})
</script>

<style>

</style>