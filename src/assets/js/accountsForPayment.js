export const ProductService = {
  getProductsData() {
    return [
      {
        number: '1',
        group: 'биржевой сбор',
        numberGroup: '№ 1 от 07.01.2021 г.',
        contract: '№ 359/3 от 12.03.2020 г.',
        giver: 'ООО Shovot Ulgurji Savdo',
        responsible: '214',
        budget: '432 000,00 сум',
        datePayment: '17.01.2021',
        numberStatus: 'Активен'
      },
      {
        number: '1',
        group: 'биржевой сбор',
        numberGroup: '№ 1 от 07.01.2021 г.',
        contract: '№ 359/3 от 12.03.2020 г.',
        giver: 'ООО Shovot Ulgurji Savdo',
        responsible: '214',
        budget: '432 000,00 сум',
        datePayment: '17.01.2021',
        numberStatus: 'Просрочен'
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },
};
