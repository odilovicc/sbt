<template>
  <div>
    <Navbar/>
    <Login/>
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Login,
    Navbar
  }
}
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  @import url('https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic');
  * {
    font-family: "Poppins", sans-serif;
  }
</style>