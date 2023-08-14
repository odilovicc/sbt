<template>
    <div class="w-[90vw] mx-auto my-10">
        <DataTable :value="products" tableStyle="min-width: 50rem" header="Договор поручение">
            <Column field="number" header="Name"></Column>
            <Column field="client" header="Клиент"></Column>
            <Column field="date" header="Срок"></Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.assignmentStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <Column>
                <template #body class="w-14">
                    <Button icon="pi pi-file" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/assets/js/Broker/bkAssignment';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
    switch (product.assignmentStatus) {
        case 'Новый':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'Использован':
            return 'danger';

        default:
            return null;
    }
};

</script>