# Villa San Vito - contexto para continuar

## Proyecto activo

Ruta actual:

`C:\Users\vitos\OneDrive\Escritorio\Villa San Vito`

Es un sitio estático sin backend. Archivos principales:

- `index.html`
- `villa-a-raito.html`
- `villa-vietri-sul-mare.html`
- `esplorare-costiera-amalfitana.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `assets/images/`

## Estado actual

- Landing principal editorial, mediterránea y responsive.
- Tres landings internas livianas en HTML separado para SEO y navegación interna:
  - `villa-a-raito.html`
  - `villa-vietri-sul-mare.html`
  - `esplorare-costiera-amalfitana.html`
- Idiomas: italiano, inglés y español.
- Toda modificación visible debe aplicarse en los tres idiomas dentro de `script.js`.
- Reservas derivadas a Airbnb, Booking y Vrbo. El sitio no gestiona pagos ni reservas directas.
- Google Tag Manager `GTM-KV229NML` y Google Analytics `G-ZSSL3DCMM5` instalados.
- Eventos comerciales GA4/GTM en `script.js`: `booking_platform_click`, `contact_click`, `social_click` y `language_change`.
- Bloque comercial “Perché Villa San Vito” añadido antes de `Prenotazioni`.
- Bloque `Approfondimenti` añadido en la home para enlazar las landings internas.
- `robots.txt` y `sitemap.xml` añadidos y actualizados con las páginas internas.
- No quedan carruseles ni galerías desplazables: las fotos visibles son bloques fijos.
- `styles.css` y `script.js` llevan versión de caché `20260929-3`.

## Estructura principal de la home

1. Storia
2. Territorio
3. Approfondimenti
4. Villa
5. Esterni
6. Servizi
7. Perché scegliere Villa San Vito
8. Prenotazioni

## Imágenes importantes

- Portada: `assets/images/hero-villa-facade-main.jpg`
- Storia: `raito-history.jpg` y `territory-ravello-village.png`
- Territorio:
  - `territory-exploring-coast.jpg`
  - `territory-ravello-terrace-busts.png`
  - `territory-pompeii-amphitheatre.png`
  - `territory-paestum-temples.jpg`
- Villa:
  - `villa-dining-arch.jpg`
  - `villa-living-staircase.jpg`
  - `villa-dining-table.png`
  - `villa-bedroom-green.png`
  - `villa-bedroom-turquoise.png`
  - `villa-study-fireplace.jpg`
- Esterni:
  - `outdoors-garden-corner-photo.jpg`
  - `outdoors-blue-bench-photo.jpg`
  - `outdoors-night-gulf-view.png`
  - `outdoors-palm-garden-sea.png`
  - `outdoors-terrace-dining-sea.jpg`
- Servizi:
  - `services-amalfi-map.jpg`
  - `villa-sign.jpg`
  - `pets-welcome.jpg`
- Marca para páginas internas: `brand-mark.png`

## Entrega actual

ZIP:

`C:\Users\vitos\OneDrive\Escritorio\Villa San Vito\Villa-San-Vito-site.zip`

Después de nuevas modificaciones:

1. Comprobar sintaxis de `script.js`.
2. Revisar imágenes rotas y referencias locales.
3. Probar claves `data-i18n` en los tres idiomas.
4. Verificar `sitemap.xml`.
5. Regenerar `Villa-San-Vito-site.zip`.
