# Analytics Portal – Prueba Técnica Django

Proyecto desarrollado como parte de la prueba técnica para **CALA Analytics**.  
Consiste en un portal analítico simple construido con Django, cuyo objetivo es demostrar buenas prácticas de estructura, separación de responsabilidades y claridad en el flujo backend–frontend, sin persistencia de datos.

**Autor:** Eduwin Alejandro Tibata Bolívar  
**Rol:** Ingeniero en sistemas / Desarrollador Junior  
**Tecnología principal:** Django

---

## Descripción general

Este proyecto implementa un dashboard analítico básico que muestra información tabular simulada desde el backend hacia el frontend, utilizando el sistema de templates de Django.

El enfoque principal no es la complejidad funcional, sino:
- La correcta estructuración del proyecto
- La claridad del código
- El uso de buenas prácticas habituales en proyectos reales
- La facilidad de lectura y evaluación por parte del equipo técnico

---

## Tecnologías utilizadas

- Python 3
- Django
- HTML5
- CSS3
- SQLite (solo configuración por defecto, no utilizada)

---

## Estructura del proyecto

analytics_portal/
├── analytics_portal/        # Configuración principal del proyecto
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── dashboard/               # App principal del proyecto
│   ├── views.py
│   ├── urls.py
│   ├── apps.py
│   └── migrations/
│
├── templates/               # Templates HTML
│   ├── base.html
│   └── dashboard/
│       └── dashboard.html
│
├── static/                  # Archivos estáticos
│   └── css/
│       └── main.css
│
├── manage.py
├── requirements.txt
└── README.md


---

## Decisiones técnicas

### Uso de datos simulados
La aplicación no utiliza base de datos ni modelos.  
Los datos se definen directamente en la vista (`views.py`) como estructuras en memoria, ya que el objetivo del ejercicio es demostrar el flujo Django y no la persistencia.

### Separación de responsabilidades
- La lógica de negocio se mantiene en las vistas.
- El HTML se organiza mediante herencia de templates (`base.html`).
- Los estilos se separan en archivos estáticos usando el sistema `staticfiles` de Django.

### Templates con herencia
Se utiliza un template base para evitar duplicación de código y facilitar la escalabilidad del proyecto, siguiendo prácticas comunes en proyectos Django reales.

---

## Cómo ejecutar el proyecto en local

1. Clonar el repositorio:
git clone https://github.com/EduwinTibataWeb/analytics_portal


2. Crear y activar un entorno virtual:
python -m venv env
env\Scripts\activate


3. Instalar dependencias:
pip install -r requirements.txt


4. Ejecutar el servidor:
python manage.py runserver


5. Abrir en el navegador:
http://127.0.0.1:8000/


---

## Notas importantes

- El archivo `db.sqlite3` no es utilizado; Django lo genera automáticamente por defecto.
- No se incluyen variables de entorno ni archivos sensibles en el repositorio.
- El proyecto está preparado para escalar agregando modelos, nuevas apps o conexión a base de datos si fuera requerido.

---

## Conclusión

Este proyecto refleja un enfoque ordenado, claro y profesional para una prueba técnica de nivel junior, priorizando la estructura, la mantenibilidad y la comprensión del flujo completo de una aplicación Django.

---

Desarrollado por  
**Eduwin Alejandro Tibata Bolívar**  
Prueba técnica – CALA Analytics