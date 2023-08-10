
<template>
    <div class="container mx-auto py-10">
        <div class="flex items-center mb-10">
            <h1 class="font-2xl font-bold">СПРАВОЧНИК ТАРИФОВ БИРЖИ</h1>
            <Button label="Новый тариф" class="ml-auto text-[#8B5CF6]" icon="pi pi-check" @click="visible = true" />
            <Dialog v-model:visible="visible" modal header="НОВЫЙ тариф" class="" :style="{ width: '85vw' }">
                <DataTable v-model:selection="selectedProduct" :value="newtariff" selectionMode="single" dataKey="id"
                    :metaKeySelection="false" @rowSelect="onRowSelect" @rowUnselect="onRowUnselect"
                    tableStyle="min-width: 50rem">
                    <Column field="tarifFilial" header="Тарифы филиала"></Column>
                    <Column field="newPriceOt" header="Сумма сделки от">
                        <template #body>
                            <div class="p-inputgroup flex-1">
                                <InputNumber required />
                                <span class="p-inputgroup-addon">сум</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="newPriceDo" header="Сумма сделки до">
                        <template #body>
                            <div class="p-inputgroup flex-1">
                                <InputNumber required />
                                <span class="p-inputgroup-addon">сум</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="newPercent" header="% для каждой стороны">
                        <template #body>
                            <div class="p-inputgroup flex-1">
                                <InputNumber required />
                                <span class="p-inputgroup-addon">сум</span>
                            </div>
                        </template>
                    </Column>
                </DataTable>
                <div class="border-t-1 mt-2 py-5">
                    <div class="gap-12 flex items-center">
                        <Button label="Отмена" severity="info" />
                        <Button label="Сохранить" severity="success" @click="showSuccess" />
                        <Toast />
                    </div>
                </div>
            </Dialog>
        </div>
        <DataTable :value="tarifs" showGridlines>
            <Column field="number" header="№" class="font-bold"></Column>
            <Column field="name" header="Наименование"></Column>
            <Column field="sumot" header="Сумма сделки от, сум"></Column>
            <Column field="sumdo" header="Сумма сделки до, сум"></Column>
            <Column field="percent" header="% для каждой стороны"></Column>
            <Column>
                <template #body>
                    <Button icon="pi pi-user-edit" @click="visible = true" severity="primary" class="text-[#6366f1] mr-4" />
                    <Button icon="pi pi-search" class="text-[#6366f1]" severity="info" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { tariffs } from '@/assets/js/tarifs';

onMounted(() => {
    tariffs.getTarifs().then((data) => (tarifs.value = data));
});

const tarifs = ref();
const visible = ref(false);
import { newTarif } from '@/assets/js/newTarif';

onMounted(() => {
    newTarif.getNewTarifMini().then((data) => (newtariff.value = data));
});

const newtariff = ref();
const selectedProduct = ref();
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Успешно добавлен!', detail: 'Тариф успешно добавлен!', life: 3000 });
};
</script>