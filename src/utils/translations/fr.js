const general = {
  success: 'Succès',
  warning: 'Alerte',
  cancel: 'Annuler',
  ok: 'OK',
  error: {
    default: 'Une erreur est survenue, veuillez réessayez plus tard. Si l\'erreur persiste, essayez de mettre à jour les paramètres réseau.',
    buildingTransaction: 'Erreur lors de la construction de la transaction, réessayez plus tard.',
    gettingTransaction: 'Erreur lors de la récupération de la transaction.',
    clipboardCopied: 'Erreur pendant la copie'
  },
  tronPower: 'TRON POWER',
  trxPrice: 'PRIX TRX',
  confirmed: 'Confirmé',
  unconfirmed: 'Non confirmé',
  transactionType: {
    transfer: 'Transfert',
    transferAsset: 'Transfert d\'actif',
    freeze: 'Gel',
    unfreeze: 'Débloquer',
    vote: 'Vote',
    participate: 'Participer',
    create: 'Créer',
    undefined: 'Type non défini'
  },
  ends: 'Fin',
  clear: 'Tout retirer',
  allIn: 'Tout utiliser'
}

const balance = {
  title: 'SOLDE',
  error: {
    loadingData: 'Une erreur est survenue lors du chargement des données.',
    savingCurrency: 'Erreur lors de l\'enregistrement de la devise préférée'
  },
  chooseCurrency: 'Veuillez choisir votre devise préférée.',
  confirmSeed: 'Veuillez confirmer vos 12 mots.',
  bandwidth: 'BANDE PASSANTE',
  tokens: 'JETONS',
  holdings: 'EN POSSESSION'
}

const components = {
  share: {
    title: 'Partager votre adresse TronWallet',
    message: `Ceci est mon adresse TronWallet:\n\n {{address}}\n\nAstuce: Une fois que vous l'avez copié, vous pouvez la coller dans votre application TronWallet en utilisant le bouton spécial sur l'écran d'envoi.`,
    dialogTitle: 'Partager en utilisant:'
  },
  QRScanner: {
    title: 'Scanner d\'adresse',
    explanation: 'Scannez le QRCode pour identifier l\'utilisateur cible',
    permissionMessage: 'Pour scanner la clé publique, l\'application a besoin de votre autorisation pour accéder à la caméra.'
  },
  vote: {
    enterVote: 'SAISIR LA VALEUR DU VOTE',
    votesRemaining: 'VOTES RESTANTS',
    setVote: 'ENREGISTRER LE VOTE',
    moreVotes: 'Si vous avez besoin de plus de votes, vous devez geler plus de TRX.',
    confirmVotes: 'CONFIRMER LES VOTES',
    yourVotes: 'Vos votes',
    myVotes: 'MES VOTES',
    confirm: 'CONFIRMER',
    freeze: 'Gel',
    totalVotes: 'Total des votes disponibles:',
    delete: 'SUPPRIMER',
    set: 'ENREGISTRER',
    freezeOrLower: 'Vous n\'avez pas assez de TRX gelés. Veuillez geler plus de TRX ou réduire le montant du vote',
    freezeToContinue: 'Vous n\'avez pas assez de TRX gelés. Veuillez geler plus de TRX pour continuer'
  }
}

const firstTime = {
  button: {
    create: 'CREER UN PORTEFEUILLE',
    restore: 'RESTORER UN PORTEFEUILLE'
  }
}

const freeze = {
  title: 'GEL',
  unfreeze: {
    title: 'DEBLOQUER',
    inThreeDays: 'Après trois jours, vous pouvez débloquer vos TRX',
    inXMinutes: 'Vous pouvez débloquer vos TRX dans {{minutes}} minutes.',
    inXHours: 'Vous pouvez débloquer vos TRX dans {{hours}} heures.',
    inXDays: 'Vous pouvez débloquer vos TRX dans {{days}} jours.',
    now: 'Vous pouvez débloquer vos TRX maintenant.'
  },
  error: {
    minimumAmount: 'Le montant minimum pour toute opération de gel est de 1.',
    insufficientBalance: 'Solde en TRX insuffisant',
    roundNumbers: 'Vous pouvez geler que des nombres arrondis'
  },
  amount: 'MONTANT DU GEL',
  balance: 'Solde'
}

