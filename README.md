# Villa San Vito - Landing estática

Landing informativa y de bajo mantenimiento para Villa San Vito, en Raito, Vietri sul Mare, Campania.

El sitio no gestiona reservas directas, pagos, calendarios, usuarios ni datos de tarjetas. Las reservas se derivan a Airbnb, Booking y Vrbo.

## Criterio editorial

La landing prioriza la atmósfera mediterránea, la historia, el territorio, la casa, los exteriores y la hospitalidad. Evita presentar la propiedad como una ficha de reservas.

La estructura actual sigue estas macroáreas:

- A. Storia
- B. Territorio
- C. Villa
- D. Esterni
- E. Servizi
- F. Prenotazioni

El sitio utiliza `Tinos` para titulares, `Raleway` para texto y `Fira Mono` para etiquetas y navegación.

## Estructura

```text
/
├── index.html
├── styles.css
├── script.js
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
└── assets/
    └── images/
```

## Editar contenido

- El sitio abre por defecto en italiano.
- Los textos en italiano, español e inglés están en `script.js`, dentro de `translations`.
- Cada nuevo texto visible debe tener su versión en los tres idiomas.
- Los textos alternativos de las imágenes y las etiquetas `aria-label` localizadas también se gestionan desde `translations`.
- Las secciones y el contenido base están en `index.html`.
- La presentación visual y las adaptaciones móviles están en `styles.css`.

## Imágenes

Las imágenes activas se encuentran en `assets/images/`. Entre los archivos incorporados recientemente:

- La ilustración de marca está incrustada en `index.html` y se muestra ampliada a la izquierda del título principal.
- La fotografía del bloque “Chi siamo” está incrustada directamente en `index.html` para evitar pérdidas de archivos al publicar o descomprimir el sitio.
- La portada utiliza `hero-villa-facade-main.jpg` como imagen principal.
- Se retiró `loading="lazy"` de las fotos para evitar placeholders o textos alternativos visibles durante la carga.
- `Storia` muestra la impresión antigua `raito-history.jpg` después del primer párrafo y `territory-ravello-village.png` después del texto “Villa San Vito custodisce...”.
- `Territorio` presenta bloques editoriales sin carrusel: `territory-exploring-coast.jpg`, `territory-ravello-terrace-busts.png` después del texto sobre historia antigua y el par `territory-pompeii-amphitheatre.png` + `territory-paestum-temples.jpg` al final de “Archeologia e storia...”.
- La sección `Villa` muestra el texto en un bloque compacto y una grilla fija de detalles interiores, sin carrusel, con `villa-dining-table.png`, `villa-bedroom-green.png` y `villa-bedroom-turquoise.png` añadidas al riquadro.
- `Esterni` usa el título “Oltre le mura, l'esperienza continua” y muestra cinco fotografías intercaladas una por párrafo, sin carrusel. La banca activa es `outdoors-blue-bench-photo.jpg`; la última foto de vista costera fue reemplazada por `outdoors-palm-garden-sea.png`.
- El mapa de `Collegamenti` está en `services-amalfi-map.jpg`, el bloque de estacionamiento muestra `villa-sign.jpg` y la foto de mascotas está en `pets-welcome.jpg`.
- `lemon-books.jpg`
- `fireplace-map.jpg`
- `stair-detail.jpg`
- `villa-sign-detail.jpg`
- `lantern.jpg`
- `lemon-view.jpg`
- `raito-history.jpg`
- `white-facade-palms.jpg`
- `villa-dining-arch.jpg`
- `villa-living-staircase.jpg`
- `villa-dining-table.png`
- `villa-bedroom-green.png`
- `villa-bedroom-turquoise.png`
- `villa-study-fireplace.jpg`
- `villa-bedroom-blue.jpg`
- `terrace-gulf-chair.jpg`

Las primeras imágenes de la selección editorial se encuentran en:

- `hero-villa-facade-main.jpg`
- `villa-dining-arch.jpg`
- `villa-living-staircase.jpg`
- `villa-study-fireplace.jpg`
- `outdoors-garden-corner-photo.jpg`
- `outdoors-blue-bench-photo.jpg`

Para reemplazar una foto sin modificar el HTML, exporta la nueva imagen en JPG o PNG y conserva exactamente el mismo nombre. Se recomienda:

- Secciones editoriales: entre 1200 y 1800 px de ancho.
- Fotografías optimizadas para web, idealmente por debajo de 500 KB cuando sea posible.

Mantén siempre textos `alt` descriptivos en `index.html`.

No quedan carruseles ni galerías desplazables: las fotografías visibles son bloques fijos dentro de cada sección.

## Caché de recursos

`index.html` incluye una versión en las referencias a `styles.css` y `script.js`. Al publicar cambios en esos archivos, conviene actualizar el valor de `?v=` para evitar que los navegadores reutilicen una versión anterior.

## Servicios

La sección `Servizi` reúne:

- Fechas de apertura.
- Traslados y excursiones por tierra o mar.
- Estacionamiento interno gratuito.
- Política Pet Friendly.
- Correo de contacto.

Los servicios premium se informan como sujetos a reserva previa y suplemento.

## Links

Los enlaces se editan en `index.html`.

- Airbnb: `http://airbnb.com/h/costieraamalfitanavillasanvito`
- Booking: enlace completo incluido en el HTML.
- Vrbo: `https://www.vrbo.com/11912594ha`
- Instagram: `https://www.instagram.com/villasanvitomanagement/`
- Facebook: `https://www.facebook.com/villasanvitomanagement`
- Email: `info.villasanvito@libero.it`

Los enlaces externos deben conservar:

```html
target="_blank" rel="noopener noreferrer"
```

## SEO

Antes de publicar, revisar en `index.html`:

- URL canónica definitiva.
- Imagen Open Graph.
- Datos estructurados JSON-LD.
- URLs públicas del dominio.

No agregar precios, teléfonos ni dirección exacta salvo confirmación expresa del cliente.

## Publicación

El sitio funciona sin backend. Para publicarlo, subir a la raíz pública:

- `index.html`
- `styles.css`
- `script.js`
- favicons
- carpeta `assets/`

Puede alojarse directamente en Netlify, Vercel o cualquier hosting de archivos estáticos.

## Google Tag Manager

El contenedor `GTM-KV229NML` está instalado en `index.html`, con el script dentro de `<head>` y el bloque `noscript` inmediatamente después de la apertura de `<body>`.

La etiqueta directa de Google Analytics `G-ZSSL3DCMM5` también está instalada en `<head>` mediante `gtag.js`.
