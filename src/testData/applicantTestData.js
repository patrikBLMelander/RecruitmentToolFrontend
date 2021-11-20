const applicantTestData = [
    { id: 'applicant-1', 
    name: 'Dog', 
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'applicant-2', 
    name: 'Cat', 
    presentation: 'Kort presentation av personen',
    experience: [{title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'applicant-3', 
    name: 'Zebra', 
    presentation: 'Kort presentation av personen',
    experience: [{title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'applicant-4', 
    name: 'Lion', 
    presentation: 'Kort presentation av personen',
    experience: [{title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
]

export default applicantTestData;