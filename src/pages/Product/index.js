import React, { useState } from 'react'
import { Main } from './styles'
import Home from './../Home/index'





export default function FormProdutos(){
    let dadosProdutos = []
    const [name, setName] = useState('')
    const [preçoCusto, setPreçoCusto] = useState('')
    const [preçoVenda, setPreçoVenda] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fornecedor, setFornecedor] = useState('')

    function renderStorage(){
       
        dadosProdutos.push([name, preçoCusto,preçoVenda,categoria, fornecedor])
        console.log(dadosProdutos)
        localStorage.setItem('listEmail', JSON.stringify(dadosProdutos))

    }
    return(
        <>
        <Home/>
        <Main>
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
                <button type="submit" onClick={renderStorage}>Enviar</button>
            </form>

        </Main>
        </>
    )

}