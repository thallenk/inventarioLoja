
import { Main, LinkHome} from './styles'


export default function Menu(){

    return(
        
        <Main>
            <h3>Inventário de Cliente/Produtos</h3>
            <nav>
                <ul className='tipos'>
                    <li>
                       <LinkHome to= '/clientes'>Clientes</LinkHome>
                        </li>
                    <li> <LinkHome to= '/produtos'>Produtos</LinkHome>
                        </li>
                </ul>
 

            </nav>

        </Main>
         
    )
}