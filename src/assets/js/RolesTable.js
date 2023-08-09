export const Roles = {
    getRoles() {
        return [
            {
                id: '1',
                number: '1',
                role: 'Главный маклер'
            },
            {
                id: '2',
                number: '2',
                role: 'Администратор'
            },
            {
                id: '3',
                number: '3',
                role: 'Трейдер'
            },
            {
                id: '4',
                number: '4',
                role: 'Руководитель БК'
            },
            {
                id: '5',
                number: '5',
                role: 'Наблюдатель'
            },
            {
                id: '6',
                number: '6',
                role: 'Бухгалтер'
            },
            {
                id: '7',
                number: '7',
                role: 'Региональный маклер'
            },
            {
                id: '8',
                number: '8',
                role: 'Аналитик'
            },
            {
                id: '9',
                number: '9',
                role: 'Специалист РКП'
            },
            {
                id: '10',
                number: '10',
                role: 'Регистратор ТП'
            },
        ];
    },

    getRolesMini() {
        return Promise.resolve(this.getRoles().slice(0, 10));
    },
}

