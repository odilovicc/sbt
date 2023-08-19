<template>
    <div class="w-[90vw] my-10 mx-auto">
        <div class="bg-[#1e1e1e] rounded-md p-10">
            <div class="px-10 flex items-center">
                <h1 class="text-2xl font-semibold">Утверждения заявки</h1>
                <Button icon="pi pi-arrow-left" label="Вернуться в список" class="ml-auto" outlined />
            </div>
            <!-- Form start -->
            <div class="flex items-center justify-between p-10 py-5 mt-5">
                <div class="flex items-center gap-2 p-2">
                    <h1 class="font-semibold">Форма заявки:</h1>
                    <h1 class="requestFromJS">{{ data.requestType }}</h1>
                </div>
                <div class="flex items-center gap-2 p-2">
                    <h1 class="font-semibold">№ БК:</h1>
                    <h1 class="requestFromJS">{{ data.numberBK }}</h1>
                </div>
                <div class="flex items-center gap-2 p-2">
                    <h1 class="font-semibold">Трейдер:</h1>
                    <h1 class="requestFromJS">{{ data.traderName }}</h1>
                </div>
            </div>
            <div class="flex items-center justify-between p-10 py-5">
                <div class="flex items-center gap-2 p-2">
                    <h1 class="font-semibold">Дата подачи:</h1>
                    <h1 class="requestFromJS">{{ data.dateOfRequest }}</h1>
                </div>
                <div class="flex items-center gap-2 p-2">
                    <h1 class="font-semibold">№ заявки:</h1>
                    <h1 class="requestFromJS">{{ data.numberRequest }}</h1>
                </div>
                <div class="flex items-center gap-2 p-2">
                    <h1 class="font-semibold">Тип заявки:</h1>
                    <h1 class="requestFromJS">{{ data.typeRequest }}</h1>
                </div>
            </div>
            <div class="flex items-center py-5 gap-2 px-10">
                <h1 class="font-semibold">Клиент:</h1>
                <h1 class="requestFromJS">{{ data.client }}</h1>
            </div>

            <!-- Сведение по товару Start -->
            <div class="p-10">
                <h1 class="headersOfNewSections">Сведения по товару</h1>
                <div class="defaultFlex gap-5">
                    <div class="forms block w-full">
                        <h1 class="formLabel mb-2">Наименование товара <span class="text-red-500">*</span></h1>
                        <Dropdown v-model="selectedNameItem" :options="nameItems" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                    <div class="forms block w-full">
                        <h1 class="formLabel mb-2">Марка товара <span class="text-red-500">*</span></h1>
                        <Dropdown v-model="selectedMark" :options="marksItems" optionLabel="name" placeholder="Не выбрано"
                            class="w-full md:w-14rem" />
                    </div>
                </div>
                <div class="defaultFlex gap-5">
                    <div class="forms block w-full">
                        <h1 class="formLabel mb-2">Группа товара <span class="text-red-500">*</span></h1>
                        <Dropdown v-model="selectedGroupItem" :options="groupsItem" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                    <div class="forms block w-full">
                        <h1 class="formLabel mb-2">ТНВЭД <span class="text-red-500">*</span></h1>
                        <Dropdown v-model="selectedTnved" :options="tnveds" optionLabel="name" placeholder="Не выбрано"
                            class="w-full md:w-14rem" />
                    </div>
                </div>
                <!-- Full sections -->
                <section>
                    <div class="forms">
                        <h1 class="w-1/2">Наименование (рус)</h1>
                        <InputText class="w-full" :value="data.nameRus" />
                    </div>
                    <div class="forms">
                        <h1 class="w-1/2">Наименование (узб)</h1>
                        <InputText class="w-full" :value="data.nameUzb" />
                    </div>
                    <div class="forms">
                        <h1 class="w-1/2">Секция торгов</h1>
                        <Dropdown v-model="selectedSectionTorg" :options="torgSections" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                    <div class="forms">
                        <h1 class="w-1/2">Группа товаров</h1>
                        <Dropdown v-model="selectedItemGroup" :options="groupItems" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                    <div class="forms">
                        <h1 class="w-1/2">Соответ-т товару из БКЛ</h1>
                        <Dropdown v-model="selectedBKLItem" :options="bklItems" optionLabel="name" placeholder="Не выбрано"
                            class="w-full md:w-14rem" />
                    </div>
                </section>
                <!-- Full sections -->
                <!-- 1/2 sections -->
                <div class="defaultFlex gap-12">
                    <div class="forms w-full">
                        <h1 class="w-1/2">Количество</h1>
                        <InputText class="w-full" :value="data.size" />
                    </div>
                    <div class="forms w-full">
                        <h1 class="w-1/2">Ед. измерения</h1>
                        <Dropdown v-model="selectedSizeCurrency" :options="sizeCurrencies" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                </div>
                <div class="defaultFlex gap-12">
                    <div class="forms w-full">
                        <h1 class="w-1/2">Тип упаковки</h1>
                        <Dropdown v-model="selectedTypeBoxing" :options="boxingTypes" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                    <div class="forms w-full">
                        <h1 class="w-1/2">Ед. измерения упаковки</h1>
                        <Dropdown v-model="selectedSizeCurrencyB" :options="sizeCurrenciesB" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                </div>
                <div class="defaultFlex gap-12">
                    <div class="forms w-full">
                        <h1 class="w-1/2">Цена</h1>
                        <InputText class="w-full" :value="data.price" />
                    </div>
                    <div class="forms w-full">
                        <h1 class="w-1/2">Денежная единица</h1>
                        <Dropdown v-model="selectedCurrency" :options="currencies" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                </div>
                <div class="defaultFlex gap-12">
                    <div class="forms w-full">
                        <h1 class="w-1/2">Форма оплаты</h1>
                        <Dropdown v-model="selectedFormPayment" :options="paymentForms" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                    <div class="forms w-full">
                        <h1 class="w-1/2">Тип сделки</h1>
                        <Dropdown v-model="selectedTypeTrading" :options="tradingTypes" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                </div>
                <!-- 1/2 sections -->
            </div>
            <!-- Сведение по товару End -->
            <!-- Базиз поставки Start -->
            <div class="p-10">
                <h1 class="headersOfNewSections">Базиз поставки</h1>

                <!-- 1/2 sections -->
                <div class="defaultFlex gap-12">
                    <div class="forms w-full">
                        <h1 class="w-1/2">Место нахождения товара (рус)</h1>
                        <InputText class="w-full" :value="data.addressRus" />
                    </div>
                    <div class="forms w-full">
                        <h1 class="w-1/2">Место нахождения товара (узб)</h1>
                        <InputText class="w-full" :value="data.addressUzb" />
                    </div>
                </div>
                <div class="defaultFlex gap-12">
                    <div class="forms w-full">
                        <h1 class="w-1/2">Страна происхождения</h1>
                        <Dropdown v-model="selectedCountryHappens" :options="happenCountries" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                    <div class="forms w-full">
                        <h1 class="w-1/2">Базиз поставки</h1>
                        <Dropdown v-model="selectedBasisOrdering" :options="orderingBasis" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                </div>
                <div class="defaultFlex gap-12">
                    <div class="forms w-full">
                        <h1 class="w-1/2">Срок поставки</h1>
                        <div class="w-full">
                            <div class="p-inputgroup flex-1">
                                <InputText :value="data.orderDeadline" />
                                <span class="p-inputgroup-addon">банк. дней</span>
                            </div>
                        </div>
                    </div>
                    <div class="forms w-full">
                        <h1 class="w-1/2">Срок действия заявки</h1>
                        <div class="w-full">
                            <div class="p-inputgroup flex-1">
                                <InputMask id="basic" mask="99-99-9999" placeholder="12-12-1212" />
                                <span class="p-inputgroup-addon">
                                    <i class="pi pi-calendar"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="defaultFlex gap-12">
                    <div class="forms w-full">
                        <h1 class="w-1/2">Размер лота</h1>
                        <InputText class="w-full" :value="data.sizeLot" />
                    </div>
                    <div class="forms w-full">
                        <h1 class="w-1/2">Количество</h1>
                        <InputText class="w-full" :value="data.sizeLLot" />
                    </div>
                </div>
                <!-- 1/2 sections -->
            </div>
            <!-- Базиз поставки End -->
            <!-- Доп информация Start -->
            <div class="">
                <h1 class="headersOfNewSections">Дополнительная информация</h1>
                <div class="forms w-full">
                    <h1 class="w-1/2">Особые условия (Примечание) (рус)</h1>
                    <Textarea class="w-full" />
                </div>
                <div class="forms w-full">
                    <h1 class="w-1/2">Особые условия (Примечание) (узб)</h1>
                    <Textarea class="w-full" />
                </div>
                <div class="defaultFlex gap-12">
                    <div class="forms w-full">
                        <h1 class="w-1/2">% залога с продавца</h1>
                        <Dropdown v-model="selectedPercentFromSeller" :options="percentsSeller" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                    <div class="forms w-full">
                        <h1 class="w-1/2">% залога с продавца</h1>
                        <Dropdown v-model="selectedPercentFromBuyer" :options="percentsBuyer" optionLabel="name"
                            placeholder="Не выбрано" class="w-full md:w-14rem" />
                    </div>
                </div>
            </div>
            <!-- Доп информация End -->
            <!-- Фото товара Start -->
            <div>
                <h1 class="headersOfNewSections">Фото товара</h1>
                <div class="defaultFlex justify-center py-5 gap-12">
                    <div class="imgDiv">
                        <img :src="data.imgSource" class="w-1/3 mx-auto" alt="">
                        <h1 class="imgName">{{ data.imgName }}</h1>
                    </div>
                    <div class="imgDiv">
                        <img :src="data.imgSource" class="w-1/3 mx-auto" alt="">
                        <h1 class="imgName">{{ data.imgName }}</h1>
                    </div>
                    <div class="imgDiv">
                        <img :src="data.imgSource" class="w-1/3 mx-auto" alt="">
                        <h1 class="imgName">{{ data.imgName }}</h1>
                    </div>
                </div>
            </div>
            <!-- Фото товара End -->
            <!-- Документы к заявке Start -->
            <div>
                <h1 class="headersOfNewSections">Сопроводительные документы к заявке</h1>
                <div class="defaultFlex justify-center py-5 gap-12">
                    <div class="imgDiv w-1/4">
                        <img :src="data.pdfDocument" alt="">
                        <h1 class="imgName">{{ data.pdfDocumentName }}</h1>
                    </div>
                    <div class="imgDiv w-1/4">
                        <img :src="data.wordDocument" alt="">
                        <h1 class="imgName">{{ data.wordDocumentName }}</h1>
                    </div>
                    <div class="imgDiv w-1/4">
                        <img :src="data.imgDocument" alt="">
                        <h1 class="imgName">{{ data.imgDocumentName }}</h1>
                    </div>
                    <div class="imgDiv w-1/4">
                        <img :src="data.scannedDocument" alt="">
                        <h1 class="imgName">{{ data.scannedDocumentName }}</h1>
                    </div>
                </div>
            </div>
            <!-- Документы к заявке End -->
            <!-- Поля зап. маклером Start -->
            <div>
                <h1 class="headersOfNewSections">Поля, заполняемые главным маклером</h1>
                <div class="defaultFlex gap-5">
                    <div class="forms w-full">
                        <h1 class="w-1/2">Понижение цены не менее,%</h1>
                        <InputText class="w-full" />
                    </div>
                    <div class="forms w-full">
                        <h1 class="w-1/2">Повышение цены не более,%</h1>
                        <InputText class="w-full" />
                    </div>
                </div>
                <div class="forms">
                    <h1 class="w-1/3">Статус</h1>
                    <div class="flex items-center">
                        <RadioButton v-model="status" inputId="agree" value="agree" />
                        <label for="agree" class="ml-2">Утвердить</label>
                    </div>
                    <div class="flex items-center mx-3">
                        <RadioButton v-model="status" inputId="disagree" value="disagree" />
                        <label for="disagree" class="ml-2">Отклонить</label>
                    </div>
                </div>
                <div class="forms w-full">
                    <h1 class="w-1/2">Пояснение к решению</h1>
                    <Textarea class="w-full" />
                </div>
                <div class="forms w-full">
                    <h1 class="w-1/2">Код подтверждения действия <span class="text-red-500">*</span></h1>
                    <InputText type="password" class="w-full" />
                </div>
            </div>
            <!-- Поля зап. маклером End -->
            <!-- Buttons Start -->
            <div class="flex items-center gap-8 py-10 justify-end">
                <Button label="Отмена" severity="info" />
                <Button label="Сохранить" severity="success" />
            </div>
            <!-- Buttons End -->
            <!-- Form end -->
        </div>
    </div>
