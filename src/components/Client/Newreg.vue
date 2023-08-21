<template>
  <div class="w-[90vw] mx-auto my-10">
    <div class="flex items-center">
      <h1 class="text-2xl font-semibold my-10">Договор поручение</h1>
      <Button label="НОВЫЙ поручитель" class="ml-auto" icon="pi pi-plus" @click="vision = true" severity="info" />
    </div>
    <Dialog v-model:visible="vision" modal header="Новый поручениe" :style="{ width: '50vw' }">
      <div class="flex items-center gap-5">
        <div class="w-1/2">
          <h1 class="mb-2">Брокер <span class="text-red-500">*</span></h1>
          <Dropdown v-model="selectedBroker" :options="brokers" optionLabel="name" placeholder="Не выбрано"
            class="w-full md:w-14rem" />
        </div>
        <div class="w-1/2">
          <h1 class="mb-2">Срок <span class="text-red-500">*</span></h1>
          <div class="card flex justify-center">
            <InputText class="w-full md:w-14rem" />
          </div>
        </div>
      </div>
      <div class="p-5">
        <h1 class="mr-auto my-5">Документ*</h1>
        <div v-for="category in categories" :key="category.key" class="flex items-center my-2">
          <RadioButton v-model="selectedCategory" :inputId="category.key" name="pizza" :value="category.name" />
          <label :for="category.key" class="ml-2">
            {{ category.name }}
          </label>
        </div>
      </div>
      <div>
        <h1>Документ товара <span class="text-red-500">*</span></h1>
        <div class="flex items-center py-5">
          <label class="w-full">
            <span class="text-red-500"></span>

            <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000"
              @upload="onUpload" class="w-full mr-auto" />
          </label>
        </div>
      </div>
      <div>
        <h1>Гаранитиное письмо <span class="text-red-500">*</span></h1>
        <div class="flex items-center py-5">
          <label class="w-full">
            <span class="text-red-500"></span>

            <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000"
              @upload="onUpload" class="w-full mr-auto" />
          </label>
        </div>
      </div>
      <template #footer>
        <Button severity="info" label="Отмена" />
        <Button severity="success" label="Сохранить" @click="show1()" />
        <Toast />
      </template>
    </Dialog>

    <DataTable :value="products" tableStyle="min-width: 50rem" header="Договор поручение">
      <Column field="number" header="Name"></Column>
      <Column field="client" header="Брокер"></Column>
      <Column field="date" header="Срок"></Column>
      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.assignmentStatus" :severity="getSeverity(slotProps.data)" />
        </template>
      </Column>
      <Column class="w-14">
        <template #body>
          <Button icon="pi pi-trash" severity="info" @click="visible = true" />
          <Dialog v-model:visible="visible" modal :style="{ width: '50vw' }">
            <div class="flex items-center flex-col">
              <img src="../../assets/Images/icons8-warning-48.png" class="my-5" alt="" />
                <h1>Удалить договор поручениe?</h1>
                <h1>Вы не сможете отменить это!</h1>
            </div>

            <template #footer>
              <div class="flex items-center justify-center">
                <Button label="да удалить!" severity="success" @click="show()" />
                <Button label="Отмена" severity="info"  />
                <Toast />
              </div>
            </template>
          </Dialog>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { ProductService } from '@/assets/js/Client/newreg'

onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data))
})
const selectedBroker = ref()
const brokers = ref([
  { name: 123, code: 123 },
  { name: 221, code: 221 },
  { name: 124323, code: 124323 },
])

const selectedCategory = ref('Production')
const categories = ref([
  { name: 'Складская справка' },
  { name: 'Документ качества (сертификат, паспорт, ТУ)' },
])
const products = ref()
const visible = ref(false)
const vision = ref(true)
const getSeverity = (product) => {
  switch (product.assignmentStatus) {
    case 'Новый':
      return 'success'

    case 'Использован':
      return 'danger'

    default:
      return null
  }
}
import { useToast } from 'primevue/usetoast'
const toast = useToast()
const show1 = () => {
  toast.add({
    severity: 'info',
    summary: 'Сохранено',
    detail: 'Успешно сохранено!',
    life: 3000,
  })
}
const show = () => {
  toast.add({
    severity: 'error',
    summary: 'Удалено',
    detail: 'Успешно удалено!',
    life: 3000,
  })
}
</script>
