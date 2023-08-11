export const CompanyClients = {
    getClientsData() {
        return [
            {
                id: '1',
                number: '1',
                client: '	MChJ "ULUG-EL"',
                broker: 'bk123',
                status: 'Новый',
                numbk: '361'
            },
            {
                id: '1',
                number: '1',
                client: '	MChJ "ULUG-EL"',
                broker: 'bk123',
                status: 'На одобрении брокера'
            },
            {
                id: '1',
                number: '1',
                client: '	MChJ "ULUG-EL"',
                broker: 'bk123',
                status: 'Отклонен'
            },
            {
                id: '1',
                number: '1',
                client: '	MChJ "ULUG-EL"',
                broker: 'bk123',
                status: 'Одобрен'
            },
        ];
    },

    getClientsMini() {
        return Promise.resolve(this.getClientsData().slice(0, 5));
    }
};

