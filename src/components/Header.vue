<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-item">
                <img src="../assets/logo.png" alt="Pay4You" height="20px">
            </div>
        </div>
        <div class="navbar-menu" v-show="establishments.items.length != 0">
            <div :class="['navbar-item', 'has-dropdown', 'is-hoverable']">
                <a class="navbar-link" href="javascript:void(0)">
                    {{establishment.social_name}}
                </a>
                <div class="navbar-dropdown is-boxed" v-if="establishments.items.length > 1">
                    <a class="navbar-item" href="javascript:void(0)" v-for="(estab, index) in establishments.items" :key="index" @click="setActiveEstablishment(estab)">
                        {{estab.social_name}}
                    </a>
                </div>
            </div>
            <router-link :to="{ name: 'orders'}" class="navbar-item">Pedidos</router-link>
            <router-link :to="{ name: 'products'}" class="navbar-item">Produtos</router-link>
        </div>
    </nav>
</template>
<script>
import http from '../config/http'

export default {
    name: 'Header',
    computed: {
        establishment: function () {
            return this.$store.state.establishment
        },
        establishments: function () {
            return this.$store.state.establishments
        }
    },
    beforeMount () {
        http.get('/users/profile')
            .then(user => {
                delete user.data.success
                if(user.data.isRoot) {
                    this.getEstablishments()
                }
                this.$store.dispatch('setProfile', user.data)                
            })
    },
    methods: {
        getEstablishments () {
            http.get('/establishments')
                .then(establishments => {
                    this.$store.dispatch('setActiveEstablishment', establishments.data.items[0])
                    this.$store.dispatch('setEstablishments', establishments.data)                
                })
        },
        setActiveEstablishment (estab) {
            this.$store.dispatch('setActiveEstablishment', estab)
        }
    }
}
</script>

