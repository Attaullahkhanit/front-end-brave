import { Box } from '@mui/material';
import React from 'react';

function GoogleMapContainer({ latitude, longitude }) {
  return (
    <>
        <Box>
            <iframe src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`} width="100%" height="500px" zoom={15}></iframe>
        </Box>
    </>
  );
}

export default GoogleMapContainer;
