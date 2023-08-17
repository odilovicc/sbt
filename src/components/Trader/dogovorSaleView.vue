<template>
    <div class="w-[90vw] mx-auto my-10">
        <div class="bg-[#1e1e1e] p-10">
            <div class="flex items-center">
                <h1 class="text-xl font-semibold">Ввод новой заявки</h1>
                <Button label="Вернуться в список" icon="pi pi-arrow-left" class="ml-auto" outlined />
            </div>
            <div class="py-5">
                <div class="py-5 flex items-center">
                    <label class="w-1/2">Клиент: <span class="text-red-500">*</span></label>
                    <Dropdown v-model="selectedClient" :options="clients" optionLabel="name" placeholder="Не выбрано"
                        class="w-full md:w-14rem" />
                </div>
                <div class="py-5 flex items-center">
                    <label class="w-1/2">Договор поручениe: <span class="text-red-500">*</span></label>
                    <Dropdown v-model="selectedPorucenie" :options="porucenies" optionLabel="name" placeholder="Не выбрано"
                        class="w-full md:w-14rem" />
                </div>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>Тип торгов: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedType" :options="typesTorg" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>Секция торгов: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedSection" :options="sectionTorg" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
                <h1 class="text-[--primary-color] text-xl font-semibold my-10">Сведения по товару</h1>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>Тип торгов: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedType" :options="typesTorg" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>Секция торгов: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedSection" :options="sectionTorg" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>Наимирование товара: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedNameTovar" :options="tovarNames" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>Марка товара: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedMarka" :options="markas" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>Группа товара: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedGroupTovar" :options="groupsTovar" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>ТВНЭД: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedTnved" :options="tnveds" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
                <div class="py-5">
                    <label class="w-1/2">Наименование <span class="text-red-500">*</span></label>
                    <InputText class="w-full my-5" />
                </div>
                <div class="flex items-center py-5 gap-12">
                    <div class="w-1/2">
                        <label>Тип упаковки: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedTypeBoxing" :options="typeBoxings" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                    <div class="w-1/2">
                        <label>Ед. изм. упаковки: <span class="text-red-500">*</span></label>
                        <Dropdown v-model="selectedTnved" :options="tnveds" optionLabel="name" placeholder="Не выбрано"
                            class="w-full mt-5 md:w-14rem" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const selectedClient = ref();
const clients = ref([
    { name: 'AKUMSHIN SAVDO - 2000025487' },
    { name: 'ООО "DAVRON BOBO" - 2000025487' },
    { name: 'ООО "PLASTEKS" - 2000025487' },
]);
const selectedPorucenie = ref();
const porucenies = ref([
    { name: 'Договор поручениe от 12.12.2020' },
    { name: 'Договор поручениe от 12.04.2020' },
    { name: 'Договор поручениe от 12.01.2020' },
]);
const selectedType = ref();
const typesTorg = ref([
    { name: 'Биржевые торги' },
]);
const selectedSection = ref();
const sectionTorg = ref([
    { name: 'Секция реализации высоколиквидной продукции предприятий-монополистов' },
    { name: 'Секция реализации биржевых товаров, не входящих в перечень высоколиквидной продукции предприятий-монополистов' },
    { name: 'Секция фьючерсной торговли' },
    { name: 'Секция торгов опционами' },
]);
const selectedNameTovar = ref();
const tovarNames = ref([
    { name: 'Сталь прокат плоский нелегированная'},
]);
const selectedMarka = ref();
const markas = ref([
    { name: 'х/к марка стали-DC04EK,толщ 0,60мм, шир 1250мм'},
    { name: 'х/к марка стали-DC01,толщ 0,50мм'},
]);

const selectedGroupTovar = ref();
const groupsTovar = ref([
    { name: 'Технические культуры и продукция их переработки'},
    { name: 'Сельхозпродукция и продукция её переработки'},
    { name: 'Сельхозхимия, химическая продукция'},
    { name: 'Энергоносители'},
    { name: 'Технологические комплексы и мини технологии'},
    { name: 'Сельхозтехника, с/х оборудование, транспорт зап.части'},
    { name: 'Оборудование и продукция произв.технического назначения'},
    { name: 'Металлы, металлопрокат'},
    { name: 'Строительные материалы'},
    { name: 'Целлюлозно-бумажная продукция'},
    { name: 'Текстильная продукция'},
    { name: 'Кабельная продукция и провода'},
    { name: 'Напитки и табачные изделия'},
    { name: 'Компьютеры и оргтехника'},
    { name: 'Товары народного потребления'},
    { name: 'Рабочая спец.одежда'},
    { name: 'Мед.оборудование и лекарственные препараты'},
    { name: 'Недвижимость'},
    { name: 'Ценные бумаги'},
    { name: 'Прочее'},
    { name: 'Работы строительно-монтажные'},
    { name: 'Работы по ремонту оборудования, транспортных средств'},
    { name: 'Переработка сырья'},
    { name: 'Услуги туристические'},
    { name: 'Услуги коммунальные'},
    { name: 'Толинг'},
    { name: 'Услуги транспортные'},
    { name: 'Уральская торговая площадка'},
    { name: 'Челябинская торговая площадка'},    
    { name: 'Уфимская торговая площадка'},   
]);
const selectedTnved = ref();
const tnveds = ref([
    { name: '0207119000 - Куриное мясо'},
    { name: '040300000  - Молоко'},
    { name: '0407001900 - Куриное яйцо'},
    { name: '071300000  - Горох (ядрица)'},
    { name: '100100000  - Кормовые смеси'},
    { name: '1003900000 - Ячмень'},
    { name: '1206009900 - Семена подсолнечника, дробленые или недробленые'},
    { name: '151800000  - Животные жиры и масла'},
    { name: '230600000  - Шелуха хлопковая'},
    { name: '2309904100 - Комбикорма'},
    { name: '2517410000 - порошок из мрамора'},
]);
const selectedTypeBoxing = ref();
const typeBoxings = ref([
    { name: 'paket'},
    { name: 'автоцистерна'},
    { name: 'баллон'},
    { name: 'банка'},
    { name: 'бочки'},
    { name: 'ж/д цистерны'},
    { name: 'канистра'},
]);
</script>