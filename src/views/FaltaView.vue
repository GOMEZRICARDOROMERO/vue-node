<template>
    <div clas="login">
    <FormularioEntregableUno/>
    </div>
</template>

<script>
// @ is an alias to /src
import FormularioEntregableUno from '@/components/FormularioEntregableUno.vue'

export default {
    name: 'FaltaView',
    components: {
        FormularioEntregableUno
    }
}
</script>