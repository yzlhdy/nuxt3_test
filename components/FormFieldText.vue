<template>
    <div :class="meta" class="flex flex-col">
        <label :for="name" class="font-bold my-2">{{ name }}</label>
        <input :type="type" v-model="value" :name="name" :id="name" class="border rounded p-2">
        <p v-if="errorMessage" class=" text-red-400">{{ errorMessage }}</p>
    </div>
</template>
<script lang="ts" setup>
import { useField } from 'vee-validate'
const props = defineProps<{ name: string, label: string, type: string }>()

const { value, meta, errorMessage } = useField(props.name)
</script>

<style scoped></style>
