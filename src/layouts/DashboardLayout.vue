<template>
  <div class="dashboard-layout">
    <DashboardHeader />
    <div class="dashboard-content">
      <DashboardSidebar />
      <div class="main-content">
        <router-view />
      </div>
    </div>
    <DashboardFooter />
  </div>
</template>

<script lang="ts" setup>
import DashboardHeader from '@/components/organisms/DashboardHeader.vue';
import DashboardSidebar from '@/components/organisms/DashboardSidebar.vue';
import DashboardFooter from '@/components/organisms/DashboardFooter.vue';
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dashboard-content {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>