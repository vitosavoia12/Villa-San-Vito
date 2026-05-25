// EDIT TEXTS: update multilingual copy here. Keep keys aligned with data-i18n attributes in index.html.
const translations = {
  en: {
    skip: "Skip to content",
    "nav.story": "House",
    "nav.heritage": "History",
    "nav.garden": "Garden",
    "nav.photos": "Photos",
    "nav.raito": "Raito",
    "nav.location": "Location",
    "nav.book": "Reserve",
    "hero.eyebrow": "Raito, above the Gulf of Salerno",
    "hero.title": "Villa San Vito",
    "hero.subtitle": "A quiet Mediterranean house for slow mornings, garden shade and sea air.",
    "buttons.discover": "Discover the villa",
    "buttons.platforms": "Reservation links",
    "intro.kicker": "The house",
    "intro.title": "Not a hotel rhythm, a home above the sea",
    "intro.copy": "Villa San Vito is an old nineteenth-century home for days that move gently: coffee on the terrace, the garden in the warm hours, Raito at sunset, and the Gulf always below.",
    "intro.copy2": "Its charm is not in excess, but in atmosphere: stone, shade, terraces, simple meals and the feeling of returning to a private house after the coast.",
    "heritage.kicker": "Raito, sunlit memory",
    "heritage.title": "A village kissed by the sun",
    "heritage.copy": "Raito is said to carry an ancient promise of light. Suspended between mountain rock and the Gulf of Salerno, it gives Villa San Vito its quiet character: stone, terraces, sea air and the feeling of time moving more slowly.",
    "heritage.copy2": "The house belongs to this landscape. Its nineteenth-century soul keeps the local architecture close: cool rooms, outdoor passages, garden shade and views that have always shaped life above Vietri sul Mare.",
    "heritage.caption": "Raito and Vietri in an 1819 painting by Josef Rabel.",
    "garden.kicker": "Garden",
    "garden.title": "The villa lives outside",
    "garden.copy": "Terraces, leaves, silence and a table that invites you to stay longer than planned.",
    "garden.copy2": "The interiors are there for rest and freshness; the memory of the stay is usually made outside, between the garden, the terrace and the view.",
    "garden.caption": "Garden shade and open-air corners.",
    "day.kicker": "A day here",
    "day.title": "Morning, shade, evening light",
    "day.morning.label": "Morning",
    "day.morning.copy": "Open the doors, let the Gulf in, take breakfast slowly.",
    "day.afternoon.label": "Afternoon",
    "day.afternoon.copy": "Return from the coast and disappear into the garden.",
    "day.evening.label": "Evening",
    "day.evening.copy": "Stay outside until the village lights begin to appear.",
    "photos.kicker": "Atmosphere",
    "photos.title": "Small signs of the house",
    "photos.copy": "A quiet edit of recent views and details: the entrance, the garden, the terrace, the night sky and one room to understand the scale without turning the site into a catalogue.",
    "photos.sign.caption": "The ceramic sign at the entrance",
    "photos.pot.caption": "Terracotta, leaves and sea in the distance",
    "photos.terrace.caption": "A terrace open to the Gulf",
    "photos.night.caption": "The garden after dark",
    "photos.passage.caption": "A garden passage beside the house",
    "photos.facade.caption": "White walls, palms and sea light",
    "photos.window.caption": "Ironwork, shade and garden outside",
    "photos.path.caption": "The green arrival path",
    "photos.gate.caption": "The private garden gate",
    "photos.fireworks.caption": "Occasional lights over the Gulf",
    "photos.room.caption": "A simple room for rest",
    "raito.kicker": "Raito",
    "raito.title": "Close to the coast, away from the rush",
    "raito.copy": "A quiet village above Vietri sul Mare, with Amalfi, Ravello, Positano and Salerno within reach.",
    "raito.copy2": "From here the coast can be explored during the day, then left behind at night, when the village becomes calm again and the Gulf gathers the last light.",
    "raito.caption": "Lemon leaves, sky and the Gulf beyond.",
    "location.kicker": "Location",
    "location.title": "Raito, above Vietri sul Mare",
    "location.copy": "The map shows the general area of Raito. Exact arrival details are managed through the reservation platform.",
    "booking.kicker": "Reservations",
    "booking.title": "Book through the platform you prefer",
    "booking.copy": "This site does not manage direct reservations. Availability, policies and payments are handled externally.",
    "instagram.copy": "For recent views and small moments, follow Villa San Vito on",
    "footer.reservations": "Reservations are managed exclusively through Airbnb, Booking and Vrbo."
  },
  es: {
    skip: "Saltar al contenido",
    "nav.story": "Casa",
    "nav.heritage": "Historia",
    "nav.garden": "Jardín",
    "nav.photos": "Fotos",
    "nav.raito": "Raito",
    "nav.location": "Ubicación",
    "nav.book": "Reservar",
    "hero.eyebrow": "Raito, sobre el Golfo de Salerno",
    "hero.title": "Villa San Vito",
    "hero.subtitle": "Una casa mediterránea tranquila para mañanas lentas, sombra de jardín y aire de mar.",
    "buttons.discover": "Conocer la villa",
    "buttons.platforms": "Links de reserva",
    "intro.kicker": "La casa",
    "intro.title": "No tiene ritmo de hotel, es una casa sobre el mar",
    "intro.copy": "Villa San Vito es una antigua casa del siglo XIX para días que avanzan suave: café en la terraza, jardín en las horas cálidas, Raito al atardecer y el Golfo siempre abajo.",
    "intro.copy2": "Su encanto no está en el exceso, sino en la atmósfera: piedra, sombra, terrazas, comidas simples y la sensación de volver a una casa privada después de recorrer la costa.",
    "heritage.kicker": "Raito, memoria bañada por el sol",
    "heritage.title": "Un pueblo besado por el sol",
    "heritage.copy": "Raito conserva una antigua promesa de luz. Suspendido entre la roca de la montaña y el Golfo de Salerno, le da a Villa San Vito su carácter tranquilo: piedra, terrazas, aire de mar y la sensación de que el tiempo avanza más despacio.",
    "heritage.copy2": "La casa pertenece a ese paisaje. Su alma del siglo XIX mantiene cerca la arquitectura local: ambientes frescos, pasos exteriores, sombra de jardín y vistas que siempre marcaron la vida sobre Vietri sul Mare.",
    "heritage.caption": "Raito y Vietri en una pintura de 1819 de Josef Rabel.",
    "garden.kicker": "Jardín",
    "garden.title": "La villa se vive afuera",
    "garden.copy": "Terrazas, hojas, silencio y una mesa que invita a quedarse más de lo previsto.",
    "garden.copy2": "Los interiores están para descansar y mantenerse fresco; el recuerdo de la estadía suele hacerse afuera, entre el jardín, la terraza y la vista.",
    "garden.caption": "Sombra de jardín y rincones al aire libre.",
    "day.kicker": "Un día acá",
    "day.title": "Mañana, sombra, luz de tarde",
    "day.morning.label": "Mañana",
    "day.morning.copy": "Abrir las puertas, dejar entrar el Golfo, desayunar sin apuro.",
    "day.afternoon.label": "Tarde",
    "day.afternoon.copy": "Volver de la costa y desaparecer un rato en el jardín.",
    "day.evening.label": "Noche",
    "day.evening.copy": "Quedarse afuera hasta que empiezan a aparecer las luces del pueblo.",
    "photos.kicker": "Atmósfera",
    "photos.title": "Pequeñas señales de la casa",
    "photos.copy": "Una selección tranquila de vistas y detalles recientes: la entrada, el jardín, la terraza, el cielo de noche y una habitación para entender la escala sin convertir la web en un catálogo.",
    "photos.sign.caption": "El cartel de cerámica en la entrada",
    "photos.pot.caption": "Terracota, hojas y el mar a lo lejos",
    "photos.terrace.caption": "Una terraza abierta al Golfo",
    "photos.night.caption": "El jardín después del atardecer",
    "photos.passage.caption": "Un paso de jardín junto a la casa",
    "photos.facade.caption": "Muros blancos, palmeras y luz de mar",
    "photos.window.caption": "Hierro trabajado, sombra y jardín afuera",
    "photos.path.caption": "El camino verde de llegada",
    "photos.gate.caption": "La reja del jardín privado",
    "photos.fireworks.caption": "Luces ocasionales sobre el Golfo",
    "photos.room.caption": "Una habitación simple para descansar",
    "raito.kicker": "Raito",
    "raito.title": "Cerca de la costa, lejos del apuro",
    "raito.copy": "Un pueblo tranquilo sobre Vietri sul Mare, con Amalfi, Ravello, Positano y Salerno al alcance.",
    "raito.copy2": "Desde aquí se puede recorrer la costa durante el día y dejarla atrás por la noche, cuando el pueblo vuelve a estar calmo y el Golfo junta la última luz.",
    "raito.caption": "Hojas de limonero, cielo y el Golfo al fondo.",
    "location.kicker": "Ubicación",
    "location.title": "Raito, sobre Vietri sul Mare",
    "location.copy": "El mapa muestra la zona general de Raito. Los datos exactos de llegada se gestionan desde la plataforma de reserva.",
    "booking.kicker": "Reservas",
    "booking.title": "Reserva desde la plataforma que prefieras",
    "booking.copy": "Este sitio no gestiona reservas directas. La disponibilidad, las políticas y los pagos se manejan externamente.",
    "instagram.copy": "Para ver vistas recientes y momentos cotidianos, seguí a Villa San Vito en",
    "footer.reservations": "Las reservas se gestionan exclusivamente a través de Airbnb, Booking y Vrbo."
  },
  it: {
    skip: "Vai al contenuto",
    "nav.story": "Casa",
    "nav.heritage": "Storia",
    "nav.garden": "Giardino",
    "nav.photos": "Foto",
    "nav.raito": "Raito",
    "nav.location": "Posizione",
    "nav.book": "Prenota",
    "hero.eyebrow": "Raito, sopra il Golfo di Salerno",
    "hero.title": "Villa San Vito",
    "hero.subtitle": "Una casa mediterranea tranquilla per mattine lente, ombra in giardino e aria di mare.",
    "buttons.discover": "Scopri la villa",
    "buttons.platforms": "Link di prenotazione",
    "intro.kicker": "La casa",
    "intro.title": "Non ha il ritmo di un hotel, è una casa sopra il mare",
    "intro.copy": "Villa San Vito è un'antica dimora ottocentesca per giornate che scorrono dolcemente: caffè in terrazza, giardino nelle ore calde, Raito al tramonto e il Golfo sempre sotto.",
    "intro.copy2": "Il suo fascino non è nell'eccesso, ma nell'atmosfera: pietra, ombra, terrazze, pasti semplici e la sensazione di tornare in una casa privata dopo la costa.",
    "heritage.kicker": "Raito, memoria baciata dal sole",
    "heritage.title": "Un borgo baciato dal sole",
    "heritage.copy": "Raito porta con sé un'antica promessa di luce. Sospeso tra la roccia della montagna e il Golfo di Salerno, dona a Villa San Vito il suo carattere quieto: pietra, terrazze, aria di mare e la sensazione che il tempo scorra più lentamente.",
    "heritage.copy2": "La casa appartiene a questo paesaggio. La sua anima ottocentesca conserva l'architettura locale: ambienti freschi, passaggi esterni, ombra del giardino e viste che hanno sempre segnato la vita sopra Vietri sul Mare.",
    "heritage.caption": "Raito e Vietri in un dipinto del 1819 di Josef Rabel.",
    "garden.kicker": "Giardino",
    "garden.title": "La villa si vive fuori",
    "garden.copy": "Terrazze, foglie, silenzio e una tavola che invita a restare più del previsto.",
    "garden.copy2": "Gli interni sono per il riposo e la frescura; il ricordo del soggiorno nasce spesso fuori, tra giardino, terrazza e vista.",
    "garden.caption": "Ombra del giardino e angoli all'aperto.",
    "day.kicker": "Una giornata qui",
    "day.title": "Mattina, ombra, luce della sera",
    "day.morning.label": "Mattina",
    "day.morning.copy": "Aprire le porte, lasciare entrare il Golfo, fare colazione lentamente.",
    "day.afternoon.label": "Pomeriggio",
    "day.afternoon.copy": "Rientrare dalla costa e sparire per un po' in giardino.",
    "day.evening.label": "Sera",
    "day.evening.copy": "Restare fuori finché iniziano ad apparire le luci del borgo.",
    "photos.kicker": "Atmosfera",
    "photos.title": "Piccoli segni della casa",
    "photos.copy": "Una selezione tranquilla di viste e dettagli recenti: l'ingresso, il giardino, la terrazza, il cielo notturno e una camera per capire la scala senza trasformare il sito in un catalogo.",
    "photos.sign.caption": "La targa in ceramica all'ingresso",
    "photos.pot.caption": "Terracotta, foglie e mare in lontananza",
    "photos.terrace.caption": "Una terrazza aperta sul Golfo",
    "photos.night.caption": "Il giardino dopo il tramonto",
    "photos.passage.caption": "Un passaggio in giardino accanto alla casa",
    "photos.facade.caption": "Muri bianchi, palme e luce di mare",
    "photos.window.caption": "Ferro battuto, ombra e giardino fuori",
    "photos.path.caption": "Il percorso verde di arrivo",
    "photos.gate.caption": "Il cancello del giardino privato",
    "photos.fireworks.caption": "Luci occasionali sul Golfo",
    "photos.room.caption": "Una camera semplice per riposare",
    "raito.kicker": "Raito",
    "raito.title": "Vicino alla costa, lontano dalla fretta",
    "raito.copy": "Un borgo tranquillo sopra Vietri sul Mare, con Amalfi, Ravello, Positano e Salerno a portata di mano.",
    "raito.copy2": "Da qui si può esplorare la costa di giorno e lasciarla alle spalle la sera, quando il borgo torna quieto e il Golfo raccoglie l'ultima luce.",
    "raito.caption": "Foglie di limone, cielo e il Golfo sullo sfondo.",
    "location.kicker": "Posizione",
    "location.title": "Raito, sopra Vietri sul Mare",
    "location.copy": "La mappa mostra l'area generale di Raito. I dettagli esatti di arrivo sono gestiti dalla piattaforma di prenotazione.",
    "booking.kicker": "Prenotazioni",
    "booking.title": "Prenota dalla piattaforma che preferisci",
    "booking.copy": "Questo sito non gestisce prenotazioni dirette. Disponibilità, politiche e pagamenti sono gestiti esternamente.",
    "instagram.copy": "Per viste recenti e piccoli momenti, segui Villa San Vito su",
    "footer.reservations": "Le prenotazioni sono gestite esclusivamente tramite Airbnb, Booking e Vrbo."
  }
};

const header = document.querySelector(".site-header");
const languageButtons = document.querySelectorAll("[data-lang]");
const translatableNodes = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  document.documentElement.lang = selectedLanguage;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[selectedLanguage][key];
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

function updateHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

setLanguage(localStorage.getItem("villaSanVitoLanguage") || "en");
