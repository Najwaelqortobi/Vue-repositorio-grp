<script setup>
import { useUsers } from "@/composables/useFetchLista";

const { users, isLoading, error, fetchUsers } = useUsers();
</script>

<template>
  <div>
    <h1>Lista de Usuarios</h1>

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
.contenedor {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.card {
  background: #eee;
  padding: 10px;
  border-radius: 5px;
}
</style>
