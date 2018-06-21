<template>
    <div>
        <h1>Produtos</h1>
        <button class="button" @click="isComponentModalActive = true">Adicionar Produto</button>
        <div class="columns is-mobile is-multiline is-centered" v-if="products.length > 0">
            <div class="column is-one-quarter" v-for="(product, index) in products" :key="index">
                <product-item :item="product"></product-item>
            </div>
        </div>
        <p v-else> Não há produtos disponíveis</p>
        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Produto</p>
                </header>
                <section class="modal-card-body">
                    <b-field label="Nome">
                        <b-input
                            type="text"
                            placeholder="Nome do Produto"
                            required
                            v-model="body.name">
                        </b-input>
                    </b-field>

                    <b-field label="Descrição">
                        <b-input
                            type="textarea"
                            placeholder="Descrição do Produto"
                            required
                            v-model="body.description">
                        </b-input>
                    </b-field>    

                    <b-field label="Preço">
                        <b-input
                            type="number"
                            placeholder="Preço Unitário do Produto"
                            required
                            v-model="body.price">
                        </b-input>
                    </b-field>  
                    
                    <b-field label="Quantidade">
                        <b-input
                            type="number"
                            placeholder="Quantidade total do produto"
                            required
                            v-model="body.quantity">
                        </b-input>
                    </b-field>
                    
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-primary" @click="addProduct">Salvar</button>
                </footer>
            </div>
        </b-modal>
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
                products: [],
                isComponentModalActive: false,
                body: {}
            }
        },
        components: {
            ProductItem
        },
        methods: {
            addProduct () {
                http.post(`establishments/${this.establishment.id}/products`, this.body)
                .then(response => {
                    window.location.reload()                    
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        mounted () {
            setTimeout(() => {
                http.get(`establishments/${this.establishment.id}/products`)
                .then(response => {
                    this.products = response.data.products
                })
            }, 1000)
        }
    }
</script>
