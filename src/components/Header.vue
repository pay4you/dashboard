<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://avatars1.githubusercontent.com/u/37130397?s=400&u=4c5f5703e092b65ce4e60b47fa5228111b11beb1&v=4" alt="Bulma: a modern CSS framework based on Flexbox">
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/documentation/overview/start/">
                    Docs
                </a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item" href="/documentation/overview/start/">
                        Overview
                    </a>
                    <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                        Modifiers
                    </a>
                </div>
            </div>
            <router-link :to="{ name: 'orders'}" class="navbar-item">Pedidos</router-link>
            <router-link :to="{ name: 'products'}" class="navbar-item">Produtos</router-link>
        </div>
    </nav>
</template>
