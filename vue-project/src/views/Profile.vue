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
  
      // Programmers
      const users = [
        { id: "1", name: "Youssef", bio: "programmer 1." },
        { id: "2", name: "Moses", bio: "programmer 2" },
        { id: "3", name: "Najwa", bio: "programmer 3" },
        { id: "3", name: "Allan", bio: "programmer 4" }
      ];
  
      // Find user based on ID
      const user = computed(() => users.find(u => u.id === userId.value));
  
      return { userId, user };
    }
  };
  </script>
  