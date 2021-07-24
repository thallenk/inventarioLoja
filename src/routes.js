import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Client from './pages/Client';
import Home from './pages/Home'
import Product from './pages/Product';




export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route  path = '/' exact component = {Home}/>
            <Route  path = '/clientes' component = {Client}/>
            <Route  path = '/produtos' component = {Product}/>
        </Switch>
        </BrowserRouter>
        
    )

}