<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu">
            <router-link :to="{ name: 'establishments'}" class="navbar-item">Estabelecimentos</router-link>
            <router-link :to="{ name: 'orders'}" class="navbar-item">Pedidos</router-link>
            <router-link :to="{ name: 'products'}" class="navbar-item">Produtos</router-link>
        </div>
    </nav>
</template>
