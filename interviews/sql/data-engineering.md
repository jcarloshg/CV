### 1. Direct Answer: El Top 5 de SQL Analítico

- **Window Functions (`OVER`, `PARTITION BY`):** Para realizar cálculos complejos (rankings, promedios móviles, diferencias entre filas) sin colapsar el performance con self-joins.
- **Common Table Expressions (CTEs):** Para escribir código modular, legible y jerárquico. Olvida los sub-selects anidados.
- **Estrategias de Agregación y Pivot:** Dominar `GROUP BY`, `HAVING` y transformar filas en columnas (y viceversa) para reportes.
- **Cualificación de Datos y Deduplicación:** Técnicas para limpiar datos sucios, como usar `ROW_NUMBER()` para eliminar registros duplicados de una ingesta.
- **Optimización Columnar:** Entender cómo funcionan los índices, las particiones (`PARTITION BY`) y el clustering en bases de datos como BigQuery o Snowflake.

---

### 2. El "Why"

En una base de datos OLTP (como PostgreSQL), el objetivo es la integridad. En un Data Warehouse (OLAP), el SQL es tu **lenguaje de transformación de negocio**. Un buen SQL en ingeniería de datos debe ser:

1. **Legible:** Otros ingenieros mantendrán tus transformaciones.
2. **Escalable:** Debe ejecutarse igual de bien en 1,000 filas que en 1,000 millones.
3. **Declarativo:** Tú le dices al motor _qué_ resultado quieres, y el optimizador decide _cómo_ escanear los petabytes de datos.

---

### 3. Analogías para Desarrolladores

- **Window Functions $\approx$ MapReduce local:** Es como hacer un `.map()` o un `.reduce()` sobre un subconjunto de una lista en Python, pero ejecutado directamente en el motor de la base de datos a una velocidad increíble.
- **CTEs $\approx$ Variables/Funciones:** En lugar de tener un archivo de código gigante con lógica anidada, usas CTEs para crear "variables de tabla" temporales que hacen que el flujo de datos sea lineal (de arriba hacia abajo).
- **Particionamiento $\approx$ Sharding de Base de Datos:** Es dividir físicamente los datos en el disco (por ejemplo, por `fecha`) para que cuando hagas una consulta, el motor "salte" directamente a la carpeta correcta y no lea todo el disco duro.

---

### 4. Acción: Ejemplo de Window Function (Deduplicación)

Este es el "pan de cada día". Supongamos que recibiste datos duplicados de una API y necesitas quedarte solo con la versión más reciente de cada orden:

```sql
WITH ranked_orders AS (
    SELECT
        order_id,
        status,
        updated_at,
        -- Creamos un ranking por cada order_id, ordenado por la fecha más reciente
        ROW_NUMBER() OVER (
            PARTITION BY order_id
            ORDER BY updated_at DESC
        ) as row_num
    FROM raw_events
)

-- Filtramos para quedarnos solo con la fila "1" (la más nueva)
SELECT * FROM ranked_orders
WHERE row_num = 1;

```

---

### 5. Common Anti-Patterns

- **`SELECT *`:** En bases de datos columnares (BigQuery/Snowflake), esto es un pecado capital. Pagas por la cantidad de datos que lees. Si la tabla tiene 200 columnas y solo usas 3, estás tirando dinero de la empresa.
- **Correlated Subqueries:** Usar un `SELECT` dentro de otro `SELECT` que se ejecuta por cada fila. Esto destruye el paralelismo. Usa **JOINs** o **CTEs**.
- **No usar Particiones en el `WHERE`:** Hacer una consulta a una tabla de 5 años sin filtrar por la columna de partición (ej. `WHERE fecha > '2023-01-01'`). Esto provoca un "Full Table Scan", que es lento y costoso.

¿Te gustaría que hiciéramos un ejercicio práctico donde transformemos un esquema **Normalizado** (muchas tablas pequeñas) a uno **Denormalizado** (Star Schema) usando SQL? Sería un gran paso para tu mentalidad de Data Engineer.
