const elements = [
  {
    "nr": 1,
    "symbol": "H",
    "navn": "Hydrogen",
    "name_en": "Hydrogen",
    "name_la": "Hydrogenium",
    "gruppe": 1,
    "periode": 1,
    "block": "s",
    "serie": "nonmetal",
    "fakta": [
      "Finnes fritt som gass og bundet i vann og organiske forbindelser.",
      "Industrielt produsert hovedsakelig fra naturgass eller elektrolyse.",
      "Svært lett å lekke og vanskelig å lagre tett.",
      "Lav råvarepris, men høy kostnad for ren produksjon og lagring.",
      "Strategisk viktig i energidebatt (hydrogenøkonomi)."
    ],
    "trivia": [
      "Hydrogen ble identifisert som eget grunnstoff på slutten av 1700-tallet, da kjemien tok steget bort fra alkymien. Henry Cavendish beskrev det som «brennbar luft», uten å kjenne dets kosmiske betydning. Senere forskning viste at hydrogen er universets vanligste grunnstoff. Innsikten bandt kjemi til astronomi og materiens opprinnelse.",
      "På 1900-tallet ble hydrogen sentralt i studier av stjerner og kjernefusjon. Forskere undersøkte hvordan energi frigjøres fra lette kjerner. Hydrogen viste seg å være drivstoffet bak stjerners livsløp. Dette gjorde grunnstoffet fundamentalt for kosmologi.",
      "Etter oljekrisene på 1970-tallet fikk hydrogen politisk betydning som energibærer. Forskningen handler ikke om mangel på hydrogen, men om lagring, sikker produksjon og effektiv bruk. Dette gjør hydrogen til et teknologisk og samfunnsmessig tema også i dag."
    ]
  },
  {
    "nr": 2,
    "symbol": "He",
    "navn": "Helium",
    "name_en": "Helium",
    "name_la": "Helium",
    "gruppe": 18,
    "periode": 1,
    "block": "p",
    "serie": "noble",
    "fakta": [
      "Utvinnes nesten utelukkende fra naturgass.",
      "Ikke-fornybar ressurs som forsvinner til verdensrommet.",
      "Kritisk kjølemedium i medisin og forskning.",
      "Tilgangen er begrenset og prisene har variert kraftig.",
      "Ingen kjent kjemisk erstatning i mange bruksområder."
    ],
    "trivia": [
      "Helium ble oppdaget i solens spektrum i 1868, før det ble funnet på Jorden. Oppdagelsen under en solformørkelse koblet kjemi til astronomi. Det var første gang et grunnstoff ble identifisert utenfor planeten vår. Navnet viser til solguden Helios.",
      "På Jorden finnes helium hovedsakelig fanget i naturgass. Når det slipper ut i atmosfæren, forsvinner det gradvis ut i verdensrommet. Dette gjør helium til en ikke-fornybar ressurs i praksis. Bekymring for knapphet har påvirket forskning og politikk."
    ]
  },
  {
    "nr": 3,
    "symbol": "Li",
    "navn": "Litium",
    "name_en": "Lithium",
    "name_la": "Lithium",
    "gruppe": 1,
    "periode": 2,
    "block": "s",
    "serie": "alkali",
    "fakta": [
      "Utvinnes fra saltlaker og hard bergart.",
      "Produksjonen er konsentrert i få land.",
      "Pris og tilgjengelighet er sterkt etterspørselsdrevet.",
      "Kritisk råstoff for batteriteknologi.",
      "Utvinning gir miljømessige og politiske utfordringer."
    ],
    "trivia": [
      "Litium ble oppdaget i 1817 i mineraler, ikke som fritt metall. Navnet kommer fra gresk for stein og reflekterer funnstedet. Oppdagelsen skjedde under intensiv mineralanalyse i Europa. Dette styrket det fremvoksende periodesystemet.",
      "På slutten av 1900-tallet fikk litium stor betydning gjennom oppladbare batterier. Etterspørselen økte med mobiltelefoner og elbiler. Dette gjorde litium strategisk og geopolitisk viktig."
    ]
  },
  {
    "nr": 4,
    "symbol": "Be",
    "navn": "Beryllium",
    "name_en": "Beryllium",
    "name_la": "Beryllium",
    "gruppe": 2,
    "periode": 2,
    "block": "s",
    "serie": "alkaline",
    "fakta": [
      "Utvinnes fra berylliumrike mineraler.",
      "Produksjon krever strenge helse- og sikkerhetstiltak.",
      "Kostbart metall med nisjebruk.",
      "Viktig i luftfart og presisjonsutstyr.",
      "Tilgangen er begrenset globalt."
    ],
    "trivia": [
      "Beryllium ble isolert tidlig på 1800-tallet i Europa. Stoffet viste seg å være lett, stivt og mekanisk stabilt. Disse egenskapene gjorde det interessant for presisjonsbruk. Samtidig var produksjonen krevende.",
      "Tidlig forskning avdekket alvorlige helserisikoer ved beryllium. Inhalasjon av støv kan gi kronisk lungesykdom. Dette førte til streng regulering uvanlig tidlig i industrien."
    ]
  },
  {
    "nr": 5,
    "symbol": "B",
    "navn": "Bor",
    "name_en": "Boron",
    "name_la": "Borum",
    "gruppe": 13,
    "periode": 2,
    "block": "p",
    "serie": "metalloid",
    "fakta": [
      "Finnes hovedsakelig i boratmineraler.",
      "Kommersiell produksjon er konsentrert geografisk.",
      "Rimelig i industrielle mengder.",
      "Kritisk for glass, keramikk og landbruk.",
      "Etterspørselen er stabil og global."
    ],
    "trivia": [
      "Borforbindelser har vært brukt siden oldtiden, særlig i glass og keramikk. Rent bor ble først isolert på 1800-tallet. Stoffet ble klassifisert som et grensetilfelle i periodesystemet. Dette utfordret tidlige kategorier.",
      "På 1900-tallet ble bor viktig i landbruket. Små mengder er essensielle for plantevekst. Mangel kan gi alvorlige avlingsproblemer."
    ]
  },
  {
    "nr": 6,
    "symbol": "C",
    "navn": "Karbon",
    "name_en": "Carbon",
    "name_la": "Carboneum",
    "gruppe": 14,
    "periode": 2,
    "block": "p",
    "serie": "nonmetal",
    "fakta": [
      "Finnes i mange naturlige former og forbindelser.",
      "Økonomisk viktig i energi, materialer og kjemi.",
      "Tilgangen varierer sterkt etter form.",
      "Grafitt og diamant har svært ulik verdi.",
      "Sentral rolle i klima- og energispørsmål."
    ],
    "trivia": [
      "Karbon har vært kjent som kull og sot siden forhistorisk tid. Først på 1700-tallet ble det forstått som et grunnstoff. Dette la grunnlaget for organisk kjemi. Karbon ble sentralt i moderne vitenskap.",
      "At diamant og grafitt består av samme grunnstoff var lenge kontroversielt. Oppdagelsen viste at struktur kan være viktigere enn sammensetning. Dette prinsippet er sentralt i materialvitenskap.",
      "På slutten av 1900-tallet ble karbon sentralt i klimaforskning. Studier av CO₂ koblet kjemi til global politikk. Karbon ble et samfunnsspørsmål med stor politisk betydning."
    ]
  },
  {
    "nr": 7,
    "symbol": "N",
    "navn": "Nitrogen",
    "name_en": "Nitrogen",
    "name_la": "Nitrogenium",
    "gruppe": 15,
    "periode": 2,
    "block": "p",
    "serie": "nonmetal",
    "fakta": [
      "Utvinnes direkte fra luft.",
      "Svært tilgjengelig og billig i industriell form.",
      "Kritisk for gjødselproduksjon.",
      "Energikrevende å binde kjemisk.",
      "Grunnleggende for moderne matproduksjon."
    ],
    "trivia": [
      "Nitrogen ble identifisert på 1700-tallet som en gass som ikke støtter forbrenning. Forskere forsøkte å forstå luftens bestanddeler. Nitrogen viste seg å være kjemisk inert. Dette forklarte mange observasjoner."
    ]
  },
  {
    "nr": 8,
    "symbol": "O",
    "navn": "Oksygen",
    "name_en": "Oxygen",
    "name_la": "Oxygenium",
    "gruppe": 16,
    "periode": 2,
    "block": "p",
    "serie": "nonmetal",
    "fakta": [
      "Utvinnes industrielt fra luft.",
      "Svært tilgjengelig i store mengder.",
      "Kritisk for metallurgi og medisin.",
      "Lav råvarepris.",
      "Viktig i forbrennings- og prosessindustri."
    ],
    "trivia": [
      "Oksygen ble oppdaget uavhengig av flere forskere på 1700-tallet. Oppdagelsen skjedde under striden om forbrenning. Lavoisier forkastet flogistonteorien. Dette markerte starten på moderne kjemi."
    ]
  },
  {
    "nr": 9,
    "symbol": "F",
    "navn": "Fluor",
    "name_en": "Fluorine",
    "name_la": "Fluorum",
    "gruppe": 17,
    "periode": 2,
    "block": "p",
    "serie": "halogen",
    "fakta": [
      "Finnes kun bundet i mineraler.",
      "Produksjon er teknisk krevende og farlig.",
      "Viktig i kjemisk industri.",
      "Begrenset antall produsenter globalt.",
      "Strengt regulert på grunn av reaktivitet."
    ],
    "trivia": [
      "Fluor var lenge umulig å isolere på grunn av ekstrem reaktivitet. Flere forskere ble alvorlig skadet i forsøk. Først i 1886 lyktes isolasjonen. Dette gjorde fluor til et symbol på kjemiens farer."
    ]
  },
  {
    "nr": 10,
    "symbol": "Ne",
    "navn": "Neon",
    "name_en": "Neon",
    "name_la": "Neon",
    "gruppe": 18,
    "periode": 2,
    "block": "p",
    "serie": "noble",
    "fakta": [
      "Utvinnes som biprodukt ved luftseparasjon.",
      "Svært begrenset naturlig forekomst.",
      "Tilgangen er sårbar for industristans.",
      "Brukes i spesialbelysning og elektronikk.",
      "Prisene kan svinge kraftig."
    ],
    "trivia": [
      "Neon ble oppdaget i 1898 gjennom separasjon av luft. Oppdagelsen bekreftet periodesystemets forutsigelser. Senere fikk neonlys kulturell betydning i bymiljøer."
    ]
  },
  {
    "nr": 11,
    "symbol": "Na",
    "navn": "Natrium",
    "name_en": "Sodium",
    "name_la": "Natrium",
    "gruppe": 1,
    "periode": 3,
    "block": "s",
    "serie": "alkali",
    "fakta": [
      "Finnes rikelig i salter og sjøvann.",
      "Industrielt produsert i store mengder.",
      "Lav råvarekostnad.",
      "Kritisk for kjemisk industri.",
      "Lagring krever beskyttelse mot luft og fukt."
    ],
    "trivia": [
      "Natrium ble isolert i 1807 ved hjelp av elektrisk strøm. Dette markerte starten på elektrokjemi. Metoden åpnet for isolasjon av flere metaller."
    ]
  },
  {
    "nr": 12,
    "symbol": "Mg",
    "navn": "Magnesium",
    "name_en": "Magnesium",
    "name_la": "Magnesium",
    "gruppe": 2,
    "periode": 3,
    "block": "s",
    "serie": "alkaline",
    "fakta": [
      "Utvinnes fra sjøvann og mineraler.",
      "Relativt rimelig lettmetall.",
      "Viktig i transport og legeringer.",
      "Produksjon er energikrevende.",
      "Etterspørselen øker med lettvektsdesign."
    ],
    "trivia": [
      "Magnesium ble kjent for sitt intense hvite lys. Dette førte til bruk i tidlig fotografering. Stoffet fikk teknologisk betydning før bred industriell bruk."
    ]
  },
  {
    "nr": 13,
    "symbol": "Al",
    "navn": "Aluminium",
    "name_en": "Aluminium",
    "name_la": "Aluminium",
    "gruppe": 13,
    "periode": 3,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Utvinnes fra bauksitt.",
      "Produksjon er svært energikrevende.",
      "Rimelig og lett tilgjengelig i resirkulert form.",
      "Kritisk i bygg, transport og emballasje.",
      "Resirkulering gir stor energibesparelse."
    ],
    "trivia": [
      "Aluminium var på 1800-tallet mer verdifullt enn gull. Først billig elektrisitet gjorde masseproduksjon mulig. Dette endret bygg, transport og emballasje."
    ]
  },
  {
    "nr": 14,
    "symbol": "Si",
    "navn": "Silisium",
    "name_en": "Silicon",
    "name_la": "Silicium",
    "gruppe": 14,
    "periode": 3,
    "block": "p",
    "serie": "metalloid",
    "fakta": [
      "Utvinnes fra sand og kvarts.",
      "Svært tilgjengelig råstoff.",
      "Raffinering til elektronisk kvalitet er kostbar.",
      "Kritisk for elektronikk og solenergi.",
      "Geopolitisk viktig i halvlederindustrien."
    ],
    "trivia": [
      "Silisium har vært brukt som sand og glass i tusenvis av år. Transistoren på 1900-tallet ga stoffet ny betydning. Silisium ble grunnlaget for den digitale tidsalderen."
    ]
  },
  {
    "nr": 15,
    "symbol": "P",
    "navn": "Fosfor",
    "name_en": "Phosphorus",
    "name_la": "Phosphorus",
    "gruppe": 15,
    "periode": 3,
    "block": "p",
    "serie": "nonmetal",
    "fakta": [
      "Utvinnes fra fosfatbergarter.",
      "Konsentrert produksjon i få land.",
      "Uerstattelig i landbruk.",
      "Ikke-fornybar ressurs.",
      "Strategisk viktig for matsikkerhet."
    ],
    "trivia": [
      "Fosfor ble oppdaget i 1669 under alkymistiske eksperimenter. Stoffet lyste i mørket og vakte sensasjon. Det ble et tidlig spektakulært grunnstoff."
    ]
  },
  {
    "nr": 16,
    "symbol": "S",
    "navn": "Svovel",
    "name_en": "Sulfur",
    "name_la": "Sulfur",
    "gruppe": 16,
    "periode": 3,
    "block": "p",
    "serie": "nonmetal",
    "fakta": [
      "Utvinnes ofte som biprodukt.",
      "Svært tilgjengelig i industriell skala.",
      "Lav kostnad.",
      "Kritisk for kjemisk industri.",
      "Viktig for gjødselproduksjon."
    ],
    "trivia": [
      "Svovel har vært brukt siden oldtiden og forekommer ved vulkaner. Dette ga stoffet kulturell og religiøs betydning. Senere ble det industrielt viktig."
    ]
  },
  {
    "nr": 17,
    "symbol": "Cl",
    "navn": "Klor",
    "name_en": "Chlorine",
    "name_la": "Chlorum",
    "gruppe": 17,
    "periode": 3,
    "block": "p",
    "serie": "halogen",
    "fakta": [
      "Produseres industrielt fra salt.",
      "Svært viktig for kjemisk industri.",
      "Lav råvarekostnad.",
      "Strengt regulert på grunn av giftighet.",
      "Kritisk for vannbehandling."
    ],
    "trivia": [
      "Klor ble brukt som stridsgass under første verdenskrig. Erfaringene førte til internasjonale forbud. Klor ble et symbol på kjemiens mørke side."
    ]
  },
  {
    "nr": 18,
    "symbol": "Ar",
    "navn": "Argon",
    "name_en": "Argon",
    "name_la": "Argon",
    "gruppe": 18,
    "periode": 3,
    "block": "p",
    "serie": "noble",
    "fakta": [
      "Utvinnes fra luft.",
      "God tilgjengelighet.",
      "Relativt rimelig edelgass.",
      "Viktig i sveising og produksjon.",
      "Kjemisk inert i bruk."
    ],
    "trivia": [
      "Argon ble oppdaget i 1894 som en skjult bestanddel av luft. Oppdagelsen styrket periodesystemet. Inerthet viste seg å være nyttig."
    ]
  },
  {
    "nr": 19,
    "symbol": "K",
    "navn": "Kalium",
    "name_en": "Potassium",
    "name_la": "Kalium",
    "gruppe": 1,
    "periode": 4,
    "block": "s",
    "serie": "alkali",
    "fakta": [
      "Utvinnes fra kaliumsalter.",
      "Viktig for gjødselproduksjon.",
      "Globalt etterspurt råstoff.",
      "Produksjon konsentrert i få regioner.",
      "Uerstattelig i landbruk."
    ],
    "trivia": [
      "Kalium ble isolert sammen med natrium ved elektrokjemi. Stoffet viste elektrokjemiens potensial. Senere ble biologisk betydning tydelig."
    ]
  },
  {
    "nr": 20,
    "symbol": "Ca",
    "navn": "Kalsium",
    "name_en": "Calcium",
    "name_la": "Calcium",
    "gruppe": 2,
    "periode": 4,
    "block": "s",
    "serie": "alkaline",
    "fakta": [
      "Finnes rikelig i kalkstein.",
      "Svært tilgjengelig og rimelig.",
      "Kritisk for byggematerialer.",
      "Viktig i metallurgi.",
      "Grunnleggende i biologiske systemer."
    ],
    "trivia": [
      "Kalsiumforbindelser har vært brukt i bygg siden antikken. Senere ble kalsium forstått som biologisk essensielt. Stoffet knytter kjemi til liv."
    ]
  },
  {
    "nr": 21,
    "symbol": "Sc",
    "navn": "Scandium",
    "name_en": "Scandium",
    "name_la": "Scandium",
    "gruppe": 3,
    "periode": 4,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Svært sjeldent i konsentrerte forekomster.",
      "Utvinnes ofte som biprodukt.",
      "Høy pris per kilo.",
      "Brukes i små mengder med stor effekt.",
      "Strategisk metall i avanserte legeringer."
    ],
    "trivia": [
      "Scandium bekreftet periodesystemets forutsigelser. Stoffet fikk først betydning med moderne materialteknologi."
    ]
  },
  {
    "nr": 22,
    "symbol": "Ti",
    "navn": "Titan",
    "name_en": "Titanium",
    "name_la": "Titanium",
    "gruppe": 4,
    "periode": 4,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes fra titanrike mineraler.",
      "Produksjon er teknisk krevende.",
      "Høy styrke-til-vekt gjør metallet verdifullt.",
      "Kostbart sammenlignet med stål.",
      "Viktig i luftfart og medisin."
    ],
    "trivia": [
      "Titan fikk betydning på 1900-tallet gjennom luftfart. Styrke og lav vekt var avgjørende. Stoffet ble viktig i romfart og medisin."
    ]
  },
  {
    "nr": 23,
    "symbol": "V",
    "navn": "Vanadium",
    "name_en": "Vanadium",
    "name_la": "Vanadium",
    "gruppe": 5,
    "periode": 4,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes fra malmer og oljeaske.",
      "Brukes hovedsakelig i stål.",
      "Moderat pris, høy industriell verdi.",
      "Etterspørselen følger bygg og energi.",
      "Viktig for slitesterke materialer."
    ],
    "trivia": [
      "Vanadium forbedrer stålets egenskaper i små mengder. Dette ble viktig under industrialiseringen. Stoffet fikk stor konstruksjonsbetydning."
    ]
  },
  {
    "nr": 24,
    "symbol": "Cr",
    "navn": "Krom",
    "name_en": "Chromium",
    "name_la": "Chromium",
    "gruppe": 6,
    "periode": 4,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes fra kromitt.",
      "Kritisk for rustfritt stål.",
      "Global etterspørsel er stabil.",
      "Noen former er miljø- og helsefarlige.",
      "Viktig strategisk industrimetall."
    ],
    "trivia": [
      "Kroms rolle i rustfritt stål endret metallindustrien. Samtidig førte giftige forbindelser til streng regulering."
    ]
  },
  {
    "nr": 25,
    "symbol": "Mn",
    "navn": "Mangan",
    "name_en": "Manganese",
    "name_la": "Manganum",
    "gruppe": 7,
    "periode": 4,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes fra manganmalm.",
      "Svært viktig i stålproduksjon.",
      "Rimelig og tilgjengelig.",
      "Forbruket følger stålindustrien.",
      "Uerstattelig i moderne metallurgi."
    ],
    "trivia": [
      "Mangan ble essensielt i stålproduksjon. Senere ble helserisikoer tydelige. Stoffet knytter industri til arbeidsmiljø."
    ]
  },
  {
    "nr": 26,
    "symbol": "Fe",
    "navn": "Jern",
    "name_en": "Iron",
    "name_la": "Ferrum",
    "gruppe": 8,
    "periode": 4,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes i enorme mengder globalt.",
      "Svært lav råvarepris.",
      "Grunnlaget for moderne infrastruktur.",
      "Produksjon har stor klimabelastning.",
      "Strategisk viktig i alle økonomier."
    ],
    "trivia": [
      "Jern markerer et helt teknologisk tidsavsnitt. Overgangen til jernalderen endret samfunn. I dag står jern i sentrum for klimadebatt."
    ]
  },
  {
    "nr": 27,
    "symbol": "Co",
    "navn": "Kobolt",
    "name_en": "Cobalt",
    "name_la": "Cobaltum",
    "gruppe": 9,
    "periode": 4,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes ofte som biprodukt.",
      "Produksjonen er konsentrert geografisk.",
      "Prisfølsomt og politisk omstridt.",
      "Kritisk for batteriteknologi.",
      "Etisk utfordrende forsyningskjeder."
    ],
    "trivia": [
      "Kobolt fikk ny betydning gjennom batteriteknologi. Etterspørselen reiste etiske spørsmål. Produksjonen er geografisk konsentrert."
    ]
  },
  {
    "nr": 28,
    "symbol": "Ni",
    "navn": "Nikkel",
    "name_en": "Nickel",
    "name_la": "Niccolum",
    "gruppe": 10,
    "periode": 4,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes fra sulfid- og laterittmalmer.",
      "Viktig i rustfritt stål.",
      "Etterspørselen øker med batteribruk.",
      "Moderat til høy pris.",
      "Globalt strategisk metall."
    ],
    "trivia": [
      "Nikkel muliggjorde rustfritt stål. Dette endret arkitektur og industri. Korrosjonsmotstand var avgjørende."
    ]
  },
  {
    "nr": 29,
    "symbol": "Cu",
    "navn": "Kobber",
    "name_en": "Copper",
    "name_la": "Cuprum",
    "gruppe": 11,
    "periode": 4,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes fra kobbermalm globalt.",
      "Kritisk for elektrifisering.",
      "Prisfølsomt metall.",
      "God resirkulerbarhet.",
      "Etterspørselen øker med energiovergang."
    ],
    "trivia": [
      "Kobber var blant de første metallene mennesker brukte. I dag er det kritisk for elektrifisering. Historien fortsetter i ny form."
    ]
  },
  {
    "nr": 30,
    "symbol": "Zn",
    "navn": "Sink",
    "name_en": "Zinc",
    "name_la": "Zincum",
    "gruppe": 12,
    "periode": 4,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes hovedsakelig fra sinkmalm.",
      "Viktig for korrosjonsbeskyttelse.",
      "Moderat pris.",
      "Brukes i store volum.",
      "Stabil global etterspørsel."
    ],
    "trivia": [
      "Sink ble brukt i legeringer lenge før det ble forstått som et eget grunnstoff. Først på 1700-tallet ble sink identifisert vitenskapelig. Dette ryddet opp i forvirring rundt messing. Sink fikk dermed en tydelig plass i metallkjemien."
    ]
  },
  {
    "nr": 31,
    "symbol": "Ga",
    "navn": "Gallium",
    "name_en": "Gallium",
    "name_la": "Gallium",
    "gruppe": 13,
    "periode": 4,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Smelter like over romtemperatur.",
      "Utvinnes hovedsakelig som biprodukt.",
      "Svært begrenset tilgjengelighet.",
      "Kritisk i halvlederteknologi.",
      "Strategisk høyteknologimetall."
    ],
    "trivia": [
      "Gallium ble oppdaget i Frankrike i 1875 og bekreftet Dmitrij Mendelejevs forutsigelser om et manglende grunnstoff. Oppdagelsen styrket tilliten til periodesystemet som vitenskapelig verktøy.",
      "Gallium smelter ved omtrent 30 °C og kan smelte i hånden. I praksis er galliums betydning knyttet til elektroniske egenskaper og bruk i avansert halvlederteknologi."
    ]
  },
  {
    "nr": 32,
    "symbol": "Ge",
    "navn": "Germanium",
    "name_en": "Germanium",
    "name_la": "Germanium",
    "gruppe": 14,
    "periode": 4,
    "block": "p",
    "serie": "metalloid",
    "fakta": [
      "Utvinnes hovedsakelig som biprodukt fra sink.",
      "Begrenset global produksjon.",
      "Moderat til høy pris.",
      "Viktig i fiberoptikk og infrarød teknologi.",
      "Etterspørselen følger elektronikkmarkedet."
    ],
    "trivia": [
      "Germanium ble oppdaget i Tyskland i 1886, også som en bekreftelse av Mendelejevs periodesystem. Oppdagelsen skjedde i en tid preget av rask industriell og vitenskapelig utvikling. Stoffet passet nøyaktig der teorien hadde forutsagt. Dette ga ytterligere legitimitet til systematisk kjemi.",
      "På midten av 1900-tallet fikk germanium stor betydning i tidlig elektronikk. Det ble brukt i de første transistorene før silisium tok over. Forskning på germanium var avgjørende for utviklingen av moderne elektronikk. Stoffet representerer derfor et viktig overgangsstadium i teknologiens historie."
    ]
  },
  {
    "nr": 33,
    "symbol": "As",
    "navn": "Arsen",
    "name_en": "Arsenic",
    "name_la": "Arsenicum",
    "gruppe": 15,
    "periode": 4,
    "block": "p",
    "serie": "metalloid",
    "fakta": [
      "Utvinnes som biprodukt i metallurgi.",
      "Giftig og strengt regulert.",
      "Moderat tilgjengelighet.",
      "Brukes i halvledere og spesiallegeringer.",
      "Begrenset, men stabil etterspørsel."
    ],
    "trivia": [
      "Arsen har vært kjent siden antikken, hovedsakelig gjennom sine giftige forbindelser. Stoffet fikk tidlig rykte som et diskret giftmiddel. Dette knytter arsen til politisk og historisk intrige. Kjemi og makt ble tett forbundet.",
      "På 1900-tallet fikk arsen også en teknologisk rolle. Forskning viste at arsenforbindelser kunne brukes i halvledere. Dette skjedde særlig i militær og romfartsrelatert teknologi. Arsen illustrerer hvordan farlige stoffer også kan være teknologisk verdifulle."
    ]
  },
  {
    "nr": 34,
    "symbol": "Se",
    "navn": "Selen",
    "name_en": "Selenium",
    "name_la": "Selenium",
    "gruppe": 16,
    "periode": 4,
    "block": "p",
    "serie": "nonmetal",
    "fakta": [
      "Utvinnes som biprodukt ved kobberraffinering.",
      "Moderat tilgjengelighet.",
      "Viktig i elektronikk og glass.",
      "Brukes også som kosttilskudd i små mengder.",
      "Prisene varierer med industribehov."
    ],
    "trivia": [
      "Selen ble oppdaget i Sverige i 1817 under analyse av svovel. Oppdagelsen skjedde i en periode med systematisk kartlegging av kjemiske elementer. Stoffet ble raskt anerkjent som et eget grunnstoff. Dette bidro til å rydde opp i forvirring rundt svovelrelaterte forbindelser.",
      "Senere forskning viste at selen er et essensielt sporstoff. Samtidig har stoffet et smalt vindu mellom nytte og giftighet. Dette gjorde selen viktig i medisinsk og ernæringsmessig forskning. Det illustrerer hvor fin balansen i biokjemi kan være."
    ]
  },
  {
    "nr": 35,
    "symbol": "Br",
    "navn": "Brom",
    "name_en": "Bromine",
    "name_la": "Bromum",
    "gruppe": 17,
    "periode": 4,
    "block": "p",
    "serie": "halogen",
    "fakta": [
      "Utvinnes hovedsakelig fra saltlaker.",
      "Produksjonen er geografisk konsentrert.",
      "Moderat til høy pris.",
      "Brukes i kjemisk industri og flammehemmere.",
      "Strengt regulert i flere anvendelser."
    ],
    "trivia": [
      "Brom ble oppdaget i Frankrike i 1826. Det var det første grunnstoffet som ble funnet som væske ved romtemperatur. Dette gjorde brom lett gjenkjennelig og minneverdig. Oppdagelsen vakte stor oppmerksomhet i kjemiske miljøer."
    ]
  },
  {
    "nr": 36,
    "symbol": "Kr",
    "navn": "Krypton",
    "name_en": "Krypton",
    "name_la": "Krypton",
    "gruppe": 18,
    "periode": 4,
    "block": "p",
    "serie": "noble",
    "fakta": [
      "Utvinnes ved luftseparasjon.",
      "Svært lav naturlig konsentrasjon.",
      "Begrenset tilgjengelighet.",
      "Brukes i belysning og spesialoptikk.",
      "Prisfølsom for industriproduksjon."
    ],
    "trivia": [
      "Krypton ble oppdaget i Storbritannia i 1898 under systematisk separasjon av luft. Oppdagelsen kom i en periode der flere edelgasser ble identifisert. Dette avslørte at luftens sammensetning var mer kompleks enn antatt. Krypton styrket forståelsen av inerte grunnstoffer.",
      "Krypton fikk senere bruk i spesialbelysning og optikk. Forskning fokuserte på hvordan inerthet kan utnyttes teknologisk. Dette viste at mangel på reaktivitet også kan være en fordel. Krypton ble et eksempel på verdien av kjemisk stabilitet."
    ]
  },
  {
    "nr": 37,
    "symbol": "Rb",
    "navn": "Rubidium",
    "name_en": "Rubidium",
    "name_la": "Rubidium",
    "gruppe": 1,
    "periode": 5,
    "block": "s",
    "serie": "alkali",
    "fakta": [
      "Svært sjeldent alkalimetall.",
      "Utvinnes i små mengder.",
      "Høy pris per gram.",
      "Brukes i presisjonsinstrumenter.",
      "Hovedsakelig forskningsbruk."
    ],
    "trivia": [
      "Rubidium ble oppdaget i Tyskland i 1861 ved hjelp av spektroskopi. Dette var en ny metode på den tiden. Oppdagelsen viste hvordan lys kunne avsløre ukjente grunnstoffer. Spektroskopi ble et sentralt verktøy i kjemi og astronomi.",
      "Rubidium fikk senere betydning i presisjonsteknologi. Det brukes i atomklokker som definerer tid svært nøyaktig. Forskningen handler om stabilitet i atomoverganger. Dette gjør rubidium viktig i moderne navigasjon og kommunikasjon."
    ]
  },
  {
    "nr": 38,
    "symbol": "Sr",
    "navn": "Strontium",
    "name_en": "Strontium",
    "name_la": "Strontium",
    "gruppe": 2,
    "periode": 5,
    "block": "s",
    "serie": "alkaline",
    "fakta": [
      "Utvinnes fra strontiumrike mineraler.",
      "Moderat tilgjengelighet.",
      "Brukes i keramikk, elektronikk og fyrverkeri.",
      "Radioaktive isotoper brukes medisinsk.",
      "Moderat råvarepris."
    ],
    "trivia": [
      "Strontium ble oppdaget i Skottland på slutten av 1700-tallet. Navnet stammer fra funnstedet Strontian. Dette var vanlig praksis i tidlig kjemi. Geografi satte tydelige spor i navngivningen.",
      "Strontium er kjent for sine sterke røde flammer. Dette gjorde stoffet viktig i fyrverkeri. Samtidig har radioaktive isotoper fått medisinsk betydning. Forskning på strontium spenner derfor fra underholdning til helse."
    ]
  },
  {
    "nr": 39,
    "symbol": "Y",
    "navn": "Yttrium",
    "name_en": "Yttrium",
    "name_la": "Yttrium",
    "gruppe": 3,
    "periode": 5,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes sammen med sjeldne jordarter.",
      "Produksjonen er konsentrert geografisk.",
      "Moderat til høy pris.",
      "Viktig i skjermer, lasere og superledere.",
      "Strategisk råstoff i høyteknologi."
    ],
    "trivia": [
      "Yttrium ble oppdaget i Sverige i 1794. Stoffet fikk navn etter landsbyen Ytterby. Dette området ga navn til flere grunnstoffer. Ytterby er unikt i kjemihistorien.",
      "Yttrium fikk senere betydning i moderne teknologi. Det brukes i skjermer, lasere og superledere. Forskning på yttrium fokuserer på lys- og energioverføring. Dette gjør stoffet sentralt i høyteknologi."
    ]
  },
  {
    "nr": 40,
    "symbol": "Zr",
    "navn": "Zirkonium",
    "name_en": "Zirconium",
    "name_la": "Zirconium",
    "gruppe": 4,
    "periode": 5,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes hovedsakelig fra zirkon.",
      "Begrenset tilgjengelighet.",
      "Kritisk i kjernekraft.",
      "Moderat til høy pris.",
      "Strategisk metall med streng kvalitetskontroll."
    ],
    "trivia": [
      "Zirkonium ble isolert tidlig på 1800-tallet, men fikk først stor betydning på 1900-tallet. Det ble viktig i kjernekraft på grunn av lav nøytronabsorpsjon. Forskningen var drevet av energibehov og sikkerhet. Zirkonium ble et strategisk kjernekraftmateriale.",
      "Skillet mellom zirkonium og hafnium viste seg å være krevende. Forskning på separasjonsteknikker ble derfor viktig. Dette illustrerer utfordringer i raffinering av kjemisk like stoffer. Kjernekraft presset frem ny kjemisk teknologi."
    ]
  },
  {
    "nr": 41,
    "symbol": "Nb",
    "navn": "Niob",
    "name_en": "Niobium",
    "name_la": "Niobium",
    "gruppe": 5,
    "periode": 5,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes hovedsakelig i Brasil.",
      "Relativt god tilgjengelighet.",
      "Moderat pris.",
      "Kritisk i høyfast stål.",
      "Strategisk for infrastruktur."
    ],
    "trivia": [
      "Niobium ble identifisert på 1800-tallet, men forvekslet lenge med tantal. Dette viser hvor vanskelig grunnstoffidentifikasjon kunne være. Først forbedrede analysemetoder skilte dem. Vitenskapelig presisjon økte gradvis.",
      "Niobium fikk senere stor betydning i høyfast stål. Små mengder gir store mekaniske forbedringer. Forskning fokuserer på strukturforsterkning. Dette gjør niobium viktig i moderne infrastruktur."
    ]
  },
  {
    "nr": 42,
    "symbol": "Mo",
    "navn": "Molybden",
    "name_en": "Molybdenum",
    "name_la": "Molybdaenum",
    "gruppe": 6,
    "periode": 5,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes fra molybdenmalm og som biprodukt.",
      "God tilgjengelighet.",
      "Moderat pris.",
      "Kritisk i høytemperaturlegeringer.",
      "Viktig i energi- og kjemisk industri."
    ],
    "trivia": [
      "Molybden ble anerkjent som eget grunnstoff på 1700-tallet. Det ble først brukt i våpenstål. Dette skjedde i en periode preget av militær teknologisk utvikling. Molybden bidro til sterkere og mer varmebestandige materialer.",
      "Senere fikk molybden bred industriell bruk. Forskning fokuserer på høytemperaturstabilitet. Dette gjør stoffet viktig i energi- og kjemisk industri. Molybden knytter kjemi til ekstrem belastning."
    ]
  },
  {
    "nr": 43,
    "symbol": "Tc",
    "navn": "Teknetium",
    "name_en": "Technetium",
    "name_la": "Technetium",
    "gruppe": 7,
    "periode": 5,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Finnes ikke naturlig i kommersielle mengder.",
      "Fremstilles i atomreaktorer.",
      "Svært begrenset tilgjengelighet.",
      "Brukes hovedsakelig i medisin.",
      "Radioaktivt og strengt kontrollert."
    ],
    "trivia": [
      "Technetium var det første grunnstoffet som ble fremstilt kunstig. Dette skjedde på 1930-tallet i Italia. Målet var å teste teori om atomkjerner. Stoffet bekreftet at periodesystemet kunne utvides kunstig.",
      "Senere fikk technetium stor medisinsk betydning. Det brukes i bildediagnostikk. Forskning fokuserer på kortlivede isotoper. Dette gjør technetium uvurderlig i moderne medisin."
    ]
  },
  {
    "nr": 44,
    "symbol": "Ru",
    "navn": "Rutenium",
    "name_en": "Ruthenium",
    "name_la": "Ruthenium",
    "gruppe": 8,
    "periode": 5,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Svært sjeldent platina-gruppemetall.",
      "Utvinnes som biprodukt.",
      "Høy pris.",
      "Brukes i katalysatorer og elektronikk.",
      "Strategisk nisjemetall."
    ],
    "trivia": [
      "Ruthenium ble oppdaget i Russland på 1800-tallet. Navnet viser til regionen Ruthenia. Dette reflekterer nasjonal stolthet i vitenskap. Geografi og politikk spilte en rolle.",
      "Ruthenium brukes i katalysatorer og elektronikk. Forskning fokuserer på stabilitet og presisjon. Små mengder gir stor effekt. Dette gjør stoffet verdifullt til tross for sjeldenhet."
    ]
  },
  {
    "nr": 45,
    "symbol": "Rh",
    "navn": "Rhodium",
    "name_en": "Rhodium",
    "name_la": "Rhodium",
    "gruppe": 9,
    "periode": 5,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Ekstremt sjeldent og kostbart.",
      "Utvinnes hovedsakelig i Sør-Afrika.",
      "Kritisk i bilkatalysatorer.",
      "Svært høy prisvolatilitet.",
      "Strategisk miljømetall."
    ],
    "trivia": [
      "Rhodium ble oppdaget i England i 1803. Navnet kommer fra gresk for rose, etter fargede salter. Dette viser hvordan visuelle egenskaper påvirket navngivning. Estetikk og kjemi møttes.",
      "Rhodium fikk enorm betydning i bilkatalysatorer. Forskningen var drevet av miljøkrav. Stoffet bidro til redusert utslipp. Dette gjør rhodium sentralt i moderne miljøpolitikk."
    ]
  },
  {
    "nr": 46,
    "symbol": "Pd",
    "navn": "Palladium",
    "name_en": "Palladium",
    "name_la": "Palladium",
    "gruppe": 10,
    "periode": 5,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes hovedsakelig i Russland og Sør-Afrika.",
      "Begrenset tilgjengelighet.",
      "Høy pris.",
      "Kritisk i katalysatorer og elektronikk.",
      "Strategisk edelmetall."
    ],
    "trivia": [
      "Palladium ble oppdaget i England i 1803. Navnet ble hentet fra en nylig oppdaget asteroide. Dette viser samtidens interesse for astronomi. Vitenskapelige felt inspirerte hverandre.",
      "Palladium er viktig i katalysatorer og elektronikk. Forskning fokuserer på overflatekjemi. Stoffet er sentralt i renseteknologi. Dette gir palladium strategisk betydning."
    ]
  },
  {
    "nr": 47,
    "symbol": "Ag",
    "navn": "Sølv",
    "name_en": "Silver",
    "name_la": "Argentum",
    "gruppe": 11,
    "periode": 5,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes globalt, ofte som biprodukt.",
      "Moderat tilgjengelighet.",
      "Høy økonomisk verdi.",
      "Kritisk i elektronikk og solceller.",
      "God resirkulerbarhet."
    ],
    "trivia": [
      "Sølv har vært brukt siden antikken. Det fikk tidlig økonomisk og kulturell betydning. Myntsystemer bygde på sølv. Kjemi og økonomi ble tett sammenvevd.",
      "I moderne tid har sølv fått teknologisk betydning. Det brukes i elektronikk og solceller. Forskning fokuserer på ledningsevne. Sølv knytter fortidens verdi til fremtidens teknologi."
    ]
  },
  {
    "nr": 48,
    "symbol": "Cd",
    "navn": "Kadmium",
    "name_en": "Cadmium",
    "name_la": "Cadmium",
    "gruppe": 12,
    "periode": 5,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes som biprodukt av sink.",
      "Giftig og sterkt regulert.",
      "Begrenset bruk i dag.",
      "Moderat pris.",
      "Historisk viktig industrimetall."
    ],
    "trivia": [
      "Kadmium ble oppdaget i Tyskland i 1817. Det ble raskt kjent for giftighet. Dette førte til tidlig regulering. Kadmium ble et advarende eksempel.",
      "Kadmium fikk likevel teknologisk bruk. Det ble brukt i batterier og pigmenter. Senere ble bruken sterkt begrenset. Stoffet illustrerer konflikten mellom nytte og helse."
    ]
  },
  {
    "nr": 49,
    "symbol": "In",
    "navn": "Indium",
    "name_en": "Indium",
    "name_la": "Indium",
    "gruppe": 13,
    "periode": 5,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Utvinnes som biprodukt i sinkproduksjon.",
      "Svært begrenset tilgjengelighet.",
      "Høy pris.",
      "Kritisk i skjermer og berøringsteknologi.",
      "Strategisk høyteknologimetall."
    ],
    "trivia": [
      "Indium ble oppdaget i Tyskland i 1863 ved spektroskopi. Navnet kommer fra en indigo-farget linje i spekteret. Dette viser hvordan nye metoder avdekket skjulte stoffer. Spektroskopi revolusjonerte kjemien.",
      "Indium fikk stor betydning i moderne skjermer. Forskning fokuserer på transparente ledere. Stoffet er kritisk for berøringsteknologi. Dette gjør indium strategisk viktig."
    ]
  },
  {
    "nr": 50,
    "symbol": "Sn",
    "navn": "Tinn",
    "name_en": "Tin",
    "name_la": "Stannum",
    "gruppe": 14,
    "periode": 5,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Utvinnes fra tinnmalm.",
      "Moderat tilgjengelighet.",
      "Moderat pris.",
      "Viktig i loddemetaller.",
      "Stabil industriell etterspørsel."
    ],
    "trivia": [
      "Tinn har vært brukt siden bronsealderen. Legering med kobber endret teknologi og samfunn. Først senere ble tinn forstått som grunnstoff. Historisk bruk gikk foran teori.",
      "I moderne tid brukes tinn i loddemetaller. Forskning fokuserer på blyfrie alternativer. Dette er drevet av helse- og miljøhensyn. Tinn tilpasser seg nye krav."
    ]
  },
  {
    "nr": 51,
    "symbol": "Sb",
    "navn": "Antimon",
    "name_en": "Antimony",
    "name_la": "Stibium",
    "gruppe": 15,
    "periode": 5,
    "block": "p",
    "serie": "metalloid",
    "fakta": [
      "Utvinnes hovedsakelig i Kina.",
      "Begrenset global tilgjengelighet.",
      "Moderat til høy pris.",
      "Brukes i flammehemmere og legeringer.",
      "Strategisk og regulert metall."
    ],
    "trivia": [
      "Antimon har vært kjent siden antikken. Det ble brukt i kosmetikk og legeringer. Navnet har usikker opprinnelse. Stoffet har hatt mange roller.",
      "Antimon brukes i flammehemmere. Forskning fokuserer på sikkerhet. Samtidig er giftighet en utfordring. Antimon er et regulert industristoff."
    ]
  },
  {
    "nr": 52,
    "symbol": "Te",
    "navn": "Tellur",
    "name_en": "Tellurium",
    "name_la": "Tellurium",
    "gruppe": 16,
    "periode": 5,
    "block": "p",
    "serie": "metalloid",
    "fakta": [
      "Utvinnes som biprodukt fra kobber.",
      "Svært begrenset tilgjengelighet.",
      "Høy pris.",
      "Kritisk i solcelleteknologi.",
      "Strategisk råstoff i energiomstillingen."
    ],
    "trivia": [
      "Tellur ble oppdaget i Øst-Europa på 1700-tallet. Navnet kommer fra latin for jord. Dette reflekterer tidens naturfilosofi. Kjemi og språk var tett knyttet.",
      "Tellur har fått ny betydning i solcelleteknologi. Forskning fokuserer på energieffektivitet. Stoffet er viktig i tynnfilm-solceller. Dette knytter kjemi til energiovergang."
    ]
  },
  {
    "nr": 53,
    "symbol": "I",
    "navn": "Jod",
    "name_en": "Iodine",
    "name_la": "Iodum",
    "gruppe": 17,
    "periode": 5,
    "block": "p",
    "serie": "halogen",
    "fakta": [
      "Utvinnes fra saltlaker og sjøvann.",
      "Produksjonen er geografisk konsentrert.",
      "Moderat pris.",
      "Kritisk i medisin og ernæring.",
      "Uerstattelig sporstoff."
    ],
    "trivia": [
      "Jod ble oppdaget i Frankrike i 1811 under produksjon av salpeter. Oppdagelsen skjedde i en tid preget av krig. Behov for ressurser drev kjemiske funn. Jod fikk rask medisinsk betydning.",
      "Jod er essensielt for skjoldbruskkjertelen. Forskning avdekket dette på 1900-tallet. Jodmangel ble et folkehelseproblem. Beriking av salt ble en løsning."
    ]
  },
  {
    "nr": 54,
    "symbol": "Xe",
    "navn": "Xenon",
    "name_en": "Xenon",
    "name_la": "Xenon",
    "gruppe": 18,
    "periode": 5,
    "block": "p",
    "serie": "noble",
    "fakta": [
      "Utvinnes ved luftseparasjon.",
      "Svært lav naturlig konsentrasjon.",
      "Begrenset tilgjengelighet.",
      "Høy pris.",
      "Brukes i medisin og spesialbelysning."
    ],
    "trivia": [
      "Xenon ble oppdaget i 1898 i Storbritannia. Navnet betyr fremmed. Dette reflekterer stoffets sjeldenhet. Xenon utfordret forståelsen av edelgasser.",
      "Xenon brukes i spesielle lamper og medisinsk anestesi. Forskning fokuserer på fysiologiske effekter. Stoffet har uventede biologiske egenskaper. Dette gjør xenon unikt."
    ]
  },
  {
    "nr": 55,
    "symbol": "Cs",
    "navn": "Cesium",
    "name_en": "Cesium",
    "name_la": "Caesium",
    "gruppe": 1,
    "periode": 6,
    "block": "s",
    "serie": "alkali",
    "fakta": [
      "Svært sjeldent alkalimetall.",
      "Utvinnes i små mengder.",
      "Høy pris.",
      "Kritisk i atomklokker.",
      "Strategisk presisjonsråstoff."
    ],
    "trivia": [
      "Cesium ble oppdaget i 1860 ved spektroskopi. Navnet kommer fra himmelblå spektrallinjer. Dette viser hvordan lys avslører materie. Metoden endret kjemi.",
      "Cesium brukes i atomklokker. Forskning fokuserer på ekstrem presisjon. Dette danner grunnlaget for moderne tidssystemer. Cesium definerer sekunder."
    ]
  },
  {
    "nr": 56,
    "symbol": "Ba",
    "navn": "Barium",
    "name_en": "Barium",
    "name_la": "Barium",
    "gruppe": 2,
    "periode": 6,
    "block": "s",
    "serie": "alkaline",
    "fakta": [
      "Utvinnes fra barytt.",
      "God tilgjengelighet.",
      "Moderat pris.",
      "Brukes i kjemisk industri og medisin.",
      "Viktig kontrastmateriale."
    ],
    "trivia": [
      "Barium ble identifisert på 1700-tallet. Navnet betyr tung. Dette reflekterer tidlige observasjoner. Språk og kjemi hang sammen.",
      "Barium brukes i medisinsk bildediagnostikk. Forskning fokuserer på kontrastmidler. Stoffet gjør indre strukturer synlige. Dette knytter kjemi til medisin."
    ]
  },
  {
    "nr": 57,
    "symbol": "La",
    "navn": "Lantan",
    "name_en": "Lanthanum",
    "name_la": "Lanthanum",
    "gruppe": 3,
    "periode": 6,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes sammen med sjeldne jordarter.",
      "Moderat tilgjengelighet.",
      "Moderat pris.",
      "Viktig i katalysatorer og glass.",
      "Etterspørselen øker i teknologi."
    ],
    "trivia": [
      "Lantan ble oppdaget i Sverige på 1800-tallet. Navnet betyr skjult. Dette reflekterer hvordan stoffet lenge var oversett. Kjemien ble gradvis raffinert.",
      "Lantan brukes i katalysatorer og optisk glass. Forskning fokuserer på lysbrytning. Stoffet er viktig i moderne teknologi. Sjeldne jordarter fikk økende betydning."
    ]
  },
  {
    "nr": 58,
    "symbol": "Ce",
    "navn": "Cerium",
    "name_en": "Cerium",
    "name_la": "Cerium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Det mest tilgjengelige lantanidet.",
      "Utvinnes i store mengder.",
      "Relativt lav pris.",
      "Kritisk i katalysatorer og polering.",
      "Viktig industrimetall."
    ],
    "trivia": [
      "Cerium ble oppdaget i 1803 og oppkalt etter asteroiden Ceres. Dette viser samtidens interesse for astronomi. Vitenskapelige funn påvirket navngivning. Kjemi var del av en større vitenskapelig kultur.",
      "Cerium brukes i katalysatorer og polering. Forskning fokuserer på overflatekjemi. Stoffet er mye brukt industrielt. Det er det mest tilgjengelige lantanidet."
    ]
  },
  {
    "nr": 59,
    "symbol": "Pr",
    "navn": "Praseodym",
    "name_en": "Praseodymium",
    "name_la": "Praseodymium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Utvinnes sammen med andre lantanider.",
      "Begrenset tilgjengelighet.",
      "Moderat til høy pris.",
      "Brukes i magneter og spesialglass.",
      "Viktig i høyteknologi."
    ],
    "trivia": [
      "Praseodym ble identifisert sent på 1800-tallet. Navnet refererer til grønne salter. Dette viser hvordan farge påvirket klassifisering. Kjemiske egenskaper ble gradvis forstått.",
      "Praseodym brukes i magneter og glass. Forskning fokuserer på magnetiske egenskaper. Stoffet er viktig i høyteknologi. Sjeldne jordarter fikk ny relevans."
    ]
  },
  {
    "nr": 60,
    "symbol": "Nd",
    "navn": "Neodym",
    "name_en": "Neodymium",
    "name_la": "Neodymium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Utvinnes fra sjeldne jordarter.",
      "Produksjonen er konsentrert geografisk.",
      "Moderat til høy pris.",
      "Kritisk i permanente magneter.",
      "Strategisk metall i energiovergang."
    ],
    "trivia": []
  },
  {
    "nr": 61,
    "symbol": "Pm",
    "navn": "Prometium",
    "name_en": "Promethium",
    "name_la": "Promethium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Radioaktivt og finnes ikke naturlig i større mengder.",
      "Oppstår som spaltningsprodukt i kjernekraft.",
      "Ingen stabile isotoper.",
      "Sjeldent brukt utenfor forskning.",
      "Navngitt etter Prometheus."
    ],
    "trivia": [
      "Prometium er oppkalt etter Prometheus fra gresk mytologi, figuren som brakte ild til menneskene. Navnet reflekterer stoffets kunstige opprinnelse og menneskets inngripen i naturens grenser. Prometium ble identifisert midt på 1900-tallet i USA. Oppdagelsen skjedde i en periode preget av kjernefysisk forskning.",
      "Prometium finnes ikke naturlig i stabile mengder. Det fremstilles som et biprodukt i kjernekraftreaktorer. Forskning på prometium handlet om å forstå radioaktiv nedbrytning og plasseringen i periodesystemet. Stoffet fikk aldri bred praktisk bruk."
    ]
  },
  {
    "nr": 62,
    "symbol": "Sm",
    "navn": "Samarium",
    "name_en": "Samarium",
    "name_la": "Samarium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Utvinnes sammen med sjeldne jordarter.",
      "Moderat tilgjengelighet.",
      "Brukes i høytemperaturmagneter.",
      "Viktig i kjernekraft og elektronikk.",
      "Stabil etterspørsel i nisjemarkeder."
    ],
    "trivia": [
      "Samarium ble oppdaget i Frankrike på 1800-tallet. Det ble oppkalt etter et mineral fra Russland, noe som viser hvordan geografi og handel påvirket kjemien. Stoffet ble identifisert i en periode med intensiv forskning på sjeldne jordarter. Dette bidro til å rydde opp i en svært kompleks stoffgruppe.",
      "På 1900-tallet fikk samarium teknologisk betydning i magneter. Forskning fokuserte på varmebestandighet og stabilitet. Samarium-magneter brukes der andre magneter mister styrke. Dette gjør stoffet viktig i spesialiserte teknologier."
    ]
  },
  {
    "nr": 63,
    "symbol": "Eu",
    "navn": "Europium",
    "name_en": "Europium",
    "name_la": "Europium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Et av de sjeldnere lantanidene.",
      "Produksjonen er geografisk konsentrert.",
      "Høy pris per kilo.",
      "Kritisk for fosforer i skjermer.",
      "Etterspørselen er teknologidrevet."
    ],
    "trivia": [
      "Europium ble oppdaget tidlig på 1900-tallet i Frankrike. Navnet reflekterer kontinental stolthet i en tid preget av nasjonsbygging. Stoffet ble isolert gjennom krevende separasjonsteknikker. Dette viste hvor vanskelig lantanidkjemi er.",
      "Europium fikk stor betydning i skjermer. Det brukes i røde og blå fosforer. Forskning på europium gjorde farge-TV mulig. Stoffet knytter kjemi direkte til massemedier."
    ]
  },
  {
    "nr": 64,
    "symbol": "Gd",
    "navn": "Gadolinium",
    "name_en": "Gadolinium",
    "name_la": "Gadolinium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Utvinnes sammen med andre lantanider.",
      "Moderat tilgjengelighet.",
      "Viktig i medisinsk bildediagnostikk.",
      "Brukes også i kjernekraft.",
      "Relativt høy verdi."
    ],
    "trivia": [
      "Gadolinium er oppkalt etter den finske kjemikeren Johan Gadolin. Han arbeidet med mineraler fra Ytterby i Sverige, et unikt sted i kjemihistorien. Navnet hedrer hans bidrag til forståelsen av sjeldne jordarter. Tidsepoken var preget av systematisk klassifisering.",
      "Gadolinium fikk senere medisinsk betydning. Det brukes i kontrastmidler for MR. Forskning fokuserte på magnetiske egenskaper. Stoffet knytter grunnstoffkjemi til avansert medisin."
    ]
  },
  {
    "nr": 65,
    "symbol": "Tb",
    "navn": "Terbium",
    "name_en": "Terbium",
    "name_la": "Terbium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Svært begrenset tilgjengelighet.",
      "Utvinnes i små mengder.",
      "Høy pris.",
      "Kritisk for grønne fosforer.",
      "Strategisk råstoff i elektronikk."
    ],
    "trivia": [
      "Terbium ble identifisert i Sverige på 1800-tallet. Navnet stammer fra Ytterby, som ga navn til flere grunnstoffer. Dette området er unikt i kjemihistorien. Studiet av terbium bidro til forståelsen av lantanidrekken.",
      "Terbium brukes i grønne fosforer i skjermer. Forskning på lysemisjon var avgjørende. Stoffet er viktig i moderne visningsteknologi. Uten terbium ville fargegjengivelse vært dårligere."
    ]
  },
  {
    "nr": 66,
    "symbol": "Dy",
    "navn": "Dysprosium",
    "name_en": "Dysprosium",
    "name_la": "Dysprosium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Sjeldent og kostbart lantanid.",
      "Produksjonen er sterkt konsentrert.",
      "Kritisk for høytemperaturmagneter.",
      "Etterspørselen øker i grønn teknologi.",
      "Strategisk viktig metall."
    ],
    "trivia": [
      "Dysprosium fikk navn som betyr «vanskelig å få tak i». Dette reflekterer utfordringene med å isolere stoffet. Det ble identifisert på 1800-tallet. Navnet viser forskernes frustrasjon.",
      "I dag er dysprosium viktig i magneter som tåler høy temperatur. Forskning drives av behov i elbiler og vindkraft. Stoffet gir stabilitet under krevende forhold. Dette gjør dysprosium strategisk viktig."
    ]
  },
  {
    "nr": 67,
    "symbol": "Ho",
    "navn": "Holmium",
    "name_en": "Holmium",
    "name_la": "Holmium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Begrenset tilgjengelighet.",
      "Utvinnes i små mengder.",
      "Høy pris per kilo.",
      "Brukes i spesialmagneter og lasere.",
      "Hovedsakelig forsknings- og nisjebruk."
    ],
    "trivia": [
      "Holmium ble oppdaget i Sverige på slutten av 1800-tallet. Navnet kommer fra Stockholm sitt latinske navn. Dette viser hvordan byer og institusjoner preget vitenskapen. Geografi ble en del av kjemiens språk.",
      "Holmium har svært sterke magnetiske egenskaper. Forskning fokuserer på presis kontroll av magnetfelt. Stoffet brukes i lasere og nisjeutstyr. Bruken er smal, men teknisk krevende."
    ]
  },
  {
    "nr": 68,
    "symbol": "Er",
    "navn": "Erbium",
    "name_en": "Erbium",
    "name_la": "Erbium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Utvinnes sammen med sjeldne jordarter.",
      "Moderat tilgjengelighet.",
      "Viktig i fiberoptisk kommunikasjon.",
      "Stabil etterspørsel i telekom.",
      "Moderat til høy pris."
    ],
    "trivia": [
      "Erbium ble identifisert som eget grunnstoff i Sverige på 1800-tallet. Navnet stammer også fra Ytterby. Dette viser hvordan ett sted kunne gi flere vitenskapelige gjennombrudd. Lantanidene var særlig utfordrende.",
      "Erbium er viktig i fiberoptisk kommunikasjon. Forskning på lysets forsterkning gjorde lange fiberkabler mulig. Stoffet er sentralt i internettets infrastruktur. Erbium knytter kjemi til global kommunikasjon."
    ]
  },
  {
    "nr": 69,
    "symbol": "Tm",
    "navn": "Tulium",
    "name_en": "Thulium",
    "name_la": "Thulium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Det sjeldneste stabile lantanidet.",
      "Ekstremt begrenset tilgjengelighet.",
      "Svært høy pris.",
      "Brukes i bærbart røntgenutstyr.",
      "Kun nisjeapplikasjoner."
    ],
    "trivia": [
      "Thulium ble oppdaget sent på 1800-tallet. Navnet refererer til Thule, et mytisk nordlig land. Dette viser romantiske trekk i vitenskapelig navngivning. Kjemi var også kultur.",
      "Thulium er det sjeldneste stabile lantanidet. Forskning på stoffet er begrenset av tilgjengelighet. Det brukes i spesialiserte røntgenkilder. Bruken er smal, men viktig."
    ]
  },
  {
    "nr": 70,
    "symbol": "Yb",
    "navn": "Ytterbium",
    "name_en": "Ytterbium",
    "name_la": "Ytterbium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Utvinnes sammen med andre lantanider.",
      "Moderat tilgjengelighet.",
      "Brukes i lasere og atomklokker.",
      "Viktig i presisjonsteknologi.",
      "Moderat pris."
    ],
    "trivia": [
      "Ytterbium ble identifisert i Sverige på slutten av 1800-tallet. Det er enda et grunnstoff knyttet til Ytterby. Dette understreker stedets unike rolle. Forskere slet med å skille lignende stoffer.",
      "Ytterbium brukes i lasere og atomklokker. Forskning fokuserer på presisjon og stabilitet. Stoffet er viktig i måleteknologi. Dette knytter kjemi til tid og nøyaktighet."
    ]
  },
  {
    "nr": 71,
    "symbol": "Lu",
    "navn": "Lutetium",
    "name_en": "Lutetium",
    "name_la": "Lutetium",
    "gruppe": null,
    "periode": 6,
    "block": "f",
    "serie": "lanthanide",
    "fakta": [
      "Det tyngste og dyreste lantanidet.",
      "Svært begrenset tilgjengelighet.",
      "Høy pris per kilo.",
      "Brukes i medisinsk bildediagnostikk.",
      "Viktig katalysatormateriale."
    ],
    "trivia": [
      "Lutetium ble oppdaget i Frankrike i 1907. Navnet kommer fra Lutetia, det latinske navnet på Paris. Dette reflekterer nasjonal prestisje i vitenskapen. Oppdagelsen avsluttet lantanidrekken.",
      "Lutetium er det tyngste og dyreste lantanidet. Forskning fokuserer på katalyse og medisin. Stoffet brukes i avanserte applikasjoner. Begrenset tilgjengelighet gir høy verdi."
    ]
  },
  {
    "nr": 72,
    "symbol": "Hf",
    "navn": "Hafnium",
    "name_en": "Hafnium",
    "name_la": "Hafnium",
    "gruppe": 4,
    "periode": 6,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes sammen med zirkonium.",
      "Begrenset tilgjengelighet.",
      "Høy strategisk verdi.",
      "Kritisk i kjernekraft.",
      "Moderat til høy pris."
    ],
    "trivia": [
      "Hafnium ble oppdaget i Danmark i 1923. Navnet kommer fra Hafnia, det latinske navnet på København. Oppdagelsen bekreftet forutsigelser i periodesystemet. Geografi og teori møttes.",
      "Hafnium fikk stor betydning i kjernekraft. Forskning fokuserte på nøytronabsorpsjon. Stoffet ble kritisk for kontrollstaver. Dette gjorde hafnium strategisk viktig."
    ]
  },
  {
    "nr": 73,
    "symbol": "Ta",
    "navn": "Tantal",
    "name_en": "Tantalum",
    "name_la": "Tantalum",
    "gruppe": 5,
    "periode": 6,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes fra tantalrike mineraler.",
      "Produksjonen er etisk og geopolitisk utfordrende.",
      "Høy pris per kilo.",
      "Kritisk i elektronikk.",
      "Strategisk råstoff."
    ],
    "trivia": [
      "Tantal ble oppdaget tidlig på 1800-tallet. Navnet refererer til Tantalos fra gresk mytologi. Dette symboliserer stoffets motstandsdyktighet mot syrer. Mytologi ble brukt til å beskrive kjemi.",
      "Tantal fikk ny betydning med elektronikk. Forskning fokuserer på stabile kondensatorer. Stoffet er kritisk i mobilteknologi. Samtidig har utvinning reist etiske spørsmål."
    ]
  },
  {
    "nr": 74,
    "symbol": "W",
    "navn": "Wolfram",
    "name_en": "Tungsten",
    "name_la": "Wolframium",
    "gruppe": 6,
    "periode": 6,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes hovedsakelig i få land.",
      "Svært høy smeltetemperatur gir nisjebruk.",
      "Moderat til høy pris.",
      "Kritisk i verktøy og industri.",
      "Strategisk metall."
    ],
    "trivia": [
      "Wolfram ble isolert i Spania på slutten av 1700-tallet. Navnet kommer fra et tysk ord for «ulvskum». Historien viser språkblanding i vitenskap. Stoffet ble raskt kjent for ekstremt høyt smeltepunkt.",
      "Wolfram fikk stor betydning i industri. Forskning fokuserer på høytemperaturbruk. Stoffet brukes i verktøy og elektronikk. Wolfram knytter kjemi til ekstrem belastning."
    ]
  },
  {
    "nr": 75,
    "symbol": "Re",
    "navn": "Rhenium",
    "name_en": "Rhenium",
    "name_la": "Rhenium",
    "gruppe": 7,
    "periode": 6,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Et av de sjeldneste stabile metallene.",
      "Utvinnes som biprodukt.",
      "Ekstremt høy pris.",
      "Kritisk i jetmotorer.",
      "Etterspørselen er begrenset men viktig."
    ],
    "trivia": [
      "Rhenium ble oppdaget i Tyskland i 1925. Navnet kommer fra elven Rhinen. Oppdagelsen kom sent på grunn av sjeldenhet. Det bekreftet at periodesystemet fortsatt hadde hull.",
      "Rhenium brukes i superlegeringer for jetmotorer. Forskning fokuserer på varmebestandighet. Stoffet er kritisk i luftfart. Begrenset tilgang gir høy verdi."
    ]
  },
  {
    "nr": 76,
    "symbol": "Os",
    "navn": "Osmium",
    "name_en": "Osmium",
    "name_la": "Osmium",
    "gruppe": 8,
    "periode": 6,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Ekstremt sjeldent platina-gruppemetall.",
      "Svært høy tetthet.",
      "Begrenset kommersiell bruk.",
      "Høy pris.",
      "Brukes i slitesterke legeringer."
    ],
    "trivia": [
      "Osmium ble oppdaget i England i 1803. Navnet kommer fra gresk for lukt, på grunn av flyktige oksider. Dette viser hvordan sanseinntrykk påvirket navngivning. Kjemi var også erfaring.",
      "Osmium er ekstremt tett. Forskning fokuserer på slitestyrke. Stoffet brukes i små mengder i spesiallegeringer. Bruken er begrenset av sjeldenhet."
    ]
  },
  {
    "nr": 77,
    "symbol": "Ir",
    "navn": "Iridium",
    "name_en": "Iridium",
    "name_la": "Iridium",
    "gruppe": 9,
    "periode": 6,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Svært sjeldent og kostbart.",
      "Utvinnes sammen med platina.",
      "Ekstremt korrosjonsbestandig.",
      "Kritisk i romfart og industri.",
      "Strategisk høyverdimetall."
    ],
    "trivia": [
      "Iridium ble oppdaget sammen med platina i 1800-tallets England. Navnet kommer fra regnbuens gudinne Iris. Dette viser fargerike salter. Estetikk og kjemi møttes igjen.",
      "Iridium er ekstremt korrosjonsbestandig. Forskning fokuserer på holdbarhet. Stoffet brukes i romfart og elektroder. Iridium har også blitt brukt som geologisk sporstoff."
    ]
  },
  {
    "nr": 78,
    "symbol": "Pt",
    "navn": "Platina",
    "name_en": "Platinum",
    "name_la": "Platinum",
    "gruppe": 10,
    "periode": 6,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes hovedsakelig i Sør-Afrika.",
      "Begrenset og geopolitisk sårbar forsyning.",
      "Høy pris.",
      "Kritisk i katalysatorer.",
      "Viktig edelmetall globalt."
    ],
    "trivia": [
      "Platina var kjent for urfolk i Sør-Amerika før europeisk vitenskap. Det ble først studert i Europa på 1700-tallet. Stoffet ble ansett som vanskelig å bearbeide. Navnet betydde opprinnelig «liten sølv».",
      "Platina fikk stor betydning i katalysatorer. Forskning på utslippskontroll drev etterspørselen. Stoffet er sentralt i miljøteknologi. Samtidig er forsyningen geopolitisk sårbar."
    ]
  },
  {
    "nr": 79,
    "symbol": "Au",
    "navn": "Gull",
    "name_en": "Gold",
    "name_la": "Aurum",
    "gruppe": 11,
    "periode": 6,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Utvinnes globalt, men i begrensede mengder.",
      "Høy økonomisk verdi.",
      "Brukes som verdilager.",
      "Kritisk i elektronikk.",
      "Svært høy resirkuleringsgrad."
    ],
    "trivia": [
      "Gull har vært verdsatt i tusenvis av år. Det ble brukt i smykker, maktsymboler og valuta. Kjemisk stabilitet gjorde det ideelt som verdilager. Gull knytter kjemi til økonomi og kultur.",
      "I moderne tid brukes gull i elektronikk. Forskning fokuserer på ledningsevne og korrosjonsbestandighet. Stoffet er kritisk i presisjonsutstyr. Gull har dermed både historisk og teknologisk verdi."
    ]
  },
  {
    "nr": 80,
    "symbol": "Hg",
    "navn": "Kvikksølv",
    "name_en": "Mercury",
    "name_la": "Hydrargyrum",
    "gruppe": 12,
    "periode": 6,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Finnes i cinnober.",
      "Produksjon og bruk er sterkt regulert.",
      "Svært giftig.",
      "Begrenset kommersiell bruk i dag.",
      "Historisk viktig metall."
    ],
    "trivia": [
      "Kvikksølv var kjent i antikken og ble brukt i medisin og alkymi. Stoffet er flytende ved romtemperatur, noe som virket mystisk. Dette ga kvikksølv en sentral plass i tidlig vitenskap. Samtidig var det farlig.",
      "På 1900-tallet ble kvikksølv kjent for alvorlige helsekonsekvenser. Forskning på forgiftning førte til regulering. Stoffet ble et symbol på miljøgifter. Bruken er i dag sterkt begrenset."
    ]
  },
  {
    "nr": 81,
    "symbol": "Tl",
    "navn": "Thallium",
    "name_en": "Thallium",
    "name_la": "Thallium",
    "gruppe": 13,
    "periode": 6,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Utvinnes som biprodukt.",
      "Svært giftig.",
      "Begrenset og regulert bruk.",
      "Moderat til høy pris.",
      "Brukes i spesialoptikk."
    ],
    "trivia": [
      "Thallium ble oppdaget i England på 1800-tallet ved spektroskopi. Navnet kommer fra gresk for grønn kvist, etter spektrallinjer. Dette viser hvordan nye metoder avdekket skjulte stoffer. Spektroskopi endret kjemi.",
      "Thallium ble senere kjent for ekstrem giftighet. Det ble brukt i rottegift og i kriminelle sammenhenger. Forskning på forgiftning avslørte alvorlige effekter. Stoffet er i dag strengt regulert."
    ]
  },
  {
    "nr": 82,
    "symbol": "Pb",
    "navn": "Bly",
    "name_en": "Lead",
    "name_la": "Plumbum",
    "gruppe": 14,
    "periode": 6,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Utvinnes fra blymalm.",
      "God tilgjengelighet.",
      "Lav råvarepris.",
      "Brukes hovedsakelig i batterier.",
      "Strengt regulert på grunn av giftighet."
    ],
    "trivia": [
      "Bly har vært brukt siden antikken. Romerne brukte det i rør og beholdere. Senere ble helsekonsekvensene tydelige. Bly er et klassisk eksempel på sen regulering.",
      "På 1900-tallet ble bly brukt i bensin. Forskning viste at dette ga omfattende forurensning. Forbud førte til målbar helsegevinst. Bly knytter kjemi til folkehelsepolitikk."
    ]
  },
  {
    "nr": 83,
    "symbol": "Bi",
    "navn": "Vismut",
    "name_en": "Bismuth",
    "name_la": "Bismuthum",
    "gruppe": 15,
    "periode": 6,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Utvinnes ofte som biprodukt.",
      "Moderat tilgjengelighet.",
      "Relativt lav giftighet.",
      "Brukes som blyerstatning.",
      "Moderat pris."
    ],
    "trivia": [
      "Vismut ble lenge forvekslet med bly og tinn. Først på 1700-tallet ble det identifisert korrekt. Dette viser utfordringer i metallkjemi. Klassifisering krevde presisjon.",
      "Vismut er uvanlig lite giftig for et tungmetall. Dette har gjort det attraktivt som blyerstatning. Forskning fokuserer på miljøvennlige materialer. Stoffet har fått fornyet interesse."
    ]
  },
  {
    "nr": 84,
    "symbol": "Po",
    "navn": "Polonium",
    "name_en": "Polonium",
    "name_la": "Polonium",
    "gruppe": 16,
    "periode": 6,
    "block": "p",
    "serie": "metalloid",
    "fakta": [
      "Ekstremt sjeldent og radioaktivt.",
      "Finnes kun i spor.",
      "Ingen kommersiell tilgjengelighet.",
      "Brukes kun i spesialiserte applikasjoner.",
      "Høy sikkerhetsrisiko."
    ],
    "trivia": [
      "Polonium ble oppdaget av Marie Curie i Paris i 1898. Navnet hedrer hennes hjemland Polen. Oppdagelsen skjedde i en periode med intens radioaktivitetsforskning. Polonium fikk symbolsk betydning.",
      "Polonium er ekstremt radioaktivt og giftig. Forskning på stoffet var viktig for forståelsen av radioaktivitet. Samtidig er det svært farlig. Bruken er derfor minimal og strengt kontrollert."
    ]
  },
  {
    "nr": 85,
    "symbol": "At",
    "navn": "Astat",
    "name_en": "Astatine",
    "name_la": "Astatum",
    "gruppe": 17,
    "periode": 6,
    "block": "p",
    "serie": "halogen",
    "fakta": [
      "Det sjeldneste naturlig forekommende halogenet.",
      "Finnes kun i spor.",
      "Ingen kommersiell bruk.",
      "Kun forskningsformål.",
      "Svært ustabilt."
    ],
    "trivia": [
      "Astat er det sjeldneste naturlig forekommende halogenet. Det ble først identifisert på 1900-tallet. Navnet betyr ustabil. Dette reflekterer stoffets korte levetid.",
      "Forskning på astat handler hovedsakelig om teori. Stoffet fremstilles i små mengder. Målet er å forstå halogenenes grenser. Praktisk bruk er nesten fraværende."
    ]
  },
  {
    "nr": 86,
    "symbol": "Rn",
    "navn": "Radon",
    "name_en": "Radon",
    "name_la": "Radon",
    "gruppe": 18,
    "periode": 6,
    "block": "p",
    "serie": "noble",
    "fakta": [
      "Dannes naturlig ved radioaktiv nedbrytning.",
      "Ikke kommersielt utvunnet.",
      "Helsefarlig i bygninger.",
      "Viktig i strålevernsammenheng.",
      "Regulert gjennom byggstandarder."
    ],
    "trivia": [
      "Radon ble oppdaget på slutten av 1800-tallet i forbindelse med radioaktivitetsforskning. Stoffet er en edelgass, men radioaktiv. Dette var uventet. Radon utfordret etablerte antakelser.",
      "Radon ble senere identifisert som helserisiko i boliger. Forskning viste sammenheng med lungekreft. Dette førte til byggereguleringer. Radon knytter kjemi til folkehelse."
    ]
  },
  {
    "nr": 87,
    "symbol": "Fr",
    "navn": "Francium",
    "name_en": "Francium",
    "name_la": "Francium",
    "gruppe": 1,
    "periode": 7,
    "block": "s",
    "serie": "alkali",
    "fakta": [
      "Ekstremt sjeldent og radioaktivt.",
      "Finnes kun i spor.",
      "Ingen kommersiell tilgjengelighet.",
      "Kun av teoretisk interesse.",
      "Ikke mulig å lagre."
    ],
    "trivia": [
      "Francium ble oppdaget i Frankrike i 1939. Det var et av de siste naturlige grunnstoffene som ble funnet. Oppdagelsen skjedde i en turbulent tid før andre verdenskrig. Stoffet er ekstremt ustabilt.",
      "Forskning på francium er begrenset til teori. Det finnes i forsvinnende små mengder. Studier brukes til å teste atommodeller. Praktisk bruk finnes ikke."
    ]
  },
  {
    "nr": 88,
    "symbol": "Ra",
    "navn": "Radium",
    "name_en": "Radium",
    "name_la": "Radium",
    "gruppe": 2,
    "periode": 7,
    "block": "s",
    "serie": "alkaline",
    "fakta": [
      "Utvinnes fra uranmalm i små mengder.",
      "Historisk brukt i selvlysende materialer.",
      "Sterkt radioaktivt.",
      "I dag strengt regulert.",
      "Ingen moderne industriell bruk."
    ],
    "trivia": [
      "Radium ble oppdaget av Marie og Pierre Curie i 1898. Stoffet ble raskt populært i medisin og forbruksvarer. Dette skjedde før man forsto risikoene. Radium ble et moteprodukt.",
      "Senere forskning avslørte alvorlige helseskader. Radium ble et symbol på ukritisk teknologioptimisme. Erfaringene bidro til streng regulering. Radium knytter kjemi til etikk."
    ]
  },
  {
    "nr": 89,
    "symbol": "Ac",
    "navn": "Actinium",
    "name_en": "Actinium",
    "name_la": "Actinium",
    "gruppe": 3,
    "periode": 7,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Finnes i små mengder i uranmalm.",
      "Svært begrenset tilgjengelighet.",
      "Brukes hovedsakelig i forskning.",
      "Høy kostnad per gram.",
      "Radioaktivt og vanskelig å håndtere."
    ]
  },
  {
    "nr": 90,
    "symbol": "Th",
    "navn": "Thorium",
    "name_en": "Thorium",
    "name_la": "Thorium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Finnes relativt rikelig i jordskorpen.",
      "Utvinnes fra monazitt.",
      "Potensielt kjernebrennsel.",
      "Moderat råvarekostnad.",
      "Økende forskningsinteresse."
    ]
  },
  {
    "nr": 91,
    "symbol": "Pa",
    "navn": "Protactinium",
    "name_en": "Protactinium",
    "name_la": "Protactinium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Ekstremt sjeldent aktinid.",
      "Utvinnes kun i laboratoriemengder.",
      "Svært radioaktivt og giftig.",
      "Ingen kommersiell bruk.",
      "Høy forskningsverdi."
    ]
  },
  {
    "nr": 92,
    "symbol": "U",
    "navn": "Uran",
    "name_en": "Uranium",
    "name_la": "Uranium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Utvinnes globalt fra uranmalm.",
      "Kritisk kjernebrennsel.",
      "Moderat råvarepris, høy politisk verdi.",
      "Strengt regulert internasjonalt.",
      "Langsiktig miljø- og sikkerhetsutfordring."
    ]
  },
  {
    "nr": 93,
    "symbol": "Np",
    "navn": "Neptunium",
    "name_en": "Neptunium",
    "name_la": "Neptunium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Fremstilles i kjernekraftreaktorer.",
      "Finnes i brukt kjernebrennsel.",
      "Ingen kommersiell bruk.",
      "Brukes i forskning.",
      "Radioaktivt og vanskelig å håndtere."
    ]
  },
  {
    "nr": 94,
    "symbol": "Pu",
    "navn": "Plutonium",
    "name_en": "Plutonium",
    "name_la": "Plutonium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Fremstilles i atomreaktorer.",
      "Kritisk for kjernevåpen og enkelte reaktorer.",
      "Ekstremt politisk sensitivt materiale.",
      "Svært giftig og radioaktivt.",
      "Internasjonalt strengt kontrollert."
    ]
  },
  {
    "nr": 95,
    "symbol": "Am",
    "navn": "Americium",
    "name_en": "Americium",
    "name_la": "Americium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Fremstilles i kjernekraftreaktorer.",
      "Brukes i røykvarslere.",
      "Begrenset tilgjengelighet.",
      "Moderat forsknings- og nisjebruk.",
      "Radioaktivt materiale."
    ]
  },
  {
    "nr": 96,
    "symbol": "Cm",
    "navn": "Curium",
    "name_en": "Curium",
    "name_la": "Curium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Fremstilles kunstig.",
      "Brukes som varmekilde i romsonder.",
      "Svært begrenset tilgjengelighet.",
      "Høy kostnad per gram.",
      "Viktig i kjernefysisk forskning."
    ]
  },
  {
    "nr": 97,
    "symbol": "Bk",
    "navn": "Berkelium",
    "name_en": "Berkelium",
    "name_la": "Berkelium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Fremstilles i små mengder.",
      "Ingen kommersiell bruk.",
      "Brukes til å skape tyngre grunnstoffer.",
      "Svært radioaktivt.",
      "Kun forskningsformål."
    ]
  },
  {
    "nr": 98,
    "symbol": "Cf",
    "navn": "Californium",
    "name_en": "Californium",
    "name_la": "Californium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Kraftig nøytronkilde.",
      "Utvinnes i svært små mengder.",
      "Ekstremt høy pris.",
      "Brukes i medisin og industri.",
      "Radioaktivt og krevende å håndtere."
    ]
  },
  {
    "nr": 99,
    "symbol": "Es",
    "navn": "Einsteinium",
    "name_en": "Einsteinium",
    "name_la": "Einsteinium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Fremstilles kunstig.",
      "Ekstremt begrenset tilgjengelighet.",
      "Ingen praktisk bruk.",
      "Kun forskningsinteresse.",
      "Radioaktivt."
    ]
  },
  {
    "nr": 100,
    "symbol": "Fm",
    "navn": "Fermium",
    "name_en": "Fermium",
    "name_la": "Fermium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Fremstilles i atomreaktorer.",
      "Finnes kun i spor.",
      "Ingen kommersiell anvendelse.",
      "Svært kort levetid.",
      "Kun av teoretisk interesse."
    ]
  },
  {
    "nr": 101,
    "symbol": "Md",
    "navn": "Mendelevium",
    "name_en": "Mendelevium",
    "name_la": "Mendelevium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Fremstilles atom for atom.",
      "Ekstremt begrenset tilgjengelighet.",
      "Ingen praktisk bruk.",
      "Viktig for strukturstudier.",
      "Radioaktivt."
    ]
  },
  {
    "nr": 102,
    "symbol": "No",
    "navn": "Nobelium",
    "name_en": "Nobelium",
    "name_la": "Nobelium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Fremstilles kunstig.",
      "Svært kort halveringstid.",
      "Ingen kommersiell bruk.",
      "Kun forskningsformål.",
      "Radioaktivt."
    ]
  },
  {
    "nr": 103,
    "symbol": "Lr",
    "navn": "Lawrencium",
    "name_en": "Lawrencium",
    "name_la": "Lawrencium",
    "gruppe": null,
    "periode": 7,
    "block": "f",
    "serie": "actinide",
    "fakta": [
      "Fremstilles i laboratorier.",
      "Avslutter aktinidrekken.",
      "Ingen praktiske anvendelser.",
      "Kun av teoretisk interesse.",
      "Ekstremt ustabilt."
    ]
  },
  {
    "nr": 104,
    "symbol": "Rf",
    "navn": "Rutherfordium",
    "name_en": "Rutherfordium",
    "name_la": "Rutherfordium",
    "gruppe": 4,
    "periode": 7,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Syntetisk supertungt grunnstoff.",
      "Fremstilles i partikkelakseleratorer.",
      "Ingen kommersiell bruk.",
      "Ekstremt kort levetid.",
      "Kun forskningsformål."
    ],
    "trivia": [
      "Rutherfordium ble fremstilt på 1960-tallet i både USA og Sovjetunionen. Navngivningen var omstridt. Dette skjedde under den kalde krigen. Vitenskap og geopolitikk var tett sammenvevd.",
      "Forskning på rutherfordium handlet om å teste relativistiske effekter. Stoffet eksisterer kun i brøkdeler av sekunder. Studier bekreftet teorier om tunge kjerner. Praktisk bruk finnes ikke."
    ]
  },
  {
    "nr": 105,
    "symbol": "Db",
    "navn": "Dubnium",
    "name_en": "Dubnium",
    "name_la": "Dubnium",
    "gruppe": 5,
    "periode": 7,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Syntetisk og radioaktivt.",
      "Produseres atom for atom.",
      "Ingen praktisk anvendelse.",
      "Brukes i kjernefysisk forskning.",
      "Svært ustabilt."
    ],
    "trivia": [
      "Dubnium ble fremstilt i Russland og USA. Navnet hedrer Dubna, et senter for kjernekjemi. Navngivningen reflekterer institusjonell prestisje. Dette var vanlig for supertunge grunnstoffer.",
      "Forskning på dubnium fokuserer på kjemisk atferd. Studier tester plassering i periodesystemet. Stoffet finnes kun kortvarig. Bruken er utelukkende vitenskapelig."
    ]
  },
  {
    "nr": 106,
    "symbol": "Sg",
    "navn": "Seaborgium",
    "name_en": "Seaborgium",
    "name_la": "Seaborgium",
    "gruppe": 6,
    "periode": 7,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Syntetisk supertungt grunnstoff.",
      "Fremstilles i laboratorier.",
      "Ingen kommersiell tilgjengelighet.",
      "Viktig for testing av periodesystemet.",
      "Ekstremt kort levetid."
    ],
    "trivia": [
      "Seaborgium ble fremstilt i USA på 1970-tallet. Det er oppkalt etter Glenn T. Seaborg. Han var sentral i utviklingen av aktinidkonseptet. Dette var første gang et grunnstoff ble oppkalt etter en levende person.",
      "Forskning på seaborgium handlet om å bekrefte kjemiske egenskaper. Stoffet ble brukt til å teste teoretiske modeller. Resultatene støttet periodesystemets struktur. Ingen praktisk bruk finnes."
    ]
  },
  {
    "nr": 107,
    "symbol": "Bh",
    "navn": "Bohrium",
    "name_en": "Bohrium",
    "name_la": "Bohrium",
    "gruppe": 7,
    "periode": 7,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Syntetisk og radioaktivt.",
      "Fremstilles i små mengder.",
      "Ingen praktisk bruk.",
      "Kun forskningsinteresse.",
      "Meget ustabilt."
    ],
    "trivia": [
      "Bohrium ble fremstilt på 1970-tallet. Navnet hedrer Niels Bohr. Dette reflekterer betydningen av atommodellen. Bohrs arbeid la grunnlaget for moderne atomfysikk.",
      "Forskning på bohrium fokuserer på ekstrem ustabilitet. Stoffet eksisterer svært kort. Studier gir innsikt i kjernekrefter. Praktisk bruk er ikke mulig."
    ]
  },
  {
    "nr": 108,
    "symbol": "Hs",
    "navn": "Hassium",
    "name_en": "Hassium",
    "name_la": "Hassium",
    "gruppe": 8,
    "periode": 7,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Syntetisk overgangsmetall.",
      "Ekstremt kort halveringstid.",
      "Ingen praktiske anvendelser.",
      "Studeres for kjernekjemi.",
      "Svært ustabilt."
    ],
    "trivia": [
      "Hassium ble fremstilt i Tyskland på 1980-tallet. Navnet kommer fra Hessen. Dette viser regional stolthet. Oppdagelsen skjedde ved tunge ionekollisjoner.",
      "Forskning på hassium tester kjemisk stabilitet. Studier bekrefter teorier om relativistiske effekter. Stoffet eksisterer kun øyeblikkelig. Bruken er teoretisk."
    ]
  },
  {
    "nr": 109,
    "symbol": "Mt",
    "navn": "Meitnerium",
    "name_en": "Meitnerium",
    "name_la": "Meitnerium",
    "gruppe": 9,
    "periode": 7,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Fremstilles i partikkelakseleratorer.",
      "Ekstremt sjeldent.",
      "Ingen kommersiell bruk.",
      "Kun teoretisk og eksperimentell interesse.",
      "Radioaktivt."
    ],
    "trivia": [
      "Meitnerium ble oppkalt etter Lise Meitner. Hun var sentral i forståelsen av kjernefysisk fisjon. Navnet hedrer en lenge undervurdert forsker. Dette har også symbolsk betydning.",
      "Forskning på meitnerium fokuserer på tunge kjerner. Stoffet fremstilles i svært små mengder. Studier gir innsikt i atomstruktur. Ingen praktisk anvendelse finnes."
    ]
  },
  {
    "nr": 110,
    "symbol": "Ds",
    "navn": "Darmstadtium",
    "name_en": "Darmstadtium",
    "name_la": "Darmstadtium",
    "gruppe": 10,
    "periode": 7,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Syntetisk supertungt metall.",
      "Fremstilles i laboratorier.",
      "Svært kort levetid.",
      "Ingen praktiske anvendelser.",
      "Viktig i forskning på tunge kjerner."
    ],
    "trivia": [
      "Darmstadtium ble fremstilt i Tyskland på 1990-tallet. Navnet kommer fra byen Darmstadt. Dette hedrer lokalt forskningsmiljø. Supertunge grunnstoffer fikk institusjonelle navn.",
      "Forskning på darmstadtium tester teorier om kjemisk oppførsel. Stoffet eksisterer ekstremt kort. Studier bekrefter periodesystemets yttergrenser. Bruk er kun vitenskapelig."
    ]
  },
  {
    "nr": 111,
    "symbol": "Rg",
    "navn": "Røntgenium",
    "name_en": "Roentgenium",
    "name_la": "Roentgenium",
    "gruppe": 11,
    "periode": 7,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Ekstremt sjeldent og radioaktivt.",
      "Produseres atom for atom.",
      "Ingen kommersiell bruk.",
      "Studeres kun teoretisk.",
      "Meget ustabilt."
    ],
    "trivia": [
      "Roentgenium ble oppkalt etter Wilhelm Röntgen. Han oppdaget røntgenstråler. Navnet knytter grunnstoffet til medisinsk revolusjon. Vitenskapelige gjennombrudd ble hedret.",
      "Forskning på roentgenium fokuserer på atomstruktur. Stoffet fremstilles atom for atom. Studier er teoretiske. Praktisk bruk finnes ikke."
    ]
  },
  {
    "nr": 112,
    "symbol": "Cn",
    "navn": "Copernicium",
    "name_en": "Copernicium",
    "name_la": "Copernicium",
    "gruppe": 12,
    "periode": 7,
    "block": "d",
    "serie": "transition",
    "fakta": [
      "Syntetisk supertungt grunnstoff.",
      "Antatt flyktige egenskaper.",
      "Fremstilles kunstig.",
      "Ingen praktisk anvendelse.",
      "Kun forskningsinteresse."
    ],
    "trivia": [
      "Copernicium ble oppkalt etter Nicolaus Copernicus. Navnet hedrer et paradigmeskifte i vitenskap. Oppdagelsen skjedde på 1990-tallet. Symbolikken er tydelig.",
      "Forskning på copernicium undersøker flyktighet. Stoffet kan ha uvanlige egenskaper. Studier tester relativistisk kjemi. Praktisk bruk finnes ikke."
    ]
  },
  {
    "nr": 113,
    "symbol": "Nh",
    "navn": "Nihonium",
    "name_en": "Nihonium",
    "name_la": "Nihonium",
    "gruppe": 13,
    "periode": 7,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Syntetisk grunnstoff.",
      "Fremstilles i partikkelakseleratorer.",
      "Ingen kommersiell tilgjengelighet.",
      "Ekstremt kort levetid.",
      "Kun forskningsformål."
    ],
    "trivia": [
      "Nihonium ble oppdaget i Japan på 2000-tallet. Det er det første grunnstoffet oppkalt etter et asiatisk land. Navnet betyr Japan. Dette markerer globalisering av kjemi.",
      "Forskning på nihonium fokuserer på kjemisk oppførsel. Stoffet eksisterer svært kort. Studier tester teorier om supertunge elementer. Bruk er kun vitenskapelig."
    ]
  },
  {
    "nr": 114,
    "symbol": "Fl",
    "navn": "Flerovium",
    "name_en": "Flerovium",
    "name_la": "Flerovium",
    "gruppe": 14,
    "periode": 7,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Syntetisk og radioaktivt.",
      "Svært kort halveringstid.",
      "Ingen praktisk bruk.",
      "Studeres for stabilitet.",
      "Kun teoretisk betydning."
    ],
    "trivia": [
      "Flerovium ble oppkalt etter Flerov-laboratoriet i Russland. Dette hedrer institusjonell innsats. Oppdagelsen skjedde på 1990-tallet. Samarbeid var avgjørende.",
      "Forskning på flerovium tester stabilitet. Stoffet kan være mindre reaktivt enn forventet. Studier utfordrer kjemiske antakelser. Praktisk bruk finnes ikke."
    ]
  },
  {
    "nr": 115,
    "symbol": "Mc",
    "navn": "Moscovium",
    "name_en": "Moscovium",
    "name_la": "Moscovium",
    "gruppe": 15,
    "periode": 7,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Fremstilles kunstig.",
      "Ekstremt ustabilt.",
      "Ingen kommersiell bruk.",
      "Kun forskningsinteresse.",
      "Radioaktivt."
    ],
    "trivia": [
      "Moscovium ble oppkalt etter Moskva-regionen. Oppdagelsen var et samarbeid mellom Russland og USA. Dette viser internasjonalt samarbeid. Vitenskap overskred politikk.",
      "Forskning på moscovium handler om henfall. Stoffet eksisterer i millisekunder. Studier gir innsikt i kjernekrefter. Bruk er kun teoretisk."
    ]
  },
  {
    "nr": 116,
    "symbol": "Lv",
    "navn": "Livermorium",
    "name_en": "Livermorium",
    "name_la": "Livermorium",
    "gruppe": 16,
    "periode": 7,
    "block": "p",
    "serie": "post",
    "fakta": [
      "Syntetisk supertungt grunnstoff.",
      "Fremstilles i laboratorier.",
      "Svært kort levetid.",
      "Ingen praktisk anvendelse.",
      "Studeres teoretisk."
    ],
    "trivia": [
      "Livermorium ble oppkalt etter Lawrence Livermore National Laboratory. Dette hedrer amerikansk kjernekjemi. Oppdagelsen skjedde tidlig på 2000-tallet. Institusjoner fikk navn.",
      "Forskning på livermorium fokuserer på kjemisk karakter. Stoffet eksisterer ekstremt kort. Studier tester periodesystemets grenser. Bruk finnes ikke."
    ]
  },
  {
    "nr": 117,
    "symbol": "Ts",
    "navn": "Tennessin",
    "name_en": "Tennessine",
    "name_la": "Tennessinum",
    "gruppe": 17,
    "periode": 7,
    "block": "p",
    "serie": "halogen",
    "fakta": [
      "Syntetisk halogen.",
      "Ekstremt kort levetid.",
      "Ingen praktisk bruk.",
      "Kun eksperimentell interesse.",
      "Radioaktivt."
    ],
    "trivia": [
      "Tennessine ble oppkalt etter delstaten Tennessee. Navnet hedrer flere amerikanske institusjoner. Stoffet er et supertungt halogen. Dette var uventet.",
      "Forskning på tennessine tester reaktivitet. Stoffet kan avvike fra lettere halogener. Studier utfordrer kjemiske mønstre. Praktisk bruk finnes ikke."
    ]
  },
  {
    "nr": 118,
    "symbol": "Og",
    "navn": "Oganesson",
    "name_en": "Oganesson",
    "name_la": "Oganesson",
    "gruppe": 18,
    "periode": 7,
    "block": "p",
    "serie": "noble",
    "fakta": [
      "Tyngste kjente grunnstoff.",
      "Fremstilles kunstig.",
      "Ekstremt kort levetid.",
      "Ingen praktiske anvendelser.",
      "Tester yttergrensen av periodesystemet."
    ],
    "trivia": [
      "Oganesson ble oppkalt etter Jurij Oganesjan. Han ledet mye av forskningen på supertunge grunnstoffer. Dette var en anerkjennelse av livsverk. Navngivningen var uvanlig.",
      "Forskning på oganesson tester yttergrensene for periodesystemet. Stoffet kan ha uventede egenskaper. Studier er ekstremt krevende. Oganesson markerer dagens grense."
    ]
  }
];

/* Mobile overlay open via existing controls */
(function(){
  function isMobile(){ return window.matchMedia && window.matchMedia('(max-width: 768px)').matches; }
  document.addEventListener('click', function(e){
    if(!isMobile()) return;
    const overlay = document.getElementById('mobile-overlay');
    if(!overlay) return;
    // Any click within controls opens overlay
    const controls = document.getElementById('controls') || document.querySelector('[data-controls]');
    if(controls && controls.contains(e.target)){
      overlay.setAttribute('aria-hidden','false');
      e.stopPropagation();
    }
  }, true);
})();


/* Mobile: prevent double-tap zoom on quiz-wrapper */
(function(){
  let lastTap = 0;
  function isMobile(){ return window.matchMedia && window.matchMedia('(max-width: 768px)').matches; }
  document.addEventListener('touchend', function(e){
    if(!isMobile()) return;
    const qw = document.getElementById('quiz-wrapper');
    if(!qw || !qw.contains(e.target)) return;
    const now = Date.now();
    if(now - lastTap < 300){
      e.preventDefault();
    }
    lastTap = now;
  }, { passive: false });
})();
