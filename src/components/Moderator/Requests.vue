
<template>
    <div class="w-[90vw] mx-auto">
        <h1 class="text-2xl font-bold my-10">Заявки на брокерское обслуживание</h1>
        <DataTable :value="products" showGridlines="" tableStyle="min-width: 50rem">
            <Column field="number" header="№"></Column>
            <Column field="client" header="Клиент"></Column>
            <Column field="broker" header="Брокер"></Column>
            <Column header="Статус">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <Column field="numbk" class="w-14">
                <template #body>
                    <Button icon="pi pi-pencil" severity="info" @click="visible = true" />
                    <Dialog v-model:visible="visible" modal header="Утверждение заявки" :style="{ width: '50vw' }">
                        <form action="">
                            <div class="py-5" v-for="dataa in dataCompany">
                                <label for="#numberbk" class="w-1/2 mr-8">№ БК:</label>
                                <InputText :value="dataa.numberBK" class="w-1/2" />
                            </div>
                            <div class="py-5" v-for="dataa in dataCompany">
                                <label for="#numberbk" class="w-1/2 mr-8">Клиент</label>
                                <InputText :value="dataa.company" class="w-1/2" />
                            </div>
                            <div class="py-5" v-for="dataa in dataCompany">
                                <label for="#numberbk" class="w-1/2 mr-8">Срок договора</label>
                                <InputText :value="dataa.dateTrade" class="w-1/2" />
                            </div>
                            <h1 class="text-cyan-800 font-bold my-10">Сопроводительные документы к заявке</h1>
                            <FileUpload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true"
                                :maxFileSize="1000000" label="Выбрать">
                                <template #empty>
                                    <p>Drag and drop files to here to upload.</p>
                                </template>
                            </FileUpload>
                            <h1 class="text-cyan-800 font-bold my-10">Сопроводительные документы к заявке</h1>
                            <div class="py-5">
                                <label for="#numberbk" class="w-1/2 mr-8">Статус</label>
                                <div class="inline-block">
                                    <RadioButton v-model="state" inputId="ingredient1" name="pizza" value="Cheese" />
                                    <label for="ingredient1" class="ml-2">утвердить</label>
                                </div>
                                <div class="inline-block mx-4">
                                    <RadioButton v-model="state" inputId="ingredient1" name="pizza" value="Cheese" />
                                    <label for="ingredient1" class="ml-2">отклонить</label>
                                </div>
                            </div>
                            <div class="py-5">
                                <label for="#numberbk" class="w-1/2 mr-8 block mb-4">Пояснение к решению</label>
                                <Textarea v-model="value" rows="5" class="w-full" />
                            </div>
                            <div class="py-5">
                                <label for="#numberbk" class="w-1/2 mr-8">Код подтверждения действия <span
                                        class="text-red-500">*</span></label>
                                <InputText class="" />
                            </div>
                            <div class="flex gap-5">
                                <Button type="submit" label="Сохранить" severity="success" />
                                <Button type="submit" label="Отмена" severity="info" />
                            </div>
                        </form>
                    </Dialog>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CompanyClients } from '@/assets/js/requests';
const visible = ref(false);
const state = ref('');
onMounted(() => {
    CompanyClients.getClientsMini().then((data) => (products.value = data));
});

const products = ref();;
const getSeverity = (product) => {
    switch (product.status) {
        case 'Одобрен':
            return 'success';

        case 'Новый':
            return 'warning';

        case 'На одобрении брокера':
            return 'primary';

        case 'Отклонен':
            return 'danger';

        default:
            return null;
    }
};

import { useToast } from "primevue/usetoast";
const toast = useToast();

const onAdvancedUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

const dataCompany = ref([
    {
        numberBK: '361',
        company: 'ООО "DAVRON BOBO22"',
        dateTrade: '12.12.2020',

    }
])

</script>
