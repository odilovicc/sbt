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
  <!-- <WaitingRequestsView></WaitingRequestsView> -->
  <!-- <Protocols></Protocols> -->
  <!-- <viewExchangesContent></viewExchangesContent> -->
  <!-- <Products></Products> -->
  <!-- <forPayment></forPayment> -->
  <!-- <bkAssignment></bkAssignment> -->
  <!-- <listTraders></listTraders> -->
  <!-- <requestList></requestList> -->
  <!-- <buliten></buliten> -->
  <!-- <bulitenView></bulitenView> -->
  <!-- <auctions></auctions> -->
  <!-- <auctionView></auctionView> -->
  <!-- <dogovorSale></dogovorSale> -->
  <!-- <dogovorSaleView></dogovorSaleView> -->
  <!-- <listBrokers></listBrokers> -->

  <!-- <accounts></accounts> -->
  <!-- <listPayments></listPayments> -->

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
import WaitingRequestsView from './components/Moderator/waitingRequestsView.vue';
import Protocols from './components/Moderator/Protocols.vue';
import viewExchangesContent from './components/Moderator/viewExchangesContent.vue'
import Products from './components/Moderator/Products.vue';
import forPayment from './components/Moderator/forPayment.vue';
import bkAssignment from './components/Broker/bkAssignment.vue';
import listTraders from './components/Broker/listTraders.vue';
import requestList from './components/Broker/requestList.vue';
import buliten from './components/Broker/buliten.vue';
import bulitenView from './components/Broker/bulitenView.vue';
import auctions from './components/Broker/auctions.vue';
import auctionView from './components/Broker/auctionView.vue'
import dogovorSale from './components/Trader/dogovorSale.vue'
import dogovorSaleView from './components/Trader/dogovorSaleView.vue';
import listBrokers from './components/Client/listBrokers.vue'

import accounts from './components/Client/Счета на оплату/accounts.vue'
import listPayments from './components/Client/Список оплат/listPayments.vue'
import registerTrades from './components/Client/Реестр сделок/registerTrades.vue'


export default {
  components: {
    Newreg,
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
    WaitingRequestsView,
    Protocols,
    viewExchangesContent,
    Products,
    forPayment,
    bkAssignment,
    listTraders,
    requestList,
    buliten,
    bulitenView,
    auctions,
    auctionView,
    dogovorSale,
    dogovorSaleView,
    listBrokers,
    accounts,
    listPayments,
    registerTrades
  }
}
</script>

<style>
@import url('./assets/main.css');
</style>