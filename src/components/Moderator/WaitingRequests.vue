<template>
    <div class="w-[90vw] mx-auto my-10">
        <DataTable :value="requests" tableStyle="min-width: 50rem">
            <Column field="number" header="№"></Column>
            <Column field="bk" header="БК"></Column>
            <Column field="filial" header="Филиал"></Column>
            <Column field="type" header="Тип"></Column>
            <Column field="name" header="Наименование">
                <template #body="slotProps">
                    <h1 class="mb-2">{{ slotProps.data.name }}</h1>
                    <h1 class="text-red-500">{{ slotProps.data.typeProduction }}</h1>
                </template>
            </Column>
            <Column field="size" header="Кол-во">
                <template #body="slotProps">
                    <h1 class="mb-2">{{ slotProps.data.size }}</h1>
                    <h1 class="text-red-500">{{ slotProps.data.sizeType }}</h1>
                </template>
            </Column>
            <Column field="price" header="Цена">
                <template #body="slotProps">
                    <h1 class="mb-2">{{ slotProps.data.price }}</h1>
                    <h1 class="text-red-500">{{ slotProps.data.priceCurrency }}</h1>
                </template>
            </Column>
            <Column field="sum" header="Сумма">
                <template #body="slotProps">
                    <h1 class="mb-2">{{ slotProps.data.sum }}</h1>
                    <h1 class="text-red-500">{{ slotProps.data.sumCurrency }}</h1>
                </template>
            </Column>
            <Column header="Действие">
                <template #body>
                    <Button icon="pi pi-pencil" severity="info" @click="visible = true" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { requestList } from '@/assets/js/Moderator/waitingRequests';

onMounted(() => {
    requestList.getRequestsMini().then((data) => (requests.value = data));
});

const requests = ref();
</script>
