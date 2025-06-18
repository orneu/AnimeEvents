# Documentación del Sistema - Proyecto Convenciones Anime

# 1. Descripción
Aplicación backend que permite gestionar convenciones y eventos de anime, facilitando el registro de usuarios (otakus), la administración de eventos y la inscripción de asistentes. El sistema ofrece funcionalidades para consultar eventos, gestionar la participación de usuarios y generar información relevante para la organización.

---

# 2. Funcionalidades desarrolladas
- **Registro y autenticación de usuarios (otakus): Registro de nuevos usuarios y login seguro mediante JWT.
- **Gestión de eventos de anime: Crear, modificar, listar y eliminar eventos con datos como nombre, fecha, lugar y descripción.
- **Gestión de asistencia: Inscripción de otakus a eventos y consulta de asistentes por evento.
- **Consultas cruzadas: Listar eventos a los que un otaku está inscrito y obtener los otakus que asistirán a un evento.
- **Validaciones y manejo de errores: Validación de datos obligatorios y respuestas claras con códigos HTTP adecuados.

---


# 3. Tecnologías usadas
- Node.js con Express para el servidor HTTP.
- MongoDB con Mongoose para la persistencia de datos.
- JSON Web Tokens (JWT) para la autenticación y seguridad.
- dotenv para manejo de variables de entorno.

---


## 4. Endpoints disponibles

### 4.1 Registro y autenticación

| Método | Ruta                  | Descripción                   | Autenticación | Datos requeridos                      |
|--------|-----------------------|------------------------------|---------------|-------------------------------------|
| POST   | `/api/auth/register`  | Registra un nuevo otaku       | No            | `{ nombre, dni, edad, password }`    |
| POST   | `/api/auth/login`     | Login y generación de token   | No            | `{ dni, password }`                  |

---

### 4.2 Gestión de eventos

| Método | Ruta                     | Descripción                          | Autenticación | Datos requeridos                        |
|--------|--------------------------|-------------------------------------|---------------|---------------------------------------|
| GET    | `/api/events`            | Lista todos los eventos              | Opcional      | Ninguno                               |
| GET    | `/api/events/:id`        | Obtiene un evento por ID             | Opcional      | Ninguno                               |
| POST   | `/api/events`            | Crea un nuevo evento                 | Sí            | `{ nombre, lugar, fecha, asistentes? }` |
| PUT    | `/api/events/:id`        | Actualiza un evento existente        | Sí            | Campos a actualizar                   |
| DELETE | `/api/events/:id`        | Elimina un evento                    | Sí            | Ninguno                               |

---

### 4.3 Gestión de otakus

| Método | Ruta                   | Descripción                          | Autenticación | Datos requeridos                   |
|--------|------------------------|------------------------------------|---------------|----------------------------------|
| GET    | `/api/otakus`          | Lista todos los otakus              | Opcional      | Ninguno                         |
| GET    | `/api/otakus/:id`      | Obtiene un otaku por ID             | Opcional      | Ninguno                         |

---

### 4.4 Consultas relacionales

| Método | Ruta                        | Descripción                                   | Autenticación | Datos requeridos |
|--------|-----------------------------|----------------------------------------------|---------------|------------------|
| GET    | `/api/events/:id/otakus`    | Lista otakus inscritos a un evento            | Opcional      | Ninguno          |
| GET    | `/api/otakus/:id/events`    | Lista eventos a los que asiste un otaku       | Opcional      | Ninguno          |

---


# 5. Diagrama UML

![Diagrama UML](./public/ANIME-EVENTS.png)

