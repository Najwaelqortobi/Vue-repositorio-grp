<script setup>
import OptionsAPI from '@/components/OptionsAPI.vue'
import CompositionAPI from '@/components/CompositionAPI.vue'
// import SetupExportDefault from '@/components/SetupExportDefault.vue';
import ComponentePadre from '@/components/ComponentePadre.vue';
import SetupLista from '@/components/SetupLista.vue';
import ComposableLista from '@/components/ComposableLista.vue'
</script>
<template>
    <main>
        <h2>CompositionAPI vs OptionsAPI</h2>
        <div class="contenedor">
            <CompositionAPI />
            <OptionsAPI />
    
        </div>
        <h2>Setup() [export default - return]</h2>
        <div class="contenedor">
            <SetupLista/>
        </div>
        <h2>Composable</h2>
        <div class="contenedor">
            <ComposableLista/>
        </div>
        
        <h2>Parent/Child</h2>
        <div class="contenedor">
            <ComponentePadre />
        </div>
    </main>



</template>
<style scoped>

body {
    width: 100%;
    display: flex;
    justify-content: center;
    /* background-color: rgb(15, 14, 15); */
    /* border: #f3ba00 solid 2px; */
}

main {
    width: 100%;
    /* border: green solid 2px; */
    margin:2rem 0;
    color: white;
    padding-bottom: 1rem;
    margin-left:15rem;
}
.contenedor {
    display:flex;
    justify-content: center;
    border: #3498db solid 0.1rem;
    width: 100%;
    border-radius:0.3rem;
    min-height: 10rem;
    padding: 1rem;
    margin-bottom: 5rem;

}
h2 {
    font-size: 2rem;
    color: white;
    text-align: center;
}
h3 {
    font-size: 1.2rem;
    color: #3498db;
    font-family: monospace;
}
button {
  font-size: 1.5rem;
  /* font-family: monospace; */
  color: white;
  height: 4rem;
  min-width: 10rem;
  outline: none;
  border: none;
  border-radius: 2rem;
  margin: 0 1rem;
  background-color:#2c3e50;
}
button:hover {
  background-color: #3498db;
}

@media (min-width: 1024px) {
    body {
        display: flex;
        place-items: center;
    }
}
</style> 