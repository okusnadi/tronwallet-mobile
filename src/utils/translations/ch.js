const general = {
  success: '成功',
  warning: '警告',
  cancel: '取消',
  ok: '确定',
  error: {
    default: '哎呀，出现问题了。请稍后再试，如果错误仍然存在，请尝试更新网络设置。',
    buildingTransaction: '创建交易出现错误，请稍后再试',
    gettingTransaction: '获得交易出现错误',
    clipboardCopied: '复制出错'
  },
  tronPower: '波场权',
  trxPrice: 'TRX 价格',
  confirmed: '已确认的',
  unconfirmed: '未确认的',
  transactionType: {
    transfer: '转账',
    transferAsset: '资产转账',
    freeze: '冻结',
    unfreeze: '解冻',
    vote: '投票',
    participate: '参与',
    create: '创建',
    undefined: '未定义类型'
  },
  close: '关',
  ends: '终止',
  clear: '清除',
  allIn: '全部'
}

const balance = {
  title: '余额',
  error: {
    loadingData: '加载数据出错.',
    savingCurrency: '保存首先货币出错'
  },
  chooseCurrency: '请选择您的首选货币。',
  confirmSeed: '请点击确认您的12个助记词',
  bandwidth: '带宽',
  tokens: '通证',
  holdings: '持有通证'
}

const components = {
  share: {
    title: '分享TronWallet地址',
    message: `这是我的TronWallet地址：\n\n {{address}}\n\n提示：一旦复制以后，您可以使用“发送”屏幕上的特殊按钮将其粘贴到您的TronWallet应用程序中。`,
    dialogTitle: 'Share using:'
  },
  QRScanner: {
    title: '地址扫码器',
    scan: '扫描',
    explanation: '扫描二维码以识别目标用户',
    permissionMessage: '要扫描公钥，应用程序需要您的许可才能访问相机。'
  },
  vote: {
    enterVote: '输入投票值',
    votesRemaining: '剩余投票',
    setVote: '设置投票',
    moreVotes: '如果需要更多的投票，您可以冻结更多的TRX。',
    confirmVotes: '确认投票',
    yourVotes: '您的投票',
    myVotes: '我的投票',
    confirm: '确认',
    freeze: '冻结',
    totalVotes: '总共可用投票：',
    delete: '删除',
    set: '设置',
    freezeOrLower: '你没有足够的冻结TRX，冻结更多TRX或降低投票数额',
    freezeToContinue: '你没有足够的冻结TRX，冻结更多TRX以继续'
  }
}

const firstTime = {
  button: {
    create: '创建钱包',
    restore: '恢复钱包'
  }
}

const freeze = {
  title: '冻结',
  unfreeze: {
    title: '解冻',
    inThreeDays: '三天后，您可以解冻TRX',
    inXMinutes: '您可以在{{minutes}}分钟后解冻TRX。',
    inXHours: '您可以在{{hour}}小时后解冻TRX。',
    inXDays: '您可以在{{days}}天后解冻您的TRX。',
    now: '你现在可以解冻你的TRX。'
  },
  error: {
    minimumAmount: '任何冻结交易的最低数额为1。',
    insufficientBalance: 'Insufficient TRX balance',
    roundNumbers: '只能冻结整数'
  },
  amount: '冻结数额',
  balance: '余额'
}

const getVault = {
  notInstalled: `您的手机中似乎没有安装Tron Vault来支持交易。`,
  downloadHere: '您可以在这里下载'
}

const market = {
  time: {
    hour: '1小时',
    day: '1天',
    week: '1周',
    month: '1个月',
    all: '全部'
  },
  highest: '最高',
  lowest: '最低',
  volume: '24小时交易量',
  cap: '市值',
  supply: '流通总量'
}

