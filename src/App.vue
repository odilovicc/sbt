<template>
  <Navbar />
  <!-- <Login/> -->
  <!-- <RegPeopleBirja></RegPeopleBirja> -->
  <!-- <RegClient></RegClient> -->
  <!-- <Users></Users> -->
  <!-- <Roles></Roles> -->
  <!-- <Access></Access> -->
  <!-- <Logs></Logs> -->
  <!-- <Tarif></Tarif> -->
  <!-- <ExchangesTeam></ExchangesTeam> -->
  <!-- <Clients></Clients> -->
  <!-- <Requests></Requests> -->
  <!-- <WaitingRequests></WaitingRequests> -->
  <!-- <Protocols></Protocols> -->
  <!-- <viewExchangesContent></viewExchangesContent> -->
  <!-- <Products></Products> -->
  <!-- <forPayment></forPayment> -->
  <!-- <bkAssignment></bkAssignment> -->
  <!-- <listTraders></listTraders> -->
  <requestList></requestList>
</template>

<script>
import Login from './components/Registration/Login.vue';
import Navbar from './components/Navbar.vue';
import RegPeopleBirja from './components/Registration/RegPeopleBirja.vue'
import RegClient from './components/Registration/RegClient.vue'
import Users from './components/Administrator/Users.vue'
import Roles from './components/Administrator/Roles.vue'
import Access from './components/Administrator/Access.vue';
import Logs from './components/Administrator/Logs.vue';
import Tarif from './components/Administrator/Tarif.vue';
import ExchangesTeam from './components/Moderator/ExchangesTeam.vue'
import Clients from './components/Moderator/Clients.vue';
import Requests from './components/Moderator/Requests.vue';
import WaitingRequests from './components/Moderator/WaitingRequests.vue';
import Protocols from './components/Moderator/Protocols.vue';
import viewExchangesContent from './components/Moderator/viewExchangesContent.vue'
import Products from './components/Moderator/Products.vue';
import forPayment from './components/Moderator/forPayment.vue';
import bkAssignment from './components/Broker/bkAssignment.vue';
import listTraders from './components/Broker/listTraders.vue';
import requestList from './components/Broker/requestList.vue';
export default {
  components: {
    Login,
    Navbar,
    RegPeopleBirja,
    RegClient,
    Users,
    Roles,
    Access,
    Logs,
    Tarif,
    ExchangesTeam,
    Clients,
    Requests,
    WaitingRequests,
    Protocols,
    viewExchangesContent,
    Products,
    forPayment,
    bkAssignment,
    listTraders,
    requestList
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

.appear {
  animation-duration: 0.75s;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-name: animate-pop;
  animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  animation-fill-mode: backwards;
}

.animate.pop {
  animation-name: animate-pop;
}

@keyframes animate-pop {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

body {
  /* background: #e3eff6; */
}

@import url('./assets/main.css');
</style>