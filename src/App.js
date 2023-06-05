import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Country from './components/Country';
import Global from './components/Global';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <>
            <Sidebar/>
            <div>
                <Routes>
                    <Route path="/" element={<Global/>}/>
                    <Route path="/country" element={<Country/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
