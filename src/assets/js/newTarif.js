export const newTarif = {
    getNewTarif() {
        return [
            {
                id: '1',
                tarifFilial: 'AJ "Respublika kop tarmoqli agrosanoat birjasi',
            },
            {
                id: '2',
                tarifFilial: 'АНДИЖАН',
            },
            {
                id: '3',
                tarifFilial: 'БУХАРА',
            },
            {
                id: '4',
                tarifFilial: 'КАРАКАЛПАКСТАН',
            },
            {
                id: '5',
                tarifFilial: 'КАШКАДАРЬЯ',
            },
            {
                id: '6',
                tarifFilial: 'НАВОИ',
            },
            {
                id: '7',
                tarifFilial: 'НАМАНГАН',
            },
            {
                id: '8',
                tarifFilial: 'САМАРКАНД',
            },
            {
                id: '9',
                tarifFilial: 'СУРХАНДАРЬЯ',
            },
            {
                id: '10',
                tarifFilial: 'ФЕРГАНА',
            },
            {
                id: '11',
                tarifFilial: 'ХОРЕЗМ',
            },
        ];
    },

    getNewTarifMini() {
        return Promise.resolve(this.getNewTarif().slice(0,));
    },
};

