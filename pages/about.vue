<template>
    <div>
        <h1>Hello About</h1>
        <NuxtLink to="/">Home page</NuxtLink>
        <NButton class="uppercase font-bold font-medium" @click="handleMessage" type="primary">
            Button
        </NButton>
        <div class=" max-w-[1200px] mx-auto ">

            <div class="grid grid-rows-4 grid-flow-col gap-2 justify-items-center h-300px">
                <div class="col-span-2 row-span-2 bg-blue-400 w-full">02</div>
                <div class="row-span-2 col-span-2 bg-red-400 w-full">03</div>
                <div class="row-span-4 bg-purple-400 w-full rounded-lg">01</div>
                <div class="col-span-2 row-span-2 bg-blue-400 w-full">02</div>
                <div class="row-span-2 col-span-2 bg-red-400 w-full">03</div>
            </div>
        </div>


        <!-- card -->
        <div class="flex justify-center items-center">
            <div class="container">
                <div class="card">
                    <h1>Who's</h1>
                    <div class="information" id="BulbasaurInfo">
                        <h2 id="BulbasaurName">Bulbasaur</h2>
                        <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the
                            sun's rays, the seed grows progressively larger.</p>
                        <p>Type: <button id="grass">Grass</button> <button id=poison>Poison</button></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { NButton, ButtonProps } from 'naive-ui'
const { $gsap: gsap } = useNuxtApp()
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

onMounted(() => {
    gsap.set(".information", { yPercent: 100 });
    gsap.utils.toArray(".container").forEach((container: any) => {
        let info = container.querySelector(".information"),
            silhouette = container.querySelector(".silhouette"),
            tl = gsap.timeline({ paused: true });

        tl.to(info, { yPercent: 0 })
            .to(silhouette, { opacity: 0 }, 0);

        container.addEventListener("mouseenter", () => tl.play());
        container.addEventListener("mouseleave", () => tl.reverse());
    });
})


</script>

<style scoped>
.container {
    width: 250px;
    height: 500px;
    float: left;
    margin: 0 10px;
}

.silhouette {
    position: relative;
    width: 150px;
    height: 150px;
    background-size: cover;
    margin: auto;
}



.card {
    background-color: white;
    height: calc(100% - 150px);
    align-self: center;
    border-radius: 10px;
    text-align: center;
    padding-top: 40%;
    box-shadow: 0px 0px 12px -1px black;
    margin: auto;
    overflow: hidden;
    position: relative;
}

h1 {
    font-family: Bebas Neue;
    letter-spacing: 2px;
    font-size: 40pt;
}

#Bulbasaur {
    background-image: url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png);
}

.information {
    background-color: white;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    margin: auto;
    text-align: center;
}

.information p {
    text-align: justify;
}

#BulbasaurInfo {
    border-top: 10px solid #9Dcb58;
    border-bottom: 10px solid #9Dcb58;
}
</style>
