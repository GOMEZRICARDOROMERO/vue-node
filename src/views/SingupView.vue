<template>
    <div clas="singup">
    <SignUpUser/>
    </div>
</template>

<script>
// @ is an alias to /src
import SignUpUser from '@/components/SignUpUser.vue'

export default {
    name: 'SingupView',
    components: {
        SignUpUser
    }
}
</script>