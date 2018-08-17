const general = {
  success: 'Éxitoso',
  warning: 'Atención',
  cancel: 'Cancelar',
  ok: 'OK',
  error: {
    default: 'Oops algo no resultó. Por favor intenta más tarde, si el error persiste intenta actualizar los ajustes de red.',
    buildingTransaction: 'Error construyendo la transacción, intenta de nuevo.',
    gettingTransaction: 'Error obteniendo transacción.',
    clipboardCopied: 'Error al copiar'
  },
  tronPower: 'TRON POWER',
  trxPrice: 'PRECIO TRX',
  confirmed: 'Confirmado',
  unconfirmed: 'No Confirmado',
  transactionType: {
    transfer: 'Transferir',
    transferAsset: 'Transferir Activo',
    freeze: 'Congelar',
    unfreeze: 'Descongelar',
    vote: 'Votar',
    participate: 'Participar',
    create: 'Crear',
    undefined: 'Tipo indefinido'
  },
  ends: 'Fin',
  clear: 'Limpiar',
  allIn: 'Todo'
}

const balance = {
  title: 'SALDO',
  error: {
    loadingData: 'Error al cargar los datos.',
    savingCurrency: 'Error grabando la moneda favorita.'
  },
  chooseCurrency: 'Por favor elige la moneda favorita.',
  confirmSeed: 'Por favor toca para confirmar tu semilla de 12 palabras',
  bandwidth: 'ANCHO DE BANDA',
  tokens: 'TOKENS',
  holdings: 'PROPIEDAD'
}

const components = {
  share: {
    title: 'Compartir dirección TronWallet',
    message: `Esta es mi dirección TronWallet:\n\n {{address}}\n\nDato: Una vez copiada, puedes pegarla en tu app Tronwallet usando el botón especial en la plantalla de Envío.`,
    dialogTitle: 'Compartir via:'
  },
  QRScanner: {
    title: 'Escáner de Direcciónr',
    explanation: 'Escanea el código QR para identificar el usuario destino',
    permissionMessage: 'Para escanear la clave publica, esta app requiere permiso para acceder la cámara.'
  },
  vote: {
    enterVote: 'INGRESA EL VALOR DEL VOTO',
    votesRemaining: 'VOTOS REMANENTES',
    setVote: 'FIJA VOTOS',
    moreVotes: 'Si necesitas más votos puedes Congelar más TRX.',
    confirmVotes: 'CONFIRMAR VOTOS',
    yourVotes: 'Tus Votos',
    myVotes: 'MIS VOTOS',
    confirm: 'CONFIRMAR',
    freeze: 'Congelar',
    totalVotes: 'Total de votos disponibiles:',
    delete: 'BORRAR',
    set: 'FIJAR',
    freezeOrLower: 'No tienes suficientes TRX congelados. Congela más TRX o reduce cantidad de votos',
    freezeToContinue: 'No tienes suficientes TRX congelados. Congela más para continuar'
  }
}

const firstTime = {
  button: {
    create: 'CREAR BILLETERA',
    restore: 'RECUPERAR BILLETERA'
  }
}

const freeze = {
  title: 'CONGELAR',
  unfreeze: {
    title: 'DESCONGELAR',
    inThreeDays: 'Luego de período de 3 días puedes descongelar tus TRX',
    inXMinutes: 'Puedes descongelar tus TRX en {{minutes}} minutos.',
    inXHours: 'Puedes descongelar tus TRX en {{hours}} horas.',
    inXDays: 'Puedes descongelar tus TRX en {{days}} días.',
    now: 'Puedes descongelar tus TRX ahora.'
  },
  error: {
    minimumAmount: 'La cantidad mínima para transacción de congelar es 1.',
    insufficientBalance: 'Saldo de TRX insuficiente',
    roundNumbers: 'Solo se puede congelar una cantidad entera (no fracción)'
  },
  amount: 'CANTIDAD A CONGELAR',
  balance: 'Saldo'
}

const getVault = {
  notInstalled: `Parece que no tienes instalada la app Tron Vault para proeder con esta transacción.`,
  downloadHere: 'Puedes descargarla aquí'
}

const market = {
  time: {
    hour: '1H',
    day: '1D',
    week: '1S',
    month: '1M',
    all: 'TODO'
  },
  highest: 'MÁXIMO',
  lowest: 'MÍNIMO',
  volume: 'VOLUMEN 24H',
  cap: 'CAP DE MERCADO',
  supply: 'CANTIDAD CIRCULATE'
}

