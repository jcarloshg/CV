# Ciclo de vida ETL

### 1. Direct Answer: Las 3 Etapas del Ciclo

- **Extracción (Extract):** Se obtienen los datos crudos de diversas fuentes (APIs, bases de datos transaccionales, archivos logs, CRMs).
- **Transformación (Transform):** Es el "cerebro" del proceso. Aquí se limpian, filtran, validan y formatean los datos para que sigan las reglas de negocio.
- **Carga (Load):** Los datos procesados se insertan en el destino final, generalmente un **Data Warehouse** (como BigQuery) o un **Data Lake**.

---

### 2. El "Why" (Arquitectura)

El ciclo de vida existe para garantizar la **integridad** y **estandarización**. Si conectaras directamente tus herramientas de BI (como Tableau o PowerBI) a tus bases de datos de producción (OLTP), las consultas analíticas pesadas ralentizarían la aplicación y los datos estarían "sucios" (fechas en diferentes formatos, IDs duplicados, etc.). El ETL actúa como la **capa de abstracción y limpieza**.

---

### 3. Analogías para Desarrolladores

Piensa en el ciclo de vida de ETL como un **Pipeline de Renderizado** o un **Compilador**:

- **Extracción $\approx$ Lectura de código fuente:** Abres los archivos `.py` o `.js` de disco.
- **Transformación $\approx$ Compilación/Transpilación:** Conviertes ese código en algo que la máquina entiende (bytecode) o minificas archivos CSS/JS. Eliminas lo que no sirve y optimizas.
- **Carga $\approx$ Despliegue (Deploy):** Envías el binario o los estáticos al servidor donde finalmente se ejecutarán (el Warehouse).

---

### 4. Acción: Anatomía de un Script ETL (Python)

Aquí tienes un ejemplo minimalista de cómo se ve el ciclo en código:

```python
import pandas as pd
from sqlalchemy import create_engine

# 1. EXTRACTION: Leer de una DB transaccional (Postgres)
engine_source = create_engine('postgresql://user:pass@localhost:5432/app_db')
df = pd.read_sql("SELECT id, user_email, price, created_at FROM orders", engine_source)

# 2. TRANSFORMATION: Lógica de negocio y limpieza
df['created_at'] = pd.to_datetime(df['created_at'])
df['user_domain'] = df['user_email'].str.split('@').str[1]  # Extraer dominio
df_clean = df[df['price'] > 0]  # Filtrar basura

# 3. LOAD: Cargar al Data Warehouse (BigQuery/Snowflake)
engine_dest = create_engine('snowflake://...')
df_clean.to_sql('fact_orders', engine_dest, if_exists='append', index=False)

```

---

### 5. Common Anti-Patterns

- **Transformar en la etapa de Carga:** Intentar hacer cálculos complejos dentro del comando de inserción. Separa la lógica: primero transforma en memoria o en una tabla temporal, luego carga.
- **No manejar errores de extracción:** Si la API de origen cae, tu pipeline no debe colapsar en silencio. Debes implementar **Retry Logic** (reintentos).
- **Omitir el registro de metadatos (Logging):** Un pipeline senior siempre guarda registro de: ¿Cuántas filas extraje? ¿Cuántas fallaron la transformación? ¿Cuánto tardó la carga?
