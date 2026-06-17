/* content.js — Biologie, Thema 6 "Voortplanting bij planten (en dieren)".
   Vak-app op de canonieke oefen-engine (window.VAK + RENDERERS). begripVak.
   Onderwerpen: 6.1 bloembouw · 6.2 bestuiving · 6.3 bevruchting · 6.4 vrucht & zaad ·
   6.7 zaadverspreiding · 6.8 mannelijke/vrouwelijke organen. */

window.VAK = {
  id: "biologie_h6",
  store: "storm_biologie_h6_v1",
  titel: "Biologie met Storm — H6 Voortplanting",
  brand: "Biologie met Storm",
  badge: "BIO",
  mascotEmoji: "🐝",
  doelLabel: "begrip",
  spiekTitel: "Biologie H6 — Voortplanting bij planten",
  wiskunde: false,
  begripVak: true,
  spraak: { vraagLang: "nl-NL", antwoordLang: "nl-NL" },
  matching: { stripInfinitief: false, accentTolerant: true, lidwoordTolerant: false },
  masteryHits: 2,
  stapelGrootte: 6,
  tegels: ["leerstof", "begrippen", "proeftoets", "spiekblad"]
};

window.LEERSTOF = [

  /* ============================ 6.1 DE BOUW VAN EEN BLOEM ============================ */
  {
    id: "bloembouw",
    emoji: "🌸",
    titel: "6.1 De bouw van een bloem",
    paragraaf: "6.1",
    kort: "Een bloem is het voortplantingsorgaan van een plant: bloemkelk + bloemkroon, en in het midden de meeldraden (man) en de stamper (vrouw).",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "De <b>functie</b> van een bloem is <b>voortplanting</b> — er nieuwe plantjes mee maken. Een bloem heeft een groen buitenste deel, de <b>bloemkelk</b> (van <b>kelkbladeren</b>), en daarbinnen vaak een gekleurd deel, de <b>bloemkroon</b> (van <b>kroonbladeren</b>).",
          "In het midden zitten de voortplantingsorganen: de <b>meeldraden</b> (de <b>mannelijke</b> delen) en de <b>stamper</b> (het <b>vrouwelijke</b> deel). Ezelsbruggetje: meeldraad maakt stuif<b>meel</b> (man), de s<b>tamp</b>er heeft de eicel (vrouw)."
        ],
        regel: "Bloem = bloemkelk (groen, beschermt) + bloemkroon (gekleurd, lokt insecten) + meeldraden (man) + stamper (vrouw).",
        vragen: [
          {
            t: "label",
            q: "Sleep de namen naar de juiste delen van de bloem.",
            beeld: "img/bloem-doorsnede.svg",
            doelen: [
              { id: "kroonblad", label: "kroonblad", x: 0.214, y: 0.444 },
              { id: "meeldraad", label: "meeldraad", x: 0.276, y: 0.281 },
              { id: "stamper", label: "stamper", x: 0.500, y: 0.435 },
              { id: "kelkblad", label: "kelkblad", x: 0.345, y: 0.848 }
            ],
            w: "De kroonbladeren zijn de grote gekleurde blaadjes, de kelkbladeren de groene blaadjes onderaan, de meeldraden de mannelijke delen en de stamper het vrouwelijke deel in het midden."
          },
          {
            t: "mc",
            q: "Wat is de belangrijkste functie van een bloem?",
            o: ["voortplanting", "fotosynthese", "water opzuigen", "de plant mooi maken"],
            a: "voortplanting",
            w: "Een bloem dient om nieuwe planten te maken: voortplanting.",
            fout: {
              "fotosynthese": "Dat doen vooral de groene bladeren, niet de bloem.",
              "water opzuigen": "Dat doen de wortels, niet de bloem.",
              "de plant mooi maken": "Wij vinden ze mooi, maar voor de plant draait alles om voortplanting."
            }
          },
          {
            t: "mc",
            q: "Welk deel is het mannelijke voortplantingsorgaan van de plant?",
            o: ["de meeldraad", "de stamper", "het kroonblad", "het kelkblad"],
            a: "de meeldraad",
            w: "De meeldraden zijn mannelijk: ze maken stuifmeel.",
            fout: {
              "de stamper": "De stamper is juist het vrouwelijke deel; daar zit de eicel in.",
              "het kroonblad": "Kroonbladeren lokken insecten, ze zijn geen voortplantingsorgaan.",
              "het kelkblad": "Kelkbladeren beschermen de knop, ze zijn geen voortplantingsorgaan."
            }
          },
          {
            t: "gap",
            q: "Het groene buitenste deel van de bloem heet de ___.",
            a: "bloemkelk|kelk",
            w: "De bloemkelk (van kelkbladeren) is meestal groen en beschermt de knop."
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Een <b>meeldraad</b> bestaat uit een <b>helmdraad</b> (het steeltje) met daarboven een <b>helmknop</b>. In de helmknop zitten <b>helmhokjes</b> waarin <b>stuifmeel</b> (pollen) ontstaat. Stuifmeel bestaat uit <b>stuifmeelkorrels</b> — de mannelijke geslachtscellen.",
          "De <b>stamper</b> bestaat uit een <b>stempel</b> (bovenaan, plakkerig), een <b>stijl</b> (het steeltje) en een <b>vruchtbeginsel</b> (onderaan, dik). In het vruchtbeginsel zitten <b>zaadbeginsels</b>; in elk zaadbeginsel zit één <b>eicel</b>, de vrouwelijke geslachtscel."
        ],
        regel: "Meeldraad = helmdraad + helmknop (met stuifmeel). Stamper = stempel + stijl + vruchtbeginsel (met zaadbeginsels en eicel).",
        vragen: [
          {
            t: "hotspot",
            q: "Klik op de helmknop — het knopje waarin het stuifmeel ontstaat.",
            beeld: "img/bloem-doorsnede.svg",
            zones: [ { vorm: "cirkel", x: 0.276, y: 0.281, r: 0.09 }, { vorm: "cirkel", x: 0.724, y: 0.281, r: 0.09 } ],
            w: "De helmknop zit bovenaan de meeldraad; daarin liggen de helmhokjes met stuifmeel."
          },
          {
            t: "hotspot",
            q: "Klik op het vruchtbeginsel.",
            beeld: "img/bloem-doorsnede.svg",
            zones: [ { vorm: "cirkel", x: 0.500, y: 0.676, r: 0.12 } ],
            w: "Het vruchtbeginsel is het dikke onderste deel van de stamper; daar zitten de zaadbeginsels in."
          },
          {
            t: "mc",
            q: "Waar ontstaat het stuifmeel?",
            o: ["in de helmhokjes van de helmknop", "in het vruchtbeginsel", "op de stempel", "in de helmdraad"],
            a: "in de helmhokjes van de helmknop",
            w: "Stuifmeel ontstaat in de helmhokjes, die in de helmknop zitten.",
            fout: {
              "in het vruchtbeginsel": "Daar zitten de zaadbeginsels met eicellen (vrouwelijk), geen stuifmeel.",
              "op de stempel": "Daar landt het stuifmeel later bij de bestuiving; het ontstaat er niet.",
              "in de helmdraad": "De helmdraad is alleen het steeltje dat de helmknop draagt."
            }
          },
          {
            t: "gap",
            q: "De vrouwelijke geslachtscel van een plant heet de ___.",
            a: "eicel",
            w: "In elk zaadbeginsel zit één eicel: de vrouwelijke geslachtscel."
          },
          {
            t: "mc",
            q: "Wat is het verschil tussen de helmdraad en de helmknop?",
            o: [
              "de helmdraad is het steeltje, de helmknop het knopje met stuifmeel erin",
              "de helmdraad maakt stuifmeel, de helmknop is het steeltje",
              "ze zijn allebei deel van de stamper",
              "de helmknop zit onderaan, de helmdraad bovenaan"
            ],
            a: "de helmdraad is het steeltje, de helmknop het knopje met stuifmeel erin",
            w: "Helm-DRAAD = draadje/steeltje; helm-KNOP = het knopje bovenop waar het stuifmeel in zit.",
            fout: {
              "de helmdraad maakt stuifmeel, de helmknop is het steeltje": "Net andersom: de knop maakt stuifmeel, de draad is het steeltje.",
              "ze zijn allebei deel van de stamper": "Nee, ze horen bij de meeldraad (mannelijk).",
              "de helmknop zit onderaan, de helmdraad bovenaan": "Andersom: de knop zit bovenop de draad."
            }
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "De <b>kelkbladeren</b> zijn meestal groen en beschermen de bloem in de knop tegen uitdroging en kou. De <b>kroonbladeren</b> zijn vaak groot en opvallend gekleurd om <b>insecten te lokken</b>.",
          "Sommige planten hebben <b>mannelijke</b> bloemen (alleen meeldraden) en <b>vrouwelijke</b> bloemen (alleen een stamper). Bij een courgette zie je onder de vrouwelijke bloem al een klein vruchtbeginsel — de beginnende courgette."
        ],
        regel: "Kelkbladeren beschermen de knop; opvallende kroonbladeren lokken insecten. Mannelijke bloem = alleen meeldraden, vrouwelijke bloem = alleen een stamper.",
        vragen: [
          {
            t: "mc",
            q: "Wat is de functie van de (vaak groene) kelkbladeren?",
            o: ["de bloem in de knop beschermen", "insecten lokken", "stuifmeel maken", "nectar maken"],
            a: "de bloem in de knop beschermen",
            w: "De kelkbladeren beschermen de bloem in de knop tegen uitdroging en kou.",
            fout: {
              "insecten lokken": "Dat doen juist de opvallende kroonbladeren.",
              "stuifmeel maken": "Dat doen de meeldraden (helmknoppen).",
              "nectar maken": "Nectar wordt in de bloem gemaakt om insecten te lokken, niet door de kelkbladeren."
            }
          },
          {
            t: "open",
            q: "Leg uit waarom de kroonbladeren van veel bloemen groot en opvallend gekleurd zijn.",
            punten: 2,
            modelantwoord: "Met grote, opvallend gekleurde kroonbladeren vallen de bloemen goed op. Daardoor worden insecten naar de bloem gelokt. De insecten zorgen dan voor de bestuiving (ze brengen stuifmeel mee).",
            sleutelwoorden: [
              { moet: ["insect", "bij"], syn: ["dier", "bestuiver"] },
              { moet: ["lokt", "lokken", "aantrekken", "opvallen", "bestuiv"], syn: ["aantrekt", "trekken aan"] }
            ],
            rubric: ["Je noemt dat het om insecten/bestuivers gaat", "Je legt uit dat de kleur ze lokt (voor de bestuiving)"]
          },
          {
            t: "mc",
            q: "Een courgetteplant heeft aparte mannelijke en vrouwelijke bloemen. Hoe herken je de vrouwelijke bloem?",
            o: [
              "er zit een klein vruchtbeginsel (beginnende courgette) onder de bloem",
              "ze heeft de grootste kroonbladeren",
              "ze maakt het meeste stuifmeel",
              "ze heeft alleen meeldraden"
            ],
            a: "er zit een klein vruchtbeginsel (beginnende courgette) onder de bloem",
            w: "De vrouwelijke bloem heeft een stamper met vruchtbeginsel; dat zie je als een beginnende courgette onder de bloem.",
            fout: {
              "ze heeft de grootste kroonbladeren": "De grootte van de kroonbladeren zegt niets over man/vrouw.",
              "ze maakt het meeste stuifmeel": "Stuifmeel komt juist uit de mannelijke bloem (meeldraden).",
              "ze heeft alleen meeldraden": "Dat is juist de mannelijke bloem."
            }
          },
          {
            t: "gap",
            q: "De mannelijke geslachtscellen van een plant heten ___.",
            a: "stuifmeelkorrels|stuifmeelkorrel|stuifmeel",
            w: "Stuifmeelkorrels zijn de mannelijke geslachtscellen; ze ontstaan in de helmhokjes."
          },
          {
            t: "hotspot",
            q: "Klik op de stempel — daar moet het stuifmeel op landen.",
            beeld: "img/bloem-doorsnede.svg",
            zones: [ { vorm: "cirkel", x: 0.500, y: 0.263, r: 0.09 } ],
            w: "De stempel is het bovenste, vaak plakkerige deel van de stamper waar het stuifmeel op blijft kleven."
          }
        ]
      }
    ]
  },

  /* ============================ 6.2 BESTUIVING ============================ */
  {
    id: "bestuiving",
    emoji: "🐝",
    titel: "6.2 Bestuiving",
    paragraaf: "6.2",
    kort: "Bestuiving = stuifmeel van een meeldraad op een stempel brengen. Door insecten (mooie, geurende bloemen met nectar) of door de wind (saaie bloemen met veel stuifmeel).",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "<b>Bestuiving</b> is het overbrengen van <b>stuifmeel</b> van een meeldraad op een <b>stempel</b> van een bloem van dezelfde plantensoort. Pas ná bestuiving kan er bevruchting plaatsvinden.",
          "Bloemen lokken insecten met kleur, geur en <b>nectar</b> (een zoet sap). Bijen halen nectar en maken er honing van; daarbij raken ze bedekt met stuifmeel en nemen dat mee naar de volgende bloem. Ook kolibries en vleermuizen kunnen stuifmeel verspreiden."
        ],
        regel: "Bestuiving = stuifmeel van meeldraad → stempel (van dezelfde soort). Nectar = zoet sap dat insecten lokt.",
        vragen: [
          {
            t: "mc",
            q: "Wat is bestuiving?",
            o: [
              "stuifmeel van een meeldraad komt op een stempel",
              "een eicel en een stuifmeelkorrel versmelten",
              "een zaadje gaat kiemen",
              "een vrucht valt op de grond"
            ],
            a: "stuifmeel van een meeldraad komt op een stempel",
            w: "Bestuiving = het overbrengen van stuifmeel van een meeldraad op een stempel.",
            fout: {
              "een eicel en een stuifmeelkorrel versmelten": "Dat is bevruchting — dat komt ná de bestuiving.",
              "een zaadje gaat kiemen": "Dat is kieming, veel later in het proces.",
              "een vrucht valt op de grond": "Dat hoort bij de verspreiding van zaden."
            }
          },
          {
            t: "gap",
            q: "Het zoete sap waarmee bloemen insecten lokken heet ___.",
            a: "nectar",
            w: "Nectar is een zoet sap; bijen maken er honing van voor hun larven."
          },
          {
            t: "mc",
            q: "Welk dier kan GEEN stuifmeel verspreiden?",
            o: ["een regenworm", "een bij", "een kolibrie", "een vleermuis"],
            a: "een regenworm",
            w: "Bijen, kolibries en (sommige) vleermuizen bezoeken bloemen en verspreiden stuifmeel. Een regenworm leeft in de grond en komt niet bij bloemen.",
            fout: {
              "een bij": "Bijen zijn juist de bekendste bestuivers.",
              "een kolibrie": "Kolibries drinken nectar en verspreiden zo stuifmeel.",
              "een vleermuis": "Sommige (fruit)vleermuizen bestuiven bloemen."
            }
          },
          {
            t: "mc",
            q: "Waarom raakt een bij onder het stuifmeel als hij nectar haalt?",
            o: [
              "hij komt langs de helmknoppen, daar blijft stuifmeel aan zijn lijf plakken",
              "hij eet het stuifmeel op",
              "de plant spuit stuifmeel op hem",
              "het stuifmeel valt uit de lucht op hem"
            ],
            a: "hij komt langs de helmknoppen, daar blijft stuifmeel aan zijn lijf plakken",
            w: "Op weg naar de nectar strijkt de bij langs de helmknoppen; het stuifmeel plakt aan zijn lijf en gaat mee naar de volgende bloem.",
            fout: {
              "hij eet het stuifmeel op": "Hij haalt nectar; het stuifmeel plakt per ongeluk aan hem vast.",
              "de plant spuit stuifmeel op hem": "Planten spuiten niet; het stuifmeel plakt gewoon vast.",
              "het stuifmeel valt uit de lucht op hem": "Dat hoort meer bij windbloemen, niet bij een bij in de bloem."
            }
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Bij <b>zelfbestuiving</b> komt stuifmeel op de stempel van <b>dezelfde bloem</b> of op een andere bloem van <b>dezelfde plant</b>.",
          "Bij <b>kruisbestuiving</b> komt stuifmeel op de stempel van een bloem van een <b>andere plant</b> (wel dezelfde soort). Kruisbestuiving zorgt voor meer variatie tussen de nakomelingen."
        ],
        regel: "Zelfbestuiving = binnen dezelfde plant. Kruisbestuiving = naar een andere plant (van dezelfde soort).",
        vragen: [
          {
            t: "mc",
            q: "Wat is zelfbestuiving?",
            o: [
              "stuifmeel komt op de stempel van dezelfde plant",
              "stuifmeel komt op de stempel van een andere plant",
              "een bloem maakt zelf nectar",
              "een bloem maakt zelf zaden zonder stuifmeel"
            ],
            a: "stuifmeel komt op de stempel van dezelfde plant",
            w: "Bij zelfbestuiving blijft het stuifmeel binnen dezelfde plant (dezelfde of een andere bloem ervan).",
            fout: {
              "stuifmeel komt op de stempel van een andere plant": "Dat is juist kruisbestuiving.",
              "een bloem maakt zelf nectar": "Dat heeft niets met zelfbestuiving te maken.",
              "een bloem maakt zelf zaden zonder stuifmeel": "Voor zaden is bestuiving + bevruchting nodig."
            }
          },
          {
            t: "gap",
            q: "Stuifmeel dat op de stempel van een bloem van een ándere plant van dezelfde soort komt: dat heet ___.",
            a: "kruisbestuiving",
            w: "Kruisbestuiving = stuifmeel gaat naar een andere plant van dezelfde soort."
          },
          {
            t: "mc",
            q: "Het stuifmeel van plant A waait naar de stempel van plant B (zelfde soort). Wat is dit?",
            o: ["kruisbestuiving", "zelfbestuiving", "bevruchting", "geen bestuiving"],
            a: "kruisbestuiving",
            w: "Twee verschillende planten van dezelfde soort → kruisbestuiving.",
            fout: {
              "zelfbestuiving": "Dat is alleen binnen dezelfde plant.",
              "bevruchting": "Bevruchting komt ná de bestuiving (kernen versmelten).",
              "geen bestuiving": "Er komt wél stuifmeel op een stempel van dezelfde soort, dus het is bestuiving."
            }
          },
          {
            t: "mc",
            q: "Stuifmeel van een appelbloem komt op de stempel van een kersenbloem. Vindt er bestuiving plaats?",
            o: [
              "nee, want het zijn verschillende plantensoorten",
              "ja, het is kruisbestuiving",
              "ja, het is zelfbestuiving",
              "ja, want er komt stuifmeel op een stempel"
            ],
            a: "nee, want het zijn verschillende plantensoorten",
            w: "Bestuiving telt alleen tussen bloemen van dezelfde plantensoort. Appel en kers zijn verschillende soorten.",
            fout: {
              "ja, het is kruisbestuiving": "Kruisbestuiving moet wél dezelfde soort zijn.",
              "ja, het is zelfbestuiving": "Zelfbestuiving is zelfs binnen dezelfde plant.",
              "ja, want er komt stuifmeel op een stempel": "Het moet dezelfde plantensoort zijn, anders telt het niet."
            }
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "<b>Insectenbloemen</b> laten insecten het werk doen: ze hebben grote, opvallend gekleurde kroonbladeren, geur en nectar, en hun stuifmeel is ruw en kleverig (het plakt aan het insect).",
          "<b>Windbloemen</b> laten de wind het werk doen: ze zijn klein en onopvallend (vaak groen), zonder nectar. Hun helmknoppen en (veervormige) stempels hangen buiten de bloem, en ze maken <b>heel veel</b> licht, glad stuifmeel — want de kans dat een korrel toevallig de goede stempel raakt is klein. Vleermuisbloemen zijn niet fel gekleurd, maar ruiken sterk (vleermuizen vliegen 's nachts)."
        ],
        regel: "Insectenbloem: mooi, geurig, nectar, weinig kleverig stuifmeel. Windbloem: saai/groen, geen nectar, héél veel licht stuifmeel, delen buiten de bloem.",
        vragen: [
          {
            t: "mc",
            q: "Welk kenmerk hoort bij een windbloem?",
            o: [
              "klein en onopvallend, met heel veel stuifmeel",
              "grote gekleurde kroonbladeren en veel nectar",
              "een sterke geur om bijen te lokken",
              "kleverig stuifmeel dat aan insecten plakt"
            ],
            a: "klein en onopvallend, met heel veel stuifmeel",
            w: "Windbloemen hoeven geen insecten te lokken; ze zijn saai/groen en maken juist heel veel licht stuifmeel.",
            fout: {
              "grote gekleurde kroonbladeren en veel nectar": "Dat zijn juist insectenbloemen.",
              "een sterke geur om bijen te lokken": "Lokken met geur hoort bij insecten- (of vleermuis)bloemen.",
              "kleverig stuifmeel dat aan insecten plakt": "Kleverig stuifmeel hoort bij insectenbloemen; windbloemen hebben glad stuifmeel."
            }
          },
          {
            t: "open",
            q: "Leg uit waarom windbloemen veel méér stuifmeel maken dan insectenbloemen.",
            punten: 2,
            modelantwoord: "Bij windbloemen waait het stuifmeel zomaar alle kanten op. De kans dat een korrel toevallig op de goede stempel (van dezelfde soort) terechtkomt, is heel klein. Door heel veel stuifmeel te maken, vergroot de plant de kans dat er tóch genoeg op een stempel landt.",
            sleutelwoorden: [
              { moet: ["wind", "waait", "lucht"], syn: ["weg", "verspreid"] },
              { moet: ["kans", "toeval", "klein"], syn: ["onzeker", "weinig kans"] }
            ],
            rubric: ["Je noemt dat de wind het stuifmeel willekeurig wegblaast", "Je legt uit dat de kans op de goede stempel klein is, dus veel stuifmeel vergroot die kans"]
          },
          {
            t: "mc",
            q: "Waarom hebben bloemen die door vleermuizen worden bestoven meestal géén felle kleuren, maar wel een sterke geur?",
            o: [
              "vleermuizen vliegen 's nachts en ruiken beter dan dat ze kleur zien",
              "vleermuizen houden niet van kleuren",
              "felle kleuren jagen vleermuizen weg",
              "geur maakt de nectar zoeter"
            ],
            a: "vleermuizen vliegen 's nachts en ruiken beter dan dat ze kleur zien",
            w: "'s Nachts zie je kleur slecht. Een sterke geur valt in het donker veel beter op dan kleur.",
            fout: {
              "vleermuizen houden niet van kleuren": "Het gaat er niet om wat ze leuk vinden, maar om wat opvalt in het donker.",
              "felle kleuren jagen vleermuizen weg": "Kleuren jagen ze niet weg; ze zien ze 's nachts gewoon nauwelijks.",
              "geur maakt de nectar zoeter": "Geur en zoetheid zijn niet hetzelfde; het gaat om opvallen in het donker."
            }
          },
          {
            t: "mc",
            q: "Bij windbloemen steken de stempels vaak naar buiten en zijn ze veervormig (vertakt en behaard). Waarom is dat handig?",
            o: [
              "zo vangen ze makkelijker stuifmeel uit de lucht",
              "zo zien insecten ze beter",
              "zo maken ze meer nectar",
              "zo beschermen ze de knop"
            ],
            a: "zo vangen ze makkelijker stuifmeel uit de lucht",
            w: "Een grote, veervormige stempel buiten de bloem vangt het rondzwevende stuifmeel beter op.",
            fout: {
              "zo zien insecten ze beter": "Windbloemen hebben insecten juist niet nodig.",
              "zo maken ze meer nectar": "Windbloemen maken meestal geen nectar.",
              "zo beschermen ze de knop": "Dat is de taak van de kelkbladeren."
            }
          }
        ]
      }
    ]
  },

  /* ============================ 6.3 BEVRUCHTING ============================ */
  {
    id: "bevruchting",
    emoji: "🌱",
    titel: "6.3 Bevruchting",
    paragraaf: "6.3",
    kort: "Na bestuiving groeit uit de stuifmeelkorrel een stuifmeelbuis door de stijl naar de eicel. De kernen versmelten = bevruchting. Daarna: bevruchte eicel → kiem, zaadbeginsel → zaad.",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "Als een stuifmeelkorrel op de stempel ligt (van dezelfde soort), groeit eruit een lange buis: de <b>stuifmeelbuis</b>.",
          "Die buis groeit door de <b>stijl</b> naar beneden, helemaal tot bij een <b>zaadbeginsel</b> met daarin de <b>eicel</b>."
        ],
        regel: "Uit de stuifmeelkorrel op de stempel groeit een stuifmeelbuis door de stijl naar de eicel.",
        vragen: [
          {
            t: "label",
            q: "Sleep de namen naar de juiste plek in dit bevruchtings-plaatje.",
            beeld: "img/bevruchting.svg",
            doelen: [
              { id: "stuifmeelkorrel", label: "stuifmeelkorrel", x: 0.552, y: 0.104 },
              { id: "stijl", label: "stijl", x: 0.548, y: 0.435 },
              { id: "stuifmeelbuis", label: "stuifmeelbuis", x: 0.470, y: 0.560 },
              { id: "eicel", label: "eicel", x: 0.488, y: 0.822 }
            ],
            w: "Bovenaan liggen de stuifmeelkorrels op de stempel; de roze stuifmeelbuis groeit door de stijl omlaag naar de eicel in het zaadbeginsel."
          },
          {
            t: "gap",
            q: "Uit een stuifmeelkorrel op de stempel groeit een buis: de ___.",
            a: "stuifmeelbuis",
            w: "De stuifmeelbuis groeit door de stijl naar het zaadbeginsel."
          },
          {
            t: "mc",
            q: "Door welk deel van de stamper groeit de stuifmeelbuis naar beneden?",
            o: ["door de stijl", "door de helmknop", "door het kroonblad", "door de bloemsteel"],
            a: "door de stijl",
            w: "De stijl is het steeltje tussen stempel en vruchtbeginsel; daar groeit de buis doorheen.",
            fout: {
              "door de helmknop": "De helmknop hoort bij de meeldraad (mannelijk), niet bij de stamper.",
              "door het kroonblad": "Kroonbladeren doen niet mee aan de bevruchting.",
              "door de bloemsteel": "De bloemsteel draagt alleen de bloem; de buis groeit door de stijl."
            }
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Bij het zaadbeginsel barst de top van de stuifmeelbuis open. De <b>kern van de stuifmeelkorrel</b> versmelt met de <b>kern van de eicel</b>. Dit versmelten heet <b>bevruchting</b>.",
          "Let op het verschil: <b>bestuiving</b> is het <b>vervoer</b> van stuifmeel naar de stempel; <b>bevruchting</b> is het <b>versmelten</b> van de kernen. Eerst bestuiving, dán bevruchting."
        ],
        regel: "Bevruchting = de kern van de mannelijke geslachtscel versmelt met de kern van de eicel. Eerst bestuiven, dan bevruchten.",
        vragen: [
          {
            t: "sequence",
            q: "Zet op volgorde hoe een eicel bevrucht wordt.",
            stappen: [
              "Een stuifmeelkorrel landt op de stempel",
              "Er groeit een stuifmeelbuis door de stijl naar beneden",
              "De buis bereikt een zaadbeginsel met een eicel",
              "De kern van de stuifmeelkorrel versmelt met de kern van de eicel"
            ],
            w: "Landen op de stempel → buis groeit door de stijl → bij de eicel → kernen versmelten (= bevruchting)."
          },
          {
            t: "mc",
            q: "Wat is bevruchting precies?",
            o: [
              "de kern van een mannelijke en een vrouwelijke geslachtscel versmelten",
              "stuifmeel komt op de stempel terecht",
              "een zaadje gaat groeien in de grond",
              "een vrucht wordt rijp"
            ],
            a: "de kern van een mannelijke en een vrouwelijke geslachtscel versmelten",
            w: "Bevruchting = de kern van de stuifmeelkorrel versmelt met de kern van de eicel.",
            fout: {
              "stuifmeel komt op de stempel terecht": "Dat is bestuiving, de stap dáárvoor.",
              "een zaadje gaat groeien in de grond": "Dat is kieming, veel later.",
              "een vrucht wordt rijp": "Dat gebeurt pas na de bevruchting."
            }
          },
          {
            t: "mc",
            q: "Wat is het verschil tussen bestuiving en bevruchting?",
            o: [
              "bestuiving = stuifmeel naar de stempel; bevruchting = kernen versmelten",
              "bestuiving = kernen versmelten; bevruchting = stuifmeel naar de stempel",
              "ze betekenen precies hetzelfde",
              "bestuiving gebeurt bij dieren, bevruchting bij planten"
            ],
            a: "bestuiving = stuifmeel naar de stempel; bevruchting = kernen versmelten",
            w: "Eerst het vervoer (bestuiving), daarna het versmelten van de kernen (bevruchting).",
            fout: {
              "bestuiving = kernen versmelten; bevruchting = stuifmeel naar de stempel": "Precies omgekeerd.",
              "ze betekenen precies hetzelfde": "Nee — het is eerst bestuiving en dan pas bevruchting.",
              "bestuiving gebeurt bij dieren, bevruchting bij planten": "Allebei horen hier bij planten."
            }
          },
          {
            t: "hotspot",
            q: "Klik op de eicel — de cel die bij de bevruchting wordt geraakt.",
            beeld: "img/bevruchting.svg",
            zones: [ { vorm: "cirkel", x: 0.488, y: 0.822, r: 0.10 } ],
            w: "De eicel ligt onderin het zaadbeginsel; daar versmelt de kern van de stuifmeelkorrel mee."
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "Na de bevruchting deelt de <b>bevruchte eicel</b> zich en ontstaat een <b>kiem</b>. Het <b>zaadbeginsel</b> groeit uit tot een <b>zaad</b>, met de kiem erin. Bij <b>kieming</b> groeit uit de kiem een nieuw plantje.",
          "Er kunnen meerdere stuifmeelbuizen tegelijk groeien, naar verschillende zaadbeginsels — zo ontstaan meerdere zaden in één vruchtbeginsel. Wordt een eicel <b>niet</b> bevrucht, dan groeit dat zaadbeginsel niet uit tot een zaad."
        ],
        regel: "Bevruchte eicel → kiem. Zaadbeginsel → zaad (met kiem erin). Niet bevrucht = geen zaad.",
        vragen: [
          {
            t: "gap",
            q: "Uit de bevruchte eicel ontstaat door celdelingen een ___.",
            a: "kiem",
            w: "De bevruchte eicel deelt zich tot een kiem; die zit in het zaad."
          },
          {
            t: "mc",
            q: "Waar groeit een zaadbeginsel tot uit, nadat de eicel erin is bevrucht?",
            o: ["tot een zaad", "tot een vrucht", "tot een bloem", "tot een stamper"],
            a: "tot een zaad",
            w: "Het zaadbeginsel → zaad. (Het hele vruchtbeginsel eromheen → vrucht.)",
            fout: {
              "tot een vrucht": "Niet het zaadbeginsel maar het hele vruchtbeginsel wordt de vrucht.",
              "tot een bloem": "Een nieuwe bloem komt pas veel later, uit het volgroeide plantje.",
              "tot een stamper": "De stamper is een deel van de bloem, geen resultaat van bevruchting."
            }
          },
          {
            t: "open",
            q: "In een vruchtbeginsel zitten 6 zaadbeginsels, maar er ontstaan maar 3 zaden. Leg uit hoe dat kan.",
            punten: 2,
            modelantwoord: "Alleen de zaadbeginsels waarvan de eicel is bevrucht, groeien uit tot een zaad. Blijkbaar zijn maar 3 van de 6 eicellen bevrucht; de andere 3 zaadbeginsels groeien niet uit en verschrompelen. Daarom zijn er 3 zaden.",
            sleutelwoorden: [
              { moet: ["bevrucht", "bevruchting"], syn: ["versmolten"] },
              { moet: ["3", "drie", "niet", "alleen"], syn: ["maar", "deel"] }
            ],
            rubric: ["Je noemt dat alleen bevruchte eicellen een zaad worden", "Je legt uit dat maar 3 eicellen bevrucht zijn (de rest niet)"]
          },
          {
            t: "mc",
            q: "Wat gebeurt er met een zaadbeginsel waarvan de eicel NIET bevrucht is?",
            o: [
              "het groeit niet uit tot een zaad",
              "het wordt juist het grootste zaad",
              "het wordt een nieuwe bloem",
              "het verandert in stuifmeel"
            ],
            a: "het groeit niet uit tot een zaad",
            w: "Zonder bevruchting kan de eicel niet uitgroeien tot een kiem, dus er ontstaat geen zaad; het zaadbeginsel verschrompelt.",
            fout: {
              "het wordt juist het grootste zaad": "Zonder bevruchting ontstaat er helemaal geen zaad.",
              "het wordt een nieuwe bloem": "Een zaadbeginsel wordt geen bloem.",
              "het verandert in stuifmeel": "Stuifmeel komt uit de helmknoppen, niet uit een zaadbeginsel."
            }
          }
        ]
      }
    ]
  },

  /* ============================ 6.4 VRUCHTEN EN ZADEN ============================ */
  {
    id: "vrucht-zaad",
    emoji: "🍎",
    titel: "6.4 Vruchten en zaden",
    paragraaf: "6.4",
    kort: "Na de bevruchting groeit het vruchtbeginsel uit tot een vrucht met zaden erin. Kroonbladeren en meeldraden vallen af; kelk en stijl verschrompelen.",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "Een <b>vrucht</b> is een uitgegroeid <b>vruchtbeginsel</b>, met de zaden erin. Een <b>zaad</b> is een uitgegroeid (bevrucht) <b>zaadbeginsel</b>, met een kiem en reservevoedsel.",
          "Het <b>vruchtvlees</b> is het zachte, vaak eetbare deel. Voorbeelden van vruchten: appel, peer, tomaat, pruim; voorbeelden van zaden: bonen, erwten, pitten."
        ],
        regel: "Vruchtbeginsel → vrucht (met zaden). Zaadbeginsel → zaad (met kiem + reservevoedsel).",
        vragen: [
          {
            t: "label",
            q: "Sleep de namen naar de juiste delen van de doorgesneden appel.",
            beeld: "img/appel-doorsnede.svg",
            doelen: [
              { id: "steeltje", label: "steeltje", x: 0.533, y: 0.079 },
              { id: "vruchtvlees", label: "vruchtvlees", x: 0.250, y: 0.526 },
              { id: "klokhuis", label: "klokhuis", x: 0.500, y: 0.566 },
              { id: "kroontje", label: "kroontje", x: 0.500, y: 0.942 }
            ],
            w: "Bovenaan het steeltje, onderaan het kroontje; binnenin het klokhuis met de pitten, daaromheen het vruchtvlees."
          },
          {
            t: "mc",
            q: "Waaruit groeit een vrucht?",
            o: ["uit het vruchtbeginsel", "uit het kroonblad", "uit de meeldraad", "uit de bloemsteel"],
            a: "uit het vruchtbeginsel",
            w: "Na de bevruchting groeit het vruchtbeginsel uit tot de vrucht.",
            fout: {
              "uit het kroonblad": "Kroonbladeren vallen juist af na de bevruchting.",
              "uit de meeldraad": "De meeldraden vallen ook af; ze maakten het stuifmeel.",
              "uit de bloemsteel": "De bloemsteel draagt alleen de bloem/vrucht."
            }
          },
          {
            t: "gap",
            q: "Een zaad ontstaat uit een (bevrucht) ___.",
            a: "zaadbeginsel",
            w: "Zaadbeginsel → zaad; vruchtbeginsel → vrucht."
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Na de bevruchting verandert er veel in de bloem: de <b>kroonbladeren</b> en <b>meeldraden vallen af</b>, de <b>bloemkelk</b> en de <b>stijl verschrompelen</b>, en het <b>vruchtbeginsel</b> groeit uit tot de vrucht.",
          "Alleen de zaadbeginsels met een <b>bevruchte</b> eicel worden een zaad; de andere verschrompelen. Het <b>vruchtvlees</b> ontstaat uit het vruchtbeginsel óf uit de <b>bloembodem</b> (bv. bij een appel)."
        ],
        regel: "Na bevruchting: kroonbladeren + meeldraden vallen af · kelk + stijl verschrompelen · vruchtbeginsel → vrucht.",
        vragen: [
          {
            t: "sequence",
            q: "Zet de veranderingen van een perenbloem tot rijpe peer op volgorde.",
            stappen: [
              "De bloem wordt bevrucht",
              "Het vruchtbeginsel en de zaadbeginsels beginnen te groeien",
              "De kroonbladeren en de meeldraden vallen af",
              "De bloemkelk en de stijl verschrompelen",
              "De peer is rijp"
            ],
            w: "Eerst bevruchting, dan groeien, dan vallen de bloemdelen af, dan verschrompelt de rest en ten slotte is de peer rijp."
          },
          {
            t: "mc",
            q: "Welke delen VALLEN AF na de bevruchting?",
            o: [
              "de kroonbladeren en de meeldraden",
              "het vruchtbeginsel en de zaadbeginsels",
              "de stempel en de eicel",
              "de stuifmeelbuis en de kiem"
            ],
            a: "de kroonbladeren en de meeldraden",
            w: "Kroonbladeren en meeldraden hebben hun werk gedaan (lokken + stuifmeel) en vallen af.",
            fout: {
              "het vruchtbeginsel en de zaadbeginsels": "Die groeien juist uit tot vrucht en zaden.",
              "de stempel en de eicel": "De eicel wordt juist de kiem; die valt niet af.",
              "de stuifmeelbuis en de kiem": "De kiem blijft in het zaad zitten."
            }
          },
          {
            t: "mc",
            q: "Wat is het vruchtvlees?",
            o: [
              "het zachte, vaak eetbare deel van de vrucht",
              "het harde pitje in het midden",
              "het groene blaadje aan de steel",
              "de buitenste schil"
            ],
            a: "het zachte, vaak eetbare deel van de vrucht",
            w: "Vruchtvlees = het zachte deel; het ontstaat uit het vruchtbeginsel of de bloembodem.",
            fout: {
              "het harde pitje in het midden": "Dat is het zaad/de pit, niet het vruchtvlees.",
              "het groene blaadje aan de steel": "Dat is een restant van de kelk.",
              "de buitenste schil": "De schil beschermt; het vruchtvlees is het zachte deel eronder."
            }
          },
          {
            t: "hotspot",
            q: "Klik op het vruchtvlees van de appel.",
            beeld: "img/appel-doorsnede.svg",
            zones: [ { vorm: "cirkel", x: 0.250, y: 0.526, r: 0.10 }, { vorm: "cirkel", x: 0.760, y: 0.526, r: 0.10 } ],
            w: "Het vruchtvlees is het brede, zachte deel tussen de schil en het klokhuis."
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "Soms ontstaat het vruchtvlees niet uit het vruchtbeginsel maar uit de <b>bloembodem</b>. Zo'n vrucht heet een <b>schijnvrucht</b>. De <b>aardbei</b> is een schijnvrucht: het rode vruchtvlees komt uit de bloembodem en de 'pitjes' zijn de echte vruchtjes.",
          "Hoe meer eicellen er bevrucht zijn, hoe meer zaden en hoe groter de vrucht. Daarom zorgen bijen (meer bestuiving) voor een grotere appeloogst."
        ],
        regel: "Schijnvrucht = vruchtvlees uit de bloembodem (bv. aardbei). Meer bevruchte zaden → grotere vrucht.",
        vragen: [
          {
            t: "mc",
            q: "Waarom noemen we een aardbei een schijnvrucht?",
            o: [
              "het vruchtvlees komt uit de bloembodem, niet uit het vruchtbeginsel",
              "een aardbei heeft helemaal geen zaden",
              "een aardbei is namaak en niet eetbaar",
              "een aardbei groeit zonder bestuiving"
            ],
            a: "het vruchtvlees komt uit de bloembodem, niet uit het vruchtbeginsel",
            w: "Bij een schijnvrucht doen ook andere delen (de bloembodem) mee; de 'pitjes' op de aardbei zijn de echte vruchtjes.",
            fout: {
              "een aardbei heeft helemaal geen zaden": "De zaadjes zitten juist in de 'pitjes' aan de buitenkant.",
              "een aardbei is namaak en niet eetbaar": "Een aardbei is gewoon eetbaar; 'schijn' slaat op hoe hij ontstaat.",
              "een aardbei groeit zonder bestuiving": "Ook een aardbei heeft bestuiving en bevruchting nodig."
            }
          },
          {
            t: "open",
            q: "Een fruitteler zet bijenkasten in zijn appelboomgaard. Leg uit waarom hij daardoor grotere appels oogst.",
            punten: 2,
            modelantwoord: "Bijen zorgen voor meer bestuiving, dus worden er meer eicellen bevrucht. Meer bevruchte zaadbeginsels betekent meer zaden in de appel. Een appel met meer zaden groeit groter (zwaarder). Dus: meer bijen → meer bestuiving → meer zaden → grotere appels.",
            sleutelwoorden: [
              { moet: ["bestuiv", "bij"], syn: ["stuifmeel"] },
              { moet: ["meer zaden", "zaad", "bevrucht"], syn: ["pitten"] },
              { moet: ["groter", "zwaarder", "grote"], syn: ["dikker"] }
            ],
            rubric: ["Je noemt dat bijen meer bestuiving geven", "Je legt uit dat er dan meer zaden ontstaan", "Je koppelt meer zaden aan een grotere appel"]
          },
          {
            t: "gap",
            q: "De vrucht van een bonenplant heet een ___.",
            a: "peulvrucht|peul",
            w: "Een boon/sperzieboon groeit in een peulvrucht."
          },
          {
            t: "mc",
            q: "In welke vrucht zit meestal maar ÉÉN zaad?",
            o: ["een pruim", "een tomaat", "een paprika", "een meloen"],
            a: "een pruim",
            w: "Een pruim heeft één pit (zaad). Tomaat, paprika en meloen hebben veel zaden.",
            fout: {
              "een tomaat": "Een tomaat heeft juist veel zaadjes.",
              "een paprika": "Een paprika zit vol zaadjes.",
              "een meloen": "Een meloen kan wel honderd zaden bevatten."
            }
          }
        ]
      }
    ]
  },

  /* ============================ 6.7 VERSPREIDING VAN ZADEN ============================ */
  {
    id: "zaadverspreiding",
    emoji: "🍃",
    titel: "6.7 Verspreiding van zaden",
    paragraaf: "6.7",
    kort: "Zaden moeten zich ver verspreiden, zodat de plantjes niet op één kluitje staan. Dat gaat door de plant zelf, door de wind of door dieren.",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "Het is gunstig als zaden zich <b>ver</b> verspreiden: dan staan de jonge plantjes niet allemaal op dezelfde plek elkaar in de weg om licht, water en ruimte.",
          "Er zijn drie manieren van verspreiding: <b>door de plant zelf</b> (wegslingeren), <b>door de wind</b> en <b>door dieren</b>."
        ],
        regel: "Zaden verspreiden = niet op één kluitje. Drie manieren: door de plant zelf, door de wind, door dieren.",
        vragen: [
          {
            t: "mc",
            q: "Waarom is het gunstig dat zaden zich ver verspreiden?",
            o: [
              "dan staan de plantjes niet allemaal op dezelfde plek elkaar in de weg",
              "dan blijven ze lekker dicht bij de moederplant",
              "dan worden de zaden zwaarder",
              "dan hoeven ze niet te kiemen"
            ],
            a: "dan staan de plantjes niet allemaal op dezelfde plek elkaar in de weg",
            w: "Verspreid je de zaden, dan is er voor meer plantjes genoeg licht, water en ruimte.",
            fout: {
              "dan blijven ze lekker dicht bij de moederplant": "Juist niet — dichtbij elkaar is er te weinig licht/ruimte.",
              "dan worden de zaden zwaarder": "Verspreiding maakt zaden niet zwaarder.",
              "dan hoeven ze niet te kiemen": "Ze moeten juist nog kiemen, maar dan op een goede plek."
            }
          },
          {
            t: "mc",
            q: "Welke is GEEN manier om zaden te verspreiden?",
            o: ["door fotosynthese", "door de wind", "door dieren", "door de plant zelf"],
            a: "door fotosynthese",
            w: "De drie manieren zijn: door de plant zelf, door de wind en door dieren. Fotosynthese is iets heel anders (suikers maken met licht).",
            fout: {
              "door de wind": "Dat is juist een van de drie manieren.",
              "door dieren": "Dat is een van de drie manieren.",
              "door de plant zelf": "Dat is een van de drie manieren (wegslingeren)."
            }
          },
          {
            t: "gap",
            q: "Een paardenbloem-zaadje heeft een pluisje en wordt verspreid door de ___.",
            a: "wind",
            w: "Het lichte pluis laat het zaadje lang in de lucht zweven: windverspreiding."
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "<b>Door de plant zelf:</b> rijpe vruchten springen open en <b>slingeren</b> de zaden weg (bv. de <b>ooievaarsbek</b>).",
          "<b>Door de wind:</b> kleine, lichte vruchten/zaden met een <b>pluis</b> (paardenbloem) of een <b>vleugel</b> (esdoorn, berk, linde) blijven lang in de lucht zweven."
        ],
        regel: "Plant zelf = openspringen + wegslingeren. Wind = licht, met pluis of vleugel.",
        vragen: [
          {
            t: "mc",
            q: "Een esdoornzaadje heeft een soort vleugel en tolt uit de boom. Hoe wordt het verspreid?",
            o: ["door de wind", "door de plant zelf", "door dieren", "door water"],
            a: "door de wind",
            w: "Een vleugel zorgt dat het zaad lang zweeft en ver wegwaait: windverspreiding.",
            fout: {
              "door de plant zelf": "Daarbij worden zaden weggeslingerd; hier doet de wind het werk.",
              "door dieren": "Er komt geen dier aan te pas.",
              "door water": "Water wordt in dit hoofdstuk niet als manier genoemd voor de esdoorn."
            }
          },
          {
            t: "mc",
            q: "Bij de ooievaarsbek springt de rijpe vrucht open en schieten de zaden weg. Welke manier is dit?",
            o: ["door de plant zelf", "door de wind", "door dieren", "door insecten"],
            a: "door de plant zelf",
            w: "De plant slingert de zaden zélf weg als de vrucht openspringt.",
            fout: {
              "door de wind": "De wind hoeft niet te helpen; de vrucht slingert zelf.",
              "door dieren": "Er is geen dier nodig.",
              "door insecten": "Insecten doen mee bij bestuiving, niet bij dit wegslingeren."
            }
          },
          {
            t: "mc",
            q: "Welke kenmerken passen bij zaden die door de WIND worden verspreid?",
            o: [
              "ze zijn licht en hebben pluis of vleugels",
              "ze zijn zwaar en hebben veel vruchtvlees",
              "ze hebben haakjes om aan vachten te blijven hangen",
              "ze springen met kracht uit de vrucht"
            ],
            a: "ze zijn licht en hebben pluis of vleugels",
            w: "Licht + pluis/vleugel = lang zweven in de lucht.",
            fout: {
              "ze zijn zwaar en hebben veel vruchtvlees": "Vruchtvlees hoort bij verspreiding door dieren.",
              "ze hebben haakjes om aan vachten te blijven hangen": "Haakjes horen bij verspreiding door dieren.",
              "ze springen met kracht uit de vrucht": "Dat is verspreiding door de plant zelf."
            }
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "<b>Door dieren</b> gaat op drie manieren: (1) dieren eten sappig <b>vruchtvlees</b> (bv. lijsterbes); het vruchtvlees verteert maar de zaden niet — die komen met de poep ergens anders terecht en kunnen daar kiemen. (2) Vruchten met <b>haakjes</b> (klis, tandzaad) blijven in de <b>vacht</b> hangen. (3) Dieren leggen een <b>wintervoorraad</b> aan (eekhoorns, gaaien met eikels) en vinden niet alles terug.",
          "Ook mensen verspreiden zaden, bijvoorbeeld in de ribbels van schoenzolen."
        ],
        regel: "Door dieren: opgegeten vruchtvlees (zaden via de poep), haakjes in de vacht, of vergeten wintervoorraad.",
        vragen: [
          {
            t: "mc",
            q: "Een vogel eet de bessen van een lijsterbes. Hoe helpt dat de zaden verspreiden?",
            o: [
              "het vruchtvlees verteert, de zaden komen met de poep ergens anders terecht",
              "de vogel maakt nieuwe zaden",
              "de zaden verteren in de maag van de vogel",
              "de vogel plant de zaden netjes in de grond"
            ],
            a: "het vruchtvlees verteert, de zaden komen met de poep ergens anders terecht",
            w: "De zaden verteren niet; ze worden ver van de plant uitgepoept en kunnen daar kiemen.",
            fout: {
              "de vogel maakt nieuwe zaden": "Dieren maken geen plantenzaden.",
              "de zaden verteren in de maag van de vogel": "Juist niet — het vruchtvlees verteert, de zaden niet.",
              "de vogel plant de zaden netjes in de grond": "Het gebeurt per ongeluk, via de poep."
            }
          },
          {
            t: "open",
            q: "Op een dak groeit ineens een bessenplantje in de dakgoot. Leg uit hoe het zaadje daar terecht kan zijn gekomen.",
            punten: 2,
            modelantwoord: "Een vogel heeft ergens de bessen gegeten. Het vruchtvlees verteerde, maar de zaden niet. Toen de vogel op of bij het dak zat, poepte hij de zaden uit in de dakgoot. Daar kon het zaadje kiemen.",
            sleutelwoorden: [
              { moet: ["vogel", "dier"], syn: ["merel", "eet"] },
              { moet: ["poep", "uitwerpsel", "ontlasting"], syn: ["gepoept", "uitgepoept"] }
            ],
            rubric: ["Je noemt dat een dier/vogel de bes heeft gegeten", "Je legt uit dat de zaden via de poep op het dak terechtkwamen"]
          },
          {
            t: "mc",
            q: "De vruchten van een klis hebben kleine haakjes. Hoe worden ze verspreid?",
            o: [
              "ze blijven in de vacht van dieren hangen en vallen er later af",
              "ze waaien weg met de wind",
              "ze springen uit de vrucht",
              "ze drijven op het water"
            ],
            a: "ze blijven in de vacht van dieren hangen en vallen er later af",
            w: "De haakjes haken in een vacht (of in je trui); ergens anders vallen ze er weer af.",
            fout: {
              "ze waaien weg met de wind": "Daarvoor zijn ze te zwaar; ze gebruiken juist haakjes.",
              "ze springen uit de vrucht": "Dat is verspreiding door de plant zelf.",
              "ze drijven op het water": "Water wordt hier niet genoemd; het gaat om de haakjes."
            }
          },
          {
            t: "sequence",
            q: "Zet op volgorde hoe een lijsterbeszaadje door een vogel wordt verspreid.",
            stappen: [
              "De vogel eet de rijpe bessen op",
              "In de maag verteert het vruchtvlees, maar de zaden niet",
              "De vogel vliegt weg en poept de zaden ergens anders uit",
              "Op een goede plek kan het zaad kiemen"
            ],
            w: "Eten → vruchtvlees verteert (zaad niet) → ergens anders uitpoepen → kiemen."
          }
        ]
      }
    ]
  },

  /* ============================ 6.8 MANNELIJKE EN VROUWELIJKE ORGANEN ============================ */
  {
    id: "organen",
    emoji: "🌳",
    titel: "6.8 Mannelijke en vrouwelijke organen",
    paragraaf: "6.8",
    kort: "Bloemen kunnen tweeslachtig (meeldraden én stamper) of eenslachtig zijn. Planten zijn eenhuizig of tweehuizig. Ook dieren hebben voortplantingsorganen.",
    niveaus: [
      {
        n: 1, naam: "Brons",
        uitleg: [
          "Bij planten zijn de <b>meeldraden</b> de mannelijke organen en de <b>stamper</b> het vrouwelijke orgaan.",
          "Een <b>tweeslachtige</b> bloem heeft zowel meeldraden áls een stamper (de meeste bloemen). Een <b>eenslachtige</b> bloem heeft maar één van de twee: alleen meeldraden = een <b>mannelijke bloem</b>, alleen een stamper = een <b>vrouwelijke bloem</b>."
        ],
        regel: "Tweeslachtig = meeldraden én stamper. Eenslachtig = alleen meeldraden (man) óf alleen een stamper (vrouw).",
        vragen: [
          {
            t: "mc",
            q: "Wat is een tweeslachtige bloem?",
            o: [
              "een bloem met zowel meeldraden als een stamper",
              "een bloem met alleen meeldraden",
              "een bloem met alleen een stamper",
              "een bloem die twee keer per jaar bloeit"
            ],
            a: "een bloem met zowel meeldraden als een stamper",
            w: "Twee-slachtig = beide 'geslachten' in één bloem: meeldraden (man) én een stamper (vrouw).",
            fout: {
              "een bloem met alleen meeldraden": "Dat is een eenslachtige, mannelijke bloem.",
              "een bloem met alleen een stamper": "Dat is een eenslachtige, vrouwelijke bloem.",
              "een bloem die twee keer per jaar bloeit": "Twee-slachtig gaat over de organen, niet over hoe vaak ze bloeit."
            }
          },
          {
            t: "mc",
            q: "Een bloem met alleen meeldraden noem je een...",
            o: ["mannelijke bloem", "vrouwelijke bloem", "tweeslachtige bloem", "windbloem"],
            a: "mannelijke bloem",
            w: "Alleen meeldraden (mannelijk) = mannelijke bloem.",
            fout: {
              "vrouwelijke bloem": "Die heeft juist alleen een stamper.",
              "tweeslachtige bloem": "Die heeft zowel meeldraden als een stamper.",
              "windbloem": "Dat gaat over de manier van bestuiven, niet over man/vrouw."
            }
          },
          {
            t: "gap",
            q: "Een bloem met alleen een stamper (en geen meeldraden) is een ___ bloem.",
            a: "vrouwelijke|vrouwelijk",
            w: "Alleen een stamper = vrouwelijk."
          }
        ]
      },
      {
        n: 2, naam: "Zilver",
        uitleg: [
          "Een trosje eenslachtige bloemen heet een <b>katje</b> (bv. bij de wilg): <b>meeldraadkatjes</b> (man) en <b>stamperkatjes</b> (vrouw).",
          "Een plant die <b>zowel</b> mannelijke als vrouwelijke bloemen heeft (of tweeslachtige bloemen) is <b>eenhuizig</b>. Een plant met <b>óf</b> alleen mannelijke <b>óf</b> alleen vrouwelijke bloemen is <b>tweehuizig</b> (bv. de wilg). Bij een tweehuizige plant kan geen zelfbestuiving optreden."
        ],
        regel: "Katje = trosje eenslachtige bloemen. Eenhuizig = man + vrouw op één plant. Tweehuizig = man en vrouw op aparte planten.",
        vragen: [
          {
            t: "mc",
            q: "Wat is een katje?",
            o: [
              "een trosje eenslachtige bloemen (bv. bij de wilg)",
              "een jonge kat",
              "een soort vrucht met haakjes",
              "het vrouwelijke deel van de bloem"
            ],
            a: "een trosje eenslachtige bloemen (bv. bij de wilg)",
            w: "Een katje is een trosje eenslachtige bloemen: meeldraadkatjes of stamperkatjes.",
            fout: {
              "een jonge kat": "Grappig, maar nee — het is een plantenwoord.",
              "een soort vrucht met haakjes": "Dat is bv. een klis (zaadverspreiding).",
              "het vrouwelijke deel van de bloem": "Dat is de stamper."
            }
          },
          {
            t: "mc",
            q: "Een plant heeft zowel mannelijke als vrouwelijke bloemen. Wat is deze plant?",
            o: ["eenhuizig", "tweehuizig", "tweeslachtig", "eenslachtig"],
            a: "eenhuizig",
            w: "Eén plant ('huis') met beide soorten bloemen = eenhuizig.",
            fout: {
              "tweehuizig": "Dan zou de plant maar één van de twee hebben.",
              "tweeslachtig": "Dat woord gebruik je voor één bloem, niet voor de hele plant.",
              "eenslachtig": "Dat woord gebruik je ook voor één bloem, niet voor de plant."
            }
          },
          {
            t: "mc",
            q: "Een wilg is tweehuizig: een wilg heeft óf alleen meeldraadkatjes óf alleen stamperkatjes. Waarom kan bij één wilg geen zelfbestuiving optreden?",
            o: [
              "die wilg heeft maar één soort bloemen, dus er is geen stamper én meeldraad samen",
              "wilgen maken geen stuifmeel",
              "wilgen bloeien nooit",
              "de wind waait te hard"
            ],
            a: "die wilg heeft maar één soort bloemen, dus er is geen stamper én meeldraad samen",
            w: "Voor zelfbestuiving heb je op dezelfde plant zowel stuifmeel (meeldraad) als een stempel (stamper) nodig. Een tweehuizige wilg heeft maar één van de twee.",
            fout: {
              "wilgen maken geen stuifmeel": "Mannelijke wilgen maken juist stuifmeel.",
              "wilgen bloeien nooit": "Wilgen bloeien wél (de katjes).",
              "de wind waait te hard": "Dat heeft er niets mee te maken."
            }
          },
          {
            t: "gap",
            q: "Een plant met óf alleen mannelijke óf alleen vrouwelijke bloemen heet ___.",
            a: "tweehuizig",
            w: "Tweehuizig: de mannelijke en vrouwelijke bloemen staan op aparte planten."
          }
        ]
      },
      {
        n: 3, naam: "Goud",
        uitleg: [
          "Ook dieren hebben voortplantingsorganen. Vogels hebben geen uitwendig orgaan maar een <b>cloaca</b>: één opening waarin darm, urinewegen en voortplantingsorganen samenkomen. Bij de paring drukken mannetje en vrouwtje de cloaca's tegen elkaar.",
          "Slangen en hagedissen (reptielen) hebben twee <b>hemipenissen</b>. Haaien en roggen gebruiken <b>klaspers</b>. Bij ongeveer 3% van de vogels (zoals een bepaalde eend) heeft het mannetje wél een uitwendig orgaan: een <b>pseudopenis</b>."
        ],
        regel: "Vogels: cloaca (één opening). Reptielen: twee hemipenissen. Haaien/roggen: klaspers. Sommige eenden: pseudopenis.",
        vragen: [
          {
            t: "mc",
            q: "Wat is een cloaca?",
            o: [
              "één opening waarin darm, urinewegen en voortplantingsorganen samenkomen",
              "het mannelijke orgaan van een hagedis",
              "een soort katje bij vogels",
              "de eicel van een vogel"
            ],
            a: "één opening waarin darm, urinewegen en voortplantingsorganen samenkomen",
            w: "Vogels hebben een cloaca; bij de paring drukken mannetje en vrouwtje hun cloaca's tegen elkaar.",
            fout: {
              "het mannelijke orgaan van een hagedis": "Dat is de hemipenis.",
              "een soort katje bij vogels": "Een katje is een plantending (trosje bloemen).",
              "de eicel van een vogel": "Een cloaca is een opening, geen geslachtscel."
            }
          },
          {
            t: "mc",
            q: "Welke dieren hebben twee hemipenissen?",
            o: ["slangen en hagedissen", "vogels", "haaien", "eenden"],
            a: "slangen en hagedissen",
            w: "Reptielen zoals slangen en hagedissen hebben twee hemipenissen, één aan elke kant van de staart.",
            fout: {
              "vogels": "Vogels hebben meestal een cloaca (en soms een pseudopenis).",
              "haaien": "Haaien gebruiken klaspers.",
              "eenden": "Bij sommige eenden zit een pseudopenis, geen hemipenis."
            }
          },
          {
            t: "gap",
            q: "Bij ongeveer 3% van de vogels (zoals een bepaalde eend) heeft het mannetje een uitwendig geslachtsorgaan: een ___.",
            a: "pseudopenis",
            w: "Een pseudopenis is het uitwendige orgaan bij die paar vogelsoorten."
          },
          {
            t: "open",
            q: "Leg uit waarom bij een tweehuizige plantensoort nooit zelfbestuiving kan optreden.",
            punten: 2,
            modelantwoord: "Bij een tweehuizige soort heeft elke plant óf alleen mannelijke bloemen (meeldraden) óf alleen vrouwelijke bloemen (stamper). Voor zelfbestuiving moet het stuifmeel op een stempel van dezelfde plant komen, maar een mannelijke plant heeft geen stempel en een vrouwelijke plant geen stuifmeel. Daarom kan het stuifmeel alleen naar een ándere plant: dat is altijd kruisbestuiving.",
            sleutelwoorden: [
              { moet: ["alleen mannelijk", "alleen vrouwelijk", "één soort", "aparte"], syn: ["man of vrouw", "gescheiden"] },
              { moet: ["geen stempel", "geen meeldraad", "geen stuifmeel", "andere plant", "kruis"], syn: ["niet allebei"] }
            ],
            rubric: ["Je noemt dat elke plant maar één soort bloem heeft (man óf vrouw)", "Je legt uit dat stuifmeel dus altijd naar een andere plant moet (kruisbestuiving)"]
          }
        ]
      }
    ]
  }
];

