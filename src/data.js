const education = {
  level: '本科',
  time: '2013年9月-2017年6月',
  university: '河南理工大万方科技学院',
  major: '电子信息工程'
};
const skill1 = '我是一名前端工程师，别名程序猿。今年25岁，从事了三年的web端，移动端，微信公众号小程序开发。';
const skill2 = '爱生活，爱健身，码的了程序，下的了厨房，身体和灵魂至少要有一个在路上！'
const workExperience = [{
    time: '2017年6月-2017年11月',
    company: '河南微云易科技有限公司',
    position: '前端开发',
    content: '网站开发，微信小程序开发',
    img: require('./img/wyy.jpg')
  },
  {
    time: '2017年11月-2019年5月',
    company: '上海楚森网络',
    position: '前端开发',
    content: '网站，后台管理系统开发；微信公众号，微信小程序开发；支付宝小程序开发',
    img: require('./img/cs.jpeg')
  },
  {
    time: '2019年7月-至今',
    company: '上海哈世科技',
    position: '区块链中级前端开发',
    content: '公司网站，临界HASHGARD（公链，联盟链）配套网页版钱包，DAPP(测试网)，区块链浏览器开发；前端代码管理(github)，项目发布以及更新',
    img: require('./img/hashgard.png')
  }
];
const projectExperience = {
  left: [{
      name: '微云易官网',
      link: 'www.weiyunyi.com',
      img: require('./img/wyy.png'),
      des: '小程序开发服务平台，展示各行业的小程序案例，定制开发，提供技术文档视频帮助等',
      // duty:'根据ui设计师提供的psd图实现整个官网的前端开发',
      // skill: ['使用媒体查询配合rem实现响应式页面', '使用美洽实现在线客服咨询']
    },
    {
      name: '昆明鲜花批发运营中心(微信小程序)及对应的后台管理',
      link: '昆明鲜花批发运营中心',
      img: require('./img/flower.jpeg'),
      des: '一个集线上选购，购物车，物流，补差价，售后于一体的鲜花采购平台。小程序全局采用原生开发，支持用户热搜花型快捷接入，起卖数量限制等。鲜花列表，详情，购物车，收货地址采用模块化开发，方便维护。对应的后台管理系统实现对上下架鲜花的在线管理，物流追踪，订单售后处理，理货单打印等。ECharts图表展示最近7天，30天订单量变化，下单种类占比等',
      // duty:'小程序端部分开发，后台管理系统开发'
    }
  ],
  right: [{
      name: 'HASHGARD网页轻钱包（GARDBOX）',
      link: 'wallet.hashgard.com',
      img: require('./img/wallet.png'),
      des: '个人的GARD钱包账户，可实现钱包账户的创建，导入，编辑，删除；支持主网GARD兑换，转账，抵押委托，转委托，取回收益，赎回等',
      // skill: ['使用vue+element进行页面响应式开发','封装通用方法和组件（如交易弹窗，列表，卡片，返回上一级，资产显示等）', '使用vue-i18n实现多语言切换', '使用bignumber.js进行资产精度化处理','使用vuex进行数据管理和axios请求', '使用cosmos-sdk签名交易']
    },
    {
      name: '时时彩（DAPP）',
      link: 'https://github.com/StrawberryFlavor/SmartContract',
      des: '时时彩是GARD钱包里的一款应用，采用每整点为一期，一天24期的玩法，以gard作为筹码投注，以一组指定格式的自然数为投注号码，等待开奖后根据匹配规则分发奖励(具体玩法链接https://github.com/StrawberryFlavor/SmartContract)。',
      // skill: ['与合约进行交互，实现页面可视化操作']
    },
    {
      name: 'HASHGARD浏览器（HASHPLORER）',
      link: 'explorer.hashgard.com',
      img: require('./img/explorer.png'),
      des: '临界区块链浏览器，可查询链上所有块信息，地址详情，交易，提案，网络节点信息',
      // skill: ['使用vue+element进行页面响应式开发','封装通用方法和组件（导航栏，交易类型，数据列表，交易详情卡片展示，返回上一级，资产显示等）','使用lodash库处理交易数据' ,'使用vue-i18n实现多语言切换', '使用bignumber.js进行资产精度化处理','使用vuex进行数据管理和axios请求']
    },
    {
    
    },
    {
      name: '鸿博彩票链（SCRATCHBLOCK）',
      link: '鸿博彩票（https://chain.hb002229.com/home） 鸿波彩票浏览器（https://browser.hb002229.com/home）',
      img: require('./img/hb.png'),
      des: '鸿博股份首个区块链即开票型彩票项目，提供彩票数据存证，销售状态，验票信息透明化，支持机构申请上链',
      // skill: ['使用vue+element进行页面响应式开发','批量加载彩票存证数据', '使用国密算法sm2对加密数据进行解密','兼容IE浏览器']
    }
  ]
};
export {
  education,
  skill1,
  skill2,
  workExperience,
  projectExperience
};