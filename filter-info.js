const filterInfo = {
  categories: {
    alkali: {
      title: "Alkalimetaller",
      facts: [
        "Alkalimetaller er lette, svært reaktive metaller som lett avgir ett elektron og danner stabile positive ioner."
      ],
      trivia: [
        "Alkalimetaller har ett valenselektron, noe som gjør dem til et klassisk eksempel på hvordan elektronstruktur styrer kjemisk reaktivitet.",
        "De forekommer ikke fritt i naturen fordi de reagerer raskt med både vann og luft.",
        "Reaktiviteten øker systematisk nedover i gruppen."
      ]
    },
    alkaline: {
      title: "Jordalkalimetaller",
      facts: [
        "Jordalkalimetaller er reaktive metaller som avgir to elektroner og danner stabile toverdige ioner."
      ],
      trivia: [
        "Gruppen har to valenselektroner og er derfor mindre reaktiv enn alkalimetallene.",
        "Stoffene finnes ofte bundet i mineraler i jordskorpen."
      ]
    },
    transition: {
      title: "Overgangsmetaller",
      facts: [
        "Overgangsmetaller kjennetegnes av delvis fylte d-orbitaler og stor variasjon i kjemiske egenskaper."
      ],
      trivia: [
        "Evnen til å danne flere oksidasjonstall er typisk for overgangsmetaller.",
        "Mange brukes som katalysatorer i kjemisk industri."
      ]
    },
    post: {
      title: "Etter-overgangsmetaller",
      facts: [
        "Etter-overgangsmetaller er metaller med svakere metallbinding og mer varierte kjemiske egenskaper enn overgangsmetaller."
      ],
      trivia: [
        "De har ofte lavere smeltepunkt enn overgangsmetaller.",
        "Gruppen har fått økt betydning med moderne materialteknologi."
      ]
    },
    metalloid: {
      title: "Halvmetaller",
      facts: [
        "Halvmetaller har egenskaper mellom metaller og ikke-metaller og er viktige i moderne teknologi."
      ],
      trivia: [
        "Halvmetaller brukes ofte som halvledere.",
        "De illustrerer overgangene i periodesystemet."
      ]
    },
    nonmetal: {
      title: "Ikke-metaller",
      facts: [
        "Ikke-metaller har høy elektronegativitet og domineres av kovalent kjemi."
      ],
      trivia: [
        "Ikke-metaller er generelt dårlige elektriske ledere.",
        "Mange biologisk viktige grunnstoffer tilhører denne gruppen."
      ]
    },
    noble: {
      title: "Edelgasser",
      facts: [
        "Edelgasser har fullt ytterste elektronskall og svært lav kjemisk reaktivitet."
      ],
      trivia: [
        "Den lave reaktiviteten skyldes fullstendig fylte valensskall.",
        "Oppdagelsen av edelgassene påvirket utformingen av periodesystemet."
      ]
    },
    halogen: {
      title: "Halogener",
      facts: [
        "Halogener er svært reaktive ikke-metaller som lett danner salter med metaller.",
        "De har sju valenselektroner."
      ],
      trivia: [
        "Halogener forekommer sjelden fritt i naturen.",
        "Reaktiviteten avtar nedover i gruppen."
      ]
    },
    lanthanide: {
      title: "Lantanider",
      facts: [
        "Lantanider er metaller i f-blokken med svært like kjemiske egenskaper.",
        "De kjennetegnes av utfylling av 4f-orbitaler."
      ],
      trivia: [
        "Lantanidene er vanskelige å skille kjemisk.",
        "Mange brukes i magneter og elektronikk."
      ]
    },
    actinide: {
      title: "Aktinider",
      facts: [
        "Aktinider er tunge metaller i f-blokken med utfylling av 5f-orbitaler.",
        "Alle aktinider er radioaktive."
      ],
      trivia: [
        "Flere aktinider er kunstig fremstilt.",
        "Gruppen inkluderer viktige kjernebrennstoffer."
      ]
    }
  },

  blocks: {
    s: {
      title: "s-blokken",
      facts: [
        "s-blokken omfatter grunnstoffer der ytterelektronene befinner seg i s-orbitaler.",
        "Grunnstoffene i s-blokken er hovedsakelig reaktive metaller."
      ],
      trivia: [
        "s-blokken domineres av alkalimetaller og jordalkalimetaller.",
        "Elektronstrukturen gir enkle og forutsigbare kjemiske egenskaper."
      ]
    },
    p: {
      title: "p-blokken",
      facts: [
        "p-blokken inneholder både metaller, halvmetaller og ikke-metaller.",
        "Her finnes mange av de mest kjemisk varierte grunnstoffene."
      ],
      trivia: [
        "p-blokken rommer de fleste biologisk viktige ikke-metallene.",
        "Variasjonen skyldes gradvis utfylling av p-orbitaler."
      ]
    },
    d: {
      title: "d-blokken",
      facts: [
        "d-blokken består av overgangsmetaller med delvis fylte d-orbitaler.",
        "Disse grunnstoffene har ofte flere mulige oksidasjonstall."
      ],
      trivia: [
        "d-elektronene gir opphav til metalliske egenskaper og katalytisk aktivitet.",
        "Mange konstruksjonsmetaller tilhører d-blokken."
      ]
    },
    f: {
      title: "f-blokken",
      facts: [
        "f-blokken inneholder lantanider og aktinider.",
        "Grunnstoffene kjennetegnes av utfylling av f-orbitaler."
      ],
      trivia: [
        "f-blokken vises ofte adskilt i periodesystemet av praktiske grunner.",
        "Kjemiske forskjeller mellom naboer er små."
      ]
    }
  },

  periods: {
    "1": {
      title: "Periode 1",
      facts: [
        "Periode 1 inneholder kun hydrogen og helium.",
        "Dette er de enkleste grunnstoffene i periodesystemet."
      ],
      trivia: [
        "Kun s-orbitalen fylles i periode 1.",
        "Perioden mangler både p-, d- og f-elementer."
      ],
      range: [1, 2]
    },
    "2": {
      title: "Periode 2",
      facts: [
        "Periode 2 markerer starten på p-blokken.",
        "Her finner vi flere livsviktige ikke-metaller."
      ],
      trivia: [
        "Periode 2 viser tydelige periodiske trender.",
        "Bindingstyper varierer sterkt innen perioden."
      ],
      range: [3, 10]
    },
    "3": {
      title: "Periode 3",
      facts: [
        "Periode 3 inneholder grunnstoffer som er sentrale i jordskorpen.",
        "Denne perioden brukes ofte i grunnleggende kjemiundervisning."
      ],
      trivia: [
        "Periode 3 mangler overgangsmetaller.",
        "Kjemiske egenskaper endres markant fra metall til ikke-metall."
      ],
      range: [11, 18]
    },
    "4": {
      title: "Periode 4",
      facts: [
        "Periode 4 er den første perioden med overgangsmetaller.",
        "Her begynner utfyllingen av d-orbitalene."
      ],
      trivia: [
        "Periode 4 introduserer stor kjemisk variasjon.",
        "Overgangsmetallene gir opphav til mange tekniske materialer."
      ],
      range: [19, 36]
    },
    "5": {
      title: "Periode 5",
      facts: [
        "Periode 5 inneholder mange teknologisk viktige metaller.",
        "Kjemiske egenskaper varierer betydelig i denne perioden."
      ],
      trivia: [
        "Perioden speiler struktur og mønster fra periode 4.",
        "Flere edelmetaller finnes her."
      ],
      range: [37, 54]
    },
    "6": {
      title: "Periode 6",
      facts: [
        "Periode 6 inkluderer lantanidene.",
        "Dette er en av de mest omfattende periodene."
      ],
      trivia: [
        "Utfylling av f-orbitaler påvirker periodens struktur.",
        "Mange tunge metaller finnes i denne perioden."
      ],
      range: [55, 86]
    },
    "7": {
      title: "Periode 7",
      facts: [
        "Periode 7 inneholder de tyngste og ofte radioaktive grunnstoffene.",
        "Mange av disse er kunstig fremstilt."
      ],
      trivia: [
        "Flere grunnstoffer i periode 7 har svært kort halveringstid.",
        "Perioden er fortsatt gjenstand for aktiv forskning."
      ],
      range: [87, 118]
    }
  }
};
