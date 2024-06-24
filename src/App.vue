<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="48" height="48" />
    <h1><span style="color: #019BFC;">Seav</span>XR</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Courses</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  margin: 16px;
}

nav {
  display: flex;
  margin: 16px;
  gap: 16px;
}

nav a {
  color: #333;
}
</style>
