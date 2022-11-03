import { Box, Typography } from '@mui/material';
import Topbar from './components/Topbar';
import SideBar from './components/SideBar';
import UserTable from './components/UserTable';

function App() {
  return (
    <Box className='home'>
      <Topbar />
      <Box className='home_wrap'>
        <Box className='home_sideBar'>
          <SideBar />
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
          <UserTable />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
