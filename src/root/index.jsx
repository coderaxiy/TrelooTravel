import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { navbar } from '../utils/navbar';
import { Container } from './style';

const Root = () => {
  
    return(
        <Container>
            <BrowserRouter>
                <Routes>
                        {
                            navbar.map(({id, path, Element})=>(
                                <Route key={id} path={path} element={<Element />}/>
                            ))
                        }
                       
                </Routes>
            </BrowserRouter>
            <Outlet />
        </Container>
    )
};

export default Root;