/* ============================ BEGRIPPEN (flashcards, [omschrijving, begrip]) ============================ */
window.BEGRIPPEN = {
  "begrip-bloem": {
    emoji: "🌸",
    titel: "Begrippen 6.1 — De bloem",
    paragraaf: "6.1",
    items: [
      ["Het groene buitenste deel van de bloem (van kelkbladeren); beschermt de knop", "bloemkelk"],
      ["Het vaak gekleurde deel van de bloem (van kroonbladeren); lokt insecten", "bloemkroon"],
      ["De groene blaadjes die de bloem in de knop beschermen", "kelkbladeren"],
      ["De vaak grote, gekleurde blaadjes die insecten lokken", "kroonbladeren"],
      ["Het mannelijke voortplantingsorgaan van de plant", "meeldraad"],
      ["Het draadje (steeltje) dat de helmknop draagt", "helmdraad"],
      ["Het knopje bovenop de meeldraad, waarin stuifmeel ontstaat", "helmknop"],
      ["De mannelijke geslachtscellen van de plant (= pollen)", "stuifmeel"],
      ["Het vrouwelijke voortplantingsorgaan van de plant", "stamper"],
      ["Het bovenste, plakkerige deel van de stamper, waar stuifmeel op landt", "stempel"],
      ["Het steeltje van de stamper, tussen stempel en vruchtbeginsel", "stijl"],
      ["Het dikke onderste deel van de stamper, met de zaadbeginsels erin", "vruchtbeginsel"],
      ["Het deel in het vruchtbeginsel met daarin één eicel", "zaadbeginsel"],
      ["De vrouwelijke geslachtscel van de plant", "eicel"]
    ]
  },
  "begrip-bestuiving": {
    emoji: "🐝",
    titel: "Begrippen 6.2 — Bestuiving",
    paragraaf: "6.2",
    items: [
      ["Het overbrengen van stuifmeel van een meeldraad op een stempel (zelfde soort)", "bestuiving"],
      ["Het zoete sap waarmee bloemen insecten lokken", "nectar"],
      ["Bestuiving binnen dezelfde plant", "zelfbestuiving"],
      ["Bestuiving naar een bloem van een andere plant (zelfde soort)", "kruisbestuiving"],
      ["Bloem die door insecten wordt bestoven (mooi, geurig, met nectar)", "insectenbloem"],
      ["Bloem die door de wind wordt bestoven (saai, veel licht stuifmeel)", "windbloem"]
    ]
  },
  "begrip-bevruchting": {
    emoji: "🌱",
    titel: "Begrippen 6.3 — Bevruchting",
    paragraaf: "6.3",
    items: [
      ["De buis die uit een stuifmeelkorrel groeit, door de stijl naar de eicel", "stuifmeelbuis"],
      ["Het versmelten van de kern van een mannelijke en een vrouwelijke geslachtscel", "bevruchting"],
      ["Wat door celdelingen uit de bevruchte eicel ontstaat (zit in het zaad)", "kiem"],
      ["Het uitgroeien van de kiem tot een nieuw plantje", "kieming"],
      ["Het jonge plantje dat bij kieming uit het zaad groeit", "kiemplantje"]
    ]
  },
  "begrip-vrucht": {
    emoji: "🍎",
    titel: "Begrippen 6.4 — Vruchten en zaden",
    paragraaf: "6.4",
    items: [
      ["Het uitgegroeide vruchtbeginsel, met de zaden erin", "vrucht"],
      ["Het uitgegroeide (bevruchte) zaadbeginsel, met een kiem erin", "zaad"],
      ["Het zachte, vaak eetbare deel van de vrucht", "vruchtvlees"],
      ["Het deel van de bloem waaruit bij een appel het vruchtvlees ontstaat", "bloembodem"],
      ["De vrucht van een bonenplant", "peulvrucht"],
      ["Een vrucht waarbij ook andere delen dan het vruchtbeginsel meedoen (bv. aardbei)", "schijnvrucht"],
      ["Het voedsel in het zaad waarmee het kiemplantje kan groeien", "reservevoedsel"]
    ]
  },
  "begrip-verspreiding": {
    emoji: "🍃",
    titel: "Begrippen 6.7 — Zaadverspreiding",
    paragraaf: "6.7",
    items: [
      ["Het over een gebied verspreid raken van zaden, zodat de plantjes niet op één plek staan", "zaadverspreiding"],
      ["Een plant waarbij de rijpe vrucht openspringt en de zaden wegslingert", "ooievaarsbek"],
      ["Het pluisje waarmee een paardenbloemzaadje door de wind zweeft", "pluis"],
      ["Een plant met haakvruchten die in de vacht van dieren blijven hangen", "klis"],
      ["Boom met rode bessen die door vogels worden gegeten en zo verspreid", "lijsterbes"]
    ]
  },
  "begrip-organen": {
    emoji: "🌳",
    titel: "Begrippen 6.8 — Mannelijke en vrouwelijke organen",
    paragraaf: "6.8",
    items: [
      ["Bloem met zowel meeldraden als een stamper", "tweeslachtig"],
      ["Bloem met alleen meeldraden óf alleen een stamper", "eenslachtig"],
      ["Een trosje eenslachtige bloemen (bv. bij de wilg)", "katje"],
      ["Plant met zowel mannelijke als vrouwelijke (of tweeslachtige) bloemen", "eenhuizig"],
      ["Plant met óf alleen mannelijke óf alleen vrouwelijke bloemen", "tweehuizig"],
      ["Eén opening bij vogels voor darm, urine en voortplanting", "cloaca"],
      ["Elk van de twee mannelijke organen bij slangen en hagedissen", "hemipenis"]
    ]
  }
};

