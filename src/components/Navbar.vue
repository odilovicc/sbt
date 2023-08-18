<template>
    <div class="flex justify-center">
        <div class="w-full">
            <MegaMenu :model="items" />
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const items = ref([
    {
        label: 'Вход & Регистрация',
        icon: 'pi pi-sign-in',
        items: [
            [
                {
                    items: [
                        { label: 'Вход' },
                        { label: 'Регистрация член биржи' },
                        { label: 'Регистрация клиент' }
                    ]
                }
            ]
        ], styleClass: 'custom-menu-item'
    },
    {
        label: 'Администратор',
        icon: 'pi pi-verified',
        items: [
            [
                {
                    items: [
                        { label: 'Пользователи' },
                        { label: 'Роли' },
                        { label: 'Права доступа' },
                        { label: 'Логи' },
                        { label: 'Тарифы' }
                    ]
                }
            ]
        ]
    },
    {
        label: 'Модератор',
        icon: 'pi pi-user-plus',
        items: [
            [
                {
                    items: [
                        { label: 'Члены биржи' },
                        { label: 'Клиенты' },
                        { label: 'Заявки на брокерское обслуживание' },
                        { label: 'Неутвержденнные заявки' },
                        { label: 'Протокол торгов' },
                        { label: 'Товары' },
                        { label: 'Счета за оплату' },
                    ]
                }
            ]
        ]
    },
    {
        label: 'Брокер',
        icon: 'pi pi-flag',
        items: [
            [
                {
                    items: [
                        { label: 'Договор поручение на продажу' },
                        { label: 'Трейдеры' },
                        { label: 'Клиенты (резидент)' },
                        { label: 'Список заявок' },
                        { label: 'Бюллтень' },
                        { label: 'Аукционы' },
                    ]
                }
            ]
        ]
    },
    {
        label: 'Трейдер',
        icon: 'pi pi-send',
        items: [
            [
                {
                    items: [
                        { label: 'Договор поручение на продажу' },
                    ]
                }
            ]
        ]
    },
    {
        label: 'Клиент',
        icon: 'pi pi-user',
        items: [
            [
                {
                    items: [
                        { label: 'Брокеры' },
                        { label: 'Поручение на продажу' },
                        { label: 'Счета за оплату' },
                        { label: 'Список оплат' },
                        { label: 'Реестр сделок' },
                        { label: 'Список заявок' },
                        { label: 'Бюллтень' },
                    ]
                }
            ]
        ]
    },
]);
</script>
<style scoped>
.p-megamenu {
    display: flex;
    justify-content: center;
    z-index: 50;
}
</style>