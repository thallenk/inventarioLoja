import React, { useState } from 'react'
import { FormContainer, ListContainer, MainContainer} from './styles'
import Home from './../Home/index'

export default function FormCliente(){
    let dadosCliente = []
    const [usuario, setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [endereço, setEndereço] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')

    function renderStorage(){
       
        dadosCliente.push([usuario, email,endereço,dataNascimento])
        console.log(dadosCliente)
        localStorage.setItem('listEmail', JSON.stringify(dadosCliente))

    }
    return(
        <>
        <MainContainer>
        <Home/>
        <ListContainer>
            <div className='list'>
            <h2>Lista de Clientes</h2>
            <div className='cabeçalho'>
            <table>
                <thead>
                    {/* <!--Linha na minha tabela--> */}
                    <tr>
                        {/* <!--Minha coluna e linha da tabela--> */}
                        <th>Nome </th>
                        <th> E-mail </th>
                        <th> Endereço </th>
                        <th> Data de Nascimento </th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        {/* <!--Colunas--> */}
                        {  dadosCliente.map(dadoCliente => {
                    return (
                        <td> { dadoCliente}</td>
                    )
                      })  }
                    </tr>	
                </tbody>

                <tfoot>
                    <tr>
                        {/* <!--Colunas--> */}
                        <td>Total de Clientes</td>
                        <td>{dadosCliente.length}</td>
                    
                    </tr>	
                </tfoot>
            </table>
            </div>
            </div>
        </ListContainer>
        <FormContainer>
            <form>
                <fieldset>
                    <label>Nome</label>
                </fieldset>
                <fieldset>
                    <label>Nome</label>
                    <input id="nome" 
                    value = {usuario} 
                    onChange = {e => setUsuario(e.target.value)}
                    type="name" 
                    autoComplete="username"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" 
                    value = {email} 
                    onChange = {e => setEmail(e.target.value)}
                    type="email" 
                    inputMode="email" 
                    autoComplete="username"/>
                </fieldset>
                <fieldset>
                    <label>Endereço Completo (Rua, Número, Bairro, Cidade)</label>
                    <input id="endereço" 
                    value = {endereço} 
                    onChange = {e => setEndereço(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Data de Nascimento</label>
                    <input id="dataNascimento" 
                    value = {dataNascimento} 
                    onChange = {e => setDataNascimento(e.target.value)}/>
                </fieldset>
                <button type="submit" onClick={renderStorage}>Enviar</button>
            </form>

        </FormContainer>
        </MainContainer>
        </>
    )

}