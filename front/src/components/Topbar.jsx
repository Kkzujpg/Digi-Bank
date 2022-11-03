import { Box, IconButton, Typography, Avatar } from '@mui/material';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Topbar = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
      <Box sx={{ display: 'flex' }}>
        <AccountBalanceIcon
          sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#E0E1DD' }}
        />
        <Typography
          variant='h6'
          noWrap
          component='a'
          sx={{
            ml: 1,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Source Sans Pro',
            fontWeight: 700,
            color: '#E0E1DD',
            textDecoration: 'none',
          }}
        >
          DigiBank
        </Typography>
        <AccountBalanceIcon
          sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#E0E1DD' }}
        />
        <Typography
          variant='h5'
          noWrap
          component='a'
          href=''
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'Source Sans Pro',
            fontWeight: 700,
            color: '#E0E1DD',
            textDecoration: 'none',
          }}
        >
          DigiBank
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <IconButton sx={{ p: 0 }}>
          <Avatar alt='Remy Sharp' src='https://picsum.photos/200' />
        </IconButton>
        <IconButton sx={{ display: 'flex' }}>
          <LogoutTwoToneIcon style={{ color: '#E0E1DD' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
