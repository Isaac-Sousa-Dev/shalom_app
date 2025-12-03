<template>
  <main>
    <header class="flex justify-between items-center pt-10 pb-3">
      <div>
        <div class="text-2xl font-bold">
          Olá, Fulano!
        </div>
        <div>
          Palavra do dia:
          <span class="font-bold" style="font-weight: 700;">Provérbios 16:3</span>
        </div>
      </div>
      <div>
        <Avatar label="IS" class="mr-2" size="xlarge" shape="circle" />
      </div>
    </header>

    <div class="font-bold pt-5 border border-gray-200 rounded-xl p-4">
      "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos"
    </div>

    <div class="container flex flex-col gap-10 pt-5">
      <section>
        <div style="font-weight: 700;">
          Escola de Discípulos
        </div>
        <div style="margin-top: 10px;">
          <Card @click="navigateTo('/student/school-of-disciples')">
            <template #content>
              <div>
                <h3 style="font-weight: 700; font-style: italic;">O começo...</h3>
              </div>
              <div style="margin-top: 10px;">
                <ProgressBar :value="100"></ProgressBar>
              </div>
            </template>
          </Card>
        </div>
      </section>
  
      <section>
        <div style="font-weight: 700;">
          Escola de Líderes
        </div>
        <div style="margin-top: 10px; display: flex; gap: 10px; flex-direction: column;">
          <Card>
            <template #content>
              <div>
                <h3 style="font-weight: 700; font-style: italic;">Nível 1</h3>
              </div>
              <div style="margin-top: 10px;">
                <ProgressBar :value="100"></ProgressBar>
              </div>
            </template>
          </Card>
          <Card>
            <template #content>
              <div>
                <h3 style="font-weight: 700; font-style: italic;">Nível 2</h3>
              </div>
              <div style="margin-top: 10px;">
                <ProgressBar :value="60"></ProgressBar>
              </div>
            </template>
          </Card>
          <Card>
            <template #content>
              <div>
                <h3 style="font-weight: 700; font-style: italic;">Nível 3</h3>
              </div>
              <div style="margin-top: 10px;">
                <ProgressBar :value="0"></ProgressBar>
              </div>
            </template>
          </Card>
        </div>
      </section>
    </div>

  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
}
</script>
