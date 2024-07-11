<template>
    <v-app-bar app color="primary">
        <v-toolbar-title>Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- Botão de alternância de tema -->
        <ToggleThemeButton class="d-none d-lg-flex" />

        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script setup>
import { defineComponent } from 'vue';
import ToggleThemeButton from '@/components/atoms/ToggleThemeButton.vue';

</script>

<style scoped>
/* Estilos específicos para o cabeçalho da dashboard podem ser adicionados aqui */
</style>