
<template>
  <div class="h-screen flex justify-center items-center bg">
    <Card class="w-full lg:w-1/5 mx-auto my-auto bg-transparent">
      <template #content>
        <div class="mx-auto text-center">
          <img src="../assets/logo-letter-13.png" class="mx-auto my-4" alt="">
          <h1 class="text-2xl font-bold mb-4">Доступ к СЭБТ</h1>
          <h1 class="">Введите свои данные для входа в систему:</h1>
          <div class="py-5 mx-auto">
            <InputText type="text" v-model="value" placeholder="Логин"
              class="text-center mb-4 rounded-full w-full border-none active:outline-none" />
            <InputText type="password" v-model="value" placeholder="Пароль"
              class="text-center rounded-full w-full border-none active:outline-none" />
            <Button label="Вход в систему" severity="primary" class="px-10 rounded-full color-white mt-8" />
            <div class="py-5">
              <a href="#"
                class="text-white opacity-30 font-weight-normal transition duration-200 hover:opacity-50 my-4 block">Регистрация
                член биржи</a>
              <a href="#"
                class="text-white opacity-30 font-weight-normal transition duration-200 hover:opacity-50 block">Регистрация
                клиент</a>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script setup>
</script>
 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-button {
  color: #fff !important;
}

.bg {
  background: url("../assets/bg-2.jpg");
}
</style>