<template>
    <div clas="login">
    <LoginUser/>
    </div>
</template>

<script>
// @ is an alias to /src
import LoginUser from '@/components/LoginUser.vue'

export default {
    name: 'LoginView',
    components: {
        LoginUser
    }
}
</script>