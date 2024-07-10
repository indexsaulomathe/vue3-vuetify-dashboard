<template>
    <div class="user-info-panel">
        <!-- Conteúdo do painel de informações do usuário -->
        <h2>Informações do Usuário</h2>
        <p>Nome: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <!-- Exemplo de uso de molecules dentro do organism -->
        <UserActions :actions="userActions" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import UserActions from '@/components/organisms/UserActions.vue';

const user = ref({
    name: 'John Doe',
    email: 'john.doe@example.com',
});

const userActions = [
    { label: 'Editar Perfil', icon: 'mdi-account-edit' },
    { label: 'Configurações', icon: 'mdi-settings' },
    // Outras ações do usuário
];
</script>

<style scoped>
.user-info-panel {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>