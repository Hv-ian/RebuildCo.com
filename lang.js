let button = document.querySelectorAll('.lang_btn') // all buttons
const navT1 = document.getElementById('navT1')
const navT2 = document.getElementById('navT2')
const navT3 = document.getElementById('navT3')
const navT4 = document.getElementById('navT4')

const s1Text1 = document.getElementById('s1T1')
const s1Text2 = document.getElementById('s1T2')

const s2T1 = document.getElementById('s2T1')
const s2T2 = document.getElementById('s2T2')
const s2T3 = document.getElementById('s2T3')
const s2T4 = document.getElementById('s2T4')
const s2T5 = document.getElementById('s2T5')
const s2T6 = document.getElementById('s2T6')

const s3T1 = document.getElementById('s3T1')
const s3T2 = document.getElementById('s3T2')
const s3T3 = document.getElementById('s3T3')
const s3T4 = document.getElementById('s3T4')
const s3T5 = document.getElementById('s3T5')
const s3T6 = document.getElementById('s3T6')

const s4Th = document.getElementById('s4Th')
const s4T1 = document.getElementById('s4T1')
const s4T2 = document.getElementById('s4T2')
const s4T3 = document.getElementById('s4T3')
const s4T4 = document.getElementById('s4T4')
const s4T5 = document.getElementById('s4T5')
const s4T6 = document.getElementById('s4T6')
const s4T7 = document.getElementById('s4T7')
const s4T8 = document.getElementById('s4T8')
const s4T9 = document.getElementById('s4T9')
const s4T10 = document.getElementById('s4T10')
const s4T11 = document.getElementById('s4T11')
const s4T12 = document.getElementById('s4T12')

const s4T13 = document.getElementById('s4T13')
const s4T14 = document.getElementById('s4T14')
const s4T15 = document.getElementById('s4T15')
const s4T16 = document.getElementById('s4T16')
const s4T17 = document.getElementById('s4T17')
const s4T18 = document.getElementById('s4T18')
const s4T19 = document.getElementById('s4T19')
const s4T20 = document.getElementById('s4T20')
const s4T21 = document.getElementById('s4T21')
const s4T22 = document.getElementById('s4T22')
const s4T23 = document.getElementById('s4T23')
const s4T24 = document.getElementById('s4T24')
const s4T25 = document.getElementById('s4T25')
const s4T26 = document.getElementById('s4T26')
const s4T27 = document.getElementById('s4T27')
const s4T28 = document.getElementById('s4T28')
const s4T29 = document.getElementById('s4T29')
const s4T30 = document.getElementById('s4T30')

const s5T1 = document.getElementById('s5T1')

const s7T1 = document.getElementById('s7T1')
const s7T2 = document.getElementById('s7T2')

const s8T1 = document.getElementById('s8T1')
const s8T2 = document.getElementById('s8T2')
const s8T3 = document.getElementById('s8T3')
const s8T4 = document.getElementById('s8T4')
const s8T5 = document.getElementById('s8T5')
const s8T6 = document.getElementById('s8T6')
const s8T7 = document.getElementById('s8T7')
const s8T8 = document.getElementById('s8T8')
const s8T9 = document.getElementById('s8T9')
const s8T10 = document.getElementById('s8T10')
const s8T11 = document.getElementById('s8T11')
const s8T12 = document.getElementById('s8T12')
const s8T13 = document.getElementById('s8T13')
const s8Ta = document.getElementById('s8Ta')

const s9T1 = document.getElementById('s9T1')
const s9T2 = document.getElementById('s9T2')
const s9T3 = document.getElementById('s9T3')

const s10T1 = document.getElementById('s10T1')
const s10T2 = document.getElementById('s10T2')
const s10T3 = document.getElementById('s10T3')
const s10T4 = document.getElementById('s10T4')
const s10T5 = document.getElementById('s10T5')
const s10T6 = document.getElementById('s10T6')
const s10Ta = document.getElementById('s10Ta')
const s10Tb = document.getElementById('s10Tb')
const s10Tc = document.getElementById('s10Tc')

const s11T1 = document.getElementById('s11T1')
const s11T2 = document.getElementById('s11T2')

const s12T1 = document.getElementById('s12T1')
const s12T2 = document.getElementById('s12T2')
const s12T3 = document.getElementById('s12T3')
const s12T4 = document.getElementById('s12T4')
const s12T5 = document.getElementById('s12T5')
const s12T6 = document.getElementById('s12T6')
const s12T7 = document.getElementById('s12T7')
const s12T8 = document.getElementById('s12T8')
const s12T9 = document.getElementById('s12T9')
const s10Td = document.getElementById('s10Td')



