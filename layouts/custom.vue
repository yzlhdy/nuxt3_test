<template>
    <div class="h-screen flex flex-col bg-light-300">
        <header class=" bg-red-400 p-4">
            Custom
        </header>
        <div class="flex-1 ">
            <slot></slot>
        </div>
        <footer class="p-5 bg-yellow-300">
            footer
        </footer>
    </div>
</template>
<script lang="ts" setup>
</script>

<style scoped></style>
