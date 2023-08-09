<template>
  <div>
    <Navbar />
    <!-- <Login/> -->
    <!-- <RegPeopleBirja></RegPeopleBirja> -->
    <!-- <RegClient></RegClient>
     -->
     <Users></Users>
  </div>
</template>

<script>
import Login from './components/Registration/Login.vue';
import Navbar from './components/Navbar.vue';
import RegPeopleBirja from './components/Registration/RegPeopleBirja.vue'
import RegClient from './components/Registration/RegClient.vue'
import Users from './components/Administrator/Users.vue'
export default {
  components: {
    Login,
    Navbar,
    RegPeopleBirja,
    RegClient,
    Users
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