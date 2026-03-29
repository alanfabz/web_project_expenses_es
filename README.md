# Gestor de Gastos (Vanilla JS)

Convierte un diseño estático en una aplicación funcional para **registrar gastos**, **asignar un presupuesto** y **obtener estadísticas** en tiempo real (totales, promedio, saldo, desglose por categoría y categoría más grande).

## Qué puedes hacer

- **Asignar presupuesto** y ver el **saldo** actualizado automáticamente.
- **Crear nuevos gastos** desde un modal (categoría + importe).
- **Eliminar gastos** individualmente desde la lista.
- Ver **estadísticas generales**:
  - Gastos totales
  - Gasto promedio
  - Saldo (con color de estado)
- Ver **estadísticas por categoría** y la **categoría con mayor gasto**.
- **Persistencia local**: conserva presupuesto y lista de gastos con `localStorage`.
- **Reset seguro** con el botón **“Borrar todo”** (limpia `localStorage` y restaura los gastos iniciales).

## Cómo usar

1. Escribe un número en **Presupuesto** y pulsa **Asignar**.
2. Pulsa **Nuevo gasto** para abrir el modal, completa los campos y pulsa **Agregar**.
3. Elimina cualquier gasto con el botón de papelera en cada fila.
4. Si necesitas volver al estado inicial, pulsa **Borrar todo**.

## Ejecutar en local

Este proyecto es estático (HTML/CSS/JS). Para evitar problemas con rutas y para trabajar cómodamente, se recomienda levantar un servidor local.

### Opción A: Python (recomendado)

```bash
python3 -m http.server 5173
```

Luego abre:

```
http://localhost:5173/
```

### Opción B: Live Server (VS Code)

- Abre la carpeta del proyecto.
- Ejecuta “Open with Live Server”.

## Estructura del proyecto

- [index.html](./index.html): marcado principal y modal.
- [pages/index.css](./pages/index.css): hoja principal que importa estilos por bloques.
- [blocks/](./blocks): estilos por componente (enfoque tipo BEM).
- [scripts/calculations.js](./scripts/calculations.js): **estado y cálculos** (fuente de verdad).
- [scripts/handle-html.js](./scripts/handle-html.js): **DOM + eventos** (pintado y handlers).
- [scripts/index.js](./scripts/index.js): **persistencia** (`localStorage`) y bootstrap.

## Modelo de datos (gastos)

Los gastos viven en `expenseEntries` como un **array anidado** donde cada entrada tiene:

```js
["categoria", 12.5]
```

Categorías soportadas (claves internas):

- `groceries` (Comida)
- `restaurants` (Comer fuera)
- `transport` (Transporte)
- `home` (Hogar)
- `subscriptions` (Suscripciones)

## Cálculos principales

El estado se apoya en dos valores base:

- `budgetValue`: presupuesto total.
- `totalExpensesValue`: suma de todos los importes en `expenseEntries`.

Desde ahí se derivan:

- **Promedio**: `totalExpensesValue / expenseEntries.length` (devuelve `0` si no hay gastos).
- **Saldo**: `budgetValue - totalExpensesValue`.
- **Color del saldo**:
  - rojo: saldo negativo
  - naranja: saldo < 25% del presupuesto
  - verde: resto de casos
- **Totales por categoría**: suma filtrando por clave de categoría.
- **Categoría más grande**: categoría con el total más alto.

## Persistencia

Se guardan en `localStorage`:

- `budgetValue`
- `expenseEntries` (serializado con `JSON.stringify`)

El botón **“Borrar todo”** limpia `localStorage` y restaura el estado inicial.

## Tecnologías

- HTML5
- CSS (organización por bloques)
- JavaScript (Vanilla)
- `localStorage` para persistencia

## Créditos

Proyecto realizado como práctica de lógica y manipulación del DOM.
