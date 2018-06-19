<template>
    <div>
        <h1>Pedidos</h1>
        <div class="columns">
            <div class="column" v-for="(order, index) in orders" :key="index">
                <order-item :item="order"></order-item>
            </div>
        </div>
    </div>
</template>
<script>
    import OrderItem from '../components/OrderItem.vue'
    import http from '../config/http'

    export default {
        name: 'OrderList',
        data () {
            return {
                orders: []
            }
        },
        components: {
            OrderItem
        },
        beforeMount () {
            http.get('establishments/1/orders')
                .then(response => {
                    this.orders = response.data.orders
                })
        }
    }
</script>
