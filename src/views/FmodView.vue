<template>
    <div clas="login">
    <FormularioEntregableTres/>
    </div>
</template>

<script>
// @ is an alias to /src
import FormularioEntregableTres from '@/components/FormularioEntregableTres.vue'

export default {
    name: 'FaltaView',
    components: {
        FormularioEntregableTres
    }
}
</script>