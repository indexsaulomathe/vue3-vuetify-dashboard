<template>
    <!-- Botão de Menu para Desktop -->
    <v-btn icon class="menu-icon-desktop" @click.stop="toggleDrawer()" v-if="!miniVariant">
        <v-icon>{{ drawer ? 'mdi-chevron-left' : 'mdi-chevron-right' }}</v-icon>
    </v-btn>

    <v-navigation-drawer app v-model="drawer">

        <!-- Logo e Título -->
        <v-list-item class="sidebar-header">
            <v-list-item-avatar>
                <v-img alt="Logo" contain></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title class="title">Meu App</v-list-item-title>
            </v-list-item-content>
            <!-- Ícone de menu para mobile -->
            <v-btn icon class="menu-icon" @click.stop="toggleDrawer()" v-if="miniVariant">
                <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
            </v-btn>
        </v-list-item>

        <!-- Links da barra lateral -->
        <v-list dense>
            <v-list-item link to="/">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Início</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/dashboard">
                <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link to="/profile">
                <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Perfil</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <!-- Adicione mais links conforme necessário -->
        </v-list>
    </v-navigation-drawer>


</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(true); // Controle direto do drawer
const miniVariant = ref(false);

// Função para alternar o estado do drawer
const toggleDrawer = () => {
    drawer.value = !drawer.value;
};

// Verifica o tamanho da tela para definir mini-variant
const checkScreenSize = () => {
    miniVariant.value = window.innerWidth <= 1024; // Define o tamanho para tablets
};

// Adiciona um listener para verificar alterações no tamanho da tela
window.addEventListener('resize', checkScreenSize);

// Chamada inicial para definir mini-variant
checkScreenSize();
</script>

<style scoped>
.sidebar-header {
    padding: 20px;
}

.title {
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
}

.menu-icon {
    margin-left: auto;
    margin-right: 10px;
}

.menu-icon-desktop {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 2010;
}

@media (max-width: 1024px) {
    .menu-icon {
        display: block;
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 2010;
    }

    .sidebar-header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
}
</style>
