<script>
export default {
  data() {
    return {
      contador: 0
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
    disminuir() {
      this.contador--
    }
  }
};
</script>

<template>
  <div>
    <h3>Contador en Option: {{ contador }}</h3>
    <button @click="incrementar">Aumentar</button>
    <button @click="disminuir">Disminuir</button>
  </div>
</template>
