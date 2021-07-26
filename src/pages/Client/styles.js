import styled from "styled-components";


export const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    /* margin-top: -70%;
    margin-left: 20%; */

`
export const Container = styled.div`
    display:flex;
`


export const FormContainer = styled.div`
    margin-left: 360px;
    width: 500px;
    background-color: rgb(239, 239, 239);
    flex-direction: row;
    .list{
        margin-left: 200px;
        top:0;
    }
    .cabeçalho{
        display: inline-block;
        padding: 20px;
        font-weight: 800px;
        left: 200px;
    }
    input{
        border-radius: 5px;
        
    }
    label{
        color: rgb(55, 2, 75);
        font-size: 0.8em;
        font-weight: bold;  
        cursor: default;
    }
    fieldset{
        border:none;
    }
    form{
        margin-left: 100px;
    }

`

export const ListContainer = styled.div`
    h2{
        text-align:center;
    }
    table{
        th{
            text-align: left;
        }
       

    }
 

`

