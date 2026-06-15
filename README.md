# devpilots

## Analitica privada con Umami

Este proyecto incluye Umami en `docker-compose.yml` para contar visitas sin cookies y sin pedir ubicacion exacta al navegador.

1. Copia las variables de ejemplo:

   ```bash
   cp .env.example .env
   ```

2. Cambia `UMAMI_DB_PASSWORD` y `UMAMI_APP_SECRET` por valores seguros.

3. Levanta el sitio y Umami:

   ```bash
   docker compose up -d --build
   ```

4. Entra al panel de Umami en el puerto `3006` de tu servidor, crea el website de DevPilots y copia el `Website ID`.

5. Actualiza `.env`:

   ```bash
   UMAMI_WEBSITE_ID=tu-website-id
   UMAMI_SCRIPT_URL=https://devpilots.duckdns.org/umami/script.js
   ```

   Si no tienes proxy para `/umami`, puedes apuntar temporalmente al puerto directo:

   ```bash
   UMAMI_SCRIPT_URL=https://devpilots.duckdns.org:3006/script.js
   ```

6. Reinicia el contenedor web:

   ```bash
   docker compose up -d --build web
   ```

Umami muestra visitas, paginas vistas, referidos, navegador, dispositivo y ubicacion aproximada por IP. No usa geolocalizacion precisa del navegador.
