import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const pickerStyles = {
    width: 130,
    '.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
        fontSize: '0.8rem',
    },
    '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '9.5px 0 9.5px 12px',
    }
}

const DateSelector = ({range}) => {
    const [dates, setDates] = useState({
        from: dayjs('2020-11-03'),
        to: dayjs(new Date())
    });

    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                    label="Date from" 
                    sx={pickerStyles}
                    value={dates.from}
                    onChange={(from) => setDates({...dates, from})}
                />
                {range &&
                    <>
                        <Typography 
                            variant='span'
                            sx={{    
                                display: 'inline-block',
                                fontSize: '20px',
                                fontWeight: 400,
                                margin: '0 3px',
                                lineHeight: '35px',
                            }}
                        >
                            -
                        </Typography>
                        <DatePicker 
                            label="Date to" 
                            sx={pickerStyles}
                            value={dates.to} 
                            onChange={(to) => setDates({...dates, to})}
                        />
                    </>
                }
            </LocalizationProvider>
        </Box>
    );
}

export default DateSelector;