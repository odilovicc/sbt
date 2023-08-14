<template>
    <div class="w-[90vw] mx-auto my-10">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-xl text-900 font-bold">Products</span>
                    <Button icon="pi pi-plus" label="Загрузка платежей из файла" @click="visible = true"
                        class="text-[#8bcf5f]" />

                    <Dialog v-model:visible="visible" modal header="Загрузка оплат биржевого сбора из файла"
                        :style="{ width: '50vw' }">
                        <form action="" method="post">
                            <div class="flex items-center">
                                <label for="" class="w-1/2">Текстовый файл</label>
                                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*"
                                    :maxFileSize="100000000000000000000" @upload="onUpload" />
                            </div>
                        </form>
                        <template #footer>
                            <Button severity="info" label="Отмена" />
                            <Button severity="success" label="Сохранить файл" @click="show()" />
                            <Toast/>
                        </template>

                    </Dialog>
                </div>
            </template>
            <Column field="number" header="№"></Column>
            <Column field="group" header="Группа"></Column>
            <Column field="numberGroup" header="Номер"></Column>
            <Column field="contract" header="Контракт"></Column>
            <Column field="giver" header="Плательщик"></Column>
            <Column field="responsible" header="Отвеств. БК"></Column>
            <Column field="budget" header="Сумма"></Column>
            <Column field="datePayment" header="Срок оплаты"></Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.numberStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/assets/js/accountsForPayment';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const getSeverity = (product) => {
    switch (product.numberStatus) {
        case 'Активен':
            return 'success';
        case 'Просрочен':
            return 'danger';

        default:
            return null;
    }
};
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'success', summary: 'Успешно загружено!', detail: 'Файл успешно загружено!', life: 3000 });
};
const visible = ref(false);
</script>
<Toast />

<!--  -->