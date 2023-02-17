<template>
  <button class='appButton'>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'app-button'
})
</script>

<style>
.appButton {
  background: hsl(234, 100%, 69%);
  color: white;
  border: none;
  font-size: 1.5rem;
  padding: 10px 20px;
  border-radius: 8px;
}

.appButton:hover {
  background: hsl(234, 70%, 69%);
}

.appButton:disabled {
  background: hsl(234, 10%, 69%);
  color: black;
}
</style>