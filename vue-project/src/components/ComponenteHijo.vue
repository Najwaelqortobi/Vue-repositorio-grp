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
    background-color: #c1e1f7;
    border-radius: 0.2rem;
    min-height: 5rem;
    display:block;
    padding: 1rem;
    color:black;
    margin:1rem;
}

h4 {
    padding: 1rem 0;
    font-weight: bold;
    color: #2c3e50;
  }

p {
    padding: 0.2rem 0;
    font-weight: bold;
    color: #2c3e50;
}
</style>

