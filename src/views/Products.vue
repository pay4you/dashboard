<template>
    <div>
        <h1>Produtos</h1>
        <button class="button">Adicionar Produto</button>
        <div class="columns is-multiline" v-if="products.length > 0">
            <div class="column" v-for="(product, index) in products" :key="index">
                <product-item :item="product"></product-item>
            </div>
        </div>
        <p v-else> Não há produtos disponíveis</p>
    </div>
</template>
<script>
    import ProductItem from '../components/ProductItem.vue'
    import http from '../config/http'

    export default {
        name: 'ProductList',
        computed: {
            establishment: function () {
                return this.$store.state.establishment
            }
        },
        data () {
            return {
                products: []
            }
        },
        components: {
            ProductItem
        },
        beforeMount () {
            http.get(`establishments/${this.establishment.id}/products`)
                .then(response => {
                    this.products = response.data.products
                })
        }
    }
</script>
