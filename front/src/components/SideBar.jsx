import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export var urlapi = '';

const SideBar = () => {
  const [value, setValue] = React.useState('todo');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  if (value === 'todo') {
    urlapi = 'http://localhost:3050/api/productos';
  } else if (value === 'hipotecario') {
    urlapi = 'http://localhost:3050/api/productos/filtro/hipotecario';
  } else if (value === 'automotor') {
    urlapi = 'http://localhost:3050/api/productos/filtro/automotor';
  } else if (value === 'vista') {
    urlapi = 'http://localhost:3050/api/productos/filtro/vista';
  } else if (value === 'jovenes') {
    urlapi = 'http://localhost:3050/api/productos/filtro/jovenes';
  } else if (value === 'standard') {
    urlapi = 'http://localhost:3050/api/productos/filtro/standard';
  } else if (value === 'premium') {
    urlapi = 'http://localhost:3050/api/productos/filtro/premium';
  } else if (value === 'carro') {
    urlapi = 'http://localhost:3050/api/productos/filtro/carro';
  } else if (value === 'camioneta') {
    urlapi = 'http://localhost:3050/api/productos/filtro/camioneta';
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ minWidth: 230, borderRadius: '20px' }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 18 }}
            color='#1B263B'
            textAlign={'center'}
            gutterBottom
          >
            Filtros
          </Typography>

          <FormControl>
            <FormLabel
              label={
                <Typography variant='body2' color='textSecondary'></Typography>
              }
              id='demo-radio-buttons-group-label'
            >
              Tipo de producto:
            </FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='todo'
              name='radio-buttons-group'
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value='todo'
                control={<Radio />}
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Todo
                  </Typography>
                }
              />
              <FormControlLabel
                value='hipotecario'
                control={<Radio />}
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Prestamo hipotecario
                  </Typography>
                }
              />
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Prestamo automotor
                  </Typography>
                }
                value='automotor'
                control={<Radio />}
              />
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Cuentas vista
                  </Typography>
                }
                value='vista'
                control={<Radio />}
              />
              <FormLabel
                label={
                  <Typography
                    variant='body2'
                    color='textSecondary'
                  ></Typography>
                }
                id='demo-radio-buttons-group-label'
              >
                Segmentos:
              </FormLabel>
              <FormControlLabel
                value='jovenes'
                control={<Radio />}
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Jovenes
                  </Typography>
                }
              />
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Standard
                  </Typography>
                }
                value='standard'
                control={<Radio />}
              />
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Premium
                  </Typography>
                }
                value='premium'
                control={<Radio />}
              />
              <FormLabel
                label={
                  <Typography
                    variant='body2'
                    color='textSecondary'
                  ></Typography>
                }
                id='demo-radio-buttons-group-label'
              >
                Tipo de vehiculo:
              </FormLabel>
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Carro
                  </Typography>
                }
                value='carro'
                control={<Radio />}
              />
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Camioneta
                  </Typography>
                }
                value='camioneta'
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
};
console.log(urlapi);

export default SideBar;
