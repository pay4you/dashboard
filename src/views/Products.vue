<template>
    <div>
        <h1>Produtos</h1>
        <div class="columns">
            <div class="column" v-for="(product, index) in products" :key="index">
                <product-item :item="product"></product-item>
            </div>
        </div>
    </div>
</template>
<script>
    import ProductItem from '../components/ProductItem.vue'
    import http from '../config/http'

    export default {
        name: 'ProductList',
        data () {
            return {
                products: []
            }
        },
        components: {
            ProductItem
        },
        beforeMount () {
            http.get('establishments/1/products')
                .then(response => {
                    this.products = response.data.products
                })
        }
    }
</script>
