import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { dateFormat, updateQueryParams } from '../../helper';
import { useLocation, useNavigate } from 'react-router-dom';

const pickerStyles = {
    width: 130,
    '.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
        fontSize: '0.8rem',
    },
    '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
        top: '-6px',
        fontSize: '0.8rem',
    },
    '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '9.5px 0 9.5px 12px',
    }
}

const DateSelector = ({isLoading}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [dates, setDates] = useState([]);

    const handleChange = (date) => {
        setDates([...dates, date])
        navigate(updateQueryParams({date: dateFormat(date)}, location))
    }

    return (
        <Box>   
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                    label="Date" 
                    sx={pickerStyles}
                    value={
                        dates[dates.length + 1]    
                    }
                    onChange={handleChange}
                    closeOnSelect={false}
                    maxDate={dayjs('2023-03-09')}
                    minDate={dayjs('2020-01-22')}
                    disabled={isLoading}
                />
            </LocalizationProvider>
        </Box>
    );
}

export default DateSelector;