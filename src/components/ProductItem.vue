<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{item.name}}
            </p>
            <p class="card-header-icon" aria-label="more options">
               R$ {{item.price/100}}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                {{item.description}}
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'ProductItem',
        props: ['item']
    }
</script>
