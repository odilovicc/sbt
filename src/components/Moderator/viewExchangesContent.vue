<template>
    <div class="w-[90vw] mx-auto my-10">
        <div class="flex gap-12">
            <div class="bg-[#1E1E1E] py-5 rounded-md shadow-xl">
                <header class="px-10 py-3 flex items-center">
                    <h1 class="font-medium text-xl">Просмотр биржевого контракта</h1>
                    <Button label="Вернуться в список" icon="pi pi-arrow-left" text class="ml-auto" />
                </header>
                <div class="px-10 py-5 ">
                    <table class="table w-full">
                        <tbody>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Контракт</td>
                                <td class=" pl-2 ">№ 359/3 от 12.03.2020 г.</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Статус</td>
                                <td class=" pl-2 ">на бирже</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Место регистрации</td>
                                <td class=" pl-2">AJ "Respublika ko'p tarmoqli agrosanoat birjasi"</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Тип торгов</td>
                                <td class=" pl-2 ">Биржевые торги</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">№ протокола торгов</td>
                                <td class=" pl-2 ">12</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Дата торгов</td>
                                <td class=" pl-2 ">17.01.2020 г.</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Вид сделок</td>
                                <td class=" pl-2 ">Спот</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Тип сделок</td>
                                <td class=" pl-2 ">Внутренний</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">БК продавца</td>
                                <td class=" pl-2 ">214 - MChJ "YOG`-MOY SAVDO"</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">БК покупателя</td>
                                <td class=" pl-2 ">471 - XK "SAIDMUROD INVEST"</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Трейдер-продавец</td>
                                <td class=" pl-2 ">Исмаилов Азиз Яхъяевич</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Трейдер-покупатель</td>
                                <td class=" pl-2 ">Kabulov Saidmurod Ergashovich</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Сумма</td>
                                <td class=" pl-2 " colspan="3">17 500 000,00 сум</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Товар</td>
                                <td class=" pl-2 " colspan="3">Шрот хлопковый</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Внешняя ссылка</td>
                                <td class=" pl-2 " colspan="3">
                                    https://agrobirja.uz/sebt/public/contract.php?contract=a8aece0882371f438c829bccb995a927
                                </td>
                            </tr>
                            <tr>
                                <th colspan="4">Стороны биржевого контракта</th>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Продавец</td>
                                <td class=" pl-2 ">Paxtakor Sifat Yog MCHJ</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Покупатель</td>
                                <td class=" pl-2 ">"QAYIRMA AGRO LYUKS" fermer xo`jaligi</td>
                            </tr>
                            <tr>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Биржевой сбор</td>
                                <td class=" pl-2 ">52 500,00 сум (0.3%)</td>
                                <td class="py-2 pr-5 pl-2  bg-[#CE93D8]">Биржевой сбор</td>
                                <td class=" pl-2 ">0,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Tree :value="nodes" class="w-1/2 md:w-30rem h-max shadow-xl border-0"></Tree>
        </div>
        <div class="rounded-md shadow-xl mt-14">
            <header class="px-10 py-3 flex items-center">
                <h1 class="font-medium text-xl">Начисления по контракту</h1>
                <Button label="Выписать счет" icon="pi pi-plus" text class="ml-auto" @click="visible = true" />


            </header>
            <hr>
            <DataTable :value="products" class="mt-14" tableStyle="min-width: 50rem">
                <Column field="number" header="№"></Column>
                <Column field="typePayment" header="Вид начисления"></Column>
                <Column field="for" header="Кому">
                    <template #body="payMent">
                        <h1>{{ payMent.data.for }}</h1>
                        <Tag :value="payMent.data.forWho"></Tag>
                    </template>
                </Column>
                <Column field="forPayment" header="К оплате">
                    <template #body="payMent">
                        <h1>{{ payMent.data.forPayment }}</h1>
                        <Tag :value="payMent.data.numberAccount" />
                    </template>
                </Column>
                <Column field="paid" header="Оплачено"></Column>
                <Column field="percent" header="%"></Column>
                <Column header="Статус">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.paymentStatus" :severity="getSeverity(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>
        <!-- Dialogs -->

        <Dialog v-model:visible="visible" modal header="Ввод нового счета на оплату" :style="{ width: '50vw' }">
            <div class="py-3">
                <label class="mr-5">Плательщик</label>
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="-- Выберите --"
                    class="w-full md:w-14rem" />
            </div>
            <div class="py-3">
                <label class="mr-5">Выбор счета:</label>
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="20208000400178912001" />
                <label for="ingredient1" class="ml-2 mr-5">АКБ InFinBank, р/с: 20208000400178912001</label>
                <RadioButton v-model="ingredient" inputId="indregient2" name="pizza" value="20208000200178912027" />
                <label for="indregient2" class="ml-2">АКБ InFinBank, р/с: 20208000200178912027</label>
            </div>
            <div class="py-3">
                <label class="mr-5">Оплата за:</label>
                <Dropdown v-model="paymentFor" :options="paymentForOptions" optionLabel="name" placeholder="-- Выберите --"
                    class="w-full md:w-14rem" />
            </div>
            <div class="py-3 flex items-center gap-3">
                <label>Срок оплаты:</label>
                <div class="p-inputgroup flex-1">
                    <InputText />
                    <span class="p-inputgroup-addon">дней</span>
                </div>
                <p class="text-sm text-black text-opacity-30">Автоматом берется с контракта</p>
            </div>

            <template #footer>
                <div class="flex items-center justify-center">
                    <Button severity="info" label="Отмена" />
                    <Button severity="success" label="Сохранить счёт" @click="show()" />
                    <Toast />
                </div>
            </template>
        </Dialog>

        <!-- Dialogs -->
    </div>
</template>
<script>
import { NodeService } from '@/assets/js/exchangesContentTree';
import { useToast } from "primevue/usetoast";

export default {
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
</script>
<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/assets/js/paymentsContact';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const getSeverity = (product) => {
    switch (product.paymentStatus) {
        case 'Оплачен':
            return 'success';

        case 'В процессе':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
// Dialog
const visible = ref(false);

// Dropdown
const selectedCity = ref();
const paymentFor = ref();
const cities = ref([
    { name: 'MChJ "YOG`-MOY SAVDO" (продавец)' },
    { name: 'OOO "PRESTIJ RILT" (покупатель)', }
]);
const paymentForOptions = ref([
    { name: 'Товары' },
    { name: 'Биржевой сбор РКП' },
    { name: 'Биржевой сбор' },
    { name: 'Штраф' },
    { name: 'Прочее' },
]);

// Radio Button
// Не забудь импортировать { ref }
const ingredient = ref('');

// Toast
const toast = useToast();

const show = () => {
    toast.add({ severity: 'success', summary: 'Успешно сохранено', detail: 'Счёт успешно сохранено', life: 3000 });
};
</script>