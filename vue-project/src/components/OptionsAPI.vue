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
  <div class="cont">
    <h3>Contador en Options API:</h3>
      <div class="contador">
        <button @click="disminuir">Menos</button>
        <div class="numero">{{ contador }}</div>
        <button @click="incrementar">Más</button>
      </div>
  </div>
</template>
<style scoped>
.numero {
  display:flex;
  justify-content: center;
  align-items:center;
  padding: 0 1rem;
  font-size: 3rem;
  margin:0.2rem;
}
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