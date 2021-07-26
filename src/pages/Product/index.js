import React, { useState} from 'react'
import { FormContainer, ListContainer, MainContainer, Container, ListItem} from './styles'
import Home from './../Home/index'
import Menu from './../../components/Menu'




export default function FormProdutos(){
    const [name, setName] = useState('')
    const [preçoCusto, setPreçoCusto] = useState('')
    const [preçoVenda, setPreçoVenda] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fornecedor, setFornecedor] = useState('')
    const[dados, setDados] = useState([])
    const tipo = true

    function renderStorage(){
       
        const dadosProdutos = { tipo, name, preçoCusto, preçoVenda, categoria, fornecedor }
                      /* 
      Todo valor do localstorage é null no inicio (antes de adicionarmos algum valor nele),
      Por isso checamos se é null, ou seja, se será o primeiro item a ser adicionado.
      */
     
        if (localStorage.getItem('items') === null) {
            // Adicionando um array com um objeto no localstorage
            localStorage.setItem('items', JSON.stringify([dadosProdutos]));
            const items = JSON.parse(localStorage.getItem('items'));
            setDados(items);
          } else {
            // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
            localStorage.setItem('items',
              // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
              JSON.stringify([...JSON.parse(localStorage.getItem('items')),
                dadosProdutos
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
            <h2>Lista de Produtos</h2>
            <div className='cabeçalho'>
                <table className = 'tabela'>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th> Preço de Custo </th>
                            <th> Preço de Venda </th>
                            <th> Categoria </th>
                            <th> Fornecedor </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                            {dados.filter(item => item.tipo === true).map(item =>{
                                return <tr><td  width='70px'>{item.name}</td><td width='180px'>{item.preçoCusto}</td>
                                <td width='180px'>{item.preçoVenda}</td><td width='180px'>{item.categoria}</td><td width='180px'>{item.fornecedor}</td></tr>
                                })} 

                    </tbody>
                    </table>
            </div>
        </ListContainer>
        <FormContainer>
            <form>
                <h3>Produtos</h3>
                <fieldset>
                    <label>Produto</label>
                    <input id="nome" 
                    value = {name} 
                    onChange = {e => setName(e.target.value)}
                    type="name" />
                </fieldset>
                <fieldset>
                    <label>Preço de Custo</label>
                    <input id="custo" 
                    value = {preçoCusto} 
                    onChange = {e => setPreçoCusto(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Preço de Venda</label>
                    <input id="venda" 
                    value = {preçoVenda} 
                    onChange = {e => setPreçoVenda(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Categoria</label>
                    <input id="categoria" 
                    value = {categoria} 
                    onChange = {e => setCategoria(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Fornecedor</label>
                    <input id="fornecedor" 
                    value = {fornecedor} 
                    onChange = {e => setFornecedor(e.target.value)}/>
                </fieldset>
                <button type="button" onClick={renderStorage}>Adicionar</button>
            </form>


        </FormContainer>
        </Container>

        </MainContainer>
 
        </>
    )

}