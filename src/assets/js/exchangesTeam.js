export const exchangesTeam = {
    getTeam() {
        return [
            {
                id: '1',
                number: '1',
                nomer: '02001007',  
                name: 'MChJ "ULUG-EL',
                teamstatus: 'Активный',
                yuradress: 'AJ "Respublika kop tarmoqli agrosanoat birjasi',
                filial: 'Паркентский р-н, п.Хисарак'
            },
            {
                id: '2',
                number: '2',
                nomer: '02001007',  
                name: 'XK "AKROM-EZOZ SERVIS"',
                teamstatus: 'Активный',
                yuradress: 'AJ "Respublika kop tarmoqli agrosanoat birjasi',
                filial: 'Кибрайский р-н, ул.Сичков'
            },
            {
                id: '3',
                number: '3',
                nomer: '02001007',  
                name: 'MChJ "QIBRAY MADAD SERVIS"',
                teamstatus: 'Активный',
                yuradress: 'MchJ "Resurs tamirlash zaxira"',
                filial: 'г.Карши ул.Таймир 34'
            },
            {
                id: '4',
                number: '4',
                nomer: '02001007',  
                name: '	XK "FALAK-SARI"',
                teamstatus: 'Новый член биржи',
                yuradress: 'MchJ "Resurs tamirlash zaxira"',
                filial: '	г.Карши 3-микрорайон'
            },
            {
                id: '5',
                number: '5',
                nomer: '02001007',  
                name: 'MChJ "ASL ZAMON QURILISH"',
                teamstatus: 'Новый член биржи',
                yuradress: 'MchJ "Resurs tamirlash zaxira"',
                filial: '		Чирокчинский р-н ул.У.Бозоров 70'
            },
            {
                id: '6',
                number: '6',
                nomer: '02001007',  
                name: '	MChJ "KASPIY INVEST"',
                teamstatus: 'Отказан',
                yuradress: 'MchJ "Resurs tamirlash zaxira"',
                filial: '		Чирокчинский р-н ул.У.Бозоров 70'
            },
            {
                id: '6',
                number: '6',
                nomer: '02001007',  
                name: '	MChJ "KASPIY INVEST"',
                teamstatus: 'Неуплата комиссионных сборов',
                yuradress: 'MchJ "Resurs tamirlash zaxira"',
                filial: '		Чирокчинский р-н ул.У.Бозоров 70'
            },
            {
                id: '6',
                number: '6',
                nomer: '02001007',  
                name: '	MChJ "KASPIY INVEST"',
                teamstatus: 'Неполнота предоставленных документов',
                yuradress: 'MchJ "Resurs tamirlash zaxira"',
                filial: '		Чирокчинский р-н ул.У.Бозоров 70'
            },
            {
                id: '6',
                number: '6',
                nomer: '02001007',  
                name: '	MChJ "KASPIY INVEST"',
                teamstatus: 'Неактивен по прочим причинам',
                yuradress: 'MchJ "Resurs tamirlash zaxira"',
                filial: '		Чирокчинский р-н ул.У.Бозоров 70'
            },
            {
                id: '6',
                number: '6',
                nomer: '02001007',  
                name: '	MChJ "KASPIY INVEST"',
                teamstatus: 'Заблокирован сотрудником РКП',
                yuradress: 'MchJ "Resurs tamirlash zaxira"',
                filial: '		Чирокчинский р-н ул.У.Бозоров 70'
            },
        ];
    },

    getTeamMini() {
        return Promise.resolve(this.getTeam().slice(0, 10));
    },
};

