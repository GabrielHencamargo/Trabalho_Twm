import React,{useState,useEffect,createContext, useContext} from "react";
import "./App.css";


export let chamadas = []


export function Seguro(){
    const[Equip, setEquip] = useState('');
    const[Nome,setNome] = useState('');
    const[Email,setEmail] = useState('');
    const[Tel,setTel] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const dados = {
            name : Nome,
            email : Email,
            telefone : Tel,
            seguro : Equip
        };
        chamadas = [chamadas,dados];
        console.log(chamadas)
    }
    
      return (
        <div className="background_seguro">
            <nav className="loginhome"><a href="Home">Inicio</a></nav>

            <div className = "main_frame">

                <div className = "centralized_box2">

                    <div className="titulo2">
                        Acionar o seguro!!!
                    </div>
                    <small className="subticadastro"> Resolvemos entre 30 e 30000 dias!!</small>
                    <form className="form01" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form_centralized">
                            <div class="col-sm-3">
                            <label for="Nome" className="col-form-label">Nome:</label>
                            </div>
                            <div class="col-sm-10">
                            <input type="text" id="Nome" className="form-control" onChange={(e) => setNome(e.target.value)} placeholder="Digite o seu nome"/>
                            </div>
                        </div>
                        <div className="form_centralized">
                            <div className="col-sm-3">
                                <label for="Email" class="col-form-label">Email:</label>
                            </div>
                            <div className="col-sm-8">
                            <input type="email" id="senha" className="form-control" onChange={(e) => setEmail(e.target.value)}placeholder="digite seu email de contato"/>
                            </div>
                        </div>
                        <div className="form_centralized">
                            <div className="col-sm-3">
                                <label for="telefone" class="col-form-label">Telefone:</label>
                            </div>
                            <div className="col-sm-8">
                            <input type="tel" id="telefone" className="form-control" onChange={(e) => setTel(e.target.value)}placeholder="digite seu telefone de contato"/>
                            </div>
                        </div>
                        <div className="form_centralized">
                            <div className="col-sm-3">
                                <label for="Equipamento" class="col-form-label">Equipamento alvo do seguro:</label>
                            </div>
                            <div className="col-sm-8">
                            <input type="text" id="equip" className="form-control" onChange={(e) => setEquip(e.target.value)}placeholder="digite o que voce quer trocar"/>
                            </div>
                        </div>
                        <button className="btn" type="submit"> Enviar</button>
                    </form>
                </div>
            </div>
        </div>
      );
}