button.forEach(el => {
  el.addEventListener('click', async () => {
    const attr = el.getAttribute('language')
    navT1.innerHTML = data[attr].navt1;
    navT2.innerHTML = data[attr].navt2;
    navT3.innerHTML = data[attr].navt3;
    navT4.innerHTML = data[attr].navt4;

    s1Text1.innerHTML = data[attr].s1T1
    s1Text2.innerHTML = data[attr].s1T2

    s2T1.innerHTML = data[attr].s2T1
    s2T2.innerHTML = data[attr].s2T2
    s2T3.innerHTML = data[attr].s2T3
    s2T4.innerHTML = data[attr].s2T4
    s2T5.innerHTML = data[attr].s2T5
    s2T6.innerHTML = data[attr].s2T6

    s3T1.innerHTML = data[attr].s3T1
    s3T2.innerHTML = data[attr].s3T2
    s3T3.innerHTML = data[attr].s3T3
    s3T4.innerHTML = data[attr].s3T4
    s3T5.innerHTML = data[attr].s3T5
    s3T6.innerHTML = data[attr].s3T6

    s4Th.innerHTML = data[attr].s4Th
    s4T1.innerHTML = data[attr].s4T1
    s4T2.innerHTML = data[attr].s4T2
    s4T3.innerHTML = data[attr].s4T3
    s4T4.innerHTML = data[attr].s4T4
    s4T5.innerHTML = data[attr].s4T5
    s4T6.innerHTML = data[attr].s4T6
    s4T7.innerHTML = data[attr].s4T7
    s4T8.innerHTML = data[attr].s4T8
    s4T9.innerHTML = data[attr].s4T9
    s4T10.innerHTML = data[attr].s4T10
    s4T11.innerHTML = data[attr].s4T11
    s4T12.innerHTML = data[attr].s4T12

    s4T13.innerHTML = data[attr].s4T13
    s4T14.innerHTML = data[attr].s4T14
    s4T15.innerHTML = data[attr].s4T15
    s4T16.innerHTML = data[attr].s4T16
    s4T17.innerHTML = data[attr].s4T17
    s4T18.innerHTML = data[attr].s4T18
    s4T19.innerHTML = data[attr].s4T19
    s4T20.innerHTML = data[attr].s4T20
    s4T21.innerHTML = data[attr].s4T21
    s4T22.innerHTML = data[attr].s4T22
    s4T23.innerHTML = data[attr].s4T23
    s4T24.innerHTML = data[attr].s4T24
    s4T25.innerHTML = data[attr].s4T25
    s4T26.innerHTML = data[attr].s4T26
    s4T27.innerHTML = data[attr].s4T27
    s4T28.innerHTML = data[attr].s4T28
    s4T29.innerHTML = data[attr].s4T29
    s4T30.innerHTML = data[attr].s4T30

    s5T1.innerHTML = data[attr].s5T1

    s7T1.innerHTML = data[attr].s7T1
    s7T2.innerHTML = data[attr].s7T2

    s8T1.innerHTML = data[attr].s8T1
    s8T2.innerHTML = data[attr].s8T2
    s8T3.innerHTML = data[attr].s8T3
    s8T4.innerHTML = data[attr].s8T4
    s8T5.innerHTML = data[attr].s8T5
    s8T6.innerHTML = data[attr].s8T6
    s8T7.innerHTML = data[attr].s8T7
    s8T8.innerHTML = data[attr].s8T8
    s8T9.innerHTML = data[attr].s8T9
    s8T10.innerHTML = data[attr].s8T10
    s8T11.innerHTML = data[attr].s8T11
    s8T12.innerHTML = data[attr].s8T12
    s8T13.innerHTML = data[attr].s8T13
    s8Ta.innerHTML = data[attr].s8Ta

    s9T1.innerHTML = data[attr].s9T1
    s9T2.innerHTML = data[attr].s9T2
    s9T3.innerHTML = data[attr].s9T3

    s10T1.innerHTML = data[attr].s10T1
    s10T2.innerHTML = data[attr].s10T2
    s10T3.innerHTML = data[attr].s10T3
    s10T4.innerHTML = data[attr].s10T4
    s10T5.innerHTML = data[attr].s10T5
    s10T6.innerHTML = data[attr].s10T6
    s10Ta.innerHTML = data[attr].s10Ta
    s10Tb.innerHTML = data[attr].s10Tb
    s10Tc.innerHTML = data[attr].s10Tc
    s10Td.innerHTML = data[attr].s10Td
    
    s11T1.innerHTML = data[attr].s11T1
    s11T2.innerHTML = data[attr].s11T2

    s12T1.innerHTML = data[attr].s12T1
    s12T2.innerHTML = data[attr].s12T2
    s12T3.innerHTML = data[attr].s12T3
    s12T4.innerHTML = data[attr].s12T4
    s12T5.innerHTML = data[attr].s12T5
    s12T6.innerHTML = data[attr].s12T6
    s12T7.innerHTML = data[attr].s12T7
    s12T8.innerHTML = data[attr].s12T8
    s12T9.innerHTML = data[attr].s12T9

  });
});

