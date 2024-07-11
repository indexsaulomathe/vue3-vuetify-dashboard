<template>
    <v-btn :dark="selectedTheme === 'dark'" icon @click="toggleTheme()" class="theme-toggle-btn"
        :class="{ 'theme-toggle-btn-float': floating }">
        <v-icon>
            {{ selectedTheme === 'dark' ? 'mdi-moon-waning-crescent ' : 'mdi-white-balance-sunny' }}
        </v-icon>
    </v-btn>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useTheme } from 'vuetify';

const props = defineProps({
    floating: Boolean
});

const theme = useTheme();
const selectedTheme = ref(localStorage.getItem('selectedTheme') || 'light');

// Function to toggle the theme
const toggleTheme = () => {
    selectedTheme.value = selectedTheme.value === 'dark' ? 'light' : 'dark';
    theme.global.name.value = selectedTheme.value;
    localStorage.setItem('selectedTheme', selectedTheme.value);
};

// Apply the saved theme on component mount
onMounted(() => {
    theme.global.name.value = selectedTheme.value;
});

// Conditional classes for the floating button
const classes = computed(() => ({
    'theme-toggle-btn': !props.floating,
    'theme-toggle-btn-float': props.floating
}));

</script>

<style scoped>
.theme-toggle-btn {
    /* Default white background */
    padding: 0;
    /* Remove internal padding */
    transition: transform 0.3s, opacity 0.3s;
    /* Smooth transitions for transform and opacity */
}

.theme-toggle-btn-float {
    position: fixed;
    /* Fixed position for floating */
    top: 20px;
    /* Distance from the top of the page */
    right: 20px;
    /* Distance from the right edge of the page */
    z-index: 2000;
    /* High z-index to be above other elements */
}

.theme-toggle-btn:hover {
    transform: scale(1.1);
    /* Scale effect on hover */
    opacity: 1;
    /* Full opacity on hover */
}
</style>
