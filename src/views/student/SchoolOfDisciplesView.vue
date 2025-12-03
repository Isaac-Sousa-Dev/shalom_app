<template>
    <main>
      <header class="flex justify-between items-center pt-10 pb-3">
        <div>
          <div class="text-4xl font-bold">
            O começo...
          </div>
        </div>
      </header>
  
      <div class="">
        <div style="font-weight: 700; font-size: 20px;">
            Avaliações
        </div>
        <div class="avaliacoes-scroll">
            <div class="avaliacao-card">Prova 1</div>
            <div class="avaliacao-card">Prova 2</div>
            <div class="avaliacao-card">Prova 3</div>
        </div>
      </div>
  
      <div class="container flex flex-col gap-10 pt-5">
        <section>
          <div style="font-weight: 700; font-size: 20px;">
            Conteúdo
          </div>
          <div style="margin-top: 10px;" class="grid grid-cols-2 gap-4">
            <Card style="height: 130px;">
              <template #content>
                <div>
                  <h3 style="font-weight: 700; font-style: italic;">Aula 1</h3>
                </div>
                <div style="margin-top: 10px;">
                    Renovando o espírito
                </div>
              </template>
            </Card>
            <Card style="height: 130px;">
              <template #content>
                <div>
                  <h3 style="font-weight: 700; font-style: italic;">Aula 2</h3>
                </div>
                <div style="margin-top: 10px;">
                    Renovando o espírito
                </div>
              </template>
            </Card>
            <Card style="height: 130px;">
              <template #content>
                <div>
                  <h3 style="font-weight: 700; font-style: italic;">Aula 3</h3>
                </div>
                <div style="margin-top: 10px;">
                    Renovando o espírito
                </div>
              </template>
            </Card>
            <Card style="height: 130px;">
              <template #content>
                <div>
                  <h3 style="font-weight: 700; font-style: italic;">Aula 4</h3>
                </div>
                <div style="margin-top: 10px;">
                    Renovando o espírito
                </div>
              </template>
            </Card>
            <Card style="height: 130px;">
              <template #content>
                <div>
                  <h3 style="font-weight: 700; font-style: italic;">Aula 5</h3>
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