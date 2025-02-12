<script setup>
    defineProps(['nombre','edad']);
</script>
<template>  
    <div>
        <h4>{{ nombre }}</h4>
        <p>Edad: {{ edad }}</p>
    </div>
</template>