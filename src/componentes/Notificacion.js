import React from 'react';

const Notificacion = ({ mensaje, tipo }) => {
  const color = tipo === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className={`${color} text-white p-4 rounded shadow-lg fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-1/3 text-center`}>
      {mensaje}
    </div>
  );
};

export default Notificacion;
