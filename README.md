# Portfolio - Dylan Salazar

Sitio web de portfolio personal desarrollado con React y TypeScript. Incluye secciones de presentación, habilidades, proyectos y contacto.

## Tecnologías utilizadas

### Core
- **React 17** — Librería principal de UI
- **TypeScript** — Tipado estático
- **React Router v6** + **React Router Hash Link** — Navegación y scroll suave entre secciones

### Estilos
- **Styled Components** — CSS-in-JS para estilos por componente

### Formulario de contacto
- **@formspree/react** — Gestión y envío del formulario de contacto
- **validator** — Validación de formato de email
- **react-toastify** — Notificaciones de éxito/error

### Animaciones y efectos visuales
- **react-animate-on-scroll** — Animaciones al hacer scroll
- **react-tsparticles** — Efectos de partículas en el fondo
- **animate.css** (CDN) — Clases de animación CSS

### Analytics y despliegue
- **@vercel/analytics** — Seguimiento de visitas
- **Vercel** — Plataforma de despliegue recomendada

### Herramientas de desarrollo
- **Create React App (react-scripts)** — Configuración del proyecto y scripts de build
- **ESLint** — Linting integrado con CRA

## Instalación y uso

```bash
# Instalar dependencias
npm install --legacy-peer-deps

# Iniciar servidor de desarrollo
npm start

# Generar build de producción
npm run build
```

> Se usa `--legacy-peer-deps` por un conflicto de peerDependencies entre React 17 y `@vercel/analytics`.

## Estructura del proyecto

```
src/
├── assets/         # Íconos SVG, imágenes y PDFs
├── components/
│   ├── Header/     # Navegación y toggle de tema
│   ├── Hero/       # Sección de presentación
│   ├── About/      # Sobre mí y habilidades
│   ├── Project/    # Galería de proyectos
│   ├── Contact/    # Información de contacto
│   ├── Form/       # Formulario de contacto
│   └── Footer/     # Pie de página
├── styles/         # Estilos globales
└── @types/         # Definiciones de tipos personalizadas
```

## Variables de entorno

Este proyecto no requiere variables de entorno. El ID de Formspree está configurado directamente en `src/components/Form/Form.tsx`.
