import { Checkbox, InputLabel, ListItemText, MenuItem, Select, FormControl  } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { updateQueryParams } from '../../helper';

const selectorStyles = {
    width: 200,
    '.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
        fontSize: '0.8rem',
    },
    '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '9.5px 0 9.5px 12px',
    }
}

const CaseSelector = ({casesList}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = queryString.parse(location.search);
    const activeCases = query.cases?.split(',') || [];
    
    const handleChange = (event) => {
        const {value} = event.target;

        if (activeCases.length === 1 && !activeCases.includes(value[0])) {
          return;
        } else {
            navigate(updateQueryParams({cases: value}, location))
        }
    };

    return (
        <FormControl sx={selectorStyles}>
            <InputLabel>Cases</InputLabel>
            <Select
                multiple
                value={activeCases}
                label="Cases"
                renderValue={(elem) => elem.join(', ')}
                onChange={handleChange}
            >
                {casesList.map((elem, index) => (
                    <MenuItem
                        key={index}
                        value={elem}
                    >
                        <Checkbox checked={activeCases.indexOf(elem) > -1} />
                        <ListItemText primary={elem} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default CaseSelector;