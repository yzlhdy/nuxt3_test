<template>
    <div>
        <h1 class="title">{{ $t('title') }}</h1>
        <NuxtLink to="/about">About page</NuxtLink>
        <NuxtLink to="/form">Vee Form</NuxtLink>
        <Icon name="ph:activity-bold" />

        <ul class="grid grid-cols-7 gap-3">
            <li v-for="item in resultData" :key="item.id"
                class="flex flex-col justify-center items-center p-3 bg-light-500 rounded-lg  cursor-pointer">
                <nuxt-img :src="item.image" format="webp" sizes="sm:100% md:50vw lg:100px" fit="contain" preload
                    loading="lazy" width="100" height="100" />
                <p>{{ item.title }}</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
const resultData = ref<any[]>([])
const res = await useFetch('https://fakestoreapi.com/products')
resultData.value = res.data.value as any

const { $gsap: gsap } = useNuxtApp()

onMounted(() => {
    gsap.from('.title', {
        y: 100,
        duration: 0.2,
        opacity: 0,
        repeat: -1,
        yoyo: true
    })
})






</script>

<style scoped></style>
