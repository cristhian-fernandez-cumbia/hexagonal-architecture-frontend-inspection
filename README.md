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
      - createInspection.ts
			- deleteInspection.ts
			- getAllInspections.ts
			- getInspectionById.ts
			- updateInspection.ts
    - domain
      - Collaborator.ts
			- Inspection.ts
			- InspectionItem.ts
			- InspectionRepository.ts
			- Inspector.ts
    - infrastructure
      - LocalStorageRepository.ts
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

## Pruebas Unitarias

Las pruebas unitarias se encuentran en la carpeta `tests` del proyecto.

### Pruebas para Módulos de Inspección

Para ejecutar las pruebas para el dominio de las inspecciones, puedes utilizar el siguiente comando:
`npx jest tests/modules/Inspections/domain/Inspection.spec.ts`


### Pruebas para el Formulario de Inspección

Las pruebas para el formulario de inspección se encuentran en la carpeta `tests/sections/inspection`. Para ejecutar estas pruebas, utiliza el siguiente comando:
`npx jest tests/sections/inspection/InspectionForm.spec.tsx`

## Ejecución del Proyecto

Para ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio.
2. Abre una terminal en la raíz del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Luego, ejecuta el comando `npm run dev` para iniciar la aplicación.
5. Abra su navegador y navegue a la URL proporcionada para ver la aplicación en funcionamiento.

¡Espero disfrute del proyecto!!!