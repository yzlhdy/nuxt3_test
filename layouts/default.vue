<template>
    <div class="flex flex-col h-screen">
        <header class=" bg-purple-400 p-4 flex justify-between items-center">
            header

            <select v-model="$colorMode.preference">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="sepia">Sepia</option>
            </select>

        </header>
        <div class="flex-1">
            <slot />
        </div>
        <footer class=" p-5 bg-blue-300">footer</footer>
    </div>
</template>



<script lang="ts" setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
</script>

<style scoped></style>
