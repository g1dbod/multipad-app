<script setup lang="ts">
import TopMenu from './components/TopMenu.vue';
import FileManager from './components/FileManager.vue';
import CodePanel from './components/CodePanel.vue';
import PropertyPanel from './components/PropertyPanel.vue';
import BottomMenu from './components/BottomMenu.vue';
</script>

<template>
  <div class="app-container">
    <div class="top-menu">
      <TopMenu />
    </div>
    <div class="container">
      <FileManager />
      <CodePanel />
      <PropertyPanel />
    </div>
    <div class="bottom-menu">
      <BottomMenu />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.top-menu {
  height: 25px;
  font-size: 0.8rem;
}

.container {
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 0;
}

.bottom-menu {
  height: 25px;
  font-size: 0.8rem;
}

.code-panel {
  flex-grow: 1;
}
</style>
