import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Client from './pages/Client';
import Product from './pages/Product';




export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route  path = '/' exact component = {Product}/>
            <Route  path = '/clientes' component = {Client}/>
            <Route  path = '/produtos' component = {Product}/>
        </Switch>
        </BrowserRouter>
        
    )

}