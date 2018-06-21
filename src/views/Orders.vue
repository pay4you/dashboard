<template>
    <div>
        <section>
            <b-tabs v-model="activeTab">
                <b-tab-item label="Abertos">
                    <div class="columns is-mobile is-multiline is-centered" v-if="orders.length > 0">
                        <div class="column is-one-quarter" v-for="(order, index) in orders" :key="index">
                            <order-item :item="order"></order-item>
                        </div>
                    </div>
                </b-tab-item>

                <b-tab-item label="Fechados">
                    <div class="columns is-mobile is-multiline is-centered" v-if="orders.length > 0">
                        <div class="column is-one-quarter" v-for="(order, index) in orders" :key="index">
                            <order-item :item="order"></order-item>
                        </div>
                    </div>
                </b-tab-item>
            </b-tabs>
        </section>
    </div>
</template>
<script>
    import OrderItem from '../components/OrderItem.vue'
    import http from '../config/http'
import { setTimeout } from 'timers';

    export default {
        name: 'OrderList',
        computed: {
            establishment: function () {
                return this.$store.state.establishment
            }
        },
        data () {
            return {
                orders: [],                
                activeTab: 0,
                status: 1
            }
        },
        components: {
            OrderItem
        },
        methods: {
            getOrders() {
                setTimeout(() => {
                    http.get(`establishments/${this.establishment.id}/orders?status=${this.status}`)
                        .then(response => {
                            this.orders = response.data.orders
                        })
                }, 1000)
            }
        },
        beforeMount () {
            this.getOrders()
        },
        watch: {
            activeTab: function(val, oldVal) {
                if(val === 0) {
                    this.status = 1
                    this.orders = []
                    this.getOrders()
                } else {
                    this.status = 0
                    this.orders = []
                    this.getOrders()
                }
            }
        }
    }
</script>
