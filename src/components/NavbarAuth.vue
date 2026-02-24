<script setup lang="ts">
import { useRouter } from 'vue-router';
import ProfileNavbar from '@/components/ProfileNavbar.vue';

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

        <ProfileNavbar />
    </header>
</template>


<style>

</style>