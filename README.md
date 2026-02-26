# Mini-proyecto 1: Planificador de Estudio (Frontend)

Este proyecto propone construir un producto digital (interfaz web frontend) que permita gestionar el proceso de planificación de los estudiantes universitarios de forma clara, eficiente y centrada en las personas usuarias, especialmente cuando surgen imprevistos.

## Pre-requisitos

Asegúrate de tener instalados los siguientes programas antes de comenzar:
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- Angular CLI (se puede instalar globalmente con `npm install -g @angular/cli`)

## 🛠️ Paso a Paso: Cómo Ejecutar el Proyecto Siempre

Para abrir y ejecutar tu aplicación en modo desarrollo, siempre debes seguir estos pasos:

1. **Abre tu Terminal (CMD, PowerShell o la terminal de VS Code).**
2. **Navega a la carpeta principal del frontend (`FE`):**
   ```bash
   cd C:/xampp/htdocs/LOL/FE
   ```
   *(Asegúrate de ajustar la ruta si cambiaste de lugar la carpeta).*

3. **Instala las dependencias (Solo si es la primera vez o añadiste algún paquete):**
   ```bash
   npm install
   ```

4. **Inicia el Servidor de Desarrollo:**
   ```bash
   npm start
   ```
   *(También puedes usar `ng serve` si tienes Angular de manera global).*

5. **Abre el proyecto en tu navegador:**
   Ingresa a la siguiente dirección en Chrome, Edge o Firefox:
   > **[http://localhost:4200/](http://localhost:4200/)**

La aplicación se recargará automáticamente si realizas y guardas cambios en cualquier archivo fuente.

## 🔌 Conectar con un Backend en Django (Próximos Pasos)

El proyecto en Angular está preparado con `provideHttpClient()` para hacer peticiones HTTP. Cuando el Backend en Django esté listo en `http://localhost:8000`:
1. Habilita CORS en el proyecto Django.
2. Crea `Services` en Angular para hacer peticiones tipo GET/POST hacia Django (`HttpClient.get()`).
3. Sustituye los datos de ejemplo del Dashboard (mocks en el código HTML) por los datos que retorna el servicio.

## 📂 Estructura Principal
- `src/app/app.html` y `app.css` -> Layout base del Planificador Web con la barra lateral.
- `src/app/components/dashboard` -> Vista de Inicio (Tarjetas de progreso, resumen semanal).
- `src/app/components/activities` -> Gestor de actividades evaluativas (Tabla con filtros).
- `src/app/app.routes.ts` -> Manejo de las rutas de la aplicación.
