const relativeTime = {
  pt: {
    future: 'em %s',
    past: '%s atrás',
    s: 'alguns segundos',
    ss: '%d segundos',
    m: 'um minuto',
    mm: '%d minutos',
    h: 'uma hora',
    hh: '%d horas',
    d: 'um dia',
    dd: '%d dias',
    M: 'um mês',
    MM: '%d meses',
    y: 'um ano',
    yy: '%d anos'
  },
  fr: {
    future: 'dans %s',
    past: 'il y a %s',
    s: 'quelques secondes',
    ss: '%d secondes',
    m: 'une minute',
    mm: '%d minutes',
    h: 'une heure',
    hh: '%d heures',
    d: 'un jour',
    dd: '%d jours',
    M: 'un mois',
    MM: '%d mois',
    y: 'un an',
    yy: '%d années'
  },
  nl: {
    future: 'in %s',
    past: '%s geleden',
    s: 'een seconde',
    ss: '%d seconden',
    m: 'een minuut',
    mm: '%d minuten',
    h: 'een uur',
    hh: '%d uur',
    d: 'een dag',
    dd: '%d dagen',
    M: 'een maand',
    MM: '%d maanden',
    y: 'een jaar',
    yy: '%d jaar'
  },
  es: {
    future: 'en %s',
    past: 'ace %s',
    s: 'unos pocos segundos',
    ss: '%d segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d dias',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años'
  }
}

export const getRelativeTime = (locale) => relativeTime[locale]
