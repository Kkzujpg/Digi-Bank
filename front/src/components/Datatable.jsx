import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Datatable = ({ rows, columns }) => {
  return (
    <DataGrid fontFamily={'Source Sans Pro'} rows={rows} columns={columns} />
  );
};

export default Datatable;
