<script setup>
    // importamos el componente hijo
    import TarjetaUsuario from "@/components/ComponenteHijo.vue"
</script>
<template>
    <div>
        <h3>Badass characters</h3>
        <TarjetaUsuario nombre="Sandor Clegane" edad="29" />
        <TarjetaUsuario nombre="Sir Bronn of the fu@#$&g Blackwater." edad="32" />
        <TarjetaUsuario nombre="Lyanna Mormont (Lady Osita)" edad="13" />
    </div>

</template>
<style scoped>
h3 {
    padding: 1rem 0;
    color: #3498db;
    
  }
</style>