import { Checkbox, InputLabel, ListItemText, MenuItem, Select, FormControl  } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const cases = ['confirmed', 'death', 'recovered'];

const selectorStyles = {
    width: 200,
    '.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
        fontSize: '0.8rem',
    },
    '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '9.5px 0 9.5px 12px',
    }
}

const Selector = () => {
    const navigate = useNavigate();
    const {search, pathname} = useLocation();
    const query = queryString.parse(search);

    const [selectedCases, setSelectedCases] = useState([cases[0]])

    const handleChange = (event) => {
        if (selectedCases.length === 1 && !selectedCases.includes(event.target.value[0])) {
          return;
        } else {
            setSelectedCases(event.target.value);
        }
    };

    return (
        <FormControl sx={selectorStyles}>
            <InputLabel id="demo-simple-select-label">Cases</InputLabel>
            <Select
                id="demo-multiple-checkbox"
                multiple
                value={selectedCases}
                label="Cases"
                renderValue={(elem) => elem.join(', ')}
                onChange={handleChange}
            >
                {cases.map((elem, index) => (
                    <MenuItem
                        key={index}
                        value={elem}
                    >
                        <Checkbox checked={selectedCases.indexOf(elem) > -1} />
                        <ListItemText primary={elem} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default Selector;