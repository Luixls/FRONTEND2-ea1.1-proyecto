
# Gestión de Inventario - Aplicación Web

## Descripción del Proyecto

Esta es una aplicación web interactiva de **Gestión de Inventario** que permite al usuario agregar, eliminar, editar, filtrar y buscar productos en tiempo real. La información de los productos se guarda en el **LocalStorage**, lo que significa que los datos persisten incluso si la página se recarga.

### Funcionalidades

1. **Agregar Productos**: Los usuarios pueden agregar nuevos productos al inventario con la siguiente información:
   - **Nombre** del producto
   - **Categoría** (opciones: Ropa, Electrónica, Hogar)
   - **Cantidad** de productos

2. **Eliminar Productos**: Los usuarios pueden eliminar productos del inventario. Los productos eliminados desaparecen de la interfaz y se borran del almacenamiento local.

3. **Editar Productos**: Los usuarios pueden editar el nombre, la categoría y la cantidad de un producto existente. Los cambios se guardan en el inventario y en el almacenamiento local.

4. **Filtrar Productos**: Los usuarios pueden filtrar los productos por categoría (Ropa, Electrónica o Hogar) para ver solo los productos de esa categoría.

5. **Buscar Productos**: Los usuarios pueden buscar productos por su nombre utilizando una barra de búsqueda.

### Diseño Responsivo

El diseño está optimizado para dispositivos móviles, tabletas y pantallas más grandes utilizando **Tailwind CSS** para el diseño responsivo. Los elementos de la interfaz, como la lista de productos y los formularios, se ajustan automáticamente según el tamaño de la pantalla.

## Lógica de Programación

### Estructura de Archivos

El proyecto está organizado de la siguiente manera (sin contar los archivos que React genera por defecto):

```bash
src/
├── componentes/
│   ├── FormularioProducto.js
│   ├── ListaProductos.js
│   ├── Notificacion.js
├── modelos/
│   └── Producto.js
├── utilidades/
│   └── almacenamiento.js
├── App.js
```

### Explicación del Código

1. **`App.js`**:
   - Este archivo es el componente principal de la aplicación que maneja todo el estado y la lógica principal.
   - Contiene el estado global de la lista de productos, así como las funciones para agregar, editar y eliminar productos.
   - También maneja el estado de búsqueda y filtrado de productos.
   - Al agregar, eliminar o editar un producto, se actualiza el estado y se sincroniza el **LocalStorage** para asegurar la persistencia de los datos.

2. **`componentes/FormularioProducto.js`**:
   - Este componente es responsable del formulario de agregar y editar productos.
   - Si se está editando un producto, el formulario muestra los datos actuales del producto y permite al usuario guardar los cambios.
   - El formulario maneja tres campos: **Categoría** (un dropdown con opciones), **Nombre** y **Cantidad**.
   - Cuando el formulario se envía, llama a la función correspondiente (agregar o editar) desde `App.js`.

3. **`componentes/ListaProductos.js`**:
   - Este componente se encarga de mostrar la lista de productos en la interfaz.
   - Recibe la lista de productos desde `App.js` y los filtra según la búsqueda o la categoría seleccionada.
   - Cada producto en la lista tiene botones para **editar** y **eliminar**.
   - Al hacer clic en el botón "Editar", el producto se carga en el formulario de `FormularioProducto.js` para su edición.

4. **`componentes/Notificacion.js`**:
   - Este componente muestra mensajes de notificación en la parte inferior de la página cuando se agrega, edita o elimina un producto.
   - La notificación tiene una posición fija (`fixed`) en la parte inferior de la pantalla y desaparece automáticamente después de unos segundos.

5. **`modelos/Producto.js`**:
   - Este archivo define el modelo **Producto**, que es una clase que se usa para crear nuevos productos.
   - La clase **Producto** tiene las siguientes propiedades: `id`, `nombre`, `categoria`, y `cantidad`.

6. **`utilidades/almacenamiento.js`**:
   - Este archivo contiene funciones que manejan el almacenamiento en **LocalStorage**.
   - **`obtenerProductos`**: Recupera la lista de productos guardada en LocalStorage.
   - **`guardarProductos`**: Guarda la lista de productos actualizada en LocalStorage.

### Flujo de Funcionalidad

1. **Agregar Producto**:
   - Cuando el usuario llena el formulario y envía los datos, la función `handleProductoAgregado` en `App.js` se ejecuta.
   - Un nuevo objeto **Producto** es creado y se agrega al estado de `productos`, y luego se guarda en **LocalStorage**.
   - El producto aparece inmediatamente en la lista de productos sin recargar la página.

2. **Eliminar Producto**:
   - Al hacer clic en el botón "Eliminar" junto a un producto, la función `handleEliminarProducto` en `App.js` filtra el producto del estado y actualiza el **LocalStorage**.
   - El producto desaparece de la lista en tiempo real.

3. **Editar Producto**:
   - Al hacer clic en "Editar" junto a un producto, los datos del producto se cargan en el formulario.
   - El usuario puede modificar el nombre, la categoría o la cantidad y guardar los cambios.
   - El producto se actualiza en el estado y en el **LocalStorage**.

4. **Filtrar y Buscar**:
   - La función de **filtrado** permite mostrar solo productos de una categoría específica.
   - La **búsqueda** permite encontrar productos cuyo nombre coincida parcial o completamente con el término de búsqueda ingresado.
   - Ambos filtros se aplican en tiempo real, sin necesidad de recargar la página.

### Dependencias

- **React**: Framework principal para construir la interfaz de usuario.
- **Tailwind CSS**: Librería para el diseño responsivo y estilizado de componentes.
- **LocalStorage API**: Utilizada para la persistencia de datos en el navegador.

### Cómo instalar y ejecutar el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/Luixls/FRONTEND2-ea1.1-proyecto
```

2. Instala las dependencias necesarias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm start
```

4. El proyecto es ejecutado en [http://localhost:3000](http://localhost:3000).
