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

const casesList = ['confirmed', 'deaths', 'recovered'];

const Global = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = queryString.parse(location.search);
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const handleGetData = (res) => {
        const resData = res.data.data;

        if (!data.find(e => e.date === resData.date)) {
            setData([...data, resData]
                .sort((a, b) => new Date(a.date) - new Date(b.date)))
        }
        return
    }

    useEffect(() => {
        setIsLoading(true)
        if(!Object.keys(query).includes('case')) {
            navigate(updateQueryParams({case: casesList[0]}, location))
        }
        getReports(location.search)
            .then(handleGetData)
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false))
    }, [location.search])

    return (
        <Box>
            <Toolbar sx={{gap: '30px'}}>
                <Typography variant='h1'>World WIP</Typography>
                <CaseSelector {...{casesList, query}}/>
                <RegionSelector {...{setData, query}}/>
                <DateSelector {...{isLoading}}/>
            </Toolbar>
            <Divider />
            <Chart {...{data, query}}/>
        </Box>
    );
};

export default Global;