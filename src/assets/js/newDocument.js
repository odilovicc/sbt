export const newDocument = {
        getDocumentData() {
            return [
                {
                    trades: 'В-Я',
                    produces: '214',
                    produceCompany: 'ООО "UCHQO`RG`ON YOG"',
                    buys: '542',
                    buysCompany: 'ООО СП "UZTEX UCHKURGAN"',
                    item: 'Бутылка бытовая (стекло) пищевого назначения, марка К-1-КПм-500, емк. 0,5л',
                    size: '266 272',
                    sizeCurrency: 'шт',
                    price: '180,18',
                    priceCurrency: 'сум',
                    sum: '47 976 888,96',
                    sumCurrrency: 'сум',
                    basis: 'DAF',
                    basisSrok: '60 дней',
                    punkt: 'ст.ж/д Сарыагач'
                },
            ];
        },

        getDocumentDataMini() {
            return Promise.resolve(this.getDocumentData().slice(0, 5));
        },
    };

    