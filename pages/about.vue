<template>
    <div>
        <h1>Hello About</h1>
        <NuxtLink to="/">Home page</NuxtLink>
        <NButton class="uppercase font-bold font-medium" @click="handleMessage" type="primary"
            :theme-overrides="buttonThemeOverrides">
            Button
        </NButton>
    </div>
</template>
<script lang="ts" setup>
import { NButton, ButtonProps } from 'naive-ui'
type ButtonThemeOverrides = NonNullable<ButtonProps['themeOverrides']>
const buttonThemeOverrides: ButtonThemeOverrides = {
    textColor: 'rgba(24, 127, 231, 1)',
    colorPrimary: 'red',
    colorHoverPrimary: "red",
    colorFocus: 'red',
}
useHead({
    title: 'My App',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})

useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

definePageMeta({
    layout: "custom",
});

const handleMessage = () => {
    console.log("This is a normal message");

}
</script>

<style scoped></style>
