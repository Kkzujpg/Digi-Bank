import React, { useEffect, useState } from 'react';
import Datatable from './Datatable';

const columns = [
  { field: 'id', headerName: 'id', width: 80 },
  { field: 'nombre_p', headerName: 'Nombre del producto', width: 180 },
  { field: 'monto_max', headerName: 'Monto Maximo', width: 150 },
  { field: 'nombre', headerName: 'Tipo de producto', width: 200 },
];
const UserTable = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3050/productos')
      .then((response) => response.json())
      .then((json) => setProductos(json));
  }, []);
  return (
    <Datatable
      rows={productos}
      columns={columns}
      fontFamily={'Source Sans Pro'}
    />
  );
};

export default UserTable;
