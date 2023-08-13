
<template>
  <div class="surface-card p-8 mx-auto shadow-2 my-10 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <img src="../../assets/logo-letter-13.png" alt="Image" height="50" class="mx-auto my-5">
      <div class="text-900 text-3xl font-medium mb-3">Доступ к ЭСТБ</div>
      <span class="text-600 font-medium line-height-3">Введите свои данные для входа в систему:</span>
    </div>

    <div>
      <label for="email1" class="block text-900 font-medium mb-2">Логин</label>
      <InputText id="email1" type="text" class="w-full mb-3" />

      <label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
      <InputText id="password1" type="password" class="w-full mb-3" />

      <div class="flex align-items-center justify-content-between mb-6">
        <a class="font-medium no-underline  text-blue-500 text-right cursor-pointer">Регистрация член биржи</a>
        <a class="font-medium no-underline  text-blue-500 text-right cursor-pointer">Регистрация клиент</a>
      </div>

      <Button label="Sign In" icon="pi pi-user" class="w-full" severity="info"></Button>
    </div>
  </div>
</template>
<script setup>
</script>
 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background: url("../../assets/bg-2.jpg");
}
</style>