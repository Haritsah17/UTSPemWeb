<template>
    <div id="app">
      <!-- Navbar component -->
      <Navbar />
      <!-- Router view for rendering page components -->
      <router-view />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/NavBar.vue'; // Import the navbar component
  
  export default {
    components: {
      Navbar
    }
  };
  </script>
  
  <style>
  /* Add your global styles here */
  </style>