// EDIT TEXTS: update multilingual copy here. Keep keys aligned with data-i18n attributes in index.html.
const translations = {
  en: {
    skip: "Skip to content",
    "nav.story": "Story",
    "nav.garden": "Garden",
    "nav.raito": "Raito",
    "nav.book": "Reserve",
    "hero.eyebrow": "Raito, above the Gulf of Salerno",
    "hero.title": "Villa San Vito",
    "hero.subtitle": "A quiet Mediterranean house for slow mornings, garden shade and sea air.",
    "buttons.discover": "Enter slowly",
    "buttons.platforms": "Reservation links",
    "intro.kicker": "The house",
    "intro.title": "Not a hotel rhythm. A home above the sea.",
    "intro.copy": "Villa San Vito is for days that move gently: coffee on the terrace, the garden in the warm hours, Raito at sunset, and the Gulf always below.",
    "garden.kicker": "Garden",
    "garden.title": "The villa lives outside.",
    "garden.copy": "Terraces, leaves, silence and a table that invites you to stay longer than planned.",
    "garden.caption": "Garden shade and open-air corners.",
    "day.kicker": "A day here",
    "day.title": "Morning, shade, evening light.",
    "day.morning.label": "Morning",
    "day.morning.copy": "Open the doors, let the Gulf in, take breakfast slowly.",
    "day.afternoon.label": "Afternoon",
    "day.afternoon.copy": "Return from the coast and disappear into the garden.",
    "day.evening.label": "Evening",
    "day.evening.copy": "Stay outside until the village lights begin to appear.",
    "raito.kicker": "Raito",
    "raito.title": "Close to the coast, away from the rush.",
    "raito.copy": "A quiet village above Vietri sul Mare, with Amalfi, Ravello, Positano and Salerno within reach.",
    "raito.caption": "Lemon leaves, sky and the Gulf beyond.",
    "booking.kicker": "Reservations",
    "booking.title": "Book through the platform you prefer.",
    "booking.copy": "This site does not manage direct reservations. Availability, policies and payments are handled externally.",
    "footer.reservations": "Reservations are managed exclusively through Airbnb, Booking and Vrbo."
  },
  es: {
    skip: "Saltar al contenido",
    "nav.story": "Historia",
    "nav.garden": "Jardín",
    "nav.raito": "Raito",
    "nav.book": "Reservar",
    "hero.eyebrow": "Raito, sobre el Golfo de Salerno",
    "hero.title": "Villa San Vito",
    "hero.subtitle": "Una casa mediterránea tranquila para mañanas lentas, sombra de jardín y aire de mar.",
    "buttons.discover": "Entrar despacio",
    "buttons.platforms": "Links de reserva",
    "intro.kicker": "La casa",
    "intro.title": "No tiene ritmo de hotel. Es una casa sobre el mar.",
    "intro.copy": "Villa San Vito es para días que avanzan suave: café en la terraza, jardín en las horas cálidas, Raito al atardecer y el Golfo siempre abajo.",
    "garden.kicker": "Jardín",
    "garden.title": "La villa se vive afuera.",
    "garden.copy": "Terrazas, hojas, silencio y una mesa que invita a quedarse más de lo previsto.",
    "garden.caption": "Sombra de jardín y rincones al aire libre.",
    "day.kicker": "Un día acá",
    "day.title": "Mañana, sombra, luz de tarde.",
    "day.morning.label": "Mañana",
    "day.morning.copy": "Abrir las puertas, dejar entrar el Golfo, desayunar sin apuro.",
    "day.afternoon.label": "Tarde",
    "day.afternoon.copy": "Volver de la costa y desaparecer un rato en el jardín.",
    "day.evening.label": "Noche",
    "day.evening.copy": "Quedarse afuera hasta que empiezan a aparecer las luces del pueblo.",
    "raito.kicker": "Raito",
    "raito.title": "Cerca de la costa, lejos del apuro.",
    "raito.copy": "Un pueblo tranquilo sobre Vietri sul Mare, con Amalfi, Ravello, Positano y Salerno al alcance.",
    "raito.caption": "Hojas de limonero, cielo y el Golfo al fondo.",
    "booking.kicker": "Reservas",
    "booking.title": "Reserva desde la plataforma que prefieras.",
    "booking.copy": "Este sitio no gestiona reservas directas. La disponibilidad, las políticas y los pagos se manejan externamente.",
    "footer.reservations": "Las reservas se gestionan exclusivamente a través de Airbnb, Booking y Vrbo."
  },
  it: {
    skip: "Vai al contenuto",
    "nav.story": "Storia",
    "nav.garden": "Giardino",
    "nav.raito": "Raito",
    "nav.book": "Prenota",
    "hero.eyebrow": "Raito, sopra il Golfo di Salerno",
    "hero.title": "Villa San Vito",
    "hero.subtitle": "Una casa mediterranea tranquilla per mattine lente, ombra in giardino e aria di mare.",
    "buttons.discover": "Entra piano",
    "buttons.platforms": "Link di prenotazione",
    "intro.kicker": "La casa",
    "intro.title": "Non ha il ritmo di un hotel. È una casa sopra il mare.",
    "intro.copy": "Villa San Vito è per giornate che scorrono dolcemente: caffè in terrazza, giardino nelle ore calde, Raito al tramonto e il Golfo sempre sotto.",
    "garden.kicker": "Giardino",
    "garden.title": "La villa si vive fuori.",
    "garden.copy": "Terrazze, foglie, silenzio e una tavola che invita a restare più del previsto.",
    "garden.caption": "Ombra del giardino e angoli all'aperto.",
    "day.kicker": "Una giornata qui",
    "day.title": "Mattina, ombra, luce della sera.",
    "day.morning.label": "Mattina",
    "day.morning.copy": "Aprire le porte, lasciare entrare il Golfo, fare colazione lentamente.",
    "day.afternoon.label": "Pomeriggio",
    "day.afternoon.copy": "Rientrare dalla costa e sparire per un po' in giardino.",
    "day.evening.label": "Sera",
    "day.evening.copy": "Restare fuori finché iniziano ad apparire le luci del borgo.",
    "raito.kicker": "Raito",
    "raito.title": "Vicino alla costa, lontano dalla fretta.",
    "raito.copy": "Un borgo tranquillo sopra Vietri sul Mare, con Amalfi, Ravello, Positano e Salerno a portata di mano.",
    "raito.caption": "Foglie di limone, cielo e il Golfo sullo sfondo.",
    "booking.kicker": "Prenotazioni",
    "booking.title": "Prenota dalla piattaforma che preferisci.",
    "booking.copy": "Questo sito non gestisce prenotazioni dirette. Disponibilità, politiche e pagamenti sono gestiti esternamente.",
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
