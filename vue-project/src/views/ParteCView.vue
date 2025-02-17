<script setup>
import OptionsAPI from '@/components/OptionsAPI.vue'
import CompositionAPI from '@/components/CompositionAPI.vue'
import SetupExportDefault from '@/components/SetupExportDefault.vue';
import ParentC from '@/components/ComponentePadre.vue';
</script>
<template>
    <main>
        <h2>CompositionAPI vs OptionsAPI</h2>
        <div class="contenedor">
            <CompositionAPI />
            <OptionsAPI />
    
        </div>
        <h2>Setup con Export Default</h2>
        <div class="contenedor">
            <SetupExportDefault />
        </div>
        
        <h2>Parent/Child</h2>
        <div class="contenedor">
            <ParentC />
        </div>
    </main>



</template>
<style scoped>

body {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(15, 14, 15);
    border: #f3ba00 solid 2px;
}

main {
    width: 100%;
    /* border: green solid 2px; */
    margin:2rem 0;
    color: white;
}
.contenedor {
    display:flex;
    justify-content: center;
    border: #dd0030 solid 0.10rem;
    width: 100%;
    /* border-radius:0.3rem; */
    min-height: 10rem;
    padding: 1rem;

}
h2 {
    font-size: 2rem;
    color: white;
    text-align: center;
}
h3 {
    font-size: 1.2rem;
    color: #f0c22d;
    font-family: monospace;
}

@media (min-width: 1024px) {
    body {
        display: flex;
        place-items: center;
    }
}
</style> 