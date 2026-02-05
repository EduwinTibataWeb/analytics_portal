# Analytics Portal – Prueba Técnica CALA Analytics

Autor: Eduwin Alejandro Tibata Bolívar  
Rol: Ingeniero en Sistemas / Desarrollador Junior  
Empresa: CALA Analytics  
Tipo: Prueba Técnica

---

## Descripción del proyecto

Analytics Portal es una aplicación web desarrollada con Django que simula un portal analítico para visualizar métricas de negocio. El proyecto permite listar datos analíticos, aplicar filtros, ordenar información, buscar por palabras clave y añadir nuevos registros mediante una interfaz dinámica.

El enfoque principal fue construir una solución clara, escalable y alineada con buenas prácticas del mercado, priorizando legibilidad, organización del código y experiencia de usuario.

---

## Funcionalidades principales

- Visualización de métricas en tabla
- Búsqueda dinámica por cliente o métrica
- Ordenamiento por columnas (fecha, cliente, métrica, valor)
- Ordenamiento sincronizado entre select y encabezados
- Modal para añadir nuevos datos sin recargar la página
- Gestión de archivos estáticos (CSS, JS, imágenes)
- Estructura escalable para crecimiento futuro

---

## Pasos para ejecutar el proyecto en local

1. Clonar el repositorio
   git clone <url-del-repositorio>
   cd analytics_portal

2. Crear y activar entorno virtual
   python -m venv env
   env\Scripts\activate

3. Instalar dependencias
   pip install -r requirements.txt

4. Ejecutar migraciones
   python manage.py migrate

5. Levantar el servidor
   python manage.py runserver

6. Acceder desde el navegador
   http://127.0.0.1:8000/

---

## Decisiones técnicas tomadas

- Se utilizó Django por su robustez, claridad estructural y facilidad para escalar aplicaciones backend.
- La lógica de filtrado y ordenamiento se implementó en JavaScript para evitar recargas innecesarias y mejorar la experiencia de usuario.
- Se separaron responsabilidades entre backend (datos y renderizado) y frontend (interacción y presentación).
- Se diseñó una estructura de carpetas alineada con estándares de proyectos reales, incluso si no todas las carpetas se usan en esta etapa.
- El modal para añadir datos se implementó de forma nativa para reducir dependencias externas.
- Se mantuvo el código simple, legible y fácilmente mantenible.

---

## Principales aprendizajes

- Importancia de una buena estructura inicial del proyecto para facilitar escalabilidad.
- Sincronización de estado entre componentes del frontend mejora la experiencia de usuario.
- Separar lógica de negocio y presentación reduce complejidad futura.
- Implementar funcionalidades pequeñas pero completas aporta más valor que soluciones complejas sin terminar.
- Documentar correctamente el proyecto facilita su comprensión para otros desarrolladores y evaluadores.

---

## Posibles mejoras futuras

- Persistencia real de datos mediante base de datos
- Integración con BigQuery como fuente de datos analíticos
- Paginación de resultados
- Autenticación de usuarios
- Visualización de métricas mediante gráficos

---

## Notas finales

Este proyecto fue desarrollado como parte de una prueba técnica, enfocándose en buenas prácticas, claridad de código y pensamiento analítico más que en complejidad innecesaria.
