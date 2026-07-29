# Mini Message Board 💬

Una aplicación web Full-Stack construida con Node.js y Express que funciona como un tablón de anuncios dinámico. Este proyecto forma parte del currículo de The Odin Project y ha sido expandido para incluir operaciones CRUD completas y un diseño moderno "Dark Mode".

![Vista previa del proyecto](Enlace_a_una_captura_de_pantalla_de_tu_app_aqui.png)

## 🚀 Enlace en Vivo
[Visita la aplicación desplegada en Render aquí](https://message-board-app-trhc.onrender.com)

## ✨ Características Principales

- **Arquitectura MVC:** Separación clara entre la lógica del servidor (Rutas/Controladores) y la interfaz de usuario (Vistas).
- **CRUD Completo:** Los usuarios pueden **C**rear nuevos mensajes, **L**eer el feed principal, **A**ctualizar textos desde la vista detallada y **E**liminar publicaciones.
- **Persistencia de Datos (Enfoque File System):** Los mensajes se guardan en el servidor leyendo y escribiendo sobre un archivo físico.
- **Diseño UI/UX Premium:** Interfaz construida desde cero utilizando CSS puro, variables de diseño, avatares generados dinámicamente y estados *hover* interactivos.
- **Rutas Dinámicas:** Uso de parámetros de URL (`/message/:id`) para generar vistas únicas para cada mensaje.

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, EJS (Embedded JavaScript templating)
- **Almacenamiento:** Módulo `fs` (File System) nativo de Node.js + Archivo JSON
- **Despliegue:** Render

## 🧠 Decisiones Técnicas y Aprendizajes

### ¿Por qué implementar un CRUD completo?
El requerimiento original del proyecto solo pedía listar y agregar mensajes (Read y Create). Sin embargo, decidí escalar la aplicación a un CRUD completo añadiendo las funciones de Editar (Update) y Eliminar (Delete). Esto transforma un simple ejercicio de formularios en el ciclo de vida real de los datos que se encuentra en casi cualquier producto de software moderno, manejando la lógica para buscar por IDs y modificar arreglos en memoria.

### ¿Por qué usar un archivo JSON como Base de Datos?
Antes de saltar a integrar bases de datos relacionales robustas (como PostgreSQL), opté por un enfoque más rústico y fundamental: utilizar un archivo `messages.json` manipulado a través del módulo `fs` de Node.js. 

**Ventajas de este enfoque en esta etapa:**
1. **Comprender el flujo real de datos:** Permite entender cómo el servidor debe extraer, parsear, modificar y sobrescribir información en el disco duro para lograr la persistencia real más allá de la memoria RAM.
2. **Cero dependencias externas:** Mantiene el proyecto ligero y enfocado puramente en la lógica de Express y JavaScript.

*Nota sobre el despliegue:* Dado que la aplicación está alojada en un entorno gratuito de Render, el sistema utiliza discos efímeros. Esto significa que los mensajes creados o editados funcionarán perfectamente en la sesión, pero el archivo JSON se restablecerá a su estado original cada vez que el servidor se duerma por inactividad.

## 💻 Instalación y Uso Local

Si deseas correr este proyecto en tu propia máquina, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/TuUsuario/message-board.git](https://github.com/Tomas2439/message-board.git)
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd message-board
   ```
3. Instala las dependencias usando pnpm (o npm):
   ```bash
   pnpm install
   ```
4. Inicia el servidor local:
   ```bash
   node app.js
   ```
5. Abre tu navegador web y visita: `http://localhost:10000`

## 🤝 Créditos
Desarrollado como parte del currículo de [The Odin Project](https://www.theodinproject.com/).
