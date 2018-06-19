<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{item.id}}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                {{item.description}}
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'OrderItem',
        props: ['item']
    }
</script>
