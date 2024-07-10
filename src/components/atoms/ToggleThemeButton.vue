<template>
    <v-btn :dark="selectedTheme === 'dark'" icon @click="toggleTheme()" class="theme-toggle-btn">
        <v-icon>{{ selectedTheme === 'dark' ? 'mdi-moon-waning-crescent ' : 'mdi-white-balance-sunny' }}</v-icon>
    </v-btn>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const selectedTheme = ref('light');

const toggleTheme = () => {
    selectedTheme.value = selectedTheme.value === 'dark' ? 'light' : 'dark';
    theme.global.name.value = selectedTheme.value; // Aplica o tema selecionado
};


</script>

<style scoped>
.theme-toggle-btn {
    background-color: opacity(white, 0.7);
    /* Fundo branco padrão */
    padding: 0;
    /* Remove o espaçamento interno */
    transition: transform 0.3s, opacity 0.3s;
    /* Transições suaves para transformação e opacidade */
    position: fixed;
    /* Posição fixa para flutuar */
    top: 20px;
    /* Distância do topo da página */
    right: 20px;
    /* Distância da borda direita da página */
    z-index: 1000;
    /* Z-index alto para estar acima de outros elementos */
}

.theme-toggle-btn:hover {
    transform: scale(1.1);
    /* Efeito de escala ao passar o mouse */
    opacity: 1;
    /* Opacidade total ao passar o mouse */
}
</style>