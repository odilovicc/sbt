export const ProductService = {
  getProductsData() {
    return [
      {
        number: "1",
        nameProduct: "Портландцемент",
        typeProduct: "Металлы, металлопрокат",
        tariff: "Кластерная продукция (0.23%)",
        minimise: "0 %",
        maximize: "10 %",
        amountSessions: "2",
        lykvied: true,
        BklOn: true,
        sizeCurrency: "т",
      },
      {
        number: "1",
        nameProduct: "Портландцемент",
        typeProduct: "Металлы, металлопрокат",
        tariff: "Кластерная продукция (0.23%)",
        minimise: "0 %",
        maximize: "10 %",
        amountSessions: "2",
        lykvied: true,
        BklOn: true,
        sizeCurrency: "т",
      },
      {
        number: "1",
        nameProduct: "Портландцемент",
        typeProduct: "Металлы, металлопрокат",
        tariff: "Кластерная продукция (0.23%)",
        minimise: "0 %",
        maximize: "10 %",
        amountSessions: "2",
        lykvied: true,
        BklOn: true,
        sizeCurrency: "т",
      },
      {
        number: "1",
        nameProduct: "Портландцемент",
        typeProduct: "Металлы, металлопрокат",
        tariff: "Кластерная продукция (0.23%)",
        minimise: "0 %",
        maximize: "10 %",
        amountSessions: "2",
        lykvied: true,
        BklOn: true,
        sizeCurrency: "т",
      },
      {
        number: "1",
        nameProduct: "Портландцемент",
        typeProduct: "Металлы, металлопрокат",
        tariff: "Кластерная продукция (0.23%)",
        minimise: "0 %",
        maximize: "10 %",
        amountSessions: "2",
        lykvied: true,
        BklOn: true,
        sizeCurrency: "т",
      },
      {
        number: "1",
        nameProduct: "Портландцемент",
        typeProduct: "Металлы, металлопрокат",
        tariff: "Кластерная продукция (0.23%)",
        minimise: "0 %",
        maximize: "10 %",
        amountSessions: "2",
        lykvied: true,
        BklOn: true,
        sizeCurrency: "т",
      },
    ];
  },

  aboutProduct() {
    return [
      {
        number: "1",
        nameOfProduct: "2 сорт",
      },
      {
        number: "2",
        nameOfProduct: "	2 сорт 1 класс",
      },
      {
        number: "3",
        nameOfProduct: "2 сорт 2 класс",
      },
      {
        number: "4",
        nameOfProduct: "5-тип, 5-сорт, класс «Оддий» 2020г.",
      },
      {
        number: "5",
        nameOfProduct: "	4-тип, сорт-4, класс «Яхши»,ур.2018",
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },
  getAboutProductMini() {
    return Promise.resolve(this.aboutProduct().slice(0, 5));
  },
};
