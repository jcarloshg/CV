**Row Level Security (RLS)**, o Seguridad a Nivel de Fila, es una característica nativa de PostgreSQL (la base de datos que usa Supabase) que actúa como un "cadenero" o guardia de seguridad en la puerta de tus tablas de datos.

En bases de datos tradicionales, los permisos suelen ser a nivel de tabla (ej. "Este usuario puede leer la tabla `ordenes`"). **RLS**, en cambio, te permite definir reglas para **filas individuales** dentro de esa tabla (ej. "Este usuario solo puede leer las filas de la tabla `ordenes` donde él sea el comprador").

### ¿Por qué es crucial en Supabase?

Supabase tiene una arquitectura peculiar: te permite conectar tu aplicación frontend (React, Vue, iOS) **directamente** a la base de datos a través de una API pública.

Si no existiera RLS, cualquier persona con tu clave pública de Supabase podría hacer una consulta y descargar _toda_ tu base de datos o borrarla.

Al activar RLS, le dices a la base de datos: _"No confíes en nadie, excepto en las reglas que yo defina usando el token de autenticación del usuario"_.

### ¿Cómo funciona en la práctica?

Supabase enlaza su sistema de autenticación (Supabase Auth) directamente con PostgreSQL. Cuando un usuario inicia sesión, recibe un token (JWT). Cuando tu frontend hace una consulta a la base de datos, envía ese token.

PostgreSQL extrae el ID del usuario de ese token usando una función especial llamada `auth.uid()`, y luego evalúa la regla (Policy) que tú escribiste.

### Ejemplo Práctico (SQL)

Imagina que tienes una tabla llamada `notas` con columnas `id`, `contenido`, y `user_id`.

**1. Activar RLS en la tabla:**

```sql
ALTER TABLE notas ENABLE ROW LEVEL SECURITY;

```

_(Si solo haces esto, la tabla se vuelve invisible y bloqueada para todo el mundo)._

**2. Crear una Política (Policy) para Leer (SELECT):**

```sql
CREATE POLICY "Los usuarios pueden ver sus propias notas"
ON notas
FOR SELECT
USING ( auth.uid() = user_id );

```

Con esta política, si el usuario "Juan" hace un `SELECT * FROM notas`, PostgreSQL filtrará automáticamente la respuesta y **solo** le devolverá las filas donde `user_id` coincida con el ID de Juan. Las notas de otros usuarios simplemente no existen para él.

---

### Tipos de Políticas (Policies)

Puedes (y debes) crear políticas separadas para cada acción que un usuario pueda realizar en tu tabla:

| Acción SQL | Propósito                   | Cláusula que se usa                                        |
| ---------- | --------------------------- | ---------------------------------------------------------- |
| **SELECT** | Leer datos existentes.      | `USING`                                                    |
| **INSERT** | Crear nuevas filas.         | `WITH CHECK` (Verifica antes de guardar)                   |
| **UPDATE** | Modificar filas existentes. | `USING` (para encontrarla) y `WITH CHECK` (para validarla) |
| **DELETE** | Borrar filas.               | `USING`                                                    |

### Resumen

- **El Problema:** El frontend tiene acceso directo a la base de datos.
- **La Solución:** RLS asegura que cada usuario solo interactúe con los datos que le pertenecen, directamente a nivel de base de datos, sin necesidad de programar un servidor backend intermedio en Node.js o Python para validar los permisos.

**¿Te gustaría que te ayude a escribir una política RLS específica para alguna tabla que estés diseñando en tu proyecto?**
