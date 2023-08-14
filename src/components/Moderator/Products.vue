<template>
    <div class="w-[90vw] mx-auto my-10">
        <div class="px-5 py-3">
            <div class="flex items-center">

                <h1 class="text-2xl font-medium my-10">Список Товаров </h1>
                <Button label="Новый Товар" icon="pi pi-plus" @click="visible = true" class="ml-auto text-[#8B5CF6]" />
                <Dialog v-model:visible="visible" modal header="НОВЫЙ товар" :style="{ width: '50vw' }">
                    <form action="">
                        <div class="py-5 flex items-center gap-5">
                            <label for="nameRus" class="w-1/2">Наименование (рус)</label>
                            <InputText class="w-1/2" />
                        </div>
                        <div class="py-5 flex items-center gap-5">
                            <label for="nameRus" class="w-1/2">Наименование (узб)</label>
                            <InputText class="w-1/2" />
                        </div>
                        <div class="py-5 flex items-center gap-5">
                            <!-- <label for="nameRus" class="w-1/2">Наименование (узб)</label>
                            <InputText class="w-1/2" /> -->
                            <label for="" class="w-1/2">Группа товаров</label>
                            <Dropdown v-model="selectedGroupType" :options="productGroupType" optionLabel="name"
                                placeholder="Выберите" class="w-1/2 md:w-14rem" />
                        </div>
                        <div class="py-5 flex items-center gap-5">
                            <!-- <label for="nameRus" class="w-1/2">Наименование (узб)</label>
                            <InputText class="w-1/2" /> -->
                            <label for="" class="w-1/2">Тариф</label>
                            <Dropdown v-model="selectedGroupType" :options="productGroupType" optionLabel="name"
                                placeholder="Выберите" class="w-1/2 md:w-14rem" />
                        </div>
                        <div class="py-5 flex items-center gap-5">
                            <label for="" class="w-1/2">Предельный % понижения цены</label>
                            <div class="w-1/2">
                                <div class="p-inputgroup flex-1">
                                    <InputText />
                                    <span class="p-inputgroup-addon">
                                        %
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="py-5 flex items-center gap-5">
                            <label for="" class="w-1/2">Предельный % понижения цены</label>
                            <div class="w-1/2">
                                <div class="p-inputgroup flex-1">
                                    <InputText />
                                    <span class="p-inputgroup-addon">
                                        %
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="py-5 flex items-center gap-5">
                            <label for="nameRus" class="w-1/2">Кол-во сессий</label>
                            <InputText class="w-1/2" />
                        </div>
                        <div class="py-5 flex items-center">
                            <label for="" class="w-1/2">Признак ликвидности</label>
                            <div class="mx-2 mr-4">
                                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Yes" />
                                <label for="ingredient1" class="ml-2">Да</label>
                            </div>
                            <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="No" />
                            <label for="ingredient2" class="ml-2">Нет</label>
                        </div>
                        <div class="py-5 flex items-center">
                            <label for="" class="w-1/2">Включена в котировальный лист</label>
                            <div class="mx-2 mr-4">
                                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Yes" />
                                <label for="ingredient1" class="ml-2">Да</label>
                            </div>
                            <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="No" />
                            <label for="ingredient2" class="ml-2">Нет</label>
                        </div>
                        <div class="py-5 flex items-center">
                            <label for="" class="w-1/2">Биржевой сбор с покупателя</label>
                            <div class="mx-2 mr-4">
                                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Yes" />
                                <label for="ingredient1" class="ml-2">Да</label>
                            </div>
                            <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="No" />
                            <label for="ingredient2" class="ml-2">Нет</label>
                        </div>
                        <div class="py-5 flex items-center">
                            <label for="" class="w-1/2">Биржевой сбор с продавца</label>
                            <div class="mx-2 mr-4">
                                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Yes" />
                                <label for="ingredient1" class="ml-2">Да</label>
                            </div>
                            <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="No" />
                            <label for="ingredient2" class="ml-2">Нет</label>
                        </div>
                    </form>
                    <template #footer>
                        <Button label="Отмена" severity="info" />
                        <Toast />
                        <Button label="Сохранить" severity="success" @click="showSuccess" />
                    </template>
                </Dialog>
            </div>
            <DataTable showGridlines :value="products" tableStyle="min-width: 50rem">
                <Column field="number" header="№"></Column>
                <Column field="nameProduct" header="Наименование"></Column>
                <Column field="typeProduct" header="Группа товаров"></Column>
                <Column field="tariff" header="Тариф"></Column>
                <Column field="minimise" header="Понижения"></Column>
                <Column field="maximize" header="Повышения"></Column>
                <Column field="amountSessions" header="Колво сессий"></Column>
                <Column field="lykvied" header="Ликвиден">
                    <template #body="{ data }">
                        <i class="pi text-center"
                            :class="{ 'pi-check-circle text-green-500': data.lykvied, 'pi-times-circle text-red-400': !data.lykvied }"></i>
                    </template>
                </Column>
                <Column field="BklOn" header="Вкл в БКЛ">
                    <template #body="{ data }">
                        <i class="pi text-center"
                            :class="{ 'pi-check-circle text-green-500': data.BklOn, 'pi-times-circle text-red-400': !data.BklOn }"></i>
                    </template>
                </Column>
                <Column field="sizeCurrency" header="Ед. изм"></Column>
                <Column>
                    <template #body>
                        <div class="flex gap-2">
                            <Button icon="pi pi-user" class="text-[#8b5cf6]" />
                            <Button icon="pi pi-list" class="text-[#8b5cf6]" @click="isvisible = true" />

                            <Dialog v-model:visible="isvisible" modal :style="{ width: '50vw' }">
                                <template #header>
                                    <h1>Семена</h1>
                                    <div class="flex flex-col items-center">
                                        <Button v-styleclass="{ selector: '@next', toggleClass: 'hidden' }"
                                            label="Новая марка товара" icon="pi pi-plus" class="text-[#8b5cf6]" />
                                        <div class="border-2 hidden mt-2 rounded-xl p-5">
                                            <div class="py-5">
                                                <label for="" class="w-1/2">Наименование (рус)</label>
                                                <InputText class="ml-5" />
                                            </div>
                                            <div class="py-5">
                                                <label for="" class="w-1/2">Наименование (узб)</label>
                                                <InputText class="ml-5" />
                                            </div>
                                            <Button class="w-full" label="Сохранить" severity="success" v-styleclass="{ selector: '.box', toggleClass: 'hidden' }"/>
                                        </div>
                                    </div>
                                </template>
                                <DataTable :value="aboutp" tableStyle="min-width: 50rem">
                                    <Column field="number" header="Code"></Column>
                                    <Column field="nameOfProduct" header="Name"></Column>
                                    <Column>
                                        <template #body>
                                            <Button severity="info" icon="pi pi-user"/>
                                        </template>
                                    </Column>
                                </DataTable>
                                <template #footer>
                                    <Button severity="info" label="Закрыть"/>
                                </template>
                            </Dialog>
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/assets/js/products';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
onMounted(() => {
    ProductService.getAboutProductMini().then((data) => (aboutp.value = data));
});
const aboutp = ref();
const products = ref();
const visible = ref(false);
const isvisible = ref(false);
const selectedGroupType = ref();
const productGroupType = ref([
    { name: 'Уфимская торговая площадка' },
    { name: 'Челябинская торговая площадка' },
    { name: 'Уральская торговая площадка' },
    { name: 'Технические культуры и продукция их переработки' },
    { name: 'Сельхозпродукция и продукция её переработки' },
    { name: 'Сельхозхимия, химическая продукция' },
    { name: 'Энергоносители' },
    { name: 'Технологические комплексы и мини технологии' },
    { name: 'Сельхозтехника, с/х оборудование, транспорт зап.части' },
    { name: 'Оборудование и продукция произв.технического назначения' },
    { name: 'Металлы, металлопрокат' },
    { name: 'Строительные материалы' },
    { name: 'Целлюлозно-бумажная продукция' },
    { name: 'Текстильная продукция' },
    { name: 'Кабельная продукция и провода' },
    { name: 'Напитки и табачные изделия' },
    { name: 'Компьютеры и оргтехника' },
    { name: 'Товары народного потребления' },
    { name: 'Рабочая спец.одежда' },
    { name: 'Мед.оборудование и лекарственные препараты' },
    { name: 'Недвижимость' },
    { name: 'Ценные бумаги' },
    { name: 'Работы строительно-монтажные' },
    { name: 'Работы по ремонту оборудования, транспортных средств' },
    { name: 'Переработка сырья' },
    { name: 'Услуги туристические' },
    { name: 'Услуги коммунальные' },
    { name: 'Толинг' },
    { name: 'Услуги транспортные' },
    { name: 'Прочее' },
]);
const ingredient = ref('');

import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Успешно добавлен!', detail: 'Новый товар успешно добавлен!', life: 3000 });
};
</script>
<style scoped>
.hidden {
    display: none;
}
</style>