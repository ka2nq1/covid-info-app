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
    '.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root':
        {
            fontSize: '0.8rem'
        },
    '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
        display: 'none'
    },
    '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
        display: 'none'
    },
    '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
        display: 'none'
    },
    '.css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
        display: 'none'
    },
    '.css-1y63lax-MuiFormControl-root-MuiTextField-root': {
        width: 'auto'
    },
    '.css-i4bv87-MuiSvgIcon-root': {
        width: '1.3em',
        height: '1.3em'
    },
    '.css-1laqsz7-MuiInputAdornment-root': {
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