const participate = {
  title: '参与',
  featured: '精选',
  button: {
    confirm: '确认',
    moreInfo: '更多信息',
    buyNow: '现在购买'
  },
  error: {
    insufficientBalance: '没有足够的资金（TRX）参与。',
    insufficientTrx: {
      title: '您需要至少购买一枚TRX价值的{{token}}。',
      message: '目前您只购买{{amount}}。'
    }
  },
  warning: `您没有足够的TRX来购买那么多的{{token}}。`,
  amountToBuy: '购买数额',
  pricePerToken: '通证单价',
  tokenDescription: '通证描述',
  tokenInfo: '通证信息',
  token: '通证',
  tokens: '通证',
  frozen: '已冻结的',
  percentage: '百分比',
  issued: '已发行的',
  totalSupply: '总发行量',
  startTime: '开始时间',
  endTime: '结束时间',
  description: '描述',
  transaction: '交易',
  ownerAddress: '所有者地址',
  trxNum: 'TRX数目',
  num: '数目',
  block: '区块'
}

const pin = {
  title: '安全检查',
  enter: '输入PIN码',
  reenter: '再次输入PIN码'
}

const receive = {
  title: '接收',
  clipboardCopied: '复制到剪贴板',
  button: {
    copy: '复制',
    share: '分享'
  },
  tabs: {
    share: '分享',
    request: '请求'
  }
}

const rewards = {
  title: '奖励',
  earned: '已赚奖励'
}

const seed = {
  confirm: {
    title: '确认助记词',
    error: {
      title: '错误的组合',
      message: `选定的单词不匹配，确保以正确的顺序写下单词。`
    },
    success: '钱包成功确认',
    explanation: '按照正确的顺序选择下面的单词以确认您的助记词。',
    button: {
      reset: '重置助记词',
      confirm: '确认助记词'
    }
  },
  create: {
    title: '确认钱包助记词',
    error: '糟糕，我们遇到了问题。请重启应用程序。',
    generateNew: '这将生成一个全新的钱包。',
    button: {
      written: `我已经写下来了`,
      newSeed: '获得新的助记词',
      later: '稍后确认'
    }
  },
  restore: {
    title: '恢复钱包',
    explanation: `要恢复您的钱包，请提供在第一次创建钱包时您在纸上记下的12个助记词。如果输入不同的单词序列，将创建一个新的空钱包。`,
    placeholder: '请在这里输入你的12个助记词',
    success: '钱包恢复成功！',
    warning: '恢复助记词将清除此设备上的所有数据，并从网络中提取已还原帐户的信息。',
    error: `哎呀，看起来您输入的单词不是有效的助记词。检查拼写错误，然后重试。`,
    button: '恢复'
  }
}

const send = {
  title: '发送',
  error: {
    insufficientBalance: '余额不足。',
    gettingBalance: '获取余额数据时出错',
    incompleteAddress: '地址不完整或无效。',
    invalidReceiver: '接收者地址无效',
    selectBalance: '首先选择余额',
    invalidAmount: '无效数额'
  },
  input: {
    token: '通证',
    to: '至',
    amount: '数额',
    description: '说明（可选）'
  },
  available: '可用',
  chooseToken: '请在下面选择一个通证。',
  minimumAmount: '任何发送交易的最低金额为0.000001。'
}

const settings = {
  title: '设置',
  notifications: {
    title: '通知',
    description: '启用或禁用推送通知'
  },
  network: {
    title: '网络',
    description: '选择您喜欢的节点',
    modal: {
      title: '网络',
      explanation: '使用此选项，您可以选择更适合您需求和偏好的节点。更新节点IP时请小心，错误的IP可能导致钱包故障。示例：35.231.121.122：50051',
      error: {
        storage: '从本地存储获取节点IP时出错',
        invalidIp: '请输入有效的IP',
        update: '更新节点IP时出错',
        reset: '重置节点IP时出错'
      },
      success: {
        updated: '更新',
        updatedIp: '节点IP已更新！',
        switchTest: '将节点IP切换到测试网络',
        switchMain: '将节点IP切换为默认主网',
        reset: '节点IP重置!'
      },
      placeholder: {
        loadingIp: '加载IP',
        loadingPort: '加载端口'
      },
      button: {
        update: '更新和连接',
        reset: '重置'
      },
      mainNode: '主节点',
      solidityNode: 'Solidity Node',
      testNet: '测试网络'
    }
  },
  backup: {
    title: '备份钱包',
    description: '备份您的助记词'
  },
  restore: {
    title: '恢复钱包',
    description: '恢复以前用过的12个助记词'
  },
  reset: {
    title: '重置钱包',
    description: '重启当前钱包所有数据',
    warning: `Warning: 此操作将清除所有已保存的数据，包括您的12个助记词。如果你没有保存你的助记词，请在继续之前完成。`,
    button: '好的，我了解了'
  },
  language: {
    title: '语言',
    description: '语言更换',
    choose: '请选择以下语言：',
    success: '语言已更改为{{语言}}，请重启应用',
    error: '保存首选语言时出错'
  },
  token: {
    title: '令牌过滤器',
    description: '选择要显示的令牌',
    search: '搜索令牌',
    confirm: '保存',
    noResult: '没有结果...'
  },
  partners: '伙伴'
}

