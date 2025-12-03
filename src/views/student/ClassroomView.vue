<template>
    <main>
        

        <header class="flex justify-between items-center pt-8 pb-3">
            <div>
                <div class="text-4xl font-bold">
                    Aula 1
                </div>
            </div>
        </header>

        <div class="">
            <div style="font-weight: 700; font-size: 20px;">
                Palavra Chave
            </div>
            <div>
                <div style="display: flex; gap: 5px;">
                    <InputText fluid v-model="palavraChave" type="text" placeholder="Palavra Chave" />
                    <Button style="padding: 0px 30px;">Enviar</Button>
                </div>
                <span  style="font-size: 12px;">Informe a palavra chave para confirmar sua presença!</span>
            </div>
        </div>

        <div class="container flex flex-col gap-8 pt-5">
            <section>
                <div style="font-weight: 700; font-size: 20px;">
                    Descrição
                </div>
                <div style="margin-top: 10px;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laborum et sapiente excepturi, maxime amet praesentium, doloremque dignissimos quae rem provident rerum repellendus, fugiat id magni! Facilis reiciendis repellat cum.
                </div>
            </section>

            <section>
                <div style="font-weight: 700; font-size: 20px;">
                    PDFs
                </div>
                <div style="margin-top: 10px;" class="gap-4">
                    <Card style="height: 100px;">
                        <template #content>
                            <div>
                                <h3 style="font-weight: 700; font-style: italic;">PDF - Aula 1 </h3>
                            </div>
                            <div style="margin-top: 10px;">
                                Renovando o espírito
                            </div>
                        </template>
                    </Card>
                </div>
            </section>
        </div>

    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
    router.back();
}

const palavraChave = ref('teste');

</script>

<style scoped>
.avaliacoes-scroll {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding: 5px 0;
    scroll-behavior: smooth;
    width: 100%;
    /* deixa claro que pode rolar */
    -webkit-overflow-scrolling: touch;
}

.avaliacoes-scroll::-webkit-scrollbar {
    height: 2px;
}

.avaliacoes-scroll::-webkit-scrollbar-thumb {
    background: #353434;
    border-radius: 4px;
}

.avaliacao-card {
    flex: 0 0 auto;
    min-width: 220px;
    padding: 7px 15px;
    border: 1px solid #34d399;
    border-radius: 10px;
    font-weight: 600;
    text-align: center;
}
</style>