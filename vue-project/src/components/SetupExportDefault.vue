<script>
import { ref } from "vue";

export default {
  setup() {
    const contador = ref(0);

    const incrementar = () => {
    contador.value++;
    };

    const disminuir = () => {
    contador.value--;
    }
    
    // utilización de return
    // se mandan las variables y las funciones al template
    return { contador, incrementar, disminuir };  
  }
};
</script>

<template>
  <div>
    <h3>Contador con Setup Export Default: {{ contador }}</h3>
    <button @click="incrementar">Aumentar</button>
    <button @click="disminuir">Disminuir</button>
  </div>
</template>
<style scoped>

button {
  font-size: 1.5rem;
  font-family: monospace;
  color: white;
  height: 4rem;
  min-width: 10rem;
  outline: none;
  border: none;
  border-radius: 2rem;
  margin: 0 1rem;
  background-color: #dd0030;
}
.contador {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;
  /* border: orange solid 5px; */
  padding: 0 2rem;
  min-height: 2rem;
}
h3 {
  padding: 1rem 0;
  color: #f3ba00;
}

</style>
