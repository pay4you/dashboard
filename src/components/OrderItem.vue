<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                ID#{{item.id}}
            </p>
            <div class="card-header-icon">
                <span :class="['tag', item.status === 1 ?'is-success':'is-danger']">
                    {{orderStatus}}
                </span>
            </div>
        </header>
        <div class="card-content">
            <div class="content">
                <p>{{item.description}}</p>
                <ul>
                    <li v-for="(product, index) in products" :key="index">{{product.name}} <small></small></li>
                </ul>
                <p>Total: R$ {{totalPrice}}</p>
            </div>
        </div>
        <footer class="card-footer">
            <a href="javascript:void(0)" class="card-footer-item" @click="closeOrder">Finalizar</a>
        </footer>
    </div>
</template>
<script>
    import http from '../config/http'
    export default {
        name: 'OrderItem',
        props: ['item'],
        computed: {
            totalPrice: function () {
                return this.products
                    .map(e => e.price)
                    .reduce((total, unit) => total + unit/100, 0)
            },
            orderStatus: function () {
                if(this.item.status === 1) {
                    return 'Aberto'
                } else {
                    return 'Fechado'
                }
            }
        },
        data () {
            return {
                products: []
            }
        },
        methods: {
            closeOrder () {
                http.put(`/orders/${this.item.id}`, {status: 0})
                    .then(order => {
                        window.location.reload()
                    })
            }
        },
        mounted () {
            http.get(`/orders/${this.item.id}`)
                .then(order => {
                    this.products = order.data.products
                })
        }
    }
</script>
