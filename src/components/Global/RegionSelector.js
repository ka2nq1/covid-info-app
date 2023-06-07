import { InputLabel, MenuItem, Select, FormControl  } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateQueryParams } from '../../helper';
import { getRegions } from '../../api';

const selectorStyles = {
    width: 200,
    '.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
        fontSize: '0.8rem',
    },
    '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
        top: '-6px',
        fontSize: '0.8rem',
    },
    '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '9.5px 0 9.5px 12px',
    }
}

const regions = [
    {
        "iso": "CHN",
        "name": "China"
    },
    {
        "iso": "TWN",
        "name": "Taipei and environs"
    },
    {
        "iso": "USA",
        "name": "US"
    },
    {
        "iso": "JPN",
        "name": "Japan"
    },
    {
        "iso": "THA",
        "name": "Thailand"
    },
    {
        "iso": "KOR",
        "name": "Korea, South"
    },
    {
        "iso": "SGP",
        "name": "Singapore"
    },
    {
        "iso": "PHL",
        "name": "Philippines"
    },
    {
        "iso": "MYS",
        "name": "Malaysia"
    },
]

const RegionSelector = ({setData, query}) => {
    const navigate = useNavigate();
    const location = useLocation();
    // const [regions, setRegions] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true)
    //     getRegions()
    //         .then(response => setRegions(response.data))
    //         .catch(error => console.error(error))
    //         .finally(() => setIsLoading(false))
    // }, [])
    
    const handleChange = (event) => {
        const {value} = event.target;
        if (value === 'The whole world') {
            navigate(updateQueryParams({iso: []}, location))
        } else {
            navigate(updateQueryParams({iso: value}, location))
        }

        if (query.iso !== value) {
            setData([])
        }
    };

    // console.log(query.iso)
    return (
        <FormControl sx={selectorStyles}>
            <InputLabel>Regions</InputLabel>
            <Select
                value={query.iso || 'The whole world'}
                label="Regions"
                onChange={handleChange}
            >
                <MenuItem value={'The whole world'}>
                    The whole world
                </MenuItem>
                {regions.map((elem, index) => (
                    <MenuItem key={index} value={elem.iso}>
                        {elem.name}   
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default RegionSelector;