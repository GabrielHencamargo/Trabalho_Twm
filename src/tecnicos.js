import React,{useEffect, useState}from "react";
import "./App.css";
import { chamadas } from "./paginacadastros";


function Visualizar_dados(){
    const [tableData, setTableData] = useState([
        { id: 0, name: 'João', email:"jaozinho@badoo.com", tel: '707070',equip: 'Carro' }
      ]);
    
      // Função para adicionar um novo elemento na tabela
    const addRow = () => {
        if(chamadas.length - 1 != tableData.length) { 
            console.log("entrou")
            for(let i = tableData.length; i <= chamadas.length + 1; i++){
                console.log(chamadas)
                console.log(chamadas[i]);
                const newRow = { id: tableData.length, name: chamadas[i].name, email: chamadas[i].email, tel:chamadas[i].tel,equip:chamadas[i].equip };
                setTableData([...tableData, newRow]);
            }
        }

      };
    return(
    <div className="background_tecnicos">
        <nav className="loginhome"><a href="Home">Inicio</a></nav>
        <div className="tabela1">

            <button className="btn btn-primary mb-3 custom-btn"  onClick={addRow}>Atualizar</button>
            <table className="table -sm">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Item assegurado</th>
                    </tr>
                </thead>
                <tbody>
                {tableData.map(row => (
                    <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.tel}</td>
                    <td>{row.equip}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div class="mb-3 custom-mb-3">
            <label for="exampleFormControlInput1" class="form-label">Endereço de Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3 custom-mb-3c">
            <label for="exampleFormControlTextarea1" class="form-label">Descriçao do problema e solução:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <h1 className="titulo_tecnicos">Enviar Ordem de Serviço:</h1>
        <botton className="btn custom-btn-send">Enviar</botton>
        <div class="input-group custom-input">
            <label class="input-group-text" for="inputGroupFile01">Upload</label>
            <input type="file" class="form-control custom-form-control" id="inputGroupFile01"/>
        </div>

    </div>
    )
}

export default Visualizar_dados;