<script setup>
import { useUsers } from "@/composables/useFetchLista";

const { users, isLoading, error, fetchUsers } = useUsers();
</script>

<template>
  <div>
    <h1>Lista personas</h1>

    <button @click="fetchUsers" :disabled="isLoading">
      {{ isLoading ? "Cargando..." : "Recargar Usuarios" }}
    </button>

    <p v-if="error" class="error">{{ error }}</p>

    <ul v-else class="contenedor">
      <li v-for="user in users" :key="user.login.uuid" class="card">
        <img :src="user.picture.large" :alt="user.name.first" />
        <p>{{ user.name.first }} {{ user.name.last }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
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

button {
  font-size: 1rem;
  /* font-family: monospace; */
  color: white;
  height: 2rem;
  min-width: 10rem;
  outline: none;
  border: none;
  border-radius: 2rem;
  margin: 0 1rem;
  background-color:#2c3e50;
}
button:hover {
  background-color: #3498db;
}
</style>
