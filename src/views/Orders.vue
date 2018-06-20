<template>
    <div>
        <h1>Pedidos</h1>
        <button class="button">Adicionar Pedido</button>
        <div class="columns" v-if="orders.length > 0">
            <div class="column" v-for="(order, index) in orders" :key="index">
                <order-item :item="order"></order-item>
            </div>
        </div>
        <p v-else>Não há pedidos</p>
    </div>
</template>
<script>
    import OrderItem from '../components/OrderItem.vue'
    import http from '../config/http'

    export default {
        name: 'OrderList',
        computed: {
            establishment: function () {
                return this.$store.state.establishment
            }
        },
        data () {
            return {
                orders: []
            }
        },
        components: {
            OrderItem
        },
        beforeMount () {
            http.get(`establishments/${this.establishment.id}/orders`)
                .then(response => {
                    this.orders = response.data.orders
                })
        }
    }
</script>
