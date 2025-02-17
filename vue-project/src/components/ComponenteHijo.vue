<script setup>
    // recibe datos del padre: nombre y edad
    defineProps(['nombre','edad']);
</script>
<template>  
    <div class="tarjetaNombres">
        <h4>{{ nombre }}</h4>
        <p>Edad: {{ edad }}</p>
    </div>
</template>
<style scoped>
.tarjetaNombres{
    background-color: #f3ba00;
    border-radius: 2rem;
    min-height: 5rem;
    display:block;
    padding: 2rem;
    color:black;
    margin:1rem;
}

h4, p {
    padding: 1rem 0;
    font-weight: bold;
    color: black;
  }
</style>

