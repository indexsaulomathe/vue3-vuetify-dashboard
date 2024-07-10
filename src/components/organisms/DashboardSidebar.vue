<template>
    <v-navigation-drawer app permanent>
        <v-list>
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
import { defineComponent } from 'vue';
</script>

<style scoped>
/* Estilos específicos para a barra lateral da dashboard */
</style>