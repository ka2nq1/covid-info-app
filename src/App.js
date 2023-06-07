import { Box, Divider, Toolbar } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Tracker from './components/Tracker';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Box paddingLeft='200px'>
            <Sidebar />
            <Box>
                <Routes>
                    <Route path='/' element={<Tracker />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Box>
        </Box>
    );
}

export default App;