const submitTransaction = {
  title: '交易详情',
  notification: '您收到了来自{{address}}的交易',
  notificationPayment: '您已收到{{address}}的付款',
  button: {
    tryAgain: '重试',
    submit: '提交交易'
  },
  disconnectedMessage: '似乎您已断开连接了。在继续交易之前请重新连接到互联网。',
  dic: {
    contractType: '交易类型',
    ownerAddress: '从',
    toAddress: '至',
    participateAssetIssueContract: '参与',
    transferAssetContract: '转账',
    transferContract: '转账',
    unfreezeBalanceContract: '解冻',
    freezeBalanceContract: '冻结',
    assetIssueContract: '创建',
    voteWitnessContract: '投票',
    frozenDuration: '持续时间',
    frozenBalance: '总冻结数额'
  },
  errorDic: {
    contractValidate: '交易数据无效。 请稍后再试。',
    signature: '交易签名无效。',
    duplicate: '交易已经广播',
    contractValidateCee: '交易数据无效（CEE）。 请稍后再试。',
    bandwith: '没有足够的带宽。 请稍后再试。',
    contractValidateTapos: '交易数据无效（TAPOS）。 请稍后再试。',
    tooBig: '交易太大，无法提交。',
    expiration: '交易已过期。 请重试。',
    serverBusy: '服务器忙。'
  },
  totalVotes: '总投票'
}

const transactions = {
  title: '我的交易',
  from: '从',
  to: '至',
  notFound: '未找到交易'
}

const transactionDetails = {
  title: '交易',
  clipboard: {
    tronscanUrl: '此交易的Tronscan url已复制到剪贴板',
    publicKey: '公钥复制到剪贴板'
  },
  hash: '哈希',
  status: '状态',
  time: '时间',
  block: '区块',
  frozenBalance: '已冻结余额',
  unfrozenBalance: '未冻结余额',
  totalVotes: '总投票',
  amount: '数额',
  to: '至',
  from: '从',
  tokenName: '通证名称',
  unityValue: '总价值',
  totalSupply: '总发行量',
  startTime: '开始时间',
  endTime: '结束时间',
  description: '描述',
  votedAddress: '投票地址'
}

const transactionSuccess = {
  submitted: '交易提交到网络！',
  success: '成功！'
}

const votes = {
  title: '投票',
  totalVotes: '总投票',
  votesAvailable: '可用投票',
  search: '查询',
  error: `糟糕，有些文件没有正确加载。尝试重新加载`
}

const scanPayment = {
  scan: '扫描',
  error: {
    receiver: '收件人地址无效',
    token: '令牌无效',
    amount: '金额无效',
    description: '描述太久了',
    code: '付款代码无效。 请扫描一个有效的'
  }
}

const makePayment = {
  pay: '工资',
  confirm: '确认付款',
  error: {
    receiver: '接收者等于请求者',
    token: '此帐户没有此交易的令牌',
    amount: '此帐户余额不足。',
    description: '没有可用的描述'
  }
}

const buildPayment = {
  generate: '生成请求',
  selectCurrency: '选择参考货币',
  error: {
    currency: '我们无法加载其他货币价格。 请使用TRX作为参考'
  }
}

const requestPayment = {
  title: '请求付款'
}

export default {
  balance,
  components,
  firstTime,
  freeze,
  getVault,
  market,
  participate,
  pin,
  receive,
  rewards,
  seed,
  send,
  settings,
  submitTransaction,
  transactions,
  transactionDetails,
  transactionSuccess,
  votes,
  scanPayment,
  makePayment,
  buildPayment,
  requestPayment,
  ...general
}
