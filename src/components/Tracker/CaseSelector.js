import { Checkbox, InputLabel, ListItemText, MenuItem, Select, FormControl } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateQueryParams } from '../../helper';

const CaseSelector = ({ casesList, query }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event) => {
        const { value } = event.target;
        navigate(updateQueryParams({ case: value }, location));
    };

    return (
        <FormControl sx={{width: '200px'}}>
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
