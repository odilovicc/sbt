export const Protocols = {
  getProtocols() {
    return [
      {
        number: "2502/1-В-Я",
        podNumber: "В-Я",
        data: "25.02.20",
        clientSeller: '	"BALXI-CHORMANGIT" ММТП',
        podClientSeller: 'БК 1628, OOO "QASHQADARYO RIELT UNIVERSAL"',
        clientBuyer: "Отамуродов Асрор Холикович",
        podClientBuyer: "БК 1235, «SAMARQAND BALANS» XK",
        item: "Трактор МТЗ-80х, 1988 г/в, г/н 76-59 ЕЯ, б/у.",
        podItem: "Внутренный",
        sum: "12 000 000,00",
        sumCurrency: "сум",
        status: "На регистрации",
      },
      {
        number: "2502/1-В-Я",
        podNumber: "В-Я",
        data: "25.02.20",
        clientSeller: '	"BALXI-CHORMANGIT" ММТП',
        podClientSeller: 'БК 1628, OOO "QASHQADARYO RIELT UNIVERSAL"',
        clientBuyer: "Отамуродов Асрор Холикович",
        podClientBuyer: "БК 1235, «SAMARQAND BALANS» XK",
        item: "Трактор МТЗ-80х, 1988 г/в, г/н 76-59 ЕЯ, б/у.",
        podItem: "Внутренный",
        sum: "12 000 000,00",
        sumCurrency: "сум",
        status: "Аннулированный",
      },
      {
        number: "2502/1-В-Я",
        podNumber: "В-Я",
        data: "25.02.20",
        clientSeller: '	"BALXI-CHORMANGIT" ММТП',
        podClientSeller: 'БК 1628, OOO "QASHQADARYO RIELT UNIVERSAL"',
        clientBuyer: "Отамуродов Асрор Холикович",
        podClientBuyer: "БК 1235, «SAMARQAND BALANS» XK",
        item: "Трактор МТЗ-80х, 1988 г/в, г/н 76-59 ЕЯ, б/у.",
        podItem: "Внутренный",
        sum: "12 000 000,00",
        sumCurrency: "сум",
        status: "На бирже",
      },
    ];
  },
  tradesProtocol() {
    return [
      {
        numberProtocol:"0805/444-Б",
        dateTrade: '08.05.20',
        protocolProduce: '214',
        podProtocolProduce: 'ООО "UCHQO`RG`ON YOG"',
        protocolBuyer: '542',
        podProtocolBuyer: 'ООО СП "UZTEX UCHKURGAN"',
        protocolItem: 'Шрот хлопковый',
        protocolSum: '23 500 000,00',
        podProtocolSum: 'сум',
        protocolStatus: 'действующий'
      },
    ];
  },

  exchangesContent(){
    return [
      {
        contact: '№ 359/3 от 12.03.2020 г.'
      }
    ]
  },

  getProtocolsMini() {
    return Promise.resolve(this.getProtocols().slice(0, 5));
  },
  getTradesProtocolMini() {
    return Promise.resolve(this.tradesProtocol().slice(0, 5));
  },
  getExchangesContent() {
    return Promise.resolve(this.exchangesContent().slice(0, 5));
  },
};
