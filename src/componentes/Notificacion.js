import React from 'react';

const Notificacion = ({ mensaje, tipo }) => {
  const color = tipo === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className={`${color} text-white p-4 rounded`}>
      {mensaje}
    </div>
  );
};

export default Notificacion;
