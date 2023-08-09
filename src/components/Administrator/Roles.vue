<template>
    <div class="container mx-auto py-10">
        <div class="flex items-center mb-14">
            <h1 class="text-2xl font-bold">СПИСОК Роль ЭСТБ</h1>
            <Button label="Новый роль" class="ml-auto text-[#8B5CF6]" icon="pi pi-check" @click="visible = true" />
            <Dialog v-model:visible="visible" modal header="НОВЫЙ Роль" class="" :style="{ width: '50vw' }">
                <div class="px-5 py-3">
                    <label for="role">Роль <span class="text-red-500">*</span></label>
                    <InputText class="w-full my-2" />

                </div>
                <hr class="my-5">
                <div class="px-5 w-full">
                    <Button label="Отменить" severity="secondary" />
                    <Button label="Сохранить" class=" lg:mx-3 mx-0 my-4 lg:my-0" @click="showSuccess"/>
                    <Toast />
                </div>

            </Dialog>
        </div>
        <!-- <DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
            <Column field="number" header="№"></Column>
            <Column field="role" header="Роль"></Column>
        </DataTable> -->
        <DataTable v-model:selection="roles" showGridlines  :value="role" dataKey="id">
            <Column selectionMode="single" headerStyle="width: 3rem"></Column>
            <Column field="number" header="№"></Column>
            <Column field="role" header="Роль"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Roles } from '@/assets/js/RolesTable';

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
    toast.add({ severity: 'success', summary: 'Успешно добавлен!', detail: 'Роль успешно добавлен', life: 3000 });
};

</script>
<style scoped>
</style>