const participate = {
  title: 'PARTICIPAR',
  featured: 'DESTACADO',
  button: {
    confirm: 'CONFIRMAR',
    moreInfo: 'MÁS INFO',
    buyNow: 'COMPRAR AHORA'
  },
  error: {
    insufficientBalance: 'Insuficientes fondos (TRX) para participar.',
    insufficientTrx: {
      title: 'Debes comprar al menos lo equivalente a 1 TRX en {{token}}.',
      message: 'Actualmente estás comprando solo {{amount}}.'
    }
  },
  warning: `No tienes suficiente TRX para comprar tantos {{token}}.`,
  amountToBuy: 'CANTIDAD A COMPRAR',
  pricePerToken: 'PRECIO POR TOKEN',
  tokenDescription: 'DESCRIPCIÓN DE TOKEN',
  tokenInfo: 'INFO DE TOKEN',
  token: 'TOKEN',
  tokens: 'TOKENS',
  frozen: 'CONGELADOS',
  percentage: 'PORCENTAGE',
  issued: 'EMITIDOS',
  totalSupply: 'SUMINISTRO TOTAL',
  startTime: 'HORA DE INICIO',
  endTime: 'HORA DE TÉRMINO',
  description: 'DESCRIPCIÓN',
  transaction: 'TRANSACCIÓN',
  ownerAddress: 'DIRECCIÓN DEL PROPIETARIO',
  trxNum: 'TRX NUM',
  num: 'NUM',
  block: 'BLOQUE'
}

const pin = {
  title: 'VERIFICACIÓN DE SEGURIDAD',
  enter: 'Ingrese PIN',
  reenter: 'Re-Ingrese PIN'
}

const receive = {
  title: 'RECIBIR',
  clipboardCopied: 'Copiado al clipboard',
  button: {
    copy: 'Copiar',
    share: 'Compartir'
  }
}

const rewards = {
  title: 'RECOMPENSAS',
  earned: 'Has ganado'
}

const seed = {
  confirm: {
    title: 'CONFIRMAR SEMILLA',
    error: {
      title: 'Combinación incorrecta',
      message: `Palabras elegidas no coinciden. Asegurate escribiste las palabras en orden correcto.`
    },
    success: 'Billetera confirmada con éxito',
    explanation: 'Elige las palabras abajo en el orden correcto para confirmar tu frase secreta.',
    button: {
      reset: 'RESTABLECER PALABRAS',
      confirm: 'CONFIRMAR SEMILLA'
    }
  },
  create: {
    title: 'CONFIRMAR SEMILLA DE BILLETERA',
    error: 'Oops, tenemos un problema. Por favor reinicia la aplicación.',
    generateNew: 'Esto creará una billetera completamente nueva.',
    button: {
      written: `YA LO ANOTÉ!`,
      newSeed: 'OBTENER NUEVA SEMILLA',
      later: 'Confirmar más tarde'
    }
  },
  restore: {
    title: 'RESTABLECER BILLETERA',
    explanation: `Para restablecer tu billetera, por favor indica las mismas 12 palabras que anotaste en papel cuando creaste la billetera la primera vez. Si ingresas una secuencia de palabras distinta, se creará una nueva billetera (vacía).`,
    placeholder: 'Por favor, ingresa tu semilla de 12 palabras',
    success: 'Billetera restablecida exitosamente!',
    warning: 'Restablecer la semilla borrará todos los datos en este dispositivo y recuperará información desde la red para la cuenta restablecida.',
    error: `Oops, las palabras ingresadas no corresponden a una semilla válida. Por favor verifica errores e reintenta.`,
    button: 'RESTABLECER'
  }
}

const send = {
  title: 'ENVIAR',
  error: {
    insufficientBalance: 'Saldo insuficiente.',
    gettingBalance: 'Error obteniendo info de saldo',
    incompleteAddress: 'Dirección está incompleta o es inválida.',
    invalidReceiver: 'Dirección del receptor inválida',
    selectBalance: 'Elige el saldo',
    invalidAmount: 'Cantidad inválida'
  },
  input: {
    token: 'TOKEN',
    to: 'PARA',
    amount: 'CANTIDAD'
  },
  available: 'disponible',
  chooseToken: 'Por facvor, elige un token abajo.',
  minimumAmount: 'La cnatidad mínima para una transacción de envío es 0.000001.'
}

