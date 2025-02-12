<script setup>
import { inject } from 'vue';

//Nota : la idea es que en el child cogemos las funcionalidades del padre
//y en el padre recibimos los cambios del child

// Inyectar el contador y la función
// Lo inyectamos para que coje la funcion del padre
const count = inject('count');
const incrementCount = inject('incrementCount');
</script>
q
<template>
  <div class="child-container">
    <h2>Componente Hijo</h2>
    <p>Contador del padre: {{ count }}</p>
    <button @click="incrementCount" class="btn">Incrementar Contador</button>
  </div>
</template>

<style scoped>
.child-container {
  border: 2px dashed #2ecc71;
  padding: 1rem;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #2c3e50;
}

.btn {
  padding: 1rem;
  background-color: #44bd76;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
}


.btn:hover {
  background-color: #27ae60;
}

h2{
  font-size: 3rem;
}
p{
  font-size: 2rem;
}
</style>