data = {
  dutch: {
    navt1: "Onze Diensten |",
    navt2: "Onze Projecten |",
    navt3: "Over ons |",
    navt4: "Contact",

    s1T1: "Wilt u uw woning of pand transformeren? Zoek niet verder dan onze deskundige verbouwings- en renovatiediensten. Ons ervaren team van professionals is toegewijd om uw visie tot leven te brengen met hoogwaardig vakmanschap en aandacht voor detail.",
    s1T2: "Onze Projecten",

    s2T1: "Welkom Bij",
    s2T2: "Onze op maat gemaakte oplossingen zijn afgestemd op uw unieke behoeften en zorgen voor een resultaat dat uw verwachtingen overtreft. Neem vandaag nog contact met ons op om aan uw droomproject te beginnen!",
    s2T3: " &#10004;Kwaliteit",
    s2T4: " &#10004;Beste prijzen",
    s2T5: " &#10004;Op Tijd",
    s2T6: "Van verbouwingen op maat tot verse verflagen, we doen het allemaal. Of u een enkele kamer wilt bijwerken of uw woning volledig wilt renoveren, wij hebben de vaardigheden en expertise om het voor elkaar te krijgen. Onze aandacht voor detail en hoogwaardig vakmanschap zorgen ervoor dat u zult genieten van het resultaat. Bovendien zijn onze schilderdiensten verkrijgbaar in een breed scala aan kleuren en afwerkingen, zodat u de perfecte look voor uw ruimte kunt kiezen. We begrijpen dat het ontmoedigend kan zijn om aan een renovatieproject te beginnen, en daarom streven we ernaar transparant, communicatief en responsief te zijn gedurende het hele proces. Van ons eerste consult tot de uiteindelijke doorloop geven we prioriteit aan open en eerlijke communicatie, zodat u altijd weet wat er met uw project gebeurt. <br> <br> Onze aandacht voor detail en hoogwaardig vakmanschap zorgen ervoor dat u enthousiast zult zijn over het eindresultaat. En we staan ​​achter ons werk met een tevredenheidsgarantie, zodat u er gerust op kunt zijn dat uw investering wordt beschermd. Vertrouw ons om de schoonheid en functioadnaliteit van uw huis te verbeteren met onze uitgebreide services. Neem vandaag nog contact met ons op voor een afspraak en ervaar het verschil!",

    s3T1: "DESIGN & BOUW",
    s3T2: "Upgrade uw huis met onze eersteklas ontwerp en bouwoplossingen.",
    s3T3: "CONSTRUCTIE & RENOVATIE",
    s3T4: "Laat ons uw droomhuis tot leven brengen met onze renovatie expertise.",
    s3T5: "INTERIEUR DESIGN",
    s3T6: "Ontdek de mogelijkheden voor uw woning met onze innovatieve ontwerp en bouwoplossingen.",

    s4Th: "ONZE DIENSTEN",
    s4T1: "DESIGN & PLANNING",
    s4T2: "Met onze ontwerp- en bouwexpertise helpen we u een ruimte te creëren die zowel functioneel als mooi is.",
    s4T3: "INTERIEUR DESIGN",
    s4T4: "Ervaar samen met ons de kracht van geweldig design",
    s4T5: "TIMMERWERK",
    s4T6: "Laat ons uw unieke visie tot leven brengen met onze op maat gemaakte timmerwerkontwerpen.",
    s4T7: "BEVlOERING",
    s4T8: "Krijg de perfecte balans tussen functie en design met onze expertise op het gebied van vloerwerk",
    s4T9: "ELEKTRISCH WERK",
    s4T10: "Geniet van een slimmer huis met onze geavanceerde elektrische oplossingen",
    s4T11: "SCHILDERWERK OP DE MUUR",
    s4T12: "Verander uw muren en plafond in een kunstwerk met ons deskundig team",

    s4T13: "Verbouwen",
    s4T14: "Verander uw huis in uw droomruimte met onze deskundige renovatiediensten! Bij Rebuild CO zijn we gespecialiseerd in het tot leven brengen van uw visie door middel van hoogwaardige, op maat gemaakte woningrenovaties.",
    s4T15: "Ons team van ervaren professionals is toegewijd aan het leveren van uitzonderlijke resultaten die uw verwachtingen overtreffen. Van keuken- en badkamerrenovaties tot volledige renovaties, wij hebben de expertise en vaardigheid om elk project, groot of klein, aan te pakken.",
    s4T16: "Timmerwerk",
    s4T17: "Wij geloven dat de sleutel tot een succesvol timmerproject een gezamenlijke aanpak is. Daarom werken we gedurende het hele proces nauw met u samen, van het eerste ontwerp tot de uiteindelijke installatie, om ervoor te zorgen dat uw project is afgestemd op uw specifieke behoeften en voorkeuren. We luisteren naar uw ideeën, geven deskundige begeleiding en zorgen ervoor dat u helemaal tevreden bent met het eindresultaat.",
    s4T18: "Bij Rebuild Co. zijn we trots op onze aandacht voor detail en onze inzet voor klanttevredenheid. We zijn toegewijd aan het leveren van uitzonderlijke resultaten die de schoonheid en functionaliteit van uw huis verbeteren.",
    s4T19: "Huis/Kamer Renovatie",
    s4T20: "Bij Rebuild Co. zijn we trots op het leveren van uitzonderlijke resultaten die de verwachtingen van onze klanten overtreffen. We gebruiken alleen materialen en apparatuur van de hoogste kwaliteit en ons team van bekwame vakmensen is toegewijd om een ​​naadloze renovatie-ervaring te bieden.",
    s4T21: "Of u uw keuken wilt vernieuwen, een extra kamer wilt toevoegen of uw hele huis wilt transformeren, wij zijn er om u te helpen. Neem vandaag nog contact met ons op om een  ​​adviesgesprek in te plannen en laat ons u helpen uw dromen over woningrenovatie werkelijkheid te laten worden.",
    s4T22: "Schilder/Spuit- & Behangwerken",
    s4T23: "Transformeer je huis met een frisse verflaag van Rebuild Co! Wij zijn gespecialiseerd in het schilderen van ramen, muren en deuren om uw huis een frisse, nieuwe look te geven.",
    s4T24: "Ons team van ervaren schilders gebruikt alleen verven en materialen van de hoogste kwaliteit om een ​​vlekkeloze afwerking te garanderen die lang meegaat. of u de kleur van uw muren wilt bijwerken, het uiterlijk van uw deuren wilt opfrissen of wat uitstraling wilt toevoegen met pas geschilderde ramen, wij zijn er om u te helpen. Neem vandaag nog contact met ons op voor een afspraak en laat ons u helpen uw schilderdromen werkelijkheid te laten worden.",
    s4T25: "Loodgieter",
    s4T26: "Zeg vaarwel tegen sanitaire problemen met Rebuild Co! Wij zijn gespecialiseerd in het leveren van eersteklas loodgieterswerk aan zowel huiseigenaren als bedrijven.",
    s4T27: "Ons team van ervaren loodgieters heeft de expertise en vaardigheid om elk sanitair probleem aan te pakken, van lekkende kranen tot gesprongen leidingen en alles daartussenin. We begrijpen hoe storend en frustrerend sanitaire problemen kunnen zijn, daarom bieden we snelle en betrouwbare diensten om uw sanitair zo snel mogelijk weer in goede staat te krijgen.",
    s4T28: "Elektriciteit",
    s4T29: "We begrijpen dat elektrische problemen frustrerend en zelfs gevaarlijk kunnen zijn. Daarom bieden we een scala aan eersteklas elektrische services om ervoor te zorgen dat uw elektrische systemen veilig en efficiënt werken. Ons team van gediplomeerde en ervaren elektriciens is uitgerust met de nieuwste tools en technologie om elk elektrisch probleem, groot of klein, aan te pakken.",
    s4T30: "Van routinematig elektrisch onderhoud tot noodreparaties, we zijn uitgerust om elk elektrisch probleem dat u tegenkomt aan te pakken. Onze elektriciens zijn zeer bekwaam en opgeleid om veilige, betrouwbare en efficiënte elektrische diensten te verlenen, hoe groot of klein het project ook is.",

    s5T1: "Onze Projecten",

    s7T1: "Vragen?",
    s7T2: "Neem vandaag nog contact met ons op!",

    s8T1: "ONS VERHAAL",
    s8T2: "Ons team van bekwame vakmensen en ontwerpers zal nauw met u samenwerken om een ​​persoonlijk plan te maken dat voldoet aan uw unieke behoeften en specificaties.",
    s8T3: "We doen alleen waar we goed in zijn. Als we een project aanpakken, weet je 100% zeker dat het op tijd, binnen de gestelde budgetlimieten en op topniveau wordt geleverd. We verzekeren al onze aansprakelijkheden, inclusief aansprakelijkheden van derden, en bescheremen onze klanten tegen alle risico's. Met jarenlange ervaring in de branche hebben we de vaardigheden en kennis om elke ruimte om te toveren tot uw droomontwerp.",
    s8T4: "Onze Missie",
    s8T5: "Bij Rebuild CO is het onze missie om onze klanten uitzonderlijke service en kwaliteitswerk te bieden dat hun verwachtingen overtreft. Wij geloven dat elke klant een ruimte verdient die niet alleen functioneel en mooi is, maar ook hun unieke stijl en persoonlijkheid weerspiegelt.",
    s8T6: "Onze Doelen",
    s8T7: "We streven ernaar om duurzame relaties met onze klanten op te bouwen door uitstekende resultaten te leveren en een naadloze, stressvrije ervaring van begin tot eind te bieden. Ons team is toegewijd om nauw met u samen te werken om uw visie te begrijpen en tot leven te brengen, terwijl het ook waardevolle begeleiding en expertise biedt.",
    s8T8: "Betrouwbaarheid",
    s8T9: "Bij Rebuild CO weten we dat betrouwbaarheid essentieel is om het vertrouwen van onze klanten te verdienen en te behouden, en we zijn toegewijd om het hoogste niveau van betrouwbaarheid te bieden in elke fase van uw project. Wanneer u met ons samenwerkt, kunt u er zeker van zijn dat u samenwerkt met een team dat zijn beloften nakomt en u de uitzonderlijke service biedt die u verdient.",
    s8T10: "Expertise",
    s8T11: "Deskundigheid staat centraal in wat we doen bij Rebuild CO. Ons team van vakmensen en ontwerpers heeft jarenlange ervaring in de branche en is gepassioneerd om op de hoogte te blijven van de nieuwste trends, technieken en technologieën op het gebied van verbouwen en renoveren. We begrijpen dat elk project uniek is en een persoonlijke aanpak vereist. Daarom nemen we de tijd om naar de behoeften van onze klanten te luisteren, hun visie te begrijpen en begeleiding en expertise te bieden die hen helpt hun doelen te bereiken.",
    s8T12: "Kwaliteit",
    s8T13: "Kwaliteit is een van onze topprioriteiten bij Rebuild CO. We Begrijpen dat als het gaat om herbouwen en renoveren, kwalitatief vakmanschap essentieel is om de lange levensduur en functionaliteit van uw ruimte te garanderen.",
    s8Ta: "Over Ons",

    s9T1: "Tevreden Klanten",
    s9T2: "Projecten Afgerond",
    s9T3: "Werknemers in dienst",

    s10T1: "Stap voor Stap",
    s10T2: "Hoe het werkt",
    s10T3: "Vraag gratis offerte aan of maak een afspraak.",
    s10T4: "Met onze jarenlange ervaring en passie voor design kunnen we uw ideeën omzetten in realiteit.",
    s10T5: "We begrijpen hoe belangrijk het is om werk van hoge kwaliteit op tijd en binnen budget af te leveren, en we zijn trots op ons vermogen om precies dat te doen.",
    s10T6: "Ons team van experts zet zich in om deadlines te halen en ervoor te zorgen dat uw project binnen de afgesproken tijd wordt voltooid.",
    s10Ta: "Afspreken",
    s10Tb: "Uitvoering",
    s10Tc: "Klaar",
    s10Td: "DESIGN",

    s11T1: "kwaliteit Staat Voorop",
    s11T2: "Bij REBUILD CO doen we er alles aan om alleen het beste te leveren. We zijn erg trots op ons werk en dat blijkt uit elk project dat we ondernemen. Ons team van experts is toegewijd aan het leveren van diensten en producten van topkwaliteit die aan uw verwachtingen voldoen of deze overtreffen. Van de materialen die we gebruiken tot de technieken die we gebruiken, we nemen elke stap die nodig is om ervoor te zorgen dat ons werk van het hoogste kaliber is. Wij geloven dat onze toewijding aan kwaliteit ons onderscheidt van de concurrentie en we streven er voortdurend naar onze processen en technieken te verbeteren om ervoor te zorgen dat we de best mogelijke resultaten blijven leveren. Wanneer u voor Rebuild CO kiest, kunt u erop vertrouwen dat u het beste van het beste krijgt. Neem vandaag nog contact met ons op en laat ons u laten zien waarom onze kwaliteit ongeëvenaard is.",

    s12T1: "Vraag gratis offerte aan of laat uw gegevens achter en we zullen binnen 24 uur contact met u opnemen!",
    s12T2: "Laat ons uw wensen weten:",
    s12T3: "Naam:",
    s12T4: "Email:",
    s12T5: "Telefoonnummer:",
    s12T6: "Laat uw wensen achter en wij zullen zo snel mogelijk contact met u opnemen!",
    s12T7: "Bezoek ons",
    s12T8: "Email ons",
    s12T9: "Bel ons",
  },

  english: {
    navt1: "Our Services |",
    navt2: "Our Projects |",
    navt3: "About Us |",
    navt4: "Contact",

    s1T1: "Do you want to transform your home or building? Look no further than our expert remodeling and remodeling services renovation services. Our experienced team of professionals is dedicated to bringing your vision to life with quality craftsmanship and attention to detail.",
    s1T2: "Our Projects",

    s2T1: "Welcome to",
    s2T2: "Our tailor-made solutions are tailored to your unique needs and deliver a result that exceeds your expectations. Contact us today to get started on your dream project!",
    s2T3: " &#10004;Quality",
    s2T4: " &#10004;Best Prices",
    s2T5: " &#10004;On Time",
    s2T6: "From custom renovations to fresh coats of paint, we do it all. Whether you want to update a single room or completely renovate your home, we have the skills and expertise to make it happen. Our attention to detail and high-quality craftsmanship ensure that you will enjoy the result. Plus, our painting services come in a wide variety of colors and finishes, so you can choose the perfect look for your space. We understand that it can be daunting to embark on a renovation project, so we strive to be transparent, communicative and responsive throughout the process. From our initial consultation to the final walk-through, we prioritize open and honest communication so that you always know what is happening with your project. <br> <br>Our attention to detail and high-quality craftsmanship ensure that you will be thrilled with the end result. And we stand behind our work with a satisfaction guarantee, so you can rest assured that your investment is protected. Trust us to enhance the beauty and functionality of your home with our comprehensive services. Contact us today for an appointment and experience the difference!",

    s3T1: "DESIGN & CONSTRUCTION",
    s3T2: "Upgrade your home with our premium design and construction solutions.",
    s3T3: "CONSTRUCTION & RENOVATION",
    s3T4: "Let us bring your dream home to life with our renovation expertise.",
    s3T5: "INTERIOR DESIGN",
    s3T6: "Discover the possibilities for your home with our innovative design and construction solutions.",

    s4Th: "OUR SERVICES",
    s4T1: "DESIGN & PLANNING",
    s4T2: "With our design and construction expertise, we help you create a space that is both functional and beautiful.",
    s4T3: "INTERIOR DESIGN",
    s4T4: "Experience the power of great design with us",
    s4T5: "CARPENTRY",
    s4T6: "Let us bring your unique vision to life with our bespoke carpentry designs.",
    s4T7: "FLOORING",
    s4T8: "Get the perfect balance of function and design with our flooring expertise",
    s4T9: "ELECTRICAL WORK",
    s4T10: "Enjoy a smarter home with our advanced electrical solutions",
    s4T11: "ART/MURAL ON THE WALL",
    s4T12: "Turn your walls and ceiling into a work of art with our expert team",

    s4T13: "CONSTRUCTION",
    s4T14: "Turn your home into your dream space with our expert renovation services! At Rebuild CO, we specialize in bringing your vision to life through quality, bespoke home renovations.",
    s4T15: "Our team of experienced professionals is dedicated to delivering exceptional results that exceed your expectations. From kitchen and bathroom remodels to full refurbishments, we have the expertise and skill to tackle any project, big or small.",
    s4T16: "Carpentry",
    s4T17: "We believe that the key to a successful carpentry project is a collaborative approach. That's why we work closely with you throughout the process, from initial design to final installation, to ensure your project is tailored to your specific needs and preferences. We listen to your ideas, provide expert guidance and ensure that you are completely satisfied with the end result.",
    s4T18: "At Rebuild Co. we pride ourselves on our attention to detail and our commitment to customer satisfaction. We are committed to delivering exceptional results that enhance the beauty and functionality of your home.",
    s4T19: "House/Room Renovation",
    s4T20: "At Rebuild Co. we pride ourselves on delivering exceptional results that exceed our clients' expectations. We only use the highest quality materials and equipment and our team of skilled craftsmen is dedicated to providing a seamless renovation experience.",
    s4T21: "Whether you want to renew your kitchen, add an extra room or transform your entire home, we're here to help. Contact us today to schedule a consultation and let us help you make your home renovation dreams a reality.",
    s4T22: "Painting/Spraying & Wallpapering",
    s4T23: "Transform your home with a fresh coat of paint from Rebuild Co! We specialize in painting windows, walls and doors to give your home a fresh new look.",
    s4T24: "Our team of experienced painters use only the highest quality paints and materials to ensure a flawless finish that lasts. whether you want to update the color of your walls, refresh the look of your doors or add some oomph with freshly painted windows, we're here to help. Contact us today for an appointment and let us help you make your painting dreams a reality.",
    s4T25: "Plumber",
    s4T26: "Say goodbye to plumbing problems with Rebuild Co! We specialize in providing premium plumbing services to both homeowners and businesses.",
    s4T27: "Our team of experienced plumbers have the expertise and skill to handle any plumbing problem, from leaky faucets to burst pipes and everything in between. We understand how disruptive and frustrating plumbing issues can be, which is why we provide fast and reliable services to get your plumbing back in working order as quickly as possible.",
    s4T28: "Electricity",
    s4T29: "We understand that electrical problems can be frustrating and even dangerous. That's why we offer a range of premium electrical services to ensure your electrical systems operate safely and efficiently. Our team of certified and experienced electricians is equipped with the latest tools and technology to handle any electrical problem, big or small.",
    s4T30: "From routine electrical maintenance to emergency repairs, we're equipped to handle any electrical problem you encounter. Our electricians are highly skilled and trained to provide safe, reliable and efficient electrical services no matter how large or small the project.",

    s5T1: "Our Projects",

    s7T1: "Questions?",
    s7T2: "Contact us today!",

    s8T1: "OUR STORY",
    s8T2: "Our team of skilled craftsmen and designers will work closely with you to create a personalized plan that meets your unique needs and specifications.",
    s8T3: "We only do what we are good at. When we tackle a project, you can be 100% sure that it will be delivered on time, within budget limits and at top level. We insure all our liabilities, including those of third parties, and protect our clients against all risks. With years of experience in the industry, we have the skills and knowledge to transform any space into your dream design.",
    s8T4: "Our Mission",
    s8T5: "At Rebuild CO, our mission is to provide our customers with exceptional service and quality work that exceeds their expectations. We believe that every customer deserves a space that is not only functional and beautiful, but also reflects their unique style and personality.",
    s8T6: "Our Goals",
    s8T7: "We strive to build lasting relationships with our clients by delivering outstanding results and providing a seamless, stress-free experience from start to finish. Our team is committed to working closely with you to understand and bring your vision to life, while also providing valuable guidance and expertise.",
    s8T8: "Reliability",
    s8T9: "At Rebuild CO, we know that reliability is essential to earning and keeping our customers' trust, and we are committed to providing the highest level of reliability at every stage of your project. When you work with us, you can rest assured that you are working with a team that delivers on its promises and provides you with the exceptional service you deserve.",
    s8T10: "Expertise",
    s8T11: "Expertise is at the heart of what we do at Rebuild CO. Our team of craftsmen and designers have years of industry experience and are passionate about keeping up to date with the latest trends, techniques and technologies in remodeling and renovation. We understand that every project is unique and requires a personal approach. That's why we take the time to listen to our clients' needs, understand their vision and provide guidance and expertise to help them achieve their goals.",
    s8T12: "Quality",
    s8T13: "Quality is one of our top priorities at Rebuild CO. We understand that when it comes to rebuilding and renovating, quality workmanship is essential to ensure the longevity and functionality of your space.",
    s8Ta: "About Us",

    s9T1: "Sutisfied Customers",
    s9T2: "Completed Projects",
    s9T3: "Workers Employed",

    s10T1: "Step by Step",
    s10T2: "How It Works",
    s10T3: "Request a free offer or make an appointment.",
    s10T4: "With our years of experience and passion for design, we can turn your ideas into reality.",
    s10T5: "We understand the importance of delivering high quality work on time and within budget, and we pride ourselves on our ability to do just that.",
    s10T6: "Our team of experts is committed to meeting deadlines and ensuring that your project is completed within the agreed timeframe.",
    s10Ta: "PLANNING",
    s10Tb: "BUILDING",
    s10Tc: "FINISH",
    s10Td: "DESIGN",

    s11T1: "QUALITY COMES FIRST",
    s11T2: "At REBUILD CO we do everything we can to deliver only the best. We take great pride in our work and it shows in every project we undertake. Our team of experts is committed to providing top quality services and products to exceed your expectations. From the materials we use to the techniques we use, we take every step necessary to ensure our work is of the highest caliber. We believe in our commitment to our competitive edge and we continuously strive our processes and techniques to ensure we can continue to deliver the best quality results. When you choose Rebuild CO, you can rest assured that you are getting the best of the best. Contact us today and show us why our quality is uneven.",

    s12T1: "Request a free offer or leave your details and we will contact you within 24 hours!",
    s12T2: "Let us know your wishes:",
    s12T3: "Name:",
    s12T4: "E-mail:",
    s12T5: "Phone Number:",
    s12T6: "Leave your wishes and we will contact you as soon as possible!",
    s12T7: "Visit us",
    s12T8: "Email Us",
    s12T9: "Call us",

  },

  russian: {
    navt1: "Наши услуги |",
    navt2: "Наши Проекты |",
    navt3: "Про нас |",
    navt4: "Контакт",

    s1T1: "Хотите преобразить свой дом или здание? Не смотрите дальше, чем наши опытные услуги по реконструкции и реконструкции. Наша опытная команда профессионалов стремится воплотить ваше видение в жизнь с помощью качественного мастерства и внимания к деталям.",
    s1T2: "Наши Проекты",

    s2T1: "Добро пожаловать в",
    s2T2: "Наши индивидуальные решения адаптированы к вашим уникальным потребностям и обеспечивают результат, превосходящий ваши ожидания. Свяжитесь с нами сегодня, чтобы начать работу над проектом своей мечты!",
    s2T3: " &#10004;Качество",
    s2T4: " &#10004;Лучшие цены",
    s2T5: " &#10004;Вовремя",
    s2T6: "Мы делаем все, от индивидуального ремонта до свежей покраски. Если вы хотите обновить одну комнату или полностью отремонтировать свой дом, у нас есть навыки и опыт, чтобы это произошло. Наше внимание к деталям и высокое качество изготовления гарантируют, что вы будете довольны результатом. Кроме того, наши услуги по покраске представлены в широком ассортименте цветов и отделок, поэтому вы можете выбрать идеальный вид для своего помещения. Мы понимаем, что начинать проект реконструкции может быть сложно, поэтому мы стремимся быть прозрачными, коммуникабельными и отзывчивыми на протяжении всего процесса. От нашей первоначальной консультации до окончательного прохождения мы отдаем приоритет открытому и честному общению, чтобы вы всегда знали, что происходит с вашим проектом. <br> <br>Наше внимание к деталям и высокое качество изготовления гарантируют, что вы будете в восторге от конечного результата. И мы отвечаем за нашу работу с гарантией удовлетворения, поэтому вы можете быть уверены, что ваши инвестиции защищены. Доверьте нам, чтобы улучшить красоту и функциональность вашего дома с помощью наших комплексных услуг. Свяжитесь с нами сегодня, чтобы назначить встречу, и почувствуйте разницу!",

    s3T1: "ДИЗАЙН И КОНСТРУКЦИЯ",
    s3T2: "Обновите свой дом с помощью наших дизайнерских и строительных решений премиум-класса.",
    s3T3: "СТРОИТЕЛЬСТВО И РЕМОНТ",
    s3T4: "Позвольте нам воплотить в жизнь дом вашей мечты с нашим опытом ремонта.",
    s3T5: "ДИЗАЙН ИНТЕРЬЕРА",
    s3T6: "Откройте для себя возможности для вашего дома с нашими инновационными дизайнерскими и строительными решениями.",

    s4Th: "НАШИ СЕРВИСЫ",
    s4T1: "ДИЗАЙН И ПЛАНИРОВАНИЕ",
    s4T2: "Благодаря нашему опыту проектирования и строительства мы поможем вам создать функциональное и красивое пространство.",
    s4T3: "ДИЗАЙН ИНТЕРЬЕРА",
    s4T4: "Испытайте силу великолепного дизайна вместе с нами",
    s4T5: "СТОЛИЧНЫЕ ДЕЛА",
    s4T6: "Позвольте нам воплотить ваше уникальное видение в жизнь с нашими индивидуальными столярными проектами.",
    s4T7: "НАПОЛЬНОЕ ПОКРЫТИЕ",
    s4T8: "Получите идеальный баланс функциональности и дизайна благодаря нашему опыту в области напольных покрытий.",
    s4T9: "ЭЛЕКТРИЧЕСКИЕ РАБОТЫ",
    s4T10: "Наслаждайтесь умным домом с нашими передовыми электрическими решениями",
    s4T11: "ИСКУССТВО/НАПИСЬ/PИСОВАНИЕ НА СТЕНЕ",
    s4T12: "Превратите свои стены и потолок в произведение искусства с нашей командой экспертов",

    s4T13: "СТРОИТЕЛЬСТВО",
    s4T14: "Превратите свой дом в пространство своей мечты с помощью наших профессиональных услуг по ремонту! В Rebuild CO мы специализируемся на воплощении вашего видения в жизнь посредством качественного индивидуального ремонта дома.",
    s4T15: "Наша команда опытных профессионалов нацелена на достижение исключительных результатов, которые превзойдут ваши ожидания. От ремонта кухни и ванной комнаты до капитального ремонта — у нас есть опыт и навыки, чтобы справиться с любым проектом, большим или маленьким.",
    s4T16: "Плотницкие работы",
    s4T17: "Мы считаем, что ключом к успешному столярному проекту является совместный подход. Вот почему мы тесно сотрудничаем с вами на протяжении всего процесса, от первоначального проектирования до окончательной установки, чтобы ваш проект соответствовал вашим конкретным потребностям и предпочтениям. Мы прислушиваемся к вашим идеям, предоставляем экспертные рекомендации и гарантируем, что вы полностью удовлетворены конечным результатом.",
    s4T18: "В Rebuild Co. мы гордимся нашим вниманием к деталям и нашей приверженностью удовлетворенности клиентов. Мы стремимся к достижению исключительных результатов, которые улучшат красоту и функциональность вашего дома.",
    s4T19: "Ремонт дома/комнаты",
    s4T20: "В Rebuild Co. мы гордимся тем, что добиваемся исключительных результатов, превосходящих ожидания наших клиентов. Мы используем только высококачественные материалы и оборудование, а наша команда квалифицированных мастеров стремится обеспечить бесшовный ремонт.",
    s4T21: "Если вы хотите обновить свою кухню, добавить дополнительную комнату или преобразить весь дом, мы здесь, чтобы помочь. Свяжитесь с нами сегодня, чтобы запланировать консультацию, и позвольте нам помочь вам воплотить ваши мечты о ремонте дома в реальность.",
    s4T22: "Покраска/напыление и поклейка обоев",
    s4T23: "Преобразите свой дом свежим слоем краски от Rebuild Co! Мы специализируемся на покраске окон, стен и дверей, чтобы придать вашему дому свежий вид.",
    s4T24: "Наша команда опытных маляров использует только высококачественные краски и материалы, чтобы гарантировать безупречную отделку, которая будет длиться долго. хотите ли вы обновить цвет своих стен, освежить внешний вид ваших дверей или добавить шарма свежевыкрашенными окнами, мы здесь, чтобы помочь. Свяжитесь с нами сегодня, чтобы назначить встречу, и позвольте нам помочь вам воплотить ваши мечты о живописи в реальность.",
    s4T25: "Водопроводчик",
    s4T26: "Попрощайтесь с проблемами сантехники с Rebuild Co! Мы специализируемся на предоставлении сантехнических услуг премиум-класса как для частных домовладельцев, так и для предприятий.",
    s4T27: "Наша команда опытных сантехников обладает опытом и навыками для решения любой проблемы с сантехникой, от протекающих кранов до прорыва труб и всего, что между ними. Мы понимаем, насколько разрушительными и неприятными могут быть проблемы с сантехникой, поэтому мы предоставляем быстрые и надежные услуги, чтобы как можно быстрее вернуть вашу сантехнику в рабочее состояние.",
    s4T28: "Электричество",
    s4T29: "Мы понимаем, что проблемы с электричеством могут быть неприятными и даже опасными. Вот почему мы предлагаем ряд электротехнических услуг премиум-класса, чтобы обеспечить безопасную и эффективную работу ваших электрических систем. Наша команда сертифицированных и опытных электриков оснащена новейшими инструментами и технологиями для решения любых электрических проблем, больших или малых.",
    s4T30: "От планового обслуживания электрооборудования до аварийного ремонта — мы готовы решить любую электрическую проблему, с которой вы столкнетесь. Наши электрики обладают высокой квалификацией и обучены предоставлять безопасные, надежные и эффективные электротехнические услуги, независимо от размера проекта.",

    s5T1: "Наши проекты",

    s7T1: "Есть вопросы?",
    s7T2: "Свяжитесь с нами сегодня!",

    s8T1: "НАША ИСТОРИЯ",
    s8T2: "Наша команда опытных мастеров и дизайнеров тесно сотрудничает с вами, чтобы создать индивидуальный план, отвечающий вашим уникальным потребностям и требованиям.",
    s8T3: "Мы делаем только то, что умеем хорошо. Когда мы беремся за проект, вы можете быть уверены на 100%, что он будет выполнен в срок, в рамках бюджета и на высшем уровне. Мы страхуем все наши обязательства, включая обязательства перед третьими сторонами, и защищаем наших клиентов от всех рисков. С годами опыта в индустрии мы обладаем навыками и знаниями, чтобы превратить любое пространство в вашу мечту.",
    s8T4: "Наша миссия",
    s8T5: "Наши цели в Rebuild CO - предоставить нашим клиентам исключительный сервис и качественную работу, превосходящую их ожидания. Мы считаем, что каждый клиент заслуживает пространства, которое не только функционально и красиво, но также отражает их уникальный стиль и личность.",
    s8T6: "Наши цели",
    s8T7: "Мы стремимся построить долгосрочные отношения с нашими клиентами, предоставляя выдающиеся результаты и обеспечивая беспроблемный опыт от начала и до конца. Наша команда готова тесно сотрудничать с вами, чтобы понять и воплотить вашу идею в жизнь, а также предоставить ценные советы и экспертизу.",
    s8T8: "Надежность",
    s8T9: "В Rebuild CO мы знаем, что надежность необходима для завоевания и сохранения доверия наших клиентов, и мы стремимся обеспечить высочайший уровень надежности на каждом этапе вашего проекта. Когда вы работаете с нами, вы можете быть уверены, что работаете с командой, которая выполняет свои обещания и предоставляет вам исключительный сервис, которого вы заслуживаете.",
    s8T10: "Экспертиза",
    s8T11: "Экспертиза - в сердце нашей работы в Rebuild CO. Наша команда мастеров и дизайнеров имеет многолетний опыт работы в отрасли и страстно следит за последними тенденциями, техниками и технологиями в области ремонта и реконструкции. Мы понимаем, что каждый проект уникален и требует индивидуального подхода. Поэтому мы уделяем время, чтобы выслушать потребности наших клиентов, понять их видение и предоставить руководство и экспертизу, чтобы помочь им достичь своих целей.",
    s8T12: "Качество",
    s8T13: "Качество - один из наших главных приоритетов в Rebuild CO. Мы понимаем, что когда речь идет о восстановлении и ремонте, качественное мастерство является необходимым условием для обеспечения долговечности и функциональности вашего пространства.",
    s8Ta: "О нас",

    s9T1: "Довольные клиенты",
    s9T2: "Завершенные проекты",
    s9T3: "Число работников",
    s10T1: "Пошагово",
    s10T2: "Как это работает",
    s10T3: "Запросите бесплатное предложение или назначьте встречу.",
    s10T4: "Благодаря нашему опыту и страсти к дизайну, мы можем превратить ваши идеи в реальность.",
    s10T5: "Мы понимаем важность выполнения высококачественной работы в срок и в рамках бюджета, и гордимся нашей способностью делать это именно так.",
    s10T6: "Наша команда экспертов настроена на выполнение сроков и обеспечение завершения вашего проекта в согласованные сроки.",
    s10Ta: "ПЛАНИРОВАНИЕ",
    s10Tb: "СТРОИТЕЛЬСТВО",
    s10Tc: "ОТДЕЛКА",
    s10Td: "ДИЗАЙН",

    s11T1: "КАЧЕСТВО НА ПЕРВОМ МЕСТЕ",
    s11T2: "В REBUILD CO мы делаем все возможное, чтобы предлагать только лучшее. Мы гордимся своей работой, и это проявляется в каждом проекте, за который мы беремся. Наша команда экспертов стремится предоставлять услуги и продукты высочайшего качества, чтобы превзойти ваши ожидания. От материалов, которые мы используем, до методов, которые мы используем, мы делаем все возможное, чтобы наша работа была на самом высоком уровне. Мы верим в нашу приверженность нашему конкурентному преимуществу, и мы постоянно совершенствуем наши процессы и методы, чтобы гарантировать, что мы можем продолжать обеспечивать результаты наилучшего качества. Выбирая Rebuild CO, вы можете быть уверены, что получаете лучшее из лучшего. Свяжитесь с нами сегодня и покажите нам, почему наше качество неравномерно.",

    s12T1: "Запросите бесплатное предложение или оставьте свои данные, и мы свяжемся с вами в течение 24 часов!",
    s12T2: "Сообщите нам ваши пожелания:",
    s12T3: "Имя:",
    s12T4: "Электронная почта:",
    s12T5: "Номер телефона:",
    s12T6: "Оставьте свои пожелания, и мы свяжемся с вами как можно скорее!",
    s12T7: "Посетите нас",
    s12T8: "Напишите нам",
    s12T9: "Позвоните нам",

  }
}