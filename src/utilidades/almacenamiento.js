export const obtenerProductos = () => {
  const productos = localStorage.getItem('productos');
  return productos ? JSON.parse(productos) : [];
};

export const guardarProductos = (productos) => {
  localStorage.setItem('productos', JSON.stringify(productos));
};
