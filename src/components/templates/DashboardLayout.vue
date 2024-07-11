<template>
  <v-container fluid class="dashboard-layout">
    <v-row class="dashboard-content">
      <v-col cols="12">
        <DashboardHeader />
      </v-col>
      <v-col cols="12" md="3">
        <DashboardSidebar />
      </v-col>

      <v-col cols="12" md="9">

        <router-view />

      </v-col>
    </v-row>

    <DashboardFooter />
  </v-container>
</template>

<script setup lang="ts">
import DashboardHeader from '@/components/organisms/DashboardHeader.vue';
import DashboardSidebar from '@/components/organisms/DashboardSidebar.vue';
import DashboardFooter from '@/components/organisms/DashboardFooter.vue';
</script>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
}

.main-content {
  padding: 20px;
  background-color: #ffffff;
  /* Fundo branco para o conteúdo principal */
  border-radius: 8px;
  /* Borda arredondada */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  /* Sombra suave */
}

@media (max-width: 768px) {
  .main-content {
    padding: 10px;
    /* Espaçamento menor em dispositivos menores */
  }
}
</style>
