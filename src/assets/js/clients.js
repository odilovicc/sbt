export const exchangesTeam = {
    getTeam() {
        return [
            {
                id: '1',
                number: '1',
                name: 'MChJ "ULUG-EL',
                date: '	12.12.2020 г.',
                inp: '306593983',
                filial: '-',
                all: '0,00',
                bron: '0,00',
                free: '0,00',
                clientstatus: 'Новый клиент',
            },
            
            {
                id: '2',
                number: '2',
                name: 'MChJ "ULUG-EL',
                date: '	12.12.2020 г.',
                inp: '306593983',
                filial: 'AJ "Respublika ko"p tarmoqli agrosanoat birjasi"',
                all: '	13 056 254 553,20',
                bron: '7 957 415 116,20',
                free: '5 098 839 437,00',
                bk:'БК-544',
                clientstatus: 'Активный'
            },
            {
                id: '3',
                number: '3',
                name: 'MChJ "ULUG-EL',
                date: '	12.12.2020 г.',
                inp: '306593983',
                filial: 'AJ "Respublika ko"p tarmoqli agrosanoat birjasi"',
                all: '0',
                bron: '0',
                free: '0',
                bk:'БК-544',
                clientstatus: 'Заблокирован'
            },
            
        ];
    },

    getTeamMini() {
        return Promise.resolve(this.getTeam().slice(0, 10));
    },
};

