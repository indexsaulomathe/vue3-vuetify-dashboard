<template>
  <dashboard-layout>
    <!-- Conteúdo da página da dashboard -->
    <h1>Bem-vindo à Dashboard de Gestão</h1>
    <div class="dashboard-section">
      <!-- Exemplo de organism dentro da página -->
      <UserInfoPanel />
    </div>
  </dashboard-layout>
</template>

<script setup lang="ts">
import DashboardLayout from '@/components/templates/DashboardLayout.vue';
import UserInfoPanel from '@/components/organisms/UserInfoPanel.vue';
</script>

<style scoped>
.dashboard-section {
  margin-top: 20px;
}
</style>