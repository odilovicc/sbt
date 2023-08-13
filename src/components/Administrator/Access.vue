<template>
    <div class="container mx-auto py-10">
        <div class="flex items-center mb-14">
            <h1 class="text-2xl font-bold">СПИСОК РОЛЕЙ ПОЛЬЗОВАТЕЛЕЙ</h1>
            <Button label="Новый права доступа" class="ml-auto text-[#8B5CF6]" icon="pi pi-check" @click="visible = true" />
            <Dialog v-model:visible="visible" modal header="НОВЫЙ Права доступа" class="" :style="{ width: '50vw' }">
                <div class="px-5 py-3">
                    <label for="role">Роль <span class="text-red-500">*</span></label>
                    <InputText class="w-full my-2" />
                </div>
                <div class="px-5 py-3">
                    <label for="role">Основное меню <span class="text-red-500">*</span></label>
                    <InputText class="w-full my-2" />
                </div>
                <div class="px-5 py-3">
                    <label for="role">Дочерное меню <span class="text-red-500">*</span></label>
                    <InputText class="w-full my-2" />
                </div>
                <div class="px-5 py-3">
                    <label for="role">Название права доступа <span class="text-red-500">*</span></label>
                    <InputText class="w-full my-2" />
                </div>
                <div class="px-5 py-3">
                    <label for="role">Название права доступа в скрипте <span class="text-red-500">*</span></label>
                    <InputText class="w-full my-2" />
                </div>
                <div class="px-5 py-3">
                    <label for="role">URL в скрипте <span class="text-red-500">*</span></label>
                    <InputText class="w-full my-2" />
                </div>
                <hr class="my-5">
                <div class="px-5 w-full">
                    <Button label="Отменить" severity="secondary" />
                    <Button label="Сохранить" class="text-[#8B5CF6] lg:mx-3 mx-0 my-4 lg:my-0" @click="showSuccess"/>
                    <Toast />
                </div>

            </Dialog>
        </div>
        <!-- <DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
            <Column field="number" header="№"></Column>
            <Column field="role" header="Роль"></Column>
        </DataTable> -->
        <DataTable v-model:selection="roles" showGridlines  :value="role" dataKey="id">
            <Column field="number" class="w-14" header="№"></Column>
            <Column field="role" header="Роль"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Roles } from '@/assets/js/accessTable';

onMounted(() => {
    Roles.getRolesMini().then((data) => (role.value = data));
});

const role = ref();
const visible = ref(false);
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Успешно добавлен!', detail: 'Новая права доступа успешно добавлен', life: 3000 });
};

</script>
<style scoped>
</style>