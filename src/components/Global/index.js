import React, { useEffect, useState } from 'react';
import { Box, Divider, Toolbar, Typography } from '@mui/material';
import DateSelector from './DateSelector';
import CaseSelector from './CaseSelector';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateQueryParams } from '../../helper';
import { getReports } from '../../api';
import RegionSelector from './RegionSelector';
import Chart from './Chart';

const casesList = ['confirmed', 'death', 'recovered'];

const Global = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = queryString.parse(location.search);
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        if(!Object.keys(query).includes('cases')) {
            navigate(updateQueryParams({cases: casesList[0]}, location))
        }
        getReports(location.search)
            .then(response => setData([...data, response.data.data]))
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false))
    }, [location])

    return (
        <Box>
            <Toolbar sx={{gap: '30px'}}>
                <Typography variant='h1'>World WIP</Typography>
                <CaseSelector {...{casesList}}/>
                <RegionSelector/>
                <DateSelector {...{isLoading}}/>
            </Toolbar>
            <Divider />
            <Chart {...{data}}/>
        </Box>
    );
};

export default Global;