</template>
<script>
import { data } from '@/assets/js/Moderator/waitingRequestsView';
import InputText from "primevue/inputtext";

export default {
    data() {
        return {
            data: data
        };
    }
};
</script>

<script setup>
import { ref } from "vue";

// Не забудь импортировать { ref }
const status = ref('');

const selectedNameItem = ref();
const nameItems = ref([
    { name: 'Сталь прокат плоский' }
]);

const selectedMark = ref();
const marksItems = ref([
    { name: 'Brbalo brbalo', },
]);

const selectedGroupItem = ref();
const groupsItem = ref([
    { name: 'Сельхозтехника', },
]);
const selectedTnved = ref();
const tnveds = ref([
    { name: '230049100 - Комбикорма', },
]);
const selectedSectionTorg = ref();
const torgSections = ref([
    { name: 'Секция реализации  конфискованного имущества по решению суда', },
]);
const selectedItemGroup = ref();
const groupItems = ref([
    { name: 'Секция реализации работ', },
]);
const selectedBKLItem = ref();
const bklItems = ref([
    { name: 'мясо', },
]);
const selectedSizeCurrency = ref();
const sizeCurrencies = ref([
    { name: 'тонна', },
    { name: 'кг', },
    { name: 'мг', },
]);
const selectedSizeCurrencyB = ref();
const sizeCurrenciesB = ref([
    { name: 'тонна', },
    { name: 'кг', },
    { name: 'мг', },
]);
const selectedTypeBoxing = ref();
const boxingTypes = ref([
    { name: 'канистра', },
]);
const selectedCurrency = ref();
const currencies = ref([
    { name: 'сум', },
]);
const selectedFormPayment = ref();
const paymentForms = ref([
    { name: 'б/н', },
]);
const selectedTypeTrading = ref();
const tradingTypes = ref([
    { name: 'Форвард', },
]);
const selectedCountryHappens = ref();
const happenCountries = ref([
    { name: 'Узбекистан', },
]);
const selectedBasisOrdering = ref();
const orderingBasis = ref([
    { name: 'EXW - самовывоз', },
]);
const selectedPercentFromSeller = ref();
const percentsSeller = ref([
    { name: '0', },
]);
const selectedPercentFromBuyer = ref();
const percentsBuyer = ref([
    { name: '3', },
]);
</script>

<style>
@import url('../../assets/css/Moderator/waitingRequestsView.css');
</style>
