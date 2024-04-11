import React,{useEffect, useState} from "react";
import './App.css';




function Pagina_login() {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const auth = (e) =>{
        e.preventDefault();
        console.log("entrou")
        if (username === 'admin' && password === 'admin'){
            window.location.href = './tecnicos';
        } else{
            alert("senha incorreta")
        }
    };
    return(
        <div className = "background-image">
            <nav className="loginhome" color="White"><a href="Home">Inicio</a></nav>
            <div className = "main_frame">
                <div className = "centralized_box">
                    <div className="titulo">
                        Fazer Login
                    </div>
                    <form onSubmit={(e) => auth(e)}>
                        <div className="form_centralized">
                            <div class="col-sm-3">
                            <label for="login" className="col-form-label">Login:</label>
                            </div>
                            <div class="col-sm-10">
                            <input type="text" id="login" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Digite o login"/>
                            </div>
                        </div>
                        <div className="form_centralized">
                            <div className="col-sm-3">
                                <label for="senha" class="col-form-label">Senha:</label>
                            </div>
                            <div className="col-sm-8">
                            <input type="password" id="senha" className="form-control" onChange={(e) => setPassword(e.target.value)}placeholder="digite a senha"/>
                            </div>
                        </div>
                        <button className="btn" type="submit"> Enviar</button>
                    </form>
                </div>
            </div>  
        </div>
    )
}

export default Pagina_login;