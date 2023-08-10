export const tariffs = {
    getTarifsData() {
        return [
            {
                id: '1',
                number: '1',
                name: 'Комбикорма',
                sumot: '0,00',
                sumdo: 'и выше',
                percent: '0,175 %'
            },
            {
                id: '2',
                number: '2',
                name: 'Минеральные удобрения',
                sumot: '0,00',
                sumdo: 'и выше',
                percent: '0,115 %'
            },
            {
                id: '3',
                number: '3',
                name: 'Экспортно-импортные, внутренние контракты с НДС',
                sumot: '0,00',
                sumdo: '50 000 000,00',
                percent: '0,23 %'
            },
            {
                id: '4',
                number: '4',
                name: 'Экспортно-импортные, внутренние контракты с НДС',
                sumot: '50 000 000,00',
                sumdo: '500 000 000,00',
                percent: '0,175 %'
            },
            {
                id: '5',
                number: '5',
                name: 'Экспортно-импортные, внутренние контракты с НДС',
                sumot: '500 000 000,00',
                sumdo: 'и выше',
                percent: '0,115 %'
            },
        ];
    },

    getTarifs() {
        return Promise.resolve(this.getTarifsData().slice(0, 5));
    },
};

