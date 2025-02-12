<script setup>
import { inject } from 'vue';

const customMessage = inject('greetingMessage');
</script>

<template>

  <div>
    <!--The Child gets the message provided by the Parent and shows it -->
    <p>Injected Message: {{ customMessage }}</p>
    </div>
</template>
<style>
</style>