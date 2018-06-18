<template>
    <div>
        <pay-header></pay-header>  
        <div class="container is-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Header from '../components/Header.vue'

export default {
    name: "Dashboard",
    components: {
        PayHeader: Header
    }    
}
</script>
<style>

</style>

