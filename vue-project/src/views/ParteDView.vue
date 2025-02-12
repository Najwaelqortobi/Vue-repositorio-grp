<script setup>
import { provide } from 'vue';
import Props from "../components/Props.vue";
import Emits from "../components/Emits.vue";
import ProvideInject from "../components/ProvideInject.vue";
import Reactivity from "../components/Reactivity.vue";
import Computed from "../components/Computed.vue";
import Watch from "../components/Watch.vue";

// Emits Handle the message sent from the Child
const handleMessage = (msg) => {
  console.log('Message from Child:', msg); // Log the message received from the Child
};

</script>

<template>
    <div class="t">
      <h2>Props</h2>
      <br>
      <h3> // PROPS: used to send data from the parent to the child component</h3>      

    <!-- Pasar el dato message como prop al hijo -->
      <Props message="Hello, Child!" />
    </div>
  
    <div class="t">

      <h2>Emits</h2>
      <br>
      <h3> // EMITS: send data or an event from child to parent</h3>      
      <Emits message="Hello, Child!" @sendMessage="handleMessage" />

    </div>

    <div class="t">

        <h2>Testing Main App</h2>
        <br>
      <h3> // PROVIDE: The Parent shares data with any Child component, without having to pass it through every level.<br>
        // INJECT: it's to inject & import data from the father to the child.
      </h3>      
      <ProvideInject />

    </div>
  
    <div class="t">

        <h2>Ref & Reactive</h2>
        <br>
      <h3> // REF is being used to primary value such as a number and REACTIVE for objects or arrays</h3>      
      <Reactivity />

    </div>
  
    <div class="t">

        <h2>Computed Properties</h2>
        <br>
      <h3> // COMPUTED: Is being used when you need a value that automatically updates based on onther data</h3>      
        <computed />

    </div>
  
    <div class="t">

        <h2>Watch & WatchEffect</h2>
        <br>
      <h3> // WATCH: send data or an event from child to parent</h3>      
      <watch />

    </div>
  
  </template>
  
<style scoped>
  
div {
    padding-top: 20px;
    color: green;

  }

div h2 {
    color: #32339a;
    text-align: center;
    border-radius: 4px;
    border: 1px blue solid;
    font-weight: bold;
    background-color:#cacbff;
    margin: 0 auto 0 auto;
    width: 16rem;

    
}

button {
    background-color: green;
    color: white;
    border-radius: 3px;
    border: none;
    font-size: 18px;
    border: 1px solid black;
    

}


h3 {
    color: green;
    background-color: #D2FFD4;
    width: 35%;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    border-radius: 3px;
    font-size: 16px;
    
}

.t {
    border: 3px red solid;
    margin-top: 50px;
    padding-bottom: 20px;
    background-color:rgb(255, 255, 255);
    border-radius: 10px;
}

  </style>
