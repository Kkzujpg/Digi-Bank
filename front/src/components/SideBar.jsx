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

const SideBar = ({ setList }) => {
  const [value, setValue] = React.useState('api/productos');

  const handleChange = (event) => {
    setValue(event.target.value);
    fetch('http://localhost:3050/' + event.target.value)
      .then((response) => response.json())
      .then((json) => setList(json));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          minWidth: 230,
          width: '280px',
          borderRadius: '20px',
          height: '860px',
        }}
      >
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
              name='radio-buttons-group'
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value='api/productos'
                control={<Radio />}
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Todos
                  </Typography>
                }
              />
              <FormControlLabel
                value='api/productos/filtro/hipotecario'
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
                value='api/productos/filtro/automotor'
                control={<Radio />}
              />
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Cuentas vista
                  </Typography>
                }
                value='api/productos/filtro/vista'
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
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Jovenes
                  </Typography>
                }
                value='api/productos/filtro/jovenes'
                control={<Radio />}
              />
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Standard
                  </Typography>
                }
                value='api/productos/filtro/standard'
                control={<Radio />}
              />
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Premium
                  </Typography>
                }
                value='api/productos/filtro/premium'
                control={<Radio />}
              />
              <FormLabel
                label={
                  <Typography
                    variant='body2'
                    color='textSecondary'
                  ></Typography>
                }
              >
                Tipo de vehiculo:
              </FormLabel>
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Carro
                  </Typography>
                }
                value='api/productos/filtro/carro'
                control={<Radio />}
              />
              <FormControlLabel
                label={
                  <Typography fontSize={13} variant='h6' color='textSecondary'>
                    Camioneta
                  </Typography>
                }
                value='api/productos/filtro/camioneta'
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

export default SideBar;
