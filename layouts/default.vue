<template>
    <div class="flex flex-col h-screen">
        <header class=" bg-purple-400 p-4 flex justify-between items-center">
            <h2>Header</h2>
            <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                <n-button>Language</n-button>
            </n-dropdown>
        </header>
        <!-- <pre>{{ locales }}</pre> -->
        <div class="flex-1">
            <slot />
        </div>
        <footer class=" p-5 bg-blue-300">footer</footer>
    </div>
</template>


<script lang="ts" setup>
import { NDropdown, NButton } from 'naive-ui'
import { Icon } from '#components'
const colorMode = useColorMode()
const { locales } = useI18n()
const renderIcon = (icon: string) => {
    return () => {
        return h(Icon, {
            name: icon,
            size: "25",
        }, {
            default: () => h(icon)
        })
    }
}
const options = [
    {
        label: 'System',
        key: 'system',
        icon: renderIcon("flagpack:am")
    },
    {
        label: 'Light',
        key: "light",
        icon: renderIcon('flagpack:ar')
    },
    {
        label: 'Dark',
        key: 'dark',
        icon: renderIcon('flagpack:lv')
    },
    {
        label: 'Sepia',
        key: 'sepia',
        icon: renderIcon('flagpack:az')
    }
]

const handleSelect = (key: string) => {
    colorMode.preference = key
}
</script>

<style scoped></style>
