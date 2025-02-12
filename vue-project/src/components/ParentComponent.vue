

<script setup>
import { ref, provide } from 'vue';
import ChildComponent from './ChildComponent.vue';

//Nota : la idea es que en el child cogemos las funcionalidades del padre
//y en el padre recibimos los cambios del child

const count = ref(0);

const incrementCount = () => {
  count.value++;
};

// Proporciona el valor 'count' de la variable count
//el provide para que coge el cambio del hijo
provide('count', count);
provide('incrementCount', incrementCount);
</script>

<template>
  <div class="parent-container">
    <h2>Componente Padre</h2>
    <p>Contador: {{ count }}</p>
    <ChildComponent />
  </div>
</template>

<style scoped>
.parent-container {
  border: 2px solid #3498db;
  padding: 20px;
  border-radius: 10px;
  background-color: #2c3e50;
  color: white;
}

h2{
  font-size: 3rem;
}
p{
  font-size: 2rem;
}
</style>
