import { ref, onMounted } from "vue";

export function useUsers() {
  const users = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  function fetchUsers() {
    isLoading.value = true;
    error.value = null;

    fetch("https://randomuser.me/api/?results=6")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener datos");
        }
        return response.json();
      })
      .then((data) => {
        users.value = data.results;
      })
      .catch((err) => {
        error.value = err.message;
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  // Ejecutar la función al montar el componente
  onMounted(fetchUsers);

  return { users, isLoading, error, fetchUsers };
}


