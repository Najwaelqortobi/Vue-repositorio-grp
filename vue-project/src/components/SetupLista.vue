<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const users = ref([]);
    const isLoading = ref(true);
    const error = ref(null);

    async function fetchUsers() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=8");
        if (!response.ok) throw new Error("Error al obtener los datos");
        const data = await response.json();
        users.value = data.results;
      } catch (err) {
        error.value = err.message;
      } finally {
        isLoading.value = false;
      }
    }

    onMounted(fetchUsers);

    return { users, isLoading, error };
  },
};
</script>

<template>
  <div>
    <h1>Lista de Participantes</h1>

    <p v-if="isLoading">Cargando usuarios...</p>
    <p v-if="error" class="error">{{ error }}</p>

    <ul v-else class="contenedor">
      <li v-for="user in users" :key="user.login.uuid" class="card">
        <img :src="user.picture.large" :alt="user.name.first" />
        <p>{{ user.name.first }} {{ user.name.last }}</p>
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
