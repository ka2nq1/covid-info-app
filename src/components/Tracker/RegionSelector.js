import { InputLabel, MenuItem, Select, FormControl, Typography, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateQueryParams } from '../../helper';
import { getRegions } from '../../api';

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
        <FormControl sx={{width: '200px'}}>
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
