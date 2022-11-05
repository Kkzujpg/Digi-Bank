import { Box, Typography } from '@mui/material';
import Topbar from './components/Topbar';
import SideBar from './components/SideBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/Theme';
import Datatable from './components/Datatable';
import Guardar from './components/Guardar';
import { useEffect, useState } from 'react';

function App() {
  const [rowId, setRowId] = useState(null);
  const [body, setBody] = useState(null);
  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'nombre_p',
      headerName: 'Nombre del producto',
      width: 180,
      editable: true,
      sortable: false,
    },
    { field: 'monto_max', headerName: 'Monto Maximo', width: 130 },
    { field: 'nombre', headerName: 'Tipo de producto', width: 160 },
    { field: 'valor_prestamo', headerName: 'Valor del prestamo', width: 150 },
    { field: 'n_cuotas', headerName: 'Cuotas', width: 70 },
    {
      field: 'nombre_activo',
      headerName: 'Tipo de activo',
      width: 129,
      sortable: false,
      editable: true,
    },
    { field: 'divisa', headerName: 'Divisa', width: 80 },
    {
      field: 'Acciones',
      headerName: 'Acciones',
      type: 'Acciones',
      renderCell: (params) => (
        <Guardar {...{ params, rowId, setRowId, setProductos, body }} />
      ),
    },
  ];
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3050/api/productos')
      .then((response) => response.json())
      .then((json) => setProductos(json));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box className='home'>
        <Topbar />
        <Box className='home_wrap'>
          <Box className='home_sideBar'>
            <SideBar setList={setProductos} />
          </Box>
          <Box className='home_dashBoard'>
            <Typography
              variant='h4'
              color={'#E0E1DD'}
              bgcolor={'black'}
              borderRadius={'50px'}
              textAlign={'center'}
              padding={'5px'}
              fontFamily={'Source Sans Pro'}
            >
              DigiBank Dashboard
            </Typography>
            <Typography
              variant='h6'
              color={'#1B263B'}
              padding={'5px'}
              paddingLeft={'15px'}
              fontFamily={'Source Sans Pro'}
            >
              Sección de productos de DigiBank
            </Typography>
            <Datatable
              columns={columns}
              rows={productos}
              setbody={setBody}
            ></Datatable>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
