<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  {{ count }}
  <h1 class="">{{ msg }}</h1>
</template>

<style scoped></style>
