const candidateTestData = [
    { id: 'candidate-1', 
    nickName: 'Dog',
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail1@gmail.com",
    password: "1234",
    phone: "0704011119",
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{id:'experience-1',title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {id: 'experience-2', title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'candidate-2', 
    nickName: 'Cat', 
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail2@gmail.com",
    password: "1234",
    phone: "0704011119",
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{id:'experience-1',title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {id: 'experience-2', title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'candidate-3', 
    nickName: 'Zebra', 
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail3@gmail.com",
    password: "1234",
    phone: "0704011119",
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{id:'experience-1',title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {id: 'experience-2', title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'candidate-4', 
    nickName: 'Lion', 
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail4@gmail.com",
    password: "1234",
    phone: "0704011119",
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{id:'experience-1',title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {id: 'experience-2', title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'candidate-5', 
    nickName: 'Snake', 
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail5@gmail.com",
    password: "1234",
    phone: "0704011119",
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{id:'experience-1',title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {id: 'experience-2', title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'candidate-6', 
    nickName: 'Ape', 
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail6@gmail.com",
    password: "1234",
    phone: "0704011119",
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{id:'experience-1',title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {id: 'experience-2', title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'candidate-7', 
    nickName: 'Fish', 
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail7@gmail.com",
    password: "1234",
    phone: "0704011119",
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{id:'experience-1',title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {id: 'experience-2', title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'candidate-8', 
    nickName: 'Bear', 
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail8@gmail.com",
    password: "1234",
    phone: "0704011119",
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{id:'experience-1',title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {id: 'experience-2', title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
    { id: 'candidate-9', 
    nickName: 'Lion', 
    firstName: "Patrik",
    lastName: "Melander",
    email: "testmail9@gmail.com",
    password: "1234",
    phone: "0704011119",
    presentation: 'Studerar Java - Nackademin, September 2020 – maj 2022 (pågående)Under utbildningen på Nackademin har vi än så länge läst kurserna ”Java-Utveckling”, ”Objektorienterad utveckling i Java”, ”Objektorienterad analys och design”, ”Funktionell programmering i Java och Kotlin”, ”Databasteknik och Java”. Samtliga färdigställda med högsta betyg. Kurser som jag även kommer ha läst innan min LIA är ”Klientutveckling”, ”Java backend 1”, ”Applikation Lifecycle Management” och ”Java backend 2”.',
    experience: [{id:'experience-1',title: 'Butikschef – Stadium', period:'Aug 2017 – Mars 2020', description: 'Som butikschef på Stadium hade jag huvudansvaret för försäljningen och personalen i butiken. I personalansvaret ingick bland annat schemaläggning, intro, utbildning, utvecklingssamtal samt individuella handlingsplaner. Jag jobbade kontinuerligt mot uppsatta försäljningsmål och butikens budget. Jag arbetade även i den dagliga driften tillsammans med mitt team där jag alltid såg till att som ledare vara en förebild på golvet. Jag värdesätter mycket energi, engagemang samt hög service hos mina medarbetare och jag är övertygad om att personalen är den avgörande anledningen till att kunden blir nöjd.', },
    {id: 'experience-2', title: 'HR- ansvarig, Department manager', period:'Jan 2016 – aug 2017', description:'I januari 2016 tog jag över HR-ansvaret för hela Decathlon Sverige. En del av mitt HR-uppdrag var att hjälpa butikschefer och avdelningschefer att jobba mer effektiv med schemaläggning för att nå en så bra fpat (försäljning per arbetad timme) som möjligt. Jag gjorde analyser på vecka, månads och säsongsbasis för att säkerställa att de planerade rätt timmar på rätt tider. Jag coachade dem i schemaläggning och såg till att de alltid följde kollektivavtal och arbetsrätt. I maj 2016 öppnade Decathlon sin tredje butik i Sverige där jag ansvarade för hela rekryteringsprocessen av både avdelningschefer och säljare. Jag skötte den löneadministration som inte outsourcades till Visma. Jag ansvarade för utbildningar i ledarskap, sälj och rekrytering. Jag hade utöver detta det övergripande ansvaret för Decathlon Sveriges produktutbud gällande alpinskidåkning, både för utrustning och kläder.'}
    ]},
]

export default candidateTestData;