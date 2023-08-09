<template>
    <div class="wrapper-stepper mx-auto max-[640px]:w-[100vw]">
        <div class="stepper mx-auto w-full lg:w-1/2">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
            </div>

            <div class="stepper-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
                :class="{ 'current': step == item, 'success': step > item }" v-for="item in 3" :key="item">
                <div class="stepper-item-counter">
                    <img class="icon-success"
                        src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png" alt="">
                    <span class="number">{{ item }}</span>
                </div>
                <span class="stepper-item-title">Этап {{ item }}</span>
            </div>
        </div>

        <div class="stepper-content" v-for="item in 3" :key="item">
            <div class="stepper-pane w-full px-0 lg:px-24 py-14" v-if="step == item">
                <template v-if="step === 1">
                    <h1 class="text-2xl font-bold">Регистрация новый трейдер</h1>
                    <h1 class="text-lg mt-2 font-semibold text-black opacity-30 inline-block">Уже есть учетная запись?</h1>
                    <a href="#" class="ml-2 text-sky-600 text-lg mt-2 font-semibold opacity-100">Войти в систему</a>
                    <div class="shadow-lg p-4 lg:p-16 my-12">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, iusto. Tempora accusamus
                            corrupti
                            dolore iure quibusdam neque, reiciendis eveniet labore ipsum exercitationem officia cumque
                            facere
                            blanditiis repudiandae sequi voluptatibus ex culpa temporibus distinctio assumenda quae cum quis
                            recusandae. Fugiat nobis aliquam placeat repellendus ducimus totam officia iusto blanditiis
                            quidem
                            tempore sed ab cum aut, culpa architecto autem expedita. Quaerat eos accusamus nostrum,
                            recusandae
                            beatae sit eligendi. Eaque reprehenderit numquam dolorem nemo soluta expedita, vero tempore, cum
                            natus accusamus illum, nam ducimus quod cumque maiores vitae rerum nobis. Id assumenda saepe
                            dolorem
                            sapiente quia iusto hic aut. Aspernatur doloremque impedit, maxime corrupti vel similique,
                            incidunt
                            modi ducimus exercitationem aut adipisci amet officia aliquam voluptatibus dignissimos quibusdam
                            nisi necessitatibus. Dolore error et praesentium soluta ducimus nemo, obcaecati illum dolorem
                            ratione facere unde reiciendis adipisci deserunt, excepturi odit tempore iusto! Ullam, ab
                            itaque.
                            Soluta dolorem accusantium laborum esse, facere cum quia illum, velit, recusandae iusto id quo?
                            Maxime, deserunt accusantium consequuntur suscipit praesentium totam repellat iusto aut.
                            Sapiente
                            assumenda fugiat harum iure consequuntur, asperiores alias magni culpa, quo quisquam, expedita
                            eveniet iusto labore enim accusantium! Facilis, libero velit. Mollitia asperiores id quae neque
                            sapiente nesciunt, nihil quasi vel exercitationem aspernatur atque, porro autem.
                        </p>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" required type="checkbox" value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox"
                            class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300">Соглашаюсь с условиями
                            оферты</label>
                    </div>
                </template>
                <template v-else-if="step === 2">
                    <div class="w-full lg:w-1/2 mx-0 lg:mx-auto">
                        <form action="" class="flex flex-col justify-center gap- items-center" method="post">
                            <div class="w-full">
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Прикрепить открытый ключ
                                        ЭЦП</label>
                                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*"
                                        class="w-full mb-3" :maxFileSize="1000000" @upload="onUpload" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">ФИО руководителя</label>
                                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ФИО руководителя" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Наименование
                                        организации</label>
                                    <div class="flex items-center">
                                        <Dropdown v-model="compType" :options="type" optionLabel="name" placeholder="OOO"
                                            class="w-full md:w-14rem rounded-xl rounded-r-none border-r-0" />
                                        <InputText type="text"
                                            class="border-[#ced4da] z-50 w-full rounded-xl rounded-l-none" />
                                    </div>
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">ИНН</label>
                                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ИНН" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">ОКЭД</label>
                                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ОКЭД" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">ИНПО</label>
                                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ИНПО" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Cтранa</label>
                                    <Dropdown v-model="selectCountry" :options="country" optionLabel="name"
                                        placeholder="Страна" class="w-full" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Регион</label>
                                    <Dropdown v-model="selectRegion" :options="regions" optionLabel="name"
                                        placeholder="Регион" class="w-full" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Город</label>
                                    <Dropdown v-model="selectCity" :options="city" optionLabel="name" placeholder="Город"
                                        class="w-full" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Юридический адрес</label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Юридический адрес" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Должность руководителя</label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Должность руководителя" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Действующий на основании
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Действующий на основании" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Рабочий телефон
                                    </label>
                                    <InputMask id="basic" v-model="value" mask="999-99-999-99-99" class="w-full rounded-xl"
                                        placeholder="998-99-999-99-99" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Мобильный телефон
                                    </label>
                                    <InputMask id="basic" v-model="value" mask="999-99-999-99-99" class="w-full rounded-xl"
                                        placeholder="998-99-999-99-99" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Э-мэйл
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="E-mail" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Вебсайт
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Вебсайт" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Наименование банка
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Наименование банка" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">МФО
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl" placeholder="МФО" />
                                </div>
                                <div class="py-5">
                                    <label class="block text-900 font-medium mb-2">Расчетный счет
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Расчетный счет" />
                                </div>

                                <div class="px-5 py-2 shadow-xl rounded-xl">
                                    <div class="py-5">
                                        <label class="block text-900 font-medium mb-2">Паспортные данные</label>
                                        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*"
                                            class="w-full mb-3" :maxFileSize="1000000" @upload="onUpload" />
                                        <span class="text-red-600 text-sm">*Прикрепите отсканированный документ</span>
                                    </div>
                                    <div class="py-5">
                                        <label class="block text-900 font-medium mb-2">Устав</label>
                                        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*"
                                            class="w-full mb-3" :maxFileSize="1000000" @upload="onUpload" />
                                        <span class="text-red-600 text-sm">*Прикрепите отсканированный документ</span>
                                    </div>
                                    <div class="py-5">
                                        <label class="block text-900 font-medium mb-2">Guvohnoma</label>
                                        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*"
                                            class="w-full mb-3" :maxFileSize="1000000" @upload="onUpload" />
                                        <span class="text-red-600 text-sm">*Прикрепите отсканированный документ</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </template>
                <template v-else>
                    <div class="mx-auto w-1/2 text-center lg:text-start">
                        <h1 class="text-2xl font-bold block lg:flex items-center">Ваша заявка принята. <svg class="checkmark inline-block ml-0 lg:ml-4 w-10 h-10 my-6"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg></h1>
                        <p class="text-[#676767] mt-4">Ваша заявка на регистрацию отправлено. Логин и пароль будет отправлен на ваш указанный электронный адрес.</p>
                    </div>
                </template>
            </div>
        </div>

        <div class="controls flex justify-around">
            <button
                class="btn p-5 rounded-full text-2xl bg-[#75CC65] text-white border-2 border-transparent transition duration-200 hover:border-[#75CC65] hover:bg-white hover:text-[#75CC65]"
                @click="step--" :disabled="step == 1"><i class="fas fa-arrow-left"></i></button>
            <button type="submit"
                class="btn p-5 rounded-full text-2xl bg-[#75CC65] text-white border-2 border-transparent transition duration-200 hover:border-[#75CC65] hover:bg-white hover:text-[#75CC65]"
                @click="step++" :disabled="step == 3"><i class="fas fa-arrow-right"></i> </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            step: 1
        };
    },
    computed: {
        stepperProgress() {
            return (100 / 3) * (this.step - 1) + '%';
        }
    }
}

</script>
<script setup>
import { ref } from "vue";

const compType = ref();
const type = ref([
    { name: 'OOO', code: 'OOO' },
    { name: 'СП', code: 'SP' },
    { name: 'БК', code: 'BK' },
    { name: 'ОАО', code: 'OAO' },
    { name: 'ДП', code: 'DP' },
    { name: 'ФХ', code: 'FX' }
]);
const selectCountry = ref();
const country = ref([
    { name: 'Узбекистан', code: 'UZB' },
    { name: 'Казахстан', code: 'KZX' },
    { name: 'Россия', code: 'RUS' },
]);
const selectRegion = ref();
const regions = ref([
    { name: 'Ташкент', code: 'TASH' },
    { name: 'Бухара', code: 'BUX' },
    { name: 'Самарканд', code: 'SMR' },
]);
const selectCity = ref();
const city = ref([
    { name: 'Tashkent City', code: 'TASHC' },
    { name: 'Кибрай', code: 'QB' },
    { name: 'Газалкент', code: 'GZL' },
]);
</script>
<style>
@import url('../../assets/RegPeopleBirja.css');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
</style>