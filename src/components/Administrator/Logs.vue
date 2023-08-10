
<template>
    <div class="container mx-auto py-10">
        <h1 class="text-2xl font-bold mb-10">ЖУРНАЛ ДЕЙСТВИЙ ПОЛЬЗОВАТЕЛЕЙ</h1>
        <DataTable :value="actions" showGridlines>
            <Column field="number" header="№"></Column>
            <Column field="date" header="Дата и время"></Column>
            <Column field="user" header="Пользователь"></Column>
            <Column field="typeAction" header="Вид действия"></Column>
            <Column field="action" header="Действие"></Column>
            <Column field="explanation" header="Пояснение"></Column>
            <Column field="ip" header="IP-Адрес"></Column>
            <Column headerStyle="width: 10rem;"></Column>

        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { logs } from '@/assets/js/logsTable.js';

onMounted(() => {
    logs.getLogs().then((data) => (actions.value = data));
});

const actions = ref();

</script>