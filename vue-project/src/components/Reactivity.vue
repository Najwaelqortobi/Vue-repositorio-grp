<script setup>
import { ref, reactive } from 'vue';

const counter = ref(0);

const user = reactive({
  name: 'Youssef',
  age: 21,
});

const increment = () => {
  counter.value++;
  user.age++;
}

const decrement = () => {
  counter.value--;
  user.age--;
}

const reset = () => {
  counter.value = 0;
  user.age = 21;
}

</script>

<template>
  <div>
    <p>Counter {{ counter }}</p>
    <p>User: {{ user.name }}, age {{ user.age }}</p>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Disminuir</button>
    <button @click="reset">Restear</button>

  </div>
</template>

<style scoped>

button {
  margin: 10px 0 0 15px;
}
</style>