
<template>
    <div class="w-[90vw] mx-auto py-10">
        <div class="flex items-center mb-14 gap-12 lg:gap-0">
            <h1 class="font-bold text-lg lg:text-2xl">СПИСОК ПОЛЬЗОВАТЕЛЕЙ ЭСТБ</h1>
            <Button label="Добавить нового пользователя" icon="pi pi-plus" class="ml-auto " outlined @click="visible = true" />
            <!-- Добавить нового пользователя Dialog -->
            <Dialog v-model:visible="visible" modal header="НОВЫЙ ТРЕЙДЕР" :style="{ width: '50vw' }">
                <form action="" class="w-full py-6">
                    <div class="py-5 flex items-center">
                        <label class="text-900 font-medium mb-2 w-1/2">Прикрепить открытый ключ
                            ЭЦП</label>
                        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" class="w-full mb-3"
                            :maxFileSize="1000000" @upload="onUpload" />
                    </div>
                    <div class="py-5 flex items-center">
                        <h1 class="text-900 font-medium w-1/2">Пол</h1>
                        <div class="flex items-center">
                            <RadioButton v-model="ingredient" inputId="man" name="pizza" value="Мужской" />
                            <label for="man" class="mx-2">Мужской</label>
                            <RadioButton v-model="ingredient" inputId="woman" name="pizza" value="Женский" />
                            <label for="woman" class="mx-2">Женский</label>
                        </div>
                    </div>
                    <div class="py-5 flex items-center">
                        <h1 class="text-900 font-medium w-1/2">Ф.И.О пользователя</h1>
                        <InputText class="w-full" />
                    </div>
                    <div class="py-5 flex items-center">
                        <h1 class="text-900 font-medium w-1/2">Паспорт №</h1>
                        <InputNumber class="w-full" />
                    </div>
                    <h1 class="font-xl text-emerald-600 font-semibold my-5">Контактная информация</h1>
                    <div class="py-5 flex items-center">
                        <h1 class="text-900 font-medium w-1/2">Телефон</h1>
                        <InputMask class="w-full" v-model="value" mask="999-99-999-99-99" placeholder="+998-00-000-00-00" />
                    </div>
                    <div class="py-5 flex items-center">
                        <h1 class="text-900 font-medium w-1/2">Мобильный</h1>
                        <InputMask class="w-full" v-model="value" mask="999-99-999-99-99" placeholder="+998-00-000-00-00" />
                    </div>
                    <div class="py-5 flex items-center">
                        <h1 class="text-900 font-medium w-1/2">E-mail</h1>
                        <InputText class="w-full" />
                    </div>
                </form>
                <template #footer>
                    <div class="flex gap-5">
                        <Button label="Отмена" @click="visible = false" severity="info" />
                        <Button label="Сохранить" @click="visible = false" severity="success" />
                        <Toast />
                    </div>
                </template>
            </Dialog>
            <!-- Добавить нового пользователя Dialog -->
        </div>
        <DataTable v-model:editingRows="editingRows" :value="products" editMode="row" dataKey="id"
            @row-edit-save="onRowEditSave" tableClass="editable-cells-table">
            <Column field="number" header="№" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="role" header="Роль" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="login" header="Логин" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="fio" header="Ф.И.О" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="inventoryStatus" header="Status" style="width: 20%">
                <template #editor="{ data, field }">
                    <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value"
                        placeholder="Select a Status">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option.value" :severity="getStatusLabel(slotProps.option.value)" />
                        </template>
                    </Dropdown>
                </template>
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus"
                        :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
                </template>
            </Column>
            <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
        </DataTable>
    </div>

</template>

<script>
import { UsersTable } from '@/assets/js/UsersTable';

export default {
    data() {
        return {
            products: null,
            editingRows: [],
            statuses: [
                { label: 'Активный', value: 'Активный' },
                { label: 'Окончание срока действия', value: 'Окончание срока действия' },
            ]
        };
    },
    mounted() {
        UsersTable.getUsersDataMini().then((data) => (this.products = data));
    },
    methods: {
        onRowEditSave(event) {
            let { newData, index } = event;

            this.products[index] = newData;
        },
        getStatusLabel(status) {
            switch (status) {
                case 'Активный':
                    return 'success';

                case 'Окончание срока действия':
                    return 'danger';
                default:
                    return null;
            }
        },
    }
};
</script>
<script setup>
import { ref } from "vue";
const visible = ref(false);
const ingredient = ref('');
</script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
}
</style>    