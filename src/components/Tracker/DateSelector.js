import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { dateFormat, updateQueryParams } from '../../helper';
import { useLocation, useNavigate } from 'react-router-dom';

// Styles remove input
const pickerStyles = {
    '.MuiOutlinedInput-input, .MuiInputLabel-root, .MuiOutlinedInput-notchedOutline': {
        display: 'none'
    },
    '.MuiSvgIcon-root': {
        width: '1.8em',
        height: '1.8em'
    },
    '.MuiInputAdornment-root': {
        height: 'auto',
        marginLeft: 0
    }
};

const DateSelector = ({ isLoading }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [dates, setDates] = useState([]);

    const handleChange = (date) => {
        setDates([...dates, date]);
        navigate(updateQueryParams({ date: dateFormat(date) }, location));
    };

    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label='Date'
                    sx={pickerStyles}
                    value={dates}
                    onChange={handleChange}
                    closeOnSelect={false}
                    maxDate={dayjs('2023-03-09')}
                    minDate={dayjs('2020-01-22')}
                    disabled={isLoading}
                />
            </LocalizationProvider>
        </Box>
    );
};

export default DateSelector;
