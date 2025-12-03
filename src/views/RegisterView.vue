<template>
    <div class="flex h-screen">
        <div class=" w-full py-20">
            <div class="pb-10 flex flex-col items-center">
                <div>
                    <!-- <img src="@/assets/img/shalom.png" alt="Shalom" class="w-40 h-40" /> -->

                    <div class="text-4xl font-bold">Shalom</div>
                </div>

                <h1 class="text-3xl font-bold">
                    Bem-vindo!
                </h1>
            </div>

            <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
                <div class="flex flex-col gap-1">
                    <label for="">Nome Completo</label>
                    <InputText class="bg-white" name="username" type="text" placeholder="Nome Completo" />
                    <!-- <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message> -->
                </div>
                <div class="flex flex-col gap-1">
                    <label for="">E-mail</label>
                    <InputText class="bg-white" name="username" type="text" placeholder="E-mail" />
                    <!-- <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message> -->
                </div>
                <div class="flex flex-col gap-1">
                    <label for="">Telefone</label>
                    <InputText class="bg-white" name="username" type="text" placeholder="Telefone" />
                    <!-- <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message> -->
                </div>

                <div class="flex flex-col gap-1">
                    <label for="">Senha</label>
                    <Password fluid style="width: 100% !important; " name="email" type="password" placeholder="Senha" :feedback="false" />
                    <!-- <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message> -->
                </div>

                <div class="flex flex-col gap-1">
                    <label for="">Confirmar Senha</label>
                    <Password fluid style="width: 100% !important; " name="email" type="password" placeholder="Confirmar Senha" :feedback="false" />
                    <!-- <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message> -->
                </div>

                <Button style="margin-top: 10px !important; " type="submit" severity="primary" label="Cadastrar" />
            </Form>

            <div class="flex justify-center items-center pt-10 gap-2">
                <RouterLink to="/login" class="text-gray-500 cursor-pointer">Já tem uma conta? Faça login</RouterLink>
                <span>|</span>
                <RouterLink to="/login" class="text-primary-500 cursor-pointer">Voltar para login</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>

