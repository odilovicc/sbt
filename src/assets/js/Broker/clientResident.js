export const ProductService = {
  getProductsData() {
    return [
      {
        number: "1",
        nameClient: 'MCHJ "AKUMSHIN SAVDO"',
        clientRCP: false,
        typeClient: "Юридичиское лицо",
        innClient: "300990218",
        clientStatus: "Активен",
      },
      {
        number: "1",
        nameClient: 'MCHJ "AKUMSHIN SAVDO"',
        clientRCP: true,
        typeClient: "Юридичиское лицо",
        innClient: "300990218",
        clientStatus: "Новый",
      },
      {
        number: "1",
        nameClient: 'MCHJ "AKUMSHIN SAVDO"',
        clientRCP: true,
        typeClient: "Юридичиское лицо",
        innClient: "300990218",
        clientStatus: "Заблокирован сотрудником РКП",
      },
      {
        number: "1",
        nameClient: 'MCHJ "AKUMSHIN SAVDO"',
        clientRCP: false,
        typeClient: "Юридичиское лицо",
        innClient: "300990218",
        clientStatus: "Заблокирован сотрудником БК",
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },
};
