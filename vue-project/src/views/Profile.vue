<template>
    <div>
      <h1>Profile Page</h1>
      <p><strong>User ID:</strong> {{ userId }}</p>
      <p v-if="user">
        <strong>Name:</strong> {{ user.name }} <br>
        <strong>Bio:</strong> {{ user.bio }}
      </p>
      <p v-else>User not found.</p>
      <router-link to="/">Go Back</router-link>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const userId = ref(route.params.id);
  
      // Fake user database
      const users = [
        { id: "1", name: "Youssef", bio: "Example of programmer 1." },
        { id: "2", name: "Moses", bio: "Example of the programmer 2" },
        { id: "3", name: "Najwa", bio: "Example of programmer 3" },
        { id: "3", name: "Allan", bio: "Example of programmer 4" }
      ];
  
      // Find user based on ID
      const user = computed(() => users.find(u => u.id === userId.value));
  
      return { userId, user };
    }
  };
  </script>
  