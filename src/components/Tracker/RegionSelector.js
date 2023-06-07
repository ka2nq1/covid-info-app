import { InputLabel, MenuItem, Select, FormControl, Typography, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateQueryParams } from '../../helper';
import { getRegions } from '../../api';

const selectorStyles = {
    width: 200,
    '.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root, .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root':
        {
            fontSize: '0.8rem'
        },
    '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
        top: '-6px',
        fontSize: '0.8rem'
    },
    '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '9.5px 0 9.5px 12px'
    }
};

const RegionSelector = ({ setData, query }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [regions, setRegions] = useState([]);
    const [isRegionsLoading, setIsRegionsLoading] = useState(false);

    useEffect(() => {
        setIsRegionsLoading(true);
        getRegions()
            .then((response) => setRegions(response.data.data))
            .catch((error) => console.error(error))
            .finally(() => setIsRegionsLoading(false));
    }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        if (value === 'Worldwide') {
            // iso: [] removes the country from the params for worldwide searches
            navigate(updateQueryParams({ iso: [] }, location));
        } else {
            navigate(updateQueryParams({ iso: value }, location));
        }

        // Clears the data for a new region search.
        if (query.iso !== value) {
            setData([]);
        }
    };

    return isRegionsLoading ? (
        <Skeleton variant='rounded' width={200} height={35} />
    ) : (
        <FormControl sx={selectorStyles}>
            <InputLabel>Regions</InputLabel>
            <Select value={query.iso || 'Worldwide'} label='Regions' onChange={handleChange}>
                <MenuItem value={'Worldwide'}>Worldwide</MenuItem>
                {regions.map((elem, index) => (
                    <MenuItem key={index} value={elem.iso}>
                        {elem.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default RegionSelector;
