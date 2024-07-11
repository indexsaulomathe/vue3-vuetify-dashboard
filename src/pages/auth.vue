<template>
    <AuthenticationLayout>
        <v-container fluid>
            <ToggleThemeButton :floating="true" />
            <component :is="currentComponent" @show-password-reset="showPasswordResetForm"
                @back-to-login="showLoginForm" />
        </v-container>
    </AuthenticationLayout>
</template>

<script setup>
import { ref, defineAsyncComponent, defineEmits } from 'vue';
import AuthenticationLayout from '@/components/templates/AuthenticationLayout.vue';
import LoginForm from '@/components/molecules/LoginForm.vue';
import PasswordResetForm from '@/components/molecules/PasswordResetForm.vue';
import ToggleThemeButton from '@/components/atoms/ToggleThemeButton.vue';


// Declarando os eventos emitidos usando defineEmits
const emit = defineEmits(['show-password-reset', 'back-to-login']);

// Estado para controlar o componente atual exibido
const currentComponent = ref(defineAsyncComponent(() => import('@/components/molecules/LoginForm.vue')));

// Função para mostrar o componente de reset de senha
const showPasswordResetForm = () => {
    currentComponent.value = defineAsyncComponent(() => import('@/components/molecules/PasswordResetForm.vue'));
};

// Função para mostrar o componente de login
const showLoginForm = () => {
    currentComponent.value = defineAsyncComponent(() => import('@/components/molecules/LoginForm.vue'));
};

</script>
