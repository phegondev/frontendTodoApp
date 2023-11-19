<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from './components/Navbar.vue';
import {provideSharedData} from './sharedData';
provideSharedData();
</script>

<style scoped>
</style>
