import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Datatable = ({ rows, columns, setbody }) => {
  const getBody = (event) => setbody(event);
  return (
    <DataGrid
      fontFamily={'Source Sans Pro'}
      rows={rows}
      columns={columns}
      onCellEditCommit={(e) => getBody(e)}
    />
  );
};

export default Datatable;
