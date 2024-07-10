<template>
  <v-app>
    <v-main>
      <ToggleThemeButton />
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ToggleThemeButton from '@/components/atoms/ToggleThemeButton.vue';
</script>