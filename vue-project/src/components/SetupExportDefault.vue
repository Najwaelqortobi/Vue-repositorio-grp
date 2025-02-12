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
