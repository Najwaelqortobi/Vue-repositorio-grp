<script setup>
import { ref } from 'vue';

const showDirectivasMenu = ref(false);

const toggleDirectivasMenu = () => {
  showDirectivasMenu.value = !showDirectivasMenu.value;
  };
</script>

<template>
    <div class="container">
        <nav class="navigation">
            <ul>
                <li><RouterLink to="/parte-a">Parte A</RouterLink></li>
                <li class="dropdown"><RouterLink to="/directivas" @click.prevent="toggleDirectivasMenu">Directivas</RouterLink><!--para que cuando apretamos se desplega el menu con toogle-->

                     <ul v-if="showDirectivasMenu" class="dropdown-menu"> <!--para que el menu desplegable no se ve-->
                    <li><RouterLink to="/directivas/ref-computed">Ref-Computed</RouterLink></li>
                    <li><RouterLink to="/directivas/reactive">Reactive</RouterLink></li>
                    <li><RouterLink to="/directivas/provide">Provide</RouterLink></li>
                    </ul>
                </li>
                <li><RouterLink to="/parte-c">Parte C</RouterLink></li>
                <li><RouterLink to="/parte-d">Parte D</RouterLink></li>
            </ul>
        </nav>
    </div>
</template>

<style setup>
    
    .navigation {
        display: flex;
        margin-left: 30rem;
    }
    ul{
        list-style: none;
        text-decoration: none;
        display: flex;
        gap: 2rem;
        font-size: 1.5rem;
        color: aliceblue;
        margin-top: 2rem;
    }

    .dropdown {
  position: relative;
}

.dropdown-menu {
  z-index: 2;
  position: absolute;
  top: 100%; /*Coloca la parte superior del menú desplegable justo debajo del contenedor .dropdown.*/
  left: 0;/*Alinea el borde izquierdo del menú desplegable con el borde izquierdo del contenedor .dropdown.*/
  background-color: #2c3e50;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dropdown-menu a {
  white-space: nowrap;
  color: aliceblue;
  text-decoration: none;
}


.dropdown-menu a:hover {
  color: #3498db;
}
    
</style>