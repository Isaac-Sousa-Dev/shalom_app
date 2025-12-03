<template>
    <div class="flex h-screen">
        <div class=" w-full py-44">
            <div class="pb-10 flex flex-col items-center">
                <div>
                    <!-- <img src="@/assets/img/shalom.png" alt="Shalom" class="w-40 h-40" /> -->

                    <div class="text-4xl font-bold">Shalom</div>
                </div>

                <h1 class="text-3xl font-bold">
                    Faça login!
                </h1>
            </div>

            <form
                @submit="onFormSubmit" 
                class="flex justify-center flex-col gap-4"
            >
                <div class="flex flex-col gap-1">
                    <label for="">E-mail</label>
                    <InputText class="bg-white" v-model="email" type="text" placeholder="E-mail" />
                    <!-- <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message> -->
                </div>
                <div class="flex flex-col gap-1">
                    <label for="">Senha</label>
                    <Password fluid style="width: 100% !important; " v-model="password" type="password" placeholder="Senha" :feedback="false" />
                    <!-- <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message> -->
                </div>

                <Button style="margin-top: 10px !important; " type="submit" severity="primary" label="Entrar" />
            </form>

            <div class="flex justify-center items-center pt-10 gap-2">
                <routeLink to="/forgot-password" class="text-gray-500 cursor-pointer">Esqueceu sua senha?</routeLink>
                <span>|</span>
                <RouterLink to="/register" class="text-primary-500 cursor-pointer">Criar conta</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const email = ref('');
const password = ref('');

const onFormSubmit = () => {
    console.log(email.value, password.value);
    router.push('/home');
}

</script>

<style scoped>

</style>

