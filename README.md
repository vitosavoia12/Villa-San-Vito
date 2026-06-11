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
- Las secciones y el contenido base están en `index.html`.
- La presentación visual y las adaptaciones móviles están en `styles.css`.

## Imágenes

Las imágenes activas se encuentran en `assets/images/`. Entre los archivos incorporados recientemente:

- `brand-mark.png`: ilustración de marca del encabezado.
- `family-hosts.jpg`: fotografía del bloque “Chi siamo”.
- `villa-facade.jpg`: primera imagen del carrusel.
- `villa-interior-arch.jpg`
- `lemon-books.jpg`
- `fireplace-map.jpg`
- `stair-detail.jpg`
- `villa-sign-detail.jpg`
- `lantern.jpg`
- `lemon-view.jpg`
- `raito-history.jpg`
- `white-facade-palms.jpg`
- `terrace-gulf-chair.jpg`

Para reemplazar una foto sin modificar el HTML, exporta la nueva imagen en JPG o PNG y conserva exactamente el mismo nombre. Se recomienda:

- Carrusel: mínimo 1200 px en el lado largo.
- Secciones editoriales: entre 1200 y 1800 px de ancho.
- Fotografías optimizadas para web, idealmente por debajo de 500 KB cuando sea posible.

Mantén siempre textos `alt` descriptivos en `index.html`.

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