const getVault = {
  notInstalled: `Il semble que Tron Vault ne soit pas installé sur votre téléphone pour pouvoir poursuivre votre transaction.`,
  downloadHere: 'Vous pouvez le télécharger ici'
}

const market = {
  time: {
    hour: '1H',
    day: '1J',
    week: '1S',
    month: '1M',
    all: 'TOUS'
  },
  highest: 'PLUS HAUT',
  lowest: 'PLUS BAS',
  volume: 'VOLUME EN 24H',
  cap: 'CAP. MARCHE',
  supply: 'OFFRE EN CIRCULATION'
}

const participate = {
  title: 'PARTICIPER',
  featured: 'EN VEDETTE',
  button: {
    confirm: 'CONFIRMER',
    moreInfo: 'PLUS D\'INFOS',
    buyNow: 'ACHETER MAINTENANT'
  },
  error: {
    insufficientBalance: 'Pas assez de fonds (TRX) pour participer.',
    insufficientTrx: {
      title: 'Vous devez acheter au moins l\'équivalent d\'un TRX de {{token}}.',
      message: 'Actuellement, vous achetez seulement {{amount}}.'
    }
  },
  warning: `Vous n'avez pas assez de TRX pour en acheter autant de {{token}}.`,
  amountToBuy: 'MONTANT A ACHETER',
  pricePerToken: 'PRIX PAR JETON',
  tokenDescription: 'DESCRIPTION DU JETON',
  tokenInfo: 'INFOS DU JETON',
  token: 'JETON',
  tokens: 'JETONS',
  frozen: 'GELÉ',
  percentage: 'POURCENTAFE',
  issued: 'EMIS',
  totalSupply: 'OFFRE TOTALE',
  startTime: 'DATE DEBUT',
  endTime: 'DATE FIN',
  description: 'DESCRIPTION',
  transaction: 'TRANSACTION',
  ownerAddress: 'ADRESSE DU PROPRIETAIRE',
  trxNum: 'TRX NUM',
  num: 'NUM',
  block: 'BLOC'
}

const pin = {
  title: 'VÉRIFICATION DE SÉCURITÉ',
  enter: 'Saisir le code PIN',
  reenter: 'Saisir à nouveau le code PIN'
}

const receive = {
  title: 'RECEVOIR',
  clipboardCopied: 'Copié dans le presse-papier',
  button: {
    copy: 'Copier',
    share: 'partager'
  }
}

const rewards = {
  title: 'RECOMPENSES',
  earned: 'Vous avez gagné'
}

const seed = {
  confirm: {
    title: 'CONFIRMER LES MOTS',
    error: {
      title: 'Combinaison fausse.',
      message: `Les mots sélectionnés ne correspondent pas. Veuillez vous assurer de les avoir saisit dans le bon ordre.`
    },
    success: 'Portefeuille confirmé avec succès',
    explanation: 'Sélectionnez les mots ci-dessous dans le bon ordre pour confirmer votre phrase secrète.',
    button: {
      reset: 'REINITIALISER LES MOTS',
      confirm: 'CONFIRMER LES MOTS'
    }
  },
  create: {
    title: 'CONFIRMER LES MOTS DU PORTEFEUILLE',
    error: 'Une erreur est survenue. Veuillez redémarrer l\'application.',
    generateNew: 'Ceci générera un nouveau portefeuille.',
    button: {
      written: `JE L'AI ECRIT EN BAS`,
      newSeed: 'GENERER DE NOUVEAUX MOTS',
      later: 'Confirmer plus tard'
    }
  },
  restore: {
    title: 'RESTORER UN PORTEFEUILLE',
    explanation: `Pour restaurer votre portefeuille, veuillez fournir les 12 mots que vous avez écrits sur papier lorsque vous avez créé votre portefeuille pour la première fois. Si vous entrez une séquence de mots différents, un nouveau portefeuille vide sera créé.`,
    placeholder: 'Veuillez saisir ici votre séquence des 12 mots',
    success: 'Portefeuille restauré avec succès!',
    warning: 'Restaurer à partir des 12 mots effacera toutes les données de ce périphérique et extraira les informations du réseau pour le compte restauré.',
    error: `Les mots saisis ne correspondent à aucune séquence valide. Veuillez vérifier à nouveau votre saisie.`,
    button: 'RESTAURER'
  }
}

