import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(true);
    const user = ref(null);
    const token = ref(null);
    const expiresAt = ref(null);

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post('/api/login', { email, password });
        } catch (error) {
            console.error(error);
        }
    }

    const logout = () => {
        isAuthenticated.value = false;
    }


    const refreshToken = () => {
        console.log('refreshToken');
    }

    const checkAuth = () => {
        if (token.value && expiresAt.value && Date.now() < expiresAt.value) {
            isAuthenticated.value = true;
        } else {
            isAuthenticated.value = false;
        }
    }


    const getUser = async () => {
        console.log('getUser');
    }

    return {
        isAuthenticated, user, token, expiresAt,
        login, logout, refreshToken, checkAuth, getUser
    };
})
