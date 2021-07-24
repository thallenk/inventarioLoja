import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Main = styled.nav`
    h3{
        text-align:center;
    }
    right: 200px;
    max-width: 200px;
    background-color:#600066;
    margin-top:-2%;
    color: white;
    height:1000px;
    ul li a{
          /*Colocando espaços entre os icones*/
    margin-left: 7px;
    /*para centralizar o icone na div*/
    margin-top: 9px;
    /*linhas referentes a  range de redefinição do tamanho da imagem*/
    max-width: 200px;
    max-height: 150px;
    width: auto;
    height: auto;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    color: #600066;
    font-weight: 700px;

    }
`
export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: white;
    padding: 0.5rem 0;
    color: #600066;
    font-weight: 700px;
    text-decoration: none;
    margin-right: 10px;
    border-radius: 8px;
`