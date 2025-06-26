#  Documentación del Proyecto – AnimeEvents


## 1.  Descripción General


*AnimeEvents* es una aplicación backend que permite gestionar *convenciones de anime, facilitando el registro y autenticación de otakus, la organización de eventos y la inscripción de participantes. Está desarrollada con **Node.js, **MongoDB* y una *arquitectura modular* para separar responsabilidades de manera clara.


El objetivo es brindar una plataforma para administrar eventos de cultura otaku y brindar herramientas útiles tanto a organizadores como a asistentes.


> 🔗 *Deploy del sistema*: [https://animeevents-2tln.onrender.com](https://animeevents-2tln.onrender.com)


---


## 2.  Casos de Uso Desarrollados


### ✅ 1. Gestión de Eventos
- Crear, modificar y eliminar eventos.
- Consultar todos los eventos y buscar por ID.


### ✅ 2. Gestión de Usuarios (Otakus)
- Registro y login con autenticación JWT.
- Consultar lista de otakus y datos individuales.


### ✅ 3. Inscripción a Eventos
- Otakus se pueden inscribir a eventos.
- Consultar quiénes asistirán a un evento o a cuáles se ha inscrito un otaku.


### ✅ 4. Consultas Relacionales
- Obtener los eventos vinculados a un otaku.
- Obtener los asistentes vinculados a un evento.






---


## 3.  Tecnologías usadas


- Node.js con Express para el servidor HTTP.
- MongoDB con Mongoose para la persistencia de datos.
- JSON Web Tokens (JWT) para la autenticación y seguridad.
- dotenv para manejo de variables de entorno.


---


## 4.  Estructura del Proyecto


```sh 
AnimeEvents/
├── 📂 src/
│   ├── 📂 controllers/
│   ├── 📂 routes/
│   ├── 📂 services/
│   ├── 📂 repositories/
│   ├── 📂 models/
│   ├── 📂 config/
│   ├── 📂 tests/
│   └── server.js
├── 📂 docs/
│   └── ANIME-EVENTS.png (diagrama UML)
├── 📂 public/
├── .env
├── package.json
├── README.md
```


---


## 5.  Diagrama UML


![Diagrama UML](./public/ANIME-EVENTS.png)


---


## 6.  Endpoints del Sistema


###  Autenticación
| Método | Endpoint               | Descripción           |
|--------|------------------------|------------------------|
| POST   | /api/auth/register   | Registro de otaku     |
| POST   | /api/auth/login      | Login (JWT)           |


###  Eventos
| Método | Endpoint               | Descripción                   |
|--------|------------------------|-------------------------------|
| GET    | /api/events          | Listar todos los eventos      |
| GET    | /api/events/:id      | Obtener evento por ID         |
| POST   | /api/events          | Crear evento (auth)           |
| PUT    | /api/events/:id      | Modificar evento (auth)       |
| DELETE | /api/events/:id      | Eliminar evento (auth)        |


###  Otakus
| Método | Endpoint               | Descripción                   |
|--------|------------------------|-------------------------------|
| GET    | /api/otakus          | Listar todos los otakus       |
| GET    | /api/otakus/:id      | Obtener otaku por ID          |


###  Consultas Cruzadas
| Método | Endpoint                             | Descripción                           |
|--------|--------------------------------------|---------------------------------------|
| GET    | /api/events/:id/otakus             | Lista de otakus inscritos a un evento |
| GET    | /api/otakus/:id/events             | Eventos a los que va un otaku         |


---


## 7.  Pruebas


El proyecto incluye pruebas unitarias y validaciones para garantizar integridad del sistema:


- Validación de campos obligatorios
- Gestión de errores con respuestas HTTP adecuadas
- Pruebas para casos no felices como:
  - Registro sin nombre
  - Login con contraseña incorrecta


---


# 8. Funcionalidades desarrolladas
- **Registro y autenticación de usuarios (otakus): Registro de nuevos usuarios y login seguro mediante JWT.
- **Gestión de eventos de anime: Crear, modificar, listar y eliminar eventos con datos como nombre, fecha, lugar y descripción.
- **Gestión de asistencia: Inscripción de otakus a eventos y consulta de asistentes por evento.
- **Consultas cruzadas: Listar eventos a los que un otaku está inscrito y obtener los otakus que asistirán a un evento.
- **Validaciones y manejo de errores: Validación de datos obligatorios y respuestas claras con códigos HTTP adecuados.