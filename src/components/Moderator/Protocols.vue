<template>
    <div class="card">
        <TabView>
            <TabPanel>
                <template #header>
                    <span>ПРОТОКОЛЫ ТОРГОВ</span>
                </template>
                <div class="card">
                    <DataTable :value="protocols" tableStyle="min-width: 50rem">
                        <Column field="number" header="№">
                            <template #body="cycle">
                                <h1>{{ cycle.data.number }}</h1>
                                <h1 class="text-red-500">{{ cycle.data.podNumber }}</h1>
                            </template>
                        </Column>
                        <Column field="data" header="Дата"></Column>
                        <Column field="clientSeller" header="Клиент-продавец">
                            <template #body="cycle">
                                <h1>{{ cycle.data.clientSeller }}</h1>
                                <h1 class="text-red-500">{{ cycle.data.podClientSeller }}</h1>
                            </template>
                        </Column>
                        <Column field="clientBuyer" header="Клиент-покупатель">
                            <template #body="cycle">
                                <h1>{{ cycle.data.clientBuyer }}</h1>
                                <h1 class="text-red-500">{{ cycle.data.podClientBuyer }}</h1>
                            </template>
                        </Column>
                        <Column field="item" header="Товар">
                            <template #body="cycle">
                                <a href="#" class="hover:text-[--var-primary-color] transition duration-200">{{
                                    cycle.data.item }}</a>
                                <h1 class="text-red-500">{{ cycle.data.podItem }}</h1>
                            </template>
                        </Column>
                        <Column field="sum" header="Сумма">
                            <template #body="cycle">
                                <h1>{{ cycle.data.sum }}</h1>
                                <h1 class="text-red-500">{{ cycle.data.sumCurrency }}</h1>
                            </template>
                        </Column>
                        <Column header="Status">
                            <template #body="slotProps">
                                <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data)" />
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <span>ДОГОВОРЫ С ЗАЛОГОМ</span>
                </template>
                <DataTable :value="trades" tableStyle="min-width: 50rem">
                    <Column header="№ договора">
                        <template #body="cycle">
                            <h1>{{ cycle.data.numberProtocol }}</h1>
                        </template>
                    </Column>
                    <Column header="Дата торгов">
                        <template #body="cycle">
                            <h1>{{ cycle.data.dateTrade }}</h1>
                        </template>
                    </Column>
                    <Column header="БК прод.">
                        <template #body="cycle">
                            <h1>{{ cycle.data.protocolProduce }}</h1>
                            <h1 class="text-red-500">{{ cycle.data.podProtocolProduce }}</h1>
                        </template>
                    </Column>
                    <Column header="БК покуп.">
                        <template #body="cycle">
                            <a href="#">{{ cycle.data.protocolBuyer }}</a>
                            <h1 class="text-red-500">{{ cycle.data.podProtocolBuyer }}</h1>
                        </template>
                    </Column>
                    <Column header="Товар">
                        <template #body="cycle">
                            <h1>{{ cycle.data.protocolItem }}</h1>
                        </template>
                    </Column>
                    <Column header="Сумма">
                        <template #body="cycle">
                            <h1>{{ cycle.data.protocolSum }}</h1>
                            <h1 class="text-red-500">{{ cycle.data.podProtocolSum }}</h1>
                        </template>
                    </Column>
                    <Column header="Status">
                        <template #body="slotProps">
                            <Tag :value="slotProps.data.protocolStatus" :severity="getSeverity(slotProps.data)" />
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <i class="pi pi-add mr-2"></i>
                    <span>НОВЫЙ ДОКУМЕНТ</span>
                </template>
                <DataTable :value="products" tableStyle="min-width: 50rem">
                    <Column field="trades" header="Торги"></Column>
                    <Column field="produces" header="БК прод."></Column>
                    <Column field="buys" header="БК покуп."></Column>
                    <Column field="item" header="Товар"></Column>
                    <Column field="size" header="Кол-во"></Column>
                    <Column field="price" header="Цена"></Column>
                    <Column field="sum" header="Сумма"></Column>
                    <Column field="basis" header="Базис"></Column>
                    <Column field="punkt" header="Пункт"></Column>
                    <Column header="Status">
                        <template #body="slotProps">
                            <Tag :value="slotProps.data.protocolStatus" :severity="switchSeverity(slotProps.data)" />
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>
        </TabView>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Protocols } from '@/assets/js/protocols';

onMounted(() => {
    Protocols.getProtocolsMini().then((data) => (protocols.value = data));
});
onMounted(() => {
    Protocols.getTradesProtocolMini().then((data) => (trades.value = data));
});

const protocols = ref();
const trades = ref();
const getSeverity = (product) => {
    switch (product.status) {
        case 'На бирже':
            return 'success';

        case 'На регистрации':
            return 'warning';

        case 'Аннулированный':
            return 'danger';

        default:
            return null;
    }
};
const switchSeverity = (protocolStatus) => {
    switch (protocolStatus.status) {
        case 'действующий':
            return 'success';

        case 'На регистрации':
            return 'warning';

        case 'Аннулированный':
            return 'danger';

        default:
            return null;
    }
};


</script>
<script>
    export default {
        name: 'Protocols'
    }
</script>