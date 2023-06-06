import React from 'react';
import { Box, Divider, Toolbar, Typography } from '@mui/material';
import DateSelector from '../../widgets/DateSelector';
import Selector from '../../widgets/Selector';

const Global = () => {
    
    return (
        <Box>
            <Toolbar sx={{gap: '30px'}}>
                <Typography variant='h1'>World WIP</Typography>
                <Selector/>
                <DateSelector range/>
            </Toolbar>
            <Divider />
        </Box>
    );
};

export default Global;