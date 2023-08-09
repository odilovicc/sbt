const signIn = 'Вход в систему';
const viewForm = 'Просмотр формы';
const newZapis = 'Новая запись';
const edit = 'Редактирование';
const deletion = 'Удаление';
const newRecord = 'Новая запись';

export const logs = {
    actions() {
        return [
            {
                id: '1',
                number: '1',
                date: '09.12.2020 14:13:06',
                user: 'user',
                typeAction: signIn,
                action: '/authorize.php',
                explanation: 'Вход по url: 192.168.10.206',
                ip: '192.168.10.17 Chrome 86.0'
            },
            {
                id: '2',
                number: '2',
                date: '07.12.2020 19:00:39',
                user: 'suxrob',
                typeAction: viewForm,
                action: 'Просмотр договора с залогом /offers/liquid_view.php?aid=27&id=23601',
                explanation: '№ 0809/144-Б от 08.09.2018 г.',
                ip: '192.168.10.17 Chrome 86.0'
            },
            {
                id: '3',
                number: '3',
                date: '07.12.2020 19:00:39',
                user: 'suxrob',
                typeAction: viewForm,
                action: 'Просмотр договора с залогом /offers/liquid_view.php?aid=27&id=23601',
                explanation: '№ 0809/144-Б от 08.09.2018 г.',
                ip: '192.168.10.17 Chrome 86.0'
            },
            {
                id: '4',
                number: '4',
                date: '07.12.2020 19:00:39',
                user: 'suxrob',
                typeAction: viewForm,
                action: 'Просмотр договора с залогом /offers/liquid_view.php?aid=27&id=23601',
                explanation: '№ 0809/144-Б от 08.09.2018 г.',
                ip: '192.168.10.17 Chrome 86.0'
            },
            {
                id: '5',
                number: '5',
                date: '07.12.2020 19:00:39',
                user: 'suxrob',
                typeAction: viewForm,
                action: 'Просмотр договора с залогом /offers/liquid_view.php?aid=27&id=23601',
                explanation: '№ 0809/144-Б от 08.09.2018 г.',
                ip: '192.168.10.17 Chrome 86.0'
            },
            {
                id: '6',
                number: '6',
                date: '07.12.2020 19:00:39',
                user: 'suxrob',
                typeAction: viewForm,
                action: 'Просмотр договора с залогом /offers/liquid_view.php?aid=27&id=23601',
                explanation: '№ 0809/144-Б от 08.09.2018 г.',
                ip: '192.168.10.17 Chrome 86.0'
            },
            {
                id: '7',
                number: '7',
                date: '07.12.2020 19:00:39',
                user: 'suxrob',
                typeAction: viewForm,
                action: 'Просмотр договора с залогом /offers/liquid_view.php?aid=27&id=23601',
                explanation: '№ 0809/144-Б от 08.09.2018 г.',
                ip: '192.168.10.17 Chrome 86.0'
            },
            {
                id: '8',
                number: '8',
                date: '07.12.2020 19:00:39',
                user: 'suxrob',
                typeAction: viewForm,
                action: 'Просмотр договора с залогом /offers/liquid_view.php?aid=27&id=23601',
                explanation: '№ 0809/144-Б от 08.09.2018 г.',
                ip: '192.168.10.17 Chrome 86.0'
            },
            {
                id: '9',
                number: '9',
                date: '07.12.2020 19:00:39',
                user: 'suxrob',
                typeAction: viewForm,
                action: 'Просмотр договора с залогом /offers/liquid_view.php?aid=27&id=23601',
                explanation: '№ 0809/144-Б от 08.09.2018 г.',
                ip: '192.168.10.17 Chrome 86.0'
            },
            {
                id: '10',
                number: '10',
                date: '07.12.2020 19:00:39',
                user: 'suxrob',
                typeAction: viewForm,
                action: 'Просмотр договора с залогом /offers/liquid_view.php?aid=27&id=23601',
                explanation: '№ 0809/144-Б от 08.09.2018 г.',
                ip: '192.168.10.17 Chrome 86.0'
            },
        ];
    },

    getLogs() {
        return Promise.resolve(this.actions().slice(0, 10));
    },
}

