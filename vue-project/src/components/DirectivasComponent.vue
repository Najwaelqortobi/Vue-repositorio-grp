<script setup>
import BarraNaavComponent from './BarraNavComponent.vue'
import { ref, computed} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const count = ref(0);
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
</script>

<template>
  
    <div class="container">
    <BarraNavComponent/>

     <div class="counter-wrapper" v-if="route.path === '/directivas/ref-computed'">
            <h2>Contador Interactivo</h2>
            <div class="counter">
                <button @click="decrement" class="btn decrement">-</button>
                <p :class="countClass">{{ count }}</p>
                <button @click="increment" class="btn increment">+</button>
            </div>
            <button @click="reset" class="btn reset">Reiniciar</button>
        </div>

         <div class="reactive-wrapper" v-else-if="route.path === '/directivas/reactive'">
            <h2>Reactive en Vue 3</h2>
            <p>Reactive es una función de Vue 3 que permite crear objetos reactivos.</p>
        </div>
    </div>



    
</template>


<style scoped>

.container {
    position: relative;
    top: 30%;
    left: 10%;
  
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






.reactive-wrapper {
    background-color: #2c3e50;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 20px;
}

.reactive-wrapper h2 {
    color: #ecf0f1;
    margin-bottom: 20px;
}

.reactive-wrapper p {
    color: #bdc3c7;
    font-size: 1.2rem;
}
</style>