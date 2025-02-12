<script setup>
import OptionsAPI from '@/components/OptionsAPI.vue'
import CompositionAPI from '@/components/CompositionAPI.vue'
import SetupExportDefault from '@/components/SetupExportDefault.vue';
import ParentC from '@/components/ParentC.vue';
</script>
<template>
    <main>
        <h2>Contadores en OptionsAPI y CompositionAPI</h2>
        <div class="contenedor">
            <OptionsAPI />
            <CompositionAPI />
    
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
    background-color: rgb(15, 14, 15);
}
main {
    margin-top: 2rem;
    color: white;
}
.contenedor {
    border: #dd0030 solid 0.10rem;
    width: 100%;
    /* border-radius:0.3rem; */
    min-height: 10rem;
    padding: 1rem;

}
h2 {
    font-size: 2rem;
    color: white;
}
h3 {
    font-size: 1.2rem;
    color: #f0c22d;
    font-family: monospace;
}

</style> 