const settings = {
  title: 'AJSUTES',
  notifications: {
    title: 'Suscripción a Notificaciones',
    description: 'Activar o desactivar las notificaciones push'
  },
  network: {
    title: 'Red',
    description: 'Elije un nodo de tu preferencia',
    modal: {
      title: 'RED',
      explanation: 'Con esta opción, puedes seleccionar el nodo que mejor se adapte a tus necesidades y preferencias. Ten cuidado al actualizar la dirección IP del nodo, una dirección IP incorrecta puede ocasionar mal funcionamiento dentro de tu billetera. Ej.: 35.231.121.122:50051',
      error: {
        storage: 'Error obteniedo nodo ip de almacenamiento local',
        invalidIp: 'Por favor ingrea una dirección IP válida',
        update: 'Algo no resultó actualizando nodos IP',
        reset: 'Algo no resultó restableciendo nodos IP'
      },
      success: {
        updated: 'Actualizado',
        updatedIp: 'Nodos IP actualizados!',
        switchTest: 'Nodos IP cambiados a TestNet',
        switchMain: 'Nosos IP cambiados Main Net',
        reset: 'Nodo IP restablecido!'
      },
      placeholder: {
        loadingIp: 'Cargando IP',
        loadingPort: 'Cargando Puerto'
      },
      button: {
        update: 'Acrtualiza y Conecta',
        reset: 'Restablecer'
      },
      mainNode: 'Nodo Principal',
      solidityNode: 'Nodo Solidity',
      testNet: 'TestNet'
    }
  },
  backup: {
    title: 'Respladar Billetera',
    description: 'Respalda tus palabras secretas'
  },
  restore: {
    title: 'Restablecer Billetera',
    description: 'Restablecer 12 palabras secretas usadas previamente'
  },
  reset: {
    title: 'Restablecer Billetera',
    description: 'Reinicializar todos los datos desde billetera actual',
    warning: `Atención: Esta accíon borrará todos los datos almacenados incluyendo tus 12 palabras secretas. Si no anotaste tus palabras secretas, por favor hazlo antes de continuar.`,
    button: 'OK, Estoy de acuerdo!'
  },
  language: {
    title: 'Cambiar Idioma',
    description: 'Cambiar el idioma de la app',
    choose: 'Por favor, elige el idioma:',
    sucess: 'Idioma cambiado a {{language}}, por favor reinicia la app',
    error: 'Error actualizando idioma'
  },
  partners: 'ASOCIADOS'
}

const submitTransaction = {
  title: 'DETALLES DE TRANSACCIÓN',
  notification: 'Has recibido una transacción de {{address}}',
  button: {
    tryAgain: 'Internar nuevamente',
    submit: 'SOMETER TRANSACCIÓN'
  },
  disconnectedMessage: 'Conección a internet no detectada, debes tener acceso a internet antes de proceder con la transacción.',
  dic: {
    contractType: 'Tipo de Transacción',
    ownerAddress: 'De',
    toAddress: 'Para',
    participateAssetIssueContract: 'Participar',
    transferAssetContract: 'Transferir',
    transferContract: 'Transferir',
    unfreezeBalanceContract: 'Descongelar',
    freezeBalanceContract: 'Congelar',
    assetIssueContract: 'Crear',
    voteWitnessContract: 'Votar',
    frozenDuration: 'Duración',
    frozenBalance: 'Total a Congelar'
  },
  errorDic: {
    contractValidate: 'Datos de transacción inválidos. Por favor intenta nuevamente.',
    signature: 'Firma de transacción inválida.',
    duplicate: 'Transacción ya transmitida.',
    contractValidateCee: 'Datos de transacción inválidos (CEE). Por favor intenta nuevamente.',
    bandwith: 'Ancho de banda insuficiente. Por favor intenta más tarde.',
    contractValidateTapos: 'Datos de transacción inválidos (TAPOS). Por favor intenta más tarde.',
    tooBig: 'Transacción excede tamaño para ser sometida.',
    expiration: 'Transacción expiró. Por favor intenta nuevamente.',
    serverBusy: 'Servidor ocupado.'
  },
  totalVotes: 'Votos Totales'
}

const transactions = {
  title: 'MIS TRANSACCIONES',
  from: 'De',
  to: 'Para',
  notFound: 'No se encontraron transacciones.'
}

const transactionDetails = {
  title: 'TRANSACCIÓN',
  clipboard: {
    tronscanUrl: 'URL de Tronscan para esta transacción copiada al clipboard',
    publicKey: 'Clave Pública copiada al clipboard'
  },
  hash: 'HASH',
  status: 'STATUS',
  time: 'CUANDO',
  block: 'BLOQUE',
  frozenBalance: 'SALDO CONGELADO',
  unfrozenBalance: 'SALDO DESCONGELADO',
  totalVotes: 'VOTOS TOTALES',
  amount: 'CANTIDAD',
  to: 'PARA',
  from: 'DE',
  tokenName: 'NOMBRE DE TOKEN',
  unityValue: 'VALOR DE UNIDAD',
  totalSupply: 'SUMINISTRO TOTAL',
  startTime: 'HORA DE INICIO',
  endTime: 'HORA DE TÉRMINO',
  description: 'DESCRIPCIÓN',
  votedAddress: 'DIRECCIÓN VOTADA'
}

const transactionSuccess = {
  submitted: 'TRANSACCIÓN SOMETIDA A LA RED!',
  success: 'ÉXITO!'
}

const votes = {
  title: 'VOTOS',
  totalVotes: 'VOTOS TOTALES',
  votesAvailable: 'VOTOS DISPONIBLES',
  search: 'Buscar',
  error: `Oops, algo no cargó correctamente. Por favor intenta de nuevo`
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
  ...general
}
