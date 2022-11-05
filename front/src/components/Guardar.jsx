import React from 'react';
import { IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

import { Box } from '@mui/system';

const Guardar = ({ params, rowId, setRowId, body }) => {
  const onSave = () => {
    const obj = {
      id: body.id,
      [body.field]: body.value,
    };
    console.log(obj);
    fetch('http://localhost:3050/', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        window.location.reload();
        response.json();
      })
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };
  return (
    <Box>
      <IconButton
        size='small'
        color='primary'
        aria-label='save'
        component='label'
        onClick={() => onSave()}
        disabled={params?.id !== body?.id}
      >
        <SaveIcon />
      </IconButton>
    </Box>
  );
};

export default Guardar;
