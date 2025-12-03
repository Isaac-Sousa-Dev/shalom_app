<template>
    <header
        style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            height: 50px;
            display: flex;
            align-items: center;
            padding: 0 16px;
            background-color: black;
            justify-content: space-between;
        "
    >
        <div
            v-if="showBackButton"
            @click="goBack"
            style="
                font-size: 17px;
                cursor: pointer;
                color: white;
            "
        >
            Voltar
        </div>

        <div style="display: flex; align-items: center; gap: 10px;">
            <div style="display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-end; line-height: 1;">
                <div style="font-size: 14px; color: white; font-weight: 700;">Fulano</div>
                <span style="font-size: 12px; color: white;">email@email.com</span>
            </div>
            <Avatar label="IS" class="mr-2" size="small" shape="circle" />
        </div>
    </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const props = withDefaults(defineProps<{
    showBackButton?: boolean;
}>(), {
    showBackButton: false
});

const goBack = () => {
    router.back();
};
</script>