import { Box, Divider, ListItem, Toolbar, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Box padding='40px 20% 40px 30px'>
            <Typography variant='h1'>About</Typography>
            <Typography fontWeight={500} fontSize={18} paragraph>
                We are delighted to introduce our application for tracking COVID-19 statistics using
                charts, date selection, country selection, and information display.
            </Typography>
            <Typography paragraph fontSize={16}>
                Our application is designed to provide you with a convenient and informative tool to
                access up-to-date information on the spread of COVID-19. Through our application,
                you can track infection statistics, compare data across different countries, and
                analyze trends.
            </Typography>
            <Typography paragraph marginBottom='0' fontSize={16}>
                Key features of our application include:
            </Typography>
            <Typography component='ul' fontSize={16}>
                <ListItem>
                    1. Charts: You can visualize the data in the form of charts, making it easy for
                    you to observe changes and trends in COVID-19 statistics. The number of cases,
                    recoveries, and fatalities will be displayed on the chart for the selected date.
                </ListItem>
                <ListItem>
                    2. Date Selection: Our application allows you to choose a specific date to
                    retrieve statistics for that day. You can analyze data for individual dates and
                    observe changes over time.
                </ListItem>
                <ListItem>
                    3. Country Selection: You have the option to select a specific country to view
                    COVID-19 statistics specifically for that country. This will enable you to focus
                    on the state of affairs in the selected country and obtain detailed information.
                </ListItem>
                <ListItem>
                    4. Informative Charts: Our application provides various information, including
                    the total number of cases, recoveries, fatalities, and other important data. The
                    charts will visually present the statistics and allow you to draw conclusions.
                </ListItem>
            </Typography>
            <Typography paragraph marginTop='20px' fontSize={16}>
                We hope that our application will serve as a valuable source of information for you
                and assist you in tracking the state of COVID-19.
            </Typography>
        </Box>
    );
};

export default About;
