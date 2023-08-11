export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1',
                number: '801',
                bk: '361',
                filial: 'РУАПБ',
                type: 'Реализация',
                name: 'Шерстяное одеяло ведомственное синего цвета с тремя черными поперечными полосками двусторонней ворсовой поверхностью . Изделие соответствует ГОСТ 9382',
                typeProduction: 'Текстильная продукция',
                size: '500',
                sizeType: 'т',
                price: '500',
                priceCurrency: 'доллар США',
                sum: '250 000 000',
                sumCurrency: 'сум'
            },
            {
                id: '1',
                number: '232',
                bk: '351',
                filial: 'РУАПБ',
                type: 'Реализация',
                name: 'Мясо говяжье замороженные в четвертях на кости 1 категории ГОСТ 779-55',
                typeProduction: 'Сельхозпродукция и продукция её переработки',
                size: '500',
                sizeType: 'т',
                price: '500',
                priceCurrency: 'доллар США',
                sum: '250 000 000',
                sumCurrency: 'сум'
            },
        ];
    },



    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }, 
};
    