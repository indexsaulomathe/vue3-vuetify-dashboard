<template>
    <v-container fluid class="authentication-layout" :style="backgroundStyle">
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6" lg="6">
                <slot></slot>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
    backgroundImage?: string;
}>();

const backgroundStyle = computed(() => ({
    backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : '',
    backgroundColor: props.backgroundImage ? '' : '#96989e',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));
</script>

<style scoped>
.authentication-layout {
    padding: 0;
}
</style>