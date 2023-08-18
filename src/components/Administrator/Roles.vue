<template>
    <div class="w-[90vw] mx-auto py-10">
        <div class="flex items-center mb-14">
            <h1 class="text-2xl font-bold">СПИСОК Роль ЭСТБ</h1>
            <Button label="Новый роль" class="ml-auto" outlined icon="pi pi-check" @click="visible = true" />
            <Dialog v-model:visible="visible" modal header="НОВЫЙ Роль" class="" :style="{ width: '50vw' }">
                <div class="px-5 py-3">
                    <label for="role">Роль <span class="text-red-500">*</span></label>
                    <InputText class="w-full my-2" />
                </div>
                <template #footer>
                    <Button label="Отменить" severity="secondary" />
                    <Button label="Сохранить" class=" lg:mx-3 mx-0 my-4 lg:my-0" severity="info" @click="showSuccess" />
                    <Toast />
                </template>
            </Dialog>
        </div>
        <DataTable v-model:selection="roles" :value="role" dataKey="id">
            <Column field="number" class="text-center" header="№"></Column>
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

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Успешно добавлен!', detail: 'Роль успешно добавлен', life: 3000 });
};

</script>
<style scoped></style>