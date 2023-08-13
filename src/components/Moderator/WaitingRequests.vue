<template>
    <div class="w-[90vw] mx-auto my-10">
        <DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
            <Column field="number" header="№"></Column>
            <Column field="bk" header="БК"></Column>
            <Column field="filial" header="Филиал"></Column>
            <Column field="type" header="Тип"></Column>
            <Column field="name" header="Наименование">
                <template #body="slotProps">
                    <h1 class="mb-2">{{ slotProps.data.name }}</h1>
                    <Tag :value="slotProps.data.typeProduction" severity="danger"></Tag>
                </template>
            </Column>
            <Column field="size" header="Кол-во">
                <template #body="slotProps">
                    <h1 class="mb-2">{{ slotProps.data.size }}</h1>
                    <Tag :value="slotProps.data.sizeType" severity="danger"></Tag>
                </template>
            </Column>
            <Column field="price" header="Цена">
                <template #body="slotProps">
                    <h1 class="mb-2">{{ slotProps.data.price }}</h1>
                    <Tag :value="slotProps.data.priceCurrency" severity="danger"></Tag>
                </template>
            </Column>
            <Column field="sum" header="Сумма">
                <template #body="slotProps">
                    <h1 class="mb-2">{{ slotProps.data.sum }}</h1>
                    <Tag :value="slotProps.data.sumCurrency" severity="danger"></Tag>
                </template>
            </Column>
            <Column header="Действие">
                <template #body>
                    <Button icon="pi pi-pencil" severity="info" @click="visible = true" />
                </template>
            </Column>
        </DataTable>
    </div>
    <!-- <Dialog v-model:visible="visible" :value="about" modal header="Утверждение заявки" :style="{ width: '50vw' }">
        <div class="flex">
            <div v-for="about in aboutCompany">
                <div class="py-3">
                    <label for="#numberbk" class="w-1/2 mr-8">Форма заявки:</label>
                    <InputText :value="about.requestForm" class="w-1/2" />
                </div>
                <div class="py-3">
                    <label for="#numberbk" class="w-1/2 mr-8">Дата подачи::</label>
                    <InputText :value="about.requestDate" class="w-1/2" />
                </div>
            </div>
            <div v-for="about in aboutCompany">
                <div class="py-3">
                    <label for="#numberbk" class="w-1/2 mr-8">№ БК:</label>
                    <InputText :value="about.numberBK" class="w-1/2" />
                </div>
                <div class="py-3">
                    <label for="#numberbk" class="w-1/2 mr-8">№ заявки:</label>
                    <InputText :value="about.requestNumber" class="w-1/2" />
                </div>

            </div>
        </div>
        <div v-for="about in aboutCompany">
            <div class="py-3 flex">
                <label for="#numberbk" class="inline-block">Тип заявки:</label>
                <InputText :value="about.requestType" class="w-full inline-block" />
            </div>
            <div class="py-3 flex items-center gap-3">
                <label for="#numberbk" class="inline-block">Клиент:</label>
                <InputText :value="about.requestClient" class="w-full inline-block" />
            </div>
        </div>


        <h1 class="text-cyan-700 font-bold text-2xl my-10">Сведения по товару</h1>
        <div class="flex gap-12">
            <div class="w-1/2">
                <label>Наименование товара* <Tag icon="pi pi-question" v-tooltip="'Дополнителная информация'" class="bg-primary-inverse" /></label>
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full mt-4" />
            </div>
            <div class="w-1/2">
                <label>Наименование товара* <Tag icon="pi pi-question" v-tooltip="'Дополнителная информация'" class="bg-primary-inverse" /></label>
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full mt-4" />
            </div>
        </div>

        <template #footer>
            <Button label="No" icon="pi pi-times" @click="visible = false" text />
            <Button label="Yes" icon="pi pi-check" @click="visible = false" class="text-[--var-text-primary]" autofocus />
        </template>
    </Dialog> -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/assets/js/waitingRequests';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
// const visible = ref(true);

// const aboutCompany = ref([
//     {
//         requestForm: 'типовая заявка',
//         requestDate: '26.03.2020 г. 18:53:40.3',
//         numberBK: '361',
//         requestNumber: '850',
//         nameTrader: 'Рудакова С.С.',
//         requestType: 'Реализация',
//         requestClient: 'ООО Toshkent Taminot Tayorlov savdo'
//     }
// ])
// const selectedCity = ref();
// const nameProduct = ref([
//     { name: 'New York', code: 'NY' },
//     { name: 'Rome', code: 'RM' },
//     { name: 'London', code: 'LDN' },
//     { name: 'Istanbul', code: 'IST' },
//     { name: 'Paris', code: 'PRS' }
// ]);
// const typeProduct = ref([
//     { name: 'New York', code: 'NY' },
//     { name: 'Rome', code: 'RM' },
//     { name: 'London', code: 'LDN' },
//     { name: 'Istanbul', code: 'IST' },
//     { name: 'Paris', code: 'PRS' }
// ]);
// const groupProduct = ref([
//     { name: 'New York', code: 'NY' },
//     { name: 'Rome', code: 'RM' },
//     { name: 'London', code: 'LDN' },
//     { name: 'Istanbul', code: 'IST' },
//     { name: 'Paris', code: 'PRS' }
// ]);
// const cities = ref([
//     { name: 'New York', code: 'NY' },
//     { name: 'Rome', code: 'RM' },
//     { name: 'London', code: 'LDN' },
//     { name: 'Istanbul', code: 'IST' },
//     { name: 'Paris', code: 'PRS' }
// ]);
// const cities = ref([
//     { name: 'New York', code: 'NY' },
//     { name: 'Rome', code: 'RM' },
//     { name: 'London', code: 'LDN' },
//     { name: 'Istanbul', code: 'IST' },
//     { name: 'Paris', code: 'PRS' }
// ]);
</script>
