<script>
import { ref } from "vue";

export default {
  setup() {
    const personas = ref([]);
    const error = ref(null);

    async function cargaListaFetch() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=9");
        if (!response.ok) throw new Error("Error al obtener los datos");
        const data = await response.json();
        personas.value = data.results;
        console.log(personas.value)
      } catch (err) {
        error.value = err.message;
      } 
    }

    cargaListaFetch();

    return { personas, error };
  },
};
</script>

<template>
  <div>
    <h1>Lista</h1>

    <p v-if="error" class="error">{{ error }}</p>

    <ul v-else class="contenedor">

      <li v-for="persona in personas" :key="persona.login.uuid" class="card">
        <img :src="persona.picture.large" :alt="persona.name.first" />
        <p>{{ persona.name.first }} {{ persona.name.last }}</p>
        <p>Ciudad: {{ persona.location.city }}</p>
        <p>País: {{ persona.location.country }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  margin-left: 0;
}

.contenedor {
  width: 80%;
  height: auto;
  margin: 0 auto;
  /* background-color: rgb(207, 184, 213); */
  display: flex;
  flex-flow: row wrap;
}

.card {
  width: 23%;
  display: flex;
  flex-direction: column;
  background-color: #3498db;
  padding: 0.5rem;
  margin: 0.5rem;
  /* font-family: Ubuntu; */
  border-radius: 0.5rem;
  text-align: center;
  color: white;
  font-size: 1rem;
}

.card img {
  width: 100%;
  border-radius: 0.5rem;
}

/* @media (max-width: 800px) {
  .card {
    width: 48%;
  }
}

@media (max-width: 400px) {
  .card {
    width: 98%;
  }
} */
</style>