const send = {
  title: 'ENVOYER',
  error: {
    insufficientBalance: 'Solde insuffisant.',
    gettingBalance: 'Erreur lors de la récupération des données du solde',
    incompleteAddress: 'L\'adresse est incomplète ou invalide',
    invalidReceiver: 'Adresse de destinataire invalide',
    selectBalance: 'Sélectionner avant un solde',
    invalidAmount: 'Montant invalide'
  },
  input: {
    token: 'JETON',
    to: 'À',
    amount: 'MONTANT'
  },
  available: 'disponible',
  chooseToken: 'Veuillez choisir l\'un des jetons ci-dessous',
  minimumAmount: 'Le montant minimum pour toute transaction d\'envoi est de 0.000001.'
}

const settings = {
  title: 'REGLAGES',
  notifications: {
    title: 'Abonnement aux notifications',
    description: 'Activer ou désactiver les notifications push'
  },
  network: {
    title: 'Réseau',
    description: 'Choisissez un nœud de votre choix',
    modal: {
      title: 'RÉSEAU',
      explanation: 'Avec cette option, vous pouvez sélectionner le nœud qui conviendra le mieux à vos besoins et préférences. Soyez prudent lors de la mise à jour du nœud IP alors qu\'une mauvaise adresse IP peut entraîner des dysfonctionnements dans votre portefeuille. Exemple: 35.231.121.122:50051',
      error: {
        storage: 'Erreur lors de l\'obtention du noeud ip du stockage local',
        invalidIp: 'Veuillez saisir une adresse IP valide',
        update: 'Une erreur est survenue lors de la maj des noeuds IP',
        reset: 'Une erreur est survenue lors de la réinitialisation des noeuds IP'
      },
      success: {
        updated: 'Mis à jour',
        updatedIp: 'IP des noeuds à jour!',
        switchTest: 'IP des nœuds basculés vers Testnet',
        switchMain: 'IP des nœuds basculés vers le réseau principal par défaut',
        reset: 'IP du noeud restauré!'
      },
      placeholder: {
        loadingIp: 'Chargement de l\'IP',
        loadingPort: 'Chargement du port'
      },
      button: {
        update: 'Mettre à jour et connecter',
        reset: 'Réinitialiser'
      },
      mainNode: 'Noeud principal',
      solidityNode: 'Noeud Solidity',
      testNet: 'TestNet'
    }
  },
  backup: {
    title: 'Sauvegarder le portefeuille',
    description: 'Sauvegarder vos mots secrets'
  },
  restore: {
    title: 'Restaurer le portefeuille',
    description: 'Restaurer les 12 mots secrets précédemment utilisés'
  },
  reset: {
    title: 'Réinitialiser le portefeuille',
    description: 'Réinitialiser toutes les données du portefeuille actuel',
    warning: `Attention: cette action effacera toutes les données enregistrées, y compris vos 12 mots secrets. Si vous n'avez pas enregistré ces mots, veuillez le faire avant de continuer.`,
    button: 'OK, j\'ai compris'
  },
  language: {
    title: 'Changer la langue',
    description: 'Changer la langue de l\'application',
    choose: 'Veuillez choisir une langue ci-dessous:',
    sucess: 'Langue changé en {{language}}. Veuillez redémarrer l\'application',
    error: 'Erreur lors de la sauvegarde la langue préférée.'
  },
  token: {
    title: 'Filtre de Jetons',
    description: 'Choisissez les jetons à afficher',
    search: 'Jetons de recherche',
    confirm: 'Sauvegarder',
    noResult: 'Aucun résultat...'
  },
  partners: 'PARTENAIRES'
}

