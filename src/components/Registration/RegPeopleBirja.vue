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
                    <RegStepOne/>
                </template>
                <template v-else-if="step === 2">
                    <div class="w-full lg:w-1/2 mx-0 lg:mx-auto">
                        <form action="" class="flex justify-center" method="post">
                            <div class="w-full">
                                <div class="py-5">
                                    <label class="text-900 font-medium mb-2">Прикрепить открытый ключ
                                        ЭЦП</label>
                                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*"
                                        class="w-full mb-3" :maxFileSize="1000000" @upload="onUpload" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">ФИО руководителя</label>
                                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ФИО руководителя" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Наименование
                                        организации</label>
                                    <div class="flex items-center">
                                        <Dropdown v-model="compType" :options="type" optionLabel="name" placeholder="OOO"
                                            class="w-full md:w-14rem rounded-xl rounded-r-none border-r-0" />
                                        <InputText type="text"
                                            class="border-[#ced4da] z-50 w-full rounded-xl rounded-l-none" />
                                    </div>
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">ИНН</label>
                                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ИНН" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">ОКЭД</label>
                                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ОКЭД" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">ИНПО</label>
                                    <InputText type="text" class="w-full mb-3 rounded-xl" placeholder="ИНПО" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Cтранa</label>
                                    <Dropdown v-model="selectCountry" :options="country" optionLabel="name"
                                        placeholder="Страна" class="w-full" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Регион</label>
                                    <Dropdown v-model="selectRegion" :options="regions" optionLabel="name"
                                        placeholder="Регион" class="w-full" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Город</label>
                                    <Dropdown v-model="selectCity" :options="city" optionLabel="name" placeholder="Город"
                                        class="w-full" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Юридический адрес</label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Юридический адрес" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Должность руководителя</label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Должность руководителя" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Действующий на основании
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Действующий на основании" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Рабочий телефон
                                    </label>
                                    <InputMask id="basic" v-model="value" mask="999-99-999-99-99" class="w-full rounded-xl"
                                        placeholder="998-99-999-99-99" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Мобильный телефон
                                    </label>
                                    <InputMask id="basic" v-model="value" mask="999-99-999-99-99" class="w-full rounded-xl"
                                        placeholder="998-99-999-99-99" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Э-мэйл
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="E-mail" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Вебсайт
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Вебсайт" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Наименование банка
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Наименование банка" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">МФО
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl" placeholder="МФО" />
                                </div>
                                <div class="py-5">
                                    <label class=" text-900 font-medium mb-2">Расчетный счет
                                    </label>
                                    <InputText type="text" class="border-[#ced4da] w-full rounded-xl"
                                        placeholder="Расчетный счет" />
                                </div>

                                <div class="px-5 py-2 shadow-xl rounded-xl">
                                    <div class="py-5">
                                        <label class=" text-900 font-medium mb-2">Паспортные данные</label>
                                        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*"
                                            class="w-full mb-3" :maxFileSize="1000000" @upload="onUpload" />
                                        <span class="text-red-600 text-sm">*Прикрепите отсканированный документ</span>
                                    </div>
                                    <div class="py-5">
                                        <label class=" text-900 font-medium mb-2">Устав</label>
                                        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*"
                                            class="w-full mb-3" :maxFileSize="1000000" @upload="onUpload" />
                                        <span class="text-red-600 text-sm">*Прикрепите отсканированный документ</span>
                                    </div>
                                    <div class="py-5">
                                        <label class=" text-900 font-medium mb-2">Guvohnoma</label>
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
                        <h1 class="text-2xl font-bold  lg:flex items-center">Ваша заявка принята. <svg class="checkmark inline- ml-0 lg:ml-4 w-10 h-10 my-6"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg></h1>
                        <p class="text-[#676767] mt-4">Ваша заявка на регистрацию отправлено. Логин и пароль будет отправлен на ваш указанный электронный адрес.</p>
                    </div>
                </template>
            </div>
        </div>

        <div class="flex justify-around">
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
import RegStepOne from './RegSteps/RegStepOne.vue';
export default {
    components: [
        RegStepOne
    ],
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

<style scoped>
@import url('../../assets/RegPeopleBirja.css');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/fontawesome.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
</style>