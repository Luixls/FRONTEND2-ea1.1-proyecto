import React, { useState } from 'react';
import ListaProductos from './componentes/ListaProductos';
import FormularioProducto from './componentes/FormularioProducto';
import Notificacion from './componentes/Notificacion';

function App() {
  const [filtro, setFiltro] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleProductoAgregado = () => {
    setMensaje('Producto agregado exitosamente');
    setTimeout(() => setMensaje(''), 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Inventario</h1>

      {mensaje && <Notificacion mensaje={mensaje} tipo="success" />}

      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Buscar productos" 
          className="border p-2 w-full" 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select 
          className="border p-2 w-full mt-2"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="Electronica">Electrónica</option>
          <option value="Ropa">Ropa</option>
          <option value="Hogar">Hogar</option>
        </select>
      </div>

      <FormularioProducto onProductoAgregado={handleProductoAgregado} />
      <ListaProductos filtro={filtro} busqueda={busqueda} />
    </div>
  );
}

export default App;
