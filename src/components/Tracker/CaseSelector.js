import { Checkbox, InputLabel, ListItemText, MenuItem, Select, FormControl } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateQueryParams } from '../../helper';

const selectorStyles = {
    width: 200,
    '.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root':
        {
            fontSize: '0.8rem'
        },
    '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '9.5px 0 9.5px 12px'
    }
};

const CaseSelector = ({ casesList, query }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event) => {
        const { value } = event.target;
        navigate(updateQueryParams({ case: value }, location));
    };

    return (
        <FormControl sx={selectorStyles}>
            <InputLabel>Cases</InputLabel>
            <Select value={query.case || 'confirmed'} label='Cases' onChange={handleChange}>
                {casesList.map((elem, index) => (
                    <MenuItem key={index} value={elem}>
                        {elem}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CaseSelector;
