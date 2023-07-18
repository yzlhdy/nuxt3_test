<template>
    <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides" inline-theme-disabled>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </NConfigProvider>
</template>
  
<script setup lang="ts">
import { zhCN, dateZhCN, NConfigProvider, GlobalThemeOverrides } from "naive-ui";

const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: "#113c82",
        primaryColorHover: "#113c82",
        primaryColorPressed: "#113c82",
        primaryColorSuppl: "#113c82",
    },
    Button: {
        textColor: "#113c82",
        border: "1px solid #113c82",
    },
};

</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>