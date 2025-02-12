<script setup>
import { ref, computed} from 'vue';
import { useRoute } from 'vue-router';
import {reactive} from 'vue';
import ParentComponent from './ParentComponent.vue'

const route = useRoute();


/* Esto por el contador*/
const count = ref(0);
/* Esto por el contador*/

/* Esto por la parte reactive*/
const user = reactive({
name : 'Jhon',
age : 20,
})

const updateAge = ()=>{
    user.age++;
}


/* Esto por la parte reactive*/

/* Parte Contador inicio*/
const increment = () => {
    count.value++;
};
const decrement = () => {
    count.value = Math.max(0, count.value - 1);
};
const reset = () => {
    count.value = 0;
};

const countClass = computed(() => {
    if (count.value > 10) return 'high';
    if (count.value > 5) return 'medium';
    return 'low';
});
/* Parte Contador fin*/

/* Parte v-for inicio*/

const tareas = ref([
  { id: 1, nombre: "Aprender Vue Router", completada: true },
  { id: 2, nombre: "Usar la Composition API", completada: true },
  { id: 3, nombre: "Aprender Vue", completada: false },
]);

/* Parte v-for fin*/
</script>

<template>
  
    <div class="container">
<!--/* Parte Contador inicio*/-->
     <div class="counter-wrapper" v-if="route.path === '/directivas/ref-computed'">
            <h2>Contador Interactivo</h2>
            <div class="counter">
                <button @click="decrement" class="btn decrement">-</button>
                <p :class="countClass">{{ count }}</p>
                <button @click="increment" class="btn increment">+</button>
            </div>
            <button @click="reset" class="btn reset">Reiniciar</button>
        </div>
<!--/* Parte Contador fin*/-->
<!--/* Parte Reactive inicio*/-->
         <div class="reactive-wrapper" v-else-if="route.path === '/directivas/reactive'">
     <div class="card">
      <div class="user-avatar">
        {{ user.name.charAt(0).toUpperCase() }}
      </div>
      <div class="user-info">
        <h2>{{ user.name }}</h2>
        <p class="age">Age: {{ user.age }}</p>
        <div class="controls">
          <button @click="updateAge" class="btn btn-primary">
            Celebrate Birthday 🎉
          </button>
          <input 
            v-model="user.name" 
            placeholder="Change Name"
            class="name-input"
          /> <!--mediante el V-model lo que se muestra en el h2 es lo que se escribe en el input en el v-model =user.name es lo que tenemos puesto en el h2-->
        </div>
      </div>
      </div>

  </div>

<!--/* Parte Reactive fin*/-->
<!--/* Parte Provide inicio*/-->
          
        <div class="provide" v-else-if = "route.path === '/directivas/provide'">
        <ParentComponent/>
        </div>
<!--/* Parte Provide fin*/-->

<!--/* Parte v-for inicio*/-->

  <div class="v-for" v-if="route.path === '/directivas/v-for'">
  <h1>Lista de tareas</h1>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="tarea.id">
      {{ index + 1 }}. {{ tarea.nombre }} - {{ tarea.completada ? "Completada" : "Pendiente" }}
    </li>
  </ul>
</div>



<!--/* Parte v-for fin*/-->
    </div>

</template>


<style scoped>
/*Parte contador inicio */
.container {
    position: relative;
    top: 30%;
    left: 35%;
  
}
.counter-wrapper {
    background-color: #2c3e50;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 20px;
}

h2 {
    color: #ecf0f1;
    margin-bottom: 20px;
}

.counter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

p {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    min-width: 100px;
}

.btn {
    font-size: 1.5rem;
    padding: 10px 20px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.increment, .decrement {
    width: 50px;
    height: 50px;
}

.increment {
    background-color: #2ecc71;
    color: white;
}

.decrement {
    background-color: #e74c3c;
    color: white;
}

.reset {
    margin-top: 20px;
    background-color: #3498db;
    color: white;
    border-radius: 25px;
}

.btn:hover {
    transform: scale(1.1);
}

.low { color: #2ecc71; }
.medium { color: #f39c12; }
.high { color: #e74c3c; }

/*Parte contador fin */

/*Parte reactive inicio */
.card {
    position: absolute;
    left: 20%;
    top: 30%; 
    background-color: #2c3e50;
    width: 600px; 
    padding: 30px; 
    border-radius: 15px; 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
}



.reactive-wrapper {
  height:100%;
}



.user-avatar {
  width: 60px;
  height: 60px;
  background-color: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
}

.user-info {
  flex-grow: 1;
}



.age {
  font-size: 18px;
  color: #7f8c8d;
  margin-bottom: 15px;
}

.controls {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.name-input {
  padding: 8px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 14px;
}

/*Parte reactive fin */

/*Parte v-for inicio */

.v-for {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 18px;
  margin: 10px 0;
  padding: 10px;
  background-color: #3498db;
  border-radius: 5px;
  color: white;
}

/*Parte v-for fin */




</style>