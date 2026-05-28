# Villa San Vito - Landing estática

Landing page estática y de bajo mantenimiento para Villa San Vito, ubicada en Raito, Vietri sul Mare, Campania, Italia.

El sitio es únicamente informativo. No gestiona reservas directas, pagos, datos de tarjeta, calendarios de disponibilidad, usuarios ni panel de administración. Los botones de reserva derivan a Airbnb, Booking o Vrbo.

## Criterio editorial

La landing está diseñada para sentirse más cercana a una pieza editorial mediterránea que a una ficha de reserva. Prioriza atmósfera, paisaje, terrazas, jardín, vistas, detalles y ritmo lento.

Evita volver a poner como eje principal camas, baños, números, fichas técnicas o grillas extensas de interiores. Los detalles prácticos deben quedar resumidos y derivar a Airbnb, Booking y Vrbo.

La estructura actual sigue las macroareas pedidas por el cliente:

- A. Storia
- B. Villa
- C. Camere
- D. Esterni
- E. Posizione
- F. Prenota / Contattaci

La referencia tipografica se acerco a Masseria Moroseta usando las familias web `Raleway`, `Fira Mono` y `Tinos`.

## Estructura

```text
/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── images/
```

## Editar contenido

- El sitio abre por defecto en italiano.
- Los textos en italiano, español e ingles estan en `script.js`, dentro del objeto `translations`.
- Para mantener el sitio simple, edita esos archivos directamente y vuelve a publicar.

## Reemplazar imágenes

El sitio ya usa fotos reales copiadas en `assets/images/`. Quedan algunos SVG como respaldo o placeholders, pero la landing principal apunta a archivos `.jpg`.

Imagenes activas en la landing:

- `hero-terrace-sea-view.jpg`
- `terrace-gulf-chair.jpg`
- `white-facade-palms.jpg`
- `private-garden.jpg`
- `villa-sign.jpg`
- `raito-history.jpg`
- `quiet-bedroom.jpg`

El resto de imagenes en `assets/images/` queda disponible como archivo de respaldo, pero no forma parte de la landing actual.

Cuando el cliente envie fotos nuevas, conviene reemplazar los archivos activos manteniendo el mismo nombre para no tocar HTML. Para una foto de propietarios/familia, puede agregarse una nueva imagen a la seccion `B. Villa`.

Puedes hacerlo de dos formas:

1. Reemplazar cada JPG por otra foto usando el mismo nombre.
2. Exportar las fotos como WebP o JPG, por ejemplo `hero-terrace-sea-view.webp`, y actualizar los atributos `src` y `data-full` correspondientes.

Tamaños sugeridos:

- Hero: 1600 a 2200 px de ancho.
- Secciones editoriales: 1200 a 1800 px de ancho.
- Open Graph: actualmente usa `hero-terrace-sea-view.jpg`; puedes crear una versión 1200 x 630 px si quieres más control.

Mantén siempre textos `alt` descriptivos en `index.html`.

La landing actual usa pocas imagenes grandes: vista, historia de Raito, jardin y limonero. Si agregas nuevas fotos, intenta conservar ese criterio para que no parezca una ficha inmobiliaria ni una ficha tipo Booking.

## Cambiar links de reserva

Los links de reserva están en `index.html`.

Links actuales:

- Airbnb: `http://airbnb.com/h/costieraamalfitanavillasanvito`
- Booking: `https://www.booking.com/hotel/it/villa-san-vito-raito18.es.html?aid=318615&label=New_Italian_IT_IT_21439071025-UNZN0NGydu%2Ab2jBBcXOAlgSM640938613103%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg-IRmxiX5%401778943127&sid=8b3a113a5c9da800ff83762e83291d77&dest_id=-132243&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1779191673&srpvid=97bf53bc6be919a9&type=total&ucfs=1&`
- Vrbo: `https://www.vrbo.com/11912594ha`
- Instagram: `https://www.instagram.com/villasanvitomanagement/`

Todos los links externos deben conservar:

```html
target="_blank" rel="noopener noreferrer"
```

## Cambiar crédito del footer

El footer incluye:

```html
Powered by <a href="mailto:vitosavoia12@gmail.com">Vito Savoia</a>
```

Para cambiar el crédito o el email, busca `footer-credit` en `index.html`.

Ejemplo:

```html
Powered by <a href="mailto:hello@example.com">Nombre Apellido</a>
```

## Cambiar Google Maps

Busca el iframe dentro de la sección `Location` en `index.html`.

Reemplaza el valor de `src` por otra URL embed de Google Maps si quieres cambiar la zona mostrada. El sitio muestra el área general de Raito, Vietri sul Mare; no publica la dirección exacta.

## SEO

Antes de publicar, revisa en `index.html`:

- Canonical URL: agrega un `<link rel="canonical" href="URL_FINAL">` cuando tengas el dominio final.
- Open Graph image path
- JSON-LD `image`
- Cualquier URL pública final del dominio

No agregues precios, teléfonos ni dirección exacta salvo que estén confirmados y sean datos pensados para mostrarse públicamente.

## Publicar en Netlify

1. Crea una cuenta en Netlify.
2. Arrastra la carpeta del proyecto a Netlify Drop o conecta un repositorio Git.
3. Usa la configuración estática por defecto. No hace falta build command.
4. Si Netlify pregunta por el directorio de publicación, usa la raíz del proyecto.

## Publicar en Vercel

1. Crea una cuenta en Vercel.
2. Importa el repositorio Git o sube el proyecto.
3. Framework preset: Other.
4. Build command: dejar vacío.
5. Output directory: dejar vacío o usar la raíz del proyecto.

## Publicar en un hosting estático común

Sube estos archivos al directorio público del hosting:

- `index.html`
- `styles.css`
- `script.js`
- `assets/images/`

La página funciona sin backend.
