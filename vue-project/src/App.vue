<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
/*useRoute es una funcion para verificar la ruta para la condicion que puse abajo*/
import BarraNavComponent from './components/BarraNavComponent.vue'

const route = useRoute();
</script>

<template>
  <div class="container">
    <BarraNavComponent v-if="route.path !== '/welcome'" />
    <div v-if="route.path === '/welcome'" class="nav-bar">
      <nav>
        <RouterLink to="/Home">Parte A</RouterLink>
        <RouterLink to="/directivas">Componentes Rutas y Directivas</RouterLink>
        <RouterLink to="/Parte-c">Parte C</RouterLink>
        <RouterLink to="/Parte-d">Parte D</RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>

</template>

<style setup>
#app {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width :100%;
}
body,html {
  background-color: #1a2a3a; /* Azul oscuro profundo */
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Asegura un modelo de caja consistente */
  font-family: 'Helvetica Neue', Arial, sans-serif;
  height: 100%;
}


.nav-bar {
  display: flex;
  position: relative;
  top: 50%;
  left: 50%;
  margin-right: 6rem;
  background-color: #2c3e50; 
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

nav {
  text-align: center;
  display: flex;
  gap: 1rem;
}

nav a {
  text-align: center;
  text-decoration: none;
  background-color: #34495e;
  color: #ecf0f1; 
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 1rem;
}

/* nav a:hover {
  background-color: #4a6b8a; 
  transform: translateY(2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
} */
nav a.router-link-active {
  background-color: #3498db; 
  box-shadow: 0 0 15px rgba(52, 152, 219, 0.5); 
}
</style>
