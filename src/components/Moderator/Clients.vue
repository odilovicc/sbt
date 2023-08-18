<template>
    <div class="w-[90vw] mx-auto py-10">
        <DataTable :value="teamexchange" class="mx-auto">
            <h1 class="text-2xl font-semibold mb-10">Список клиентов-резидентов</h1>
            <Column field="number" header="№"></Column>
            <Column field="date" header="Дата регистрации"></Column>
            <Column field="name" header="Наименование">
                <template #body="slotProps">
                    <Button link class="p-0 block" :label="slotProps.data.name + (slotProps.data.bk ? ' + ' + slotProps.data.bk : '')" />
                </template>
            </Column>
            <Column field="inp" header="ИНП"></Column>
            <Column field="filial" header="Филиал"></Column>
            <Column field="all" header="Всего">
                <template #header>
                    <Tag value="Состояние счета" severity="secondary" class="mr-2"></Tag>
                </template>
            </Column>
            <Column field="bron" header="Бронь"> <template #header>
                    <Tag value="Состояние счета" severity="secondary" class="mr-2"></Tag>
                </template>
            </Column>
            <Column field="free" header="Свободно"> <template #header>
                    <Tag value="Состояние счета" severity="secondary" class="mr-2"></Tag>
                </template>
            </Column>
            <Column field="clientstatus" header="Статус">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.clientstatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>

        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { exchangesTeam } from '../../assets/js/clients.js'
onMounted(() => {
    exchangesTeam.getTeamMini().then((data) => (teamexchange.value = data));
});

const teamexchange = ref();
const getSeverity = (teamexchange) => {
    switch (teamexchange.clientstatus) {
        case 'Активный':
            return 'success';

        case 'Новый клиент':
            return 'warning';

        case 'Заблокирован':
            return 'danger';

        default:
            return null;
    }
};

</script>