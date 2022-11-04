import React, { useEffect, useState } from 'react';
import Datatable from './Datatable';
import { urlapi } from './SideBar';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'nombre_p', headerName: 'Nombre del producto', width: 180 },
  { field: 'monto_max', headerName: 'Monto Maximo', width: 150 },
  { field: 'nombre', headerName: 'Tipo de producto', width: 160 },
  { field: 'valor_prestamo', headerName: 'Valor del prestamo', width: 150 },
  { field: 'n_cuotas', headerName: 'Cuotas', width: 100 },
  { field: 'nombre_activo', headerName: 'Tipo de activo', width: 148 },
  { field: 'divisa', headerName: 'Divisa', width: 80 },
];

const UserTable = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch(urlapi)
      .then((response) => response.json())
      .then((json) => setProductos(json));
  }, []);

  return <Datatable rows={productos} columns={columns} />;
};

export default UserTable;
