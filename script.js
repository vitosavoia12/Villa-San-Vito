// EDIT TEXTS: update multilingual copy here. Keep keys aligned with data-i18n attributes in index.html.
const translations = {
  it: {
    skip: "Vai al contenuto",
    "nav.history": "Storia",
    "nav.villa": "Villa",
    "nav.rooms": "Camere",
    "nav.outdoors": "Esterni",
    "nav.location": "Posizione",
    "nav.book": "Prenota",
    "opening.kicker": "Raito, Costiera Amalfitana",
    "opening.title": "Villa San Vito",
    "opening.location": "Situata tra Amalfi, Positano, Ravello e Salerno",
    "welcome.title": "Benvenuti a Villa San Vito",
    "welcome.copy": "Situata a Raito, uno dei piccoli borghi della Costiera Amalfitana, Villa San Vito guarda il Golfo di Salerno da una posizione tranquilla, sospesa tra giardino, terrazze e luce di mare.",
    "welcome.copy2": "Il sito è pensato come una piccola landing di atmosfera: poche immagini, sezioni chiare e un racconto essenziale del luogo, in attesa dei nuovi testi e delle nuove fotografie definitive.",
    "history.kicker": "A. Storia",
    "history.title": "Un borgo sospeso tra montagna e mare",
    "history.copy": "Raito conserva una memoria antica di luce e silenzio. Dalla roccia della montagna al Golfo di Salerno, il paesaggio dà alla casa il suo carattere più intimo: pietra, terrazze, aria di mare e una calma lenta.",
    "history.copy2": "Villa San Vito appartiene a questa storia. La sua anima ottocentesca dialoga con l'architettura locale, con ambienti freschi, passaggi esterni e viste che raccontano la vita sopra Vietri sul Mare.",
    "history.caption": "Raito e Vietri in un dipinto di Josef Rabel, 1819",
    "villa.kicker": "B. Villa",
    "villa.title": "Una casa semplice, luminosa, vissuta",
    "villa.copy": "Villa San Vito non cerca il ritmo di un hotel. È una casa privata pensata per giornate che si allungano senza fretta: caffè in terrazza, ombra in giardino, stanze fresche e il Golfo sempre presente.",
    "villa.copy2": "Quando sarà disponibile una fotografia dei proprietari o della famiglia, potrà entrare in questa sezione per rendere il racconto ancora più personale.",
    "rooms.kicker": "C. Camere",
    "rooms.title": "Tre camere, un solo ritmo di quiete",
    "rooms.copy": "La zona notte è descritta in modo essenziale, senza trasformare il sito in una scheda tecnica. Le camere saranno raccontate con nomi e atmosfera: Frontemare, Il Limoneto e una terza camera da confermare nei testi finali.",
    "rooms.frontemare.label": "Frontemare",
    "rooms.frontemare.copy": "Una camera pensata per il riposo, vicina alla luce e al respiro del mare.",
    "rooms.limoneto.label": "Il Limoneto",
    "rooms.limoneto.copy": "Una stanza fresca, semplice, legata all'ombra del giardino e ai profumi mediterranei.",
    "rooms.third.label": "Camera da definire",
    "rooms.third.copy": "Il nome e il testo finale potranno essere aggiornati appena il cliente invierà la revisione italiana.",
    "outdoors.kicker": "D. Esterni",
    "outdoors.title": "La villa succede anche fuori",
    "outdoors.copy": "Terrazze, ombra, foglie e una tavola che invita a restare più del previsto. Il giardino non è un dettaglio: è parte del modo di abitare la casa.",
    "outdoors.copy2": "Gli esterni sono il luogo in cui la giornata rallenta: colazione al sole, pomeriggi sotto gli alberi, sera con le luci del Golfo in lontananza.",
    "location.kicker": "E. Posizione",
    "location.title": "Raito, sopra Vietri sul Mare",
    "location.place": "Raito, Vietri sul Mare, Campania, Italia",
    "booking.kicker": "F. Prenota / Contattaci",
    "booking.title": "Prenotazioni tramite piattaforme esterne",
    "booking.copy": "Villa San Vito non gestisce prenotazioni dirette dal sito. Disponibilità, condizioni e pagamenti sono gestiti sulle piattaforme esterne.",
    "contact.email.label": "Contattaci via email",
    "instagram.copy": "Momenti recenti e viste della casa sono anche su",
    "footer.reservations": "Prenotazioni gestite esclusivamente tramite Airbnb, Booking e Vrbo."
  },

  es: {
    skip: "Saltar al contenido",
    "nav.history": "Historia",
    "nav.villa": "Villa",
    "nav.rooms": "Cuartos",
    "nav.outdoors": "Exteriores",
    "nav.location": "Ubicación",
    "nav.book": "Reservar",
    "opening.kicker": "Raito, Costa Amalfitana",
    "opening.title": "Villa San Vito",
    "opening.location": "Ubicada entre Amalfi, Positano, Ravello y Salerno",
    "welcome.title": "Bienvenidos a Villa San Vito",
    "welcome.copy": "Ubicada en Raito, uno de los pequeños pueblos de la Costa Amalfitana, Villa San Vito mira al Golfo de Salerno desde una posición tranquila, suspendida entre jardín, terrazas y luz de mar.",
    "welcome.copy2": "El sitio queda planteado como una landing de atmósfera: pocas imágenes, secciones claras y un relato esencial del lugar, a la espera de los nuevos textos y las fotografías definitivas.",
    "history.kicker": "A. Historia",
    "history.title": "Un pueblo suspendido entre la montaña y el mar",
    "history.copy": "Raito conserva una memoria antigua de luz y silencio. Desde la roca de la montaña hasta el Golfo de Salerno, el paisaje le da a la casa su carácter más íntimo: piedra, terrazas, aire de mar y una calma lenta.",
    "history.copy2": "Villa San Vito pertenece a esta historia. Su alma del siglo XIX dialoga con la arquitectura local, con ambientes frescos, pasos exteriores y vistas que cuentan la vida sobre Vietri sul Mare.",
    "history.caption": "Raito y Vietri en una pintura de Josef Rabel, 1819",
    "villa.kicker": "B. Villa",
    "villa.title": "Una casa simple, luminosa, vivida",
    "villa.copy": "Villa San Vito no busca el ritmo de un hotel. Es una casa privada pensada para días que se alargan sin prisa: café en la terraza, sombra en el jardín, ambientes frescos y el Golfo siempre presente.",
    "villa.copy2": "Cuando haya una fotografía de los propietarios o de la familia, podrá sumarse en esta sección para hacer el relato todavía más personal.",
    "rooms.kicker": "C. Cuartos",
    "rooms.title": "Tres cuartos, un mismo ritmo de calma",
    "rooms.copy": "La zona de descanso se describe de forma esencial, sin convertir el sitio en una ficha técnica. Los cuartos se cuentan por nombre y atmósfera: Frontemare, Il Limoneto y un tercer cuarto a confirmar en los textos finales.",
    "rooms.frontemare.label": "Frontemare",
    "rooms.frontemare.copy": "Un cuarto pensado para el descanso, cerca de la luz y del aire del mar.",
    "rooms.limoneto.label": "Il Limoneto",
    "rooms.limoneto.copy": "Un cuarto fresco y simple, ligado a la sombra del jardín y a los aromas mediterráneos.",
    "rooms.third.label": "Cuarto a definir",
    "rooms.third.copy": "El nombre y el texto final se podrán actualizar apenas el cliente envíe la revisión en italiano.",
    "outdoors.kicker": "D. Exteriores",
    "outdoors.title": "La villa también sucede afuera",
    "outdoors.copy": "Terrazas, sombra, hojas y una mesa que invita a quedarse más de lo previsto. El jardín no es un detalle: es parte del modo de habitar la casa.",
    "outdoors.copy2": "Los exteriores son el lugar donde el día baja el ritmo: desayuno al sol, tardes bajo los árboles, noche con las luces del Golfo a lo lejos.",
    "location.kicker": "E. Ubicación",
    "location.title": "Raito, sobre Vietri sul Mare",
    "location.place": "Raito, Vietri sul Mare, Campania, Italia",
    "booking.kicker": "F. Reservar / Contacto",
    "booking.title": "Reservas a través de plataformas externas",
    "booking.copy": "Villa San Vito no gestiona reservas directas desde el sitio. La disponibilidad, las condiciones y los pagos se manejan en las plataformas externas.",
    "contact.email.label": "Contáctenos por correo electrónico",
    "instagram.copy": "También hay momentos recientes y vistas de la casa en",
    "footer.reservations": "Reservas gestionadas exclusivamente a través de Airbnb, Booking y Vrbo."
  },

  en: {
    skip: "Skip to content",
    "nav.history": "History",
    "nav.villa": "Villa",
    "nav.rooms": "Rooms",
    "nav.outdoors": "Outdoors",
    "nav.location": "Location",
    "nav.book": "Book",
    "opening.kicker": "Raito, Amalfi Coast",
    "opening.title": "Villa San Vito",
    "opening.location": "Located between Amalfi, Positano, Ravello and Salerno",
    "welcome.title": "Welcome to Villa San Vito",
    "welcome.copy": "Set in Raito, one of the small villages of the Amalfi Coast, Villa San Vito looks over the Gulf of Salerno from a quiet position, suspended between garden, terraces and sea light.",
    "welcome.copy2": "The site is now shaped as a simple atmospheric landing page: few images, clear sections and an essential story of the place, ready for the client's final Italian copy and new photography.",
    "history.kicker": "A. History",
    "history.title": "A village suspended between mountain and sea",
    "history.copy": "Raito keeps an old memory of light and silence. From the mountain rock to the Gulf of Salerno, the landscape gives the house its most intimate character: stone, terraces, sea air and a slow calm.",
    "history.copy2": "Villa San Vito belongs to this story. Its nineteenth-century soul speaks with the local architecture, through fresh rooms, outdoor passages and views that tell the life above Vietri sul Mare.",
    "history.caption": "Raito and Vietri in a painting by Josef Rabel, 1819",
    "villa.kicker": "B. Villa",
    "villa.title": "A simple, bright, lived-in house",
    "villa.copy": "Villa San Vito does not follow the rhythm of a hotel. It is a private house for days that stretch without hurry: coffee on the terrace, garden shade, cool rooms and the Gulf always present.",
    "villa.copy2": "When a photograph of the owners or family is available, it can be added here to make the story more personal.",
    "rooms.kicker": "C. Rooms",
    "rooms.title": "Three rooms, one quiet rhythm",
    "rooms.copy": "The sleeping area is described simply, without turning the site into a technical listing. The rooms are introduced by name and atmosphere: Frontemare, Il Limoneto and a third room to confirm in the final text.",
    "rooms.frontemare.label": "Frontemare",
    "rooms.frontemare.copy": "A room designed for rest, close to light and the breath of the sea.",
    "rooms.limoneto.label": "Il Limoneto",
    "rooms.limoneto.copy": "A fresh, simple room connected to garden shade and Mediterranean scents.",
    "rooms.third.label": "Room to define",
    "rooms.third.copy": "The final name and copy can be updated once the client sends the revised Italian text.",
    "outdoors.kicker": "D. Outdoors",
    "outdoors.title": "The villa also happens outside",
    "outdoors.copy": "Terraces, shade, leaves and a table that invites you to stay longer than planned. The garden is not a detail: it is part of how the house is lived.",
    "outdoors.copy2": "The outdoor spaces are where the day slows down: breakfast in the sun, afternoons beneath the trees, evenings with the lights of the Gulf in the distance.",
    "location.kicker": "E. Location",
    "location.title": "Raito, above Vietri sul Mare",
    "location.place": "Raito, Vietri sul Mare, Campania, Italy",
    "booking.kicker": "F. Book / Contact",
    "booking.title": "Reservations through external platforms",
    "booking.copy": "Villa San Vito does not manage direct reservations through this site. Availability, conditions and payments are handled by the external platforms.",
    "contact.email.label": "Contact us by email",
    "instagram.copy": "Recent moments and views of the house are also on",
    "footer.reservations": "Reservations are managed exclusively through Airbnb, Booking and Vrbo."
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatableNodes = document.querySelectorAll("[data-i18n]");

function setLanguage(selectedLanguage) {
  const dictionary = translations[selectedLanguage] || translations.it;

  document.documentElement.lang = selectedLanguage;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = dictionary[key];

    if (value) {
      node.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === selectedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("villaSanVitoLanguage", selectedLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("villaSanVitoLanguage") || "it");
