export const infoApi: any  = {
  cardInfo: config => {
    return {
      card: {
        year: '2019',
        month: '08',
        pay: '999.12',
        income: '15000.22',
        accountBalance: '234546'
      },
      buttonList: [
        {
          iconSrc: 'http://mbrowser.bdstatic.com/mb-old/lifeservice/06/06d42cf643721f722de5d657daf45f10.png',
          text: '收支分析'
        },
        {
          iconSrc: 'http://mbrowser.bdstatic.com/mb-old/lifeservice/15/15d83de696b177a5aa501fe0d3184607.png',
          text: '月度账单'
        },
        {
          iconSrc: 'http://mbrowser.bdstatic.com/mb-old/lifeservice/f4/f453c0b48900657978183e56b28ea5c1.png',
          text: '我的账本'
        },
        {
          iconSrc: 'http://mbrowser.bdstatic.com/mb-old/lifeservice/f4/f453c0b48900657978183e56b28ea5c1.png',
          text: '查找交易'
        }
      ],
      list: [
        {
          iconSrc: 'http://mbrowser.bdstatic.com/mb-old/lifeservice/38/388e6e3088f0fdfa8c1dce138a079286.png',
          title: '支付宝瑞星巴克',
          money: '-¥12',
          detail: '零食烟酒'
        },
        {
          iconSrc: 'http://mbrowser.bdstatic.com/mb-old/lifeservice/38/388e6e3088f0fdfa8c1dce138a079286.png',
          title: '微信瑞星咖啡',
          money: '-¥12',
          detail: '零食烟酒'
        },
        {
          iconSrc: 'http://mbrowser.bdstatic.com/mb-old/lifeservice/38/388e6e3088f0fdfa8c1dce138a079286.png',
          title: '银联瑞星咖啡',
          money: '-¥12',
          detail: '零食烟酒'
        }, {
          iconSrc: 'http://mbrowser.bdstatic.com/mb-old/lifeservice/38/388e6e3088f0fdfa8c1dce138a079286.png',
          title: '银联大盘鸡',
          money: '-¥12',
          detail: '零食烟酒'
        }
      ]
    };
  },
};

