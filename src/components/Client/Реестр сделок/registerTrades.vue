<template>
    <div class="defaultScreenView">
        <div class="defaultBg">
            <h1 class="headerOfSection">Список оплат</h1>
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <Column field="numberAgreement" header="№ Договора"></Column>
                <Column field="client" header="Покупатель"></Column>
                <Column field="item" header="Товар"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column header="Статус">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';


const products = ref([
    {
        name: '123'
    }
]);
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

</script>
<style scoped>
@import url('registerTrades.css');
</style>