/* ============================ AANMOEDIGING (door de engine gebruikt bij feedback) ============================ */
window.AANMOEDIGING = {
  goed: ["Goed zo! 🌟", "Yes! 🐝", "Top, Storm!", "Helemaal goed! ⭐", "Lekker bezig!", "Knap gedaan! 🌸"],
  bijna: ["Bijna! Kijk even mee.", "Net niet — geen probleem!", "Oei, bijna goed.", "Dat is een lastige, hè?"],
  levelup: ["Wow, niveau omhoog! 🏅", "Je snapt het — moeilijker mag nu!", "Knap! Op naar het volgende niveau! 🚀"],
  leveldown: ["Geeft niks — we oefenen dit rustig nog een keer. 💛", "Even een stapje terug, dan zit het straks vast.", "Geen stress, we pakken het samen opnieuw."],
  stapelklaar: ["Stapel gehaald! 🎉 Op naar de volgende.", "Alle begrippen gekend — top!", "Yes, stapeltje af! ⭐"]
};

/* ============================ PODCASTS (NotebookLM-afleveringen, ~110 min totaal) ============================ */
window.PODCASTS = [
  { id: "ep1", emoji: "🌸", titel: "1 · De bouw en functie van bloemen", sub: "Twee hosts leggen de bloembouw uit · ~13 min", file: "podcast-1-bloemen.m4a", tegelSub: "het hele hoofdstuk in 5 afleveringen" },
  { id: "ep2", emoji: "🐝", titel: "2 · Bestuiving (en dronken vleermuizen)", sub: "Insecten, wind en bijzondere bestuivers · ~20 min", file: "podcast-2-bestuiving.m4a" },
  { id: "ep3", emoji: "🍎", titel: "3 · Van bloem naar vrucht en zaad", sub: "Bevruchting, vruchten en zaden · ~26 min", file: "podcast-3-vrucht-en-zaad.m4a" },
  { id: "ep4", emoji: "🍃", titel: "4 · Van vliegende zaden tot…", sub: "Hoe zaden zich verspreiden · ~28 min", file: "podcast-4-zaadverspreiding.m4a" },
  { id: "ep5", emoji: "⭐", titel: "5 · Samenvatting", sub: "Alles nog eens kort op een rij · ~25 min, fijn vlak voor de toets", file: "podcast-5-samenvatting.m4a" }
];
