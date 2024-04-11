import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';

const Cliente = () => {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [uf, setUf] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [idade, setIdade] = useState('');
    const [carregaCliente, setCarregaCliente] = useState(false);
    const [insereCliente, setInsereCliente] = useState(false);

    useEffect(() => {
        if (carregaCliente) {
            console.log('Carrega cliente');
            setCarregaCliente(false);
            fetch("http://localhost:5000/allclientes", {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   },
                method: "GET",
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                })
                .catch((error) => console.log(error));            
        }
    }, [carregaCliente]);

    useEffect(() => {
        if(insereCliente){
            console.log("Insere cliente");
            let cliente = {};
            setInsereCliente(false);
            cliente = {
                "nome": nome,
                "endereco": endereco,
                "email": email
            };
            console.log(cliente);
            fetch("http://localhost:5000/clientes", {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   },
                method: "POST",
                body: JSON.stringify({cliente})
              })
                .then((response) => response.json())
                .then((data) => {
                    console.log("DATA");
                    console.log(data);
                })
                .catch((error) => console.log(error));
        }
    }, [insereCliente]);

    const handleCarregaCliente = () => {        
        setCarregaCliente(true);
    }

    const handleInsereCliente = () => {
        setInsereCliente(true);
        
    }

    return (
        <div>
            <Container>
            <h1>Cliente</h1>
                <Row>
                    <Col sm={3}>
                        <label>Id  </label>
                        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                    </Col>
                    <Col sm={3}>
                        <label>Nome </label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </Col>            
                    <Col sm={3}>
                        <label>Email </label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                    <Col sm={3}>
                        <label>Endereço </label>
                        <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </Col>                    
                </Row>
            </Container>
            <br />
            <br />
            <br />
            
            <button onClick={handleCarregaCliente}>Carrega cliente</button>
            <button onClick={handleInsereCliente}>Insere cliente</button>


        </div>
    )
}

export default Cliente;