import React from 'react'
import { Main, LinkHome } from './styled'


export default function Home(){
    return(
        <>
        <Main>
            <h3>Inventário de Cliente/Produtos</h3>
                <ul>
                    <li>
                       <LinkHome to= '/clientes'>Clientes</LinkHome>
                        </li>
                    <li> <LinkHome to= '/produtos'>Produtos</LinkHome>
                        </li>
                </ul>

        </Main>
       </>
        
    )
}