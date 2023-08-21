export const ProductService = {
    getProductsData() {
      return [
        {
          number: '1',
          client: 'bk2233',
          date: '12.12.2021',
          assignmentStatus: 'Новый'
        },
        {
          number: '2',
          client: 'bk2233',
          date: '12.12.2021',
          assignmentStatus: 'Использован'
        },
      ];
    },
  
    getProductsMini() {
      return Promise.resolve(this.getProductsData().slice(0, 5));
    },
  };
  