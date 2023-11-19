<template>
    <nav class="navbar">
        <div class="logo">Todo App</div>
        <div class="nav-links">
            <router-link to="/" class="router-link">Home</router-link>
            <router-link to="/about" class="router-link">About</router-link>
        </div>
    </nav>
</template>
<script setup>

</script>

<style scoped>
 .navbar {
   background-color: #2c3e50;
   padding: 15px;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
  .logo {
   color: #ecf0f1;
   font-size: 1.5rem;
 }
  .nav-links {
   display: flex;
 }
  .router-link {
   color: #ecf0f1;
   text-decoration: none;
   margin-left: 20px;
   font-weight: bold;
   font-size: larger;
   transition: color 0.3s ease-in-out;
 }
  .router-link:hover {
   color: #3498db;
 }

</style>