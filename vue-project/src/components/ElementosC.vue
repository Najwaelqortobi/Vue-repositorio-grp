<script setup>
import { usarContador } from "@/composables/usarContador";

const { contador, incrementar } = usarContador();
</script>

<template>
  <p>Contador: {{ contador }}</p>
  <button @click="incrementar">incrementar</button>
</template>
