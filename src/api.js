import axios from 'axios';

const path = 'https://covid-api.com/api';

export const getReports = (params) => {
    return axios.get(`${path}/reports/total${params}`);
};

export const getRegions = () => {
    return axios.get(`${path}/regions?order=name&sort=asc`);
};
