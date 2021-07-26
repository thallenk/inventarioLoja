import React, { useState} from 'react'
import { FormContainer, ListContainer, MainContainer, Container} from './styles'
import Home from './../Home/index'
import Menu from './../../components/Menu'


export default function FormCliente(){

    const [usuario, setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [endereço, setEndereço] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [ dados, setDados ] = useState([]);
    const tipo = false;

    function renderStorage(){
        const dadosCliente = { tipo, usuario, email, endereço, dataNascimento }
                      /* 
      Todo valor do localstorage é null no inicio (antes de adicionarmos algum valor nele),
      Por isso checamos se é null, ou seja, se será o primeiro item a ser adicionado.
      */
        if (localStorage.getItem('items') === null) {
            // Adicionando um array com um objeto no localstorage
            localStorage.setItem('items', JSON.stringify([dadosCliente]));
            const items = JSON.parse(localStorage.getItem('items'));
            setDados(items);
          } else {
            // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
            localStorage.setItem('items',
              // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
              JSON.stringify([...JSON.parse(localStorage.getItem('items')),
                dadosCliente
              ])
            );
            const items = JSON.parse(localStorage.getItem('items'));
            setDados(items);
          }   

     }


    return(
        <>
        <MainContainer>
        <Menu/>
        <Container>
        <Home/>
        <ListContainer>
            <h2>Lista de Clientes</h2>
            <div className='tabela'>
                <table> 
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th> E-mail </th>
                            <th> Endereço </th>
                            <th> Data de Nascimento </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                            {dados.filter(item => item.tipo === false).map(item =>{
                                return <tr><td  width='100px'>{item.usuario}</td><td width='180px'>{item.email}</td>
                                <td width='400px'>{item.endereço}</td><td width='180px'>{item.dataNascimento}</td></tr>
                                })} 

                    </tbody>
                    </table>

            </div>

        
        </ListContainer>
        <FormContainer>
            <form>
                <h3>Cadastro de Clientes</h3>
                <fieldset>
                    <label>Nome: </label>
                    <input id="nome" 
                    value = {usuario} 
                    onChange = {e => setUsuario(e.target.value)}
                    type="name" 
                    autoComplete="username"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="email">E-mail: </label>
                    <input id="email" 
                    value = {email} 
                    onChange = {e => setEmail(e.target.value)}
                    type="email" 
                    inputMode="email" 
                    autoComplete="username"/>
                </fieldset>
                <fieldset>
                    <label>Endereço Completo: </label>
                    <input id="endereço" 
                    value = {endereço} 
                    onChange = {e => setEndereço(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Data de Nascimento: </label>
                    <input id="dataNascimento" 
                    value = {dataNascimento} 
                    onChange = {e => setDataNascimento(e.target.value)}/>
                </fieldset>
                <button  type="button" onClick={renderStorage}>Adicionar</button>
            </form>

        </FormContainer>
        </Container>

        </MainContainer>
 
        </>
    )

}