// Vragenbank voor Verlichting
// Vragen over verandering en continuïteit - vergelijkend

const questionBank = {
    topic: "Verlichting",
    
    makkelijk: [
        {
            id: "vl_m1",
            situation: "Vóór de Verlichting dacht men: koningen krijgen hun macht van God (droit divin).",
            event: "Verlichtingsdenkers zeiden: macht komt van het volk, via een sociaal contract.",
            correct: "verandering",
            explanation: "VERANDERING: Het idee over de bron van macht veranderde fundamenteel. Van 'God geeft macht' naar 'het volk geeft macht'. Dit is volkssovereiniteit.",
            difficulty: "makkelijk"
        },
        {
            id: "vl_m2",
            situation: "Vóór de Verlichting hadden vrouwen geen politieke rechten of toegang tot universiteiten.",
            event: "Tijdens de Verlichting bleven vrouwen uitgesloten van politiek en hoger onderwijs.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: De positie van vrouwen veranderde niet. Zelfs verlichtingsdenkers vonden vrouwen 'te emotioneel' voor politiek. Genderongelijkheid bleef.",
            difficulty: "makkelijk"
        },
        {
            id: "vl_m3",
            situation: "Vóór de Verlichting accepteerde men ideeën omdat autoriteiten (koning, kerk) ze goedkeurden.",
            event: "Verlichtingsdenkers zeiden: gebruik je eigen verstand, durf zelf na te denken!",
            correct: "verandering",
            explanation: "VERANDERING: De houding tegenover denken veranderde. Van 'geloof wat autoriteiten zeggen' naar 'denk zelf kritisch na'. 'Sapere aude!' - Durf te denken!",
            difficulty: "makkelijk"
        },
        {
            id: "vl_m4",
            situation: "Vóór de Verlichting kon alleen de elite lezen en had toegang tot boeken.",
            event: "Tijdens de Verlichting bleef het meeste volk analfabeet en kende de nieuwe ideeën niet.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: De Verlichting was een elite-fenomeen. Gewone mensen konden niet lezen en hadden geen toegang tot filosofische boeken of salons.",
            difficulty: "makkelijk"
        },
        {
            id: "vl_m5",
            situation: "Vóór de Verlichting had één persoon (de koning) alle macht: wetgevend, uitvoerend én rechtsprekend.",
            event: "Montesquieu bedacht de trias politica: verdeel deze drie machten om tirannie te voorkomen.",
            correct: "verandering",
            explanation: "VERANDERING: Het idee over machtsverdeling ontstond. Van 'alle macht bij één persoon' naar 'machten moeten gescheiden zijn'. Dit is de basis van moderne democratie.",
            difficulty: "makkelijk"
        },
        {
            id: "vl_m6",
            situation: "Vóór de Verlichting bestond slavernij in de koloniën.",
            event: "Tijdens de Verlichting bleef slavernij gewoon bestaan, ondanks mooie woorden over vrijheid.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: Slavernij verdween niet. Verlichtingsdenkers schreven over vrijheid maar accepteerden vaak slavernij. Grote hypocrisie tussen ideaal en praktijk.",
            difficulty: "makkelijk"
        }
    ],
    
    gemiddeld: [
        {
            id: "vl_g1",
            situation: "Traditioneel had je als onderdaan geen rechten - de koning bepaalde alles.",
            event: "Locke zei: ieder mens heeft van nature rechten op leven, vrijheid en eigendom.",
            correct: "verandering",
            explanation: "VERANDERING: Het idee van mensenrechten ontstond. Rechten waren niet gegeven door een koning maar aangeboren. Dit was revolutionair nieuw.",
            difficulty: "gemiddeld"
        },
        {
            id: "vl_g2",
            situation: "Vóór de Verlichting regeerden koningen overal in Europa met absolute macht.",
            event: "Tijdens de Verlichting bleven de meeste koningen gewoon aan de macht.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: Politieke systemen veranderden niet direct. Koningen bleven regeren. Pas de Amerikaanse (1776) en Franse (1789) Revolutie brachten echte politieke verandering.",
            difficulty: "gemiddeld"
        },
        {
            id: "vl_g3",
            situation: "Traditioneel mocht je niet in opstand komen tegen je koning - dat was zonde.",
            event: "Locke zei: als de overheid je rechten schendt, mag je in opstand komen!",
            correct: "verandering",
            explanation: "VERANDERING: Het idee over opstand veranderde. Van 'nooit toegestaan' naar 'gerechtvaardigd als je rechten geschonden worden'. Dit legitimeerde revoluties.",
            difficulty: "gemiddeld"
        },
        {
            id: "vl_g4",
            situation: "De Encyclopédie wilde alle kennis verzamelen en verspreiden onder iedereen.",
            event: "Maar het werk was zeer duur en alleen rijke mensen konden het kopen.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: Ondanks democratische idealen bleef kennis exclusief. Economische barrières zorgden dat alleen de elite toegang had. Ideaal ≠ realiteit.",
            difficulty: "gemiddeld"
        },
        {
            id: "vl_g5",
            situation: "Vóór de Verlichting moest iedereen hetzelfde geloof aanhangen - afwijking werd gestraft.",
            event: "Verlichtingsdenkers pleitten voor religieuze tolerantie: accepteer verschillende geloven.",
            correct: "verandering",
            explanation: "VERANDERING: De houding tegenover religieuze diversiteit veranderde. Van 'één geloof verplicht' naar 'tolerantie is een deugd'. Dit was nieuw na eeuwen religieuze oorlog.",
            difficulty: "gemiddeld"
        },
        {
            id: "vl_g6",
            situation: "Rousseau schreef over vrijheid en gelijkheid voor alle burgers.",
            event: "Zijn ideeën inspireerden de Franse Revolutie en de Verklaring van de Rechten van de Mens.",
            correct: "verandering",
            explanation: "VERANDERING: Verlichtingsideeën leidden tot politieke actie. Van theorie naar praktijk, van boek naar revolutie. De ideeën veranderden de wereld.",
            difficulty: "gemiddeld"
        },
        {
            id: "vl_g7",
            situation: "Verlichtingsdenkers geloofden in vooruitgang door rede en wetenschap.",
            event: "De Katholieke Kerk bleef veel verlichte boeken verbieden en op de Index zetten.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: De macht van de Kerk om te censureren bleef bestaan. Religieus conservatisme verdween niet. De strijd tussen verlichting en traditie duurde lang.",
            difficulty: "gemiddeld"
        },
        {
            id: "vl_g8",
            situation: "De Amerikaanse Onafhankelijkheidsverklaring (1776) stelde: 'Alle mensen zijn gelijk geschapen'.",
            event: "Maar slavernij bleef legaal in de VS tot 1865 en zwarte mensen hadden geen rechten.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: Ondanks verlichte principes bleef raciale ongelijkheid bestaan. 'Alle mensen' betekende in praktijk 'alle witte mannen'. Slavernij ging gewoon door.",
            difficulty: "gemiddeld"
        }
    ],
    
    moeilijk: [
        {
            id: "vl_d1",
            situation: "Verlichtingsdenkers schreven dat alle mensen gelijke rechten hebben.",
            event: "Dezelfde denkers verdedigden vaak kolonialisme als 'beschaving brengen' aan 'primitieve' volkeren.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: Europees superioriteitsdenken bleef. 'Universele rechten' golden niet voor gekoloniseerde volkeren. Racisme en kolonialisme bleven gelegitimeerd.",
            difficulty: "moeilijk"
        },
        {
            id: "vl_d2",
            situation: "Traditioneel was je positie bepaald door je geboorte - adel, burger of boer.",
            event: "Verlichtingsdenkers introduceerden het idee dat burgerschap gebaseerd moet zijn op rede, niet geboorte.",
            correct: "verandering",
            explanation: "VERANDERING: Het concept burgerschap veranderde. Van 'je stand bepaalt je rechten' naar 'alle rationele mensen zijn burgers'. Dit legde de basis voor moderne gelijkheid.",
            difficulty: "moeilijk"
        },
        {
            id: "vl_d3",
            situation: "Rousseau's idee van de 'algemene wil' betekende dat het gemeenschapsbelang boven individu staat.",
            event: "Dit idee werd later gebruikt om de jakobijnse Terreur te rechtvaardigen: 'je moet vrij gedwongen worden'.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: Onderdrukking bleef mogelijk, nu met nieuwe legitimatie. Verlichte taal kon tirannie rechtvaardigen. Machtsmisbruik veranderde van vorm, niet van wezen.",
            difficulty: "moeilijk"
        },
        {
            id: "vl_d4",
            situation: "Traditioneel was de staat iets dat boven de mensen stond - gegeven door God of traditie.",
            event: "Het sociaal contract maakte de staat tot een afspraak tussen mensen, die herzien kan worden.",
            correct: "verandering",
            explanation: "VERANDERING: De status van de staat veranderde. Van 'natuurlijk gegeven' naar 'mensenwerk'. Dit maakte constitutionele verandering en revolutie legitiem.",
            difficulty: "moeilijk"
        },
        {
            id: "vl_d5",
            situation: "Verlichtingsdenkers benadrukten universele menselijke rede als basis voor gelijkheid.",
            event: "Maar zij vonden vrouwen 'te emotioneel' en dus ongeschikt voor politieke participatie.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: Genderongelijkheid bleef ondanks gelijkheidsprincipes. Zelfs 'rationele' verlichte denkers reproduceerden patriarchale vooroordelen. Universalisme gold selectief.",
            difficulty: "moeilijk"
        },
        {
            id: "vl_d6",
            situation: "Traditioneel was alle macht geconcentreerd bij de koning.",
            event: "Montesquieu's trias politica creëerde het idee dat macht verdeeld moet worden om vrijheid te garanderen.",
            correct: "verandering",
            explanation: "VERANDERING: Een nieuw staatsmodel ontstond. Scheiding der machten als waarborg tegen tirannie. Dit werd de basis van alle moderne democratieën.",
            difficulty: "moeilijk"
        },
        {
            id: "vl_d7",
            situation: "Verlichtingsdenkers schreven over kosmopolitisme: we zijn allemaal wereldburgers.",
            event: "Tegelijkertijd rechtvaardigden zij Europees kolonialisme als een 'beschavingsmissie'.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: Europees superioriteitsdenken bleef dominant. 'Universeel' betekende 'Europees'. Imperialisme kreeg nieuwe, verlichte rechtvaardiging.",
            difficulty: "moeilijk"
        },
        {
            id: "vl_d8",
            situation: "Traditioneel betekende 'volwassen zijn' gehoorzamen aan autoriteiten boven je.",
            event: "Verlichtingsdenkers zeiden: volwassenheid betekent zelf denken, niet blindelings volgen.",
            correct: "verandering",
            explanation: "VERANDERING: Het ideaal van autonomie (zelf-bepaling) ontstond. Van gehoorzaamheid naar kritisch denken als deugd. Een fundamentele ethische verschuiving.",
            difficulty: "moeilijk"
        },
        {
            id: "vl_d9",
            situation: "Verlichtingsidealen werden verspreid via boeken, pamfletten en salons.",
            event: "De productie van papier en boeken was afhankelijk van koloniale handel en soms slavenarbeid.",
            correct: "continuiteit",
            explanation: "CONTINUÏTEIT: De materiële basis van de Verlichting was niet 'verlicht'. Koloniale uitbuiting maakte de verspreiding van vrijheidsideeën mogelijk. Fundamentele contradictie.",
            difficulty: "moeilijk"
        },
        {
            id: "vl_d10",
            situation: "Vóór de Verlichting vonden politieke discussies plaats aan hoven, tussen koningen en adviseurs.",
            event: "De Verlichting creëerde een 'publieke sfeer': cafés, salons en tijdschriften waar burgers debatteerden.",
            correct: "verandering",
            explanation: "VERANDERING: Een nieuwe ruimte voor politiek debat ontstond. Burgers konden nu meepraten over politiek. Dit was de geboorte van de publieke opinie als politieke kracht.",
            difficulty: "moeilijk"
        }
    ]
};

window.questionBank = questionBank;