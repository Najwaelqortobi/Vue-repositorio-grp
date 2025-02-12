<script setup>
import { provide } from 'vue';
import PropsEmits from "../components/PropsEmits.vue";
import ProvideInject from "../components/ProvideInject.vue";
import Reactivity from "../components/Reactivity.vue";
import Computed from "../components/Computed.vue";
import Watch from "../components/Watch.vue";

</script>

<template :class="templateD">
    <div class="PropsEmits">
      <h2>Props & Emits</h2>
  
      <!-- Props: The Parent sends a message to the Child, and the Child displays it -->
      <!-- Emits: Data or Event flow From Child -> Parent -->
      <PropsEmits :message="parentMessage" @sendMessage="handleMessage" />
    </div>
  
    <div class="ProvideInject">
      <!-- Provide: Parent gives a shared message to all children -->
      <!-- Inject: Child retrieves and displays the shared message -->
      <h2>Testing Main App</h2>
      <ProvideInject />
    </div>
  
    <div class="Reactivity">
      <!-- Use ref for primitive values (like numbers) and reactive for objects or arrays -->
      <h2>Ref & Reactive</h2>
      <Reactivity />
    </div>
  
    <div class="ComputedProperties">
      <!-- Use computed when you need a value that automatically updates based on other data. -->
      <h2>Computed Properties</h2>
      <computed />
    </div>
  
    <div class="watch">
      <!-- Use watch when you need to perform an action every time a value changes -->
      <h2>Watch & WatchEffect</h2>
      <watch />
    </div>
  
  </template>
  
  <style>
  
  div {
    padding-top: 20px;
  }

.templateD h2 {
    color: white;
}

  </style>
