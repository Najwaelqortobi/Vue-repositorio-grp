import { ref, onMounted } from "vue";

export function usePersonas() {
  const users = ref([]);
  const cargando = ref(false);
  const error = ref(null);

  function fetchPersonas() {
    cargando.value = true;
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
        cargando.value = false;
      });
  }

  // cuando esta
  onMounted(fetchPersonas);

  return { users, cargando, error, fetchPersonas };
}