const submitTransaction = {
  title: 'DETAILS DE LA TRANSACTION',
  notification: 'Vous avez reçu une transaction de {{address}}',
  button: {
    tryAgain: 'Réessayer à nouveau',
    submit: 'ENVOYER LA TRANSACTION'
  },
  disconnectedMessage: 'Il semble que vous soyez déconnecté. Veuillez vous reconnecter à Internet avant de procéder à la transaction.',
  dic: {
    fronzeBalance: 'Solde gelé',
    contractType: 'Type de la Transaction',
    ownerAddress: 'DE',
    toAddress: 'À',
    participateAssetIssueContract: 'Participer',
    transferAssetContract: 'Transfert',
    transferContract: 'Transfert',
    unfreezeBalanceContract: 'Débloquer',
    freezeBalanceContract: 'Gel',
    assetIssueContract: 'Créer',
    voteWitnessContract: 'Vote',
    frozenDuration: 'Durée',
    frozenBalance: 'Total à geler'
  },
  errorDic: {
    contractValidate: 'Données de transaction non valides. Veuillez réessayer ultérieurement.',
    signature: 'Signature de la transaction non valide.',
    duplicate: 'Transaction déjà diffusée.',
    contractValidateCee: 'Données de transaction non valides (CEE). Veuillez réessayer ultérieurement.',
    bandwith: 'Pas assez de bande passante. Veuillez réessayer ultérieurement.',
    contractValidateTapos: 'Données de transaction non valides (TAPOS). Veuillez réessayer ultérieurement.',
    tooBig: 'Transaction trop grande pour être envoyée.',
    expiration: 'La transaction a expiré. Veuillez réessayer ultérieurement.',
    serverBusy: 'Serveur occupé.'
  },
  totalVotes: 'Total des Votes'
}

const transactions = {
  title: 'MES TRANSACTIONS',
  from: 'De',
  to: 'À',
  notFound: 'Aucune transaction trouvée.'
}

const transactionDetails = {
  title: 'TRANSACTION',
  clipboard: {
    tronscanUrl: 'URL de Tronscan pour cette transaction copiée dans le presse-papiers',
    publicKey: 'Clé publique copiée dans le presse-papiers'
  },
  hash: 'HASH',
  status: 'STATUT',
  time: 'HEURE',
  block: 'BLOC',
  frozenBalance: 'SOLDE GELÉ',
  unfrozenBalance: 'SOLDE DEBLOQUÉ',
  totalVotes: 'TOTAL DES VOTES',
  amount: 'MONTANT',
  to: 'À',
  from: 'DE',
  tokenName: 'NOM DU JETONS',
  unityValue: 'VALEUR DE L\'UNITÉ',
  totalSupply: 'OFFRE TOTALE',
  startTime: 'DATE DEBUT',
  endTime: 'DATE FIN',
  description: 'DESCRIPTION',
  votedAddress: 'ADRESSE VOTÉE'
}

const transactionSuccess = {
  submitted: 'TRANSACTION ENVOYÉE AU RÉSEAU!',
  success: 'SUCCÈS!'
}

const votes = {
  title: 'VOTES',
  totalVotes: 'TOTAL DES VOTES',
  votesAvailable: 'VOTES DISPONIBLES',
  search: 'Rechercher',
  error: `Erreur lors du chargement. Veuillez réessayer ultérieurement.`
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
