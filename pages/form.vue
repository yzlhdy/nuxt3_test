<template>
    <div class="flex justify-center items-center h-full">
        <div class="w-400px h-400px p-4 bg-blue-400 rounded ">
            <form @submit.prevent="onSubmit">
                <FormFieldText name="username" type="email" label="Username"></FormFieldText>
                <FormFieldText name="password" type="password" label="Password"></FormFieldText>
                <n-button class="mt-4" type="primary" block :disabled="!meta.valid">Submit</n-button>
            </form>
        </div>

    </div>
</template>
<script lang="ts" setup>

import { NButton } from 'naive-ui';

import * as yup from 'yup'


const schema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters").max(20, "Password must be less than 20 characters"),
})

interface UserCreate {
    username: string
    password: string
}

const { handleReset, handleSubmit, meta, values } = useForm<UserCreate>({
    validationSchema: schema
})
const onSubmit = handleSubmit((values) => {
    console.log(values)
    handleReset()
})
</script>

<style scoped></style>
