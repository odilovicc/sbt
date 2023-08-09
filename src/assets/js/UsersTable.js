export const ProductService = {
  getProductsData() {
    return [
      {
        id: "1",
        number: "1",
        role: "Трейдер",
        login: "bk02001007",
        fio: "Кучаров Бахтиёр Бойкобилович",
        inventoryStatus: "Окончание срока действия",
      },
      {
        id: "2",
        number: "2",
        role: "Администратор",
        login: "admin",
        fio: "Латипов Сухроб Наимжонович",
        inventoryStatus: "Активный",
      },
      {
        id: "3",
        number: "3",
        role: "Аналитик",
        login: "analitik",
        fio: "Бурмистрова Ирина Николаевна",
        inventoryStatus: "Активный",
      },
      {
        id: "4",
        number: "4",
        role: "Бухгалтер",
        login: "bux",
        fio: "Рузметова Рано Рахимбаевна",
        inventoryStatus: "Активный",
      },
      {
        id: "5",
        number: "5",
        role: "Трейдер",
        login: "bk1",
        fio: "Broker",
        inventoryStatus: "Окончание срока действия",
      },
      {
        id: "6",
        number: "6",
        role: "Трейдер",
        login: "bk11",
        fio: "Broker",
        inventoryStatus: "Окончание срока действия",
      },
      {
        id: "7",
        number: "7",
        role: "Трейдер",
        login: "bk13",
        fio: "Broker",
        inventoryStatus: "Активный",
      },
      {
        id: "8",
        number: "8",
        role: "Трейдер",
        login: "bk15",
        fio: "Broker",
        inventoryStatus: "Окончание срока действия",
      },
      {
        id: "9",
        number: "9",
        role: "Трейдер",
        login: "bk18",
        fio: "Broker",
        inventoryStatus: "Окончание срока действия",
      },
      {
        id: "10",
        number: "10",
        role: "Трейдер",
        login: "bk17",
        fio: "Broker",
        inventoryStatus: "Активный",
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },
};
