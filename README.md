# Proyecto de Inspección

Este proyecto utiliza la arquitectura hexagonal DDD (Domain Driven Design) y está desarrollado con ReactJS y TypeScript, utilizando Vite como herramienta de construcción. Se enfoca en la gestión de inspecciones, proporcionando una interfaz de usuario intuitiva y un diseño centrado en el usuario. Además, se han implementado pruebas unitarias para garantizar la calidad del código.

## Estructura del Proyecto

El proyecto sigue una estructura organizada que facilita la comprensión y mantenimiento del código. A continuación, se presenta una vista general de la estructura de archivos y carpetas:

```plaintext
- assets
  - fonts
  - images
- components
  - button
  - footer
  - header
  - modal
- hooks
- modules
  - inspection
    - application
    - domain
    - infrastructure
- sections
  - Home
    - Home.tsx
  - Inspection
    - InspectionList.tsx
    - Inspection.tsx
    - InspectionCard.tsx
    - InspectionDelete.tsx
    - InspectionForm.tsx
    - InspectionsContext.tsx
    - useInspectionForm.ts
    - useInspectionFormData.ts
- styles
  - home.module.css
  - inspection.module.css
  - inspectionForm.module.css
  - modal.module.css
- App.css
- App.tsx
- index.css
- main.tsx
```

## Ejecución del Proyecto
Para ejecutar el proyecto localmente, siga estos pasos:

1. Ejecute npm install para instalar todas las dependencias necesarias.
2. Ejecute npm run dev para iniciar el servidor de desarrollo.
3. Abra su navegador y navegue a la URL proporcionada para ver la aplicación en funcionamiento.