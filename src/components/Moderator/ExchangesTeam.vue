<template>

    <div class="mx-auto py-20 px-24">
        <DataTable :value="teamexchange" showGridlines class="mx-auto">
            <h1 class="font-2xl font-semibold mb-10">СПИСОК ЧЛЕНОВ БИРЖИ</h1>
            <Column field="number" header="№"></Column>
            <Column field="nomer" header="Номер"></Column>
            <Column field="name" header="Наименование">
                <template #body="slotProps">
                    <Button link class="p-0" :label="slotProps.data.name" />
                </template>
            </Column>
            <Column field="yuradress" header="Юридический адрес"></Column>
            <Column field="filial" header="Филиал"></Column>
            <Column field="teamstatus" header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.teamstatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>

        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { exchangesTeam } from '../../assets/js/exchangesTeam.js'
onMounted(() => {
    exchangesTeam.getTeamMini().then((data) => (teamexchange.value = data));
});

const teamexchange = ref();
const getSeverity = (teamexchange) => {
    switch (teamexchange.teamstatus) {
        case 'Активный':
            return 'success';

        case 'Новый член биржи':
            return 'warning';

        case 'Отказан':
            return 'danger';

        case 'Неуплата комиссионных сборов':
            return 'danger';

        case 'Неполнота предоставленных документов':
            return 'danger';

        case 'Неактивен по прочим причинам':
            return 'danger';

        case 'Заблокирован сотрудником РКП':
            return 'danger';

        default:
            return null;
    }
};

</script>
<style scoped>
@import url('../../assets/bg.css');
</style>