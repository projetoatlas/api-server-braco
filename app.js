const clienteController = require('./src/controllers/clienteController');
const enderecoController = require('./src/controllers/EnderecoController');
const produtoController = require('./src/controllers/produtoController');
const express = require('express');
const app = express();

app.use(express.json());
require('dotenv').config();

const porta = process.env.PORTA;
const rota1 = process.env.ROTA1;
const rota2 = process.env.ROTA2;
const rota1v2 = process.env.ROTA12;


// Rota Raiz
app.get("/", clienteController.teste);

// Rota de Clientes
app.get(`${rota1}`,clienteController.listarClientes);
app.get(`${rota1}/:id`, clienteController.getClienteById);
app.post(`${rota1}`,clienteController.adicionarCliente);
// app.put(`${rota1}/:id`, clienteController.atualizarCliente);

// subrota para adicionar enderecos
app.get(`${rota1}${rota1v2}`,enderecoController.listarEnderecos);
app.post(`${rota1}${rota1v2}`,enderecoController.addicionarEndereco);
app.get(`${rota1}${rota1v2}/:id`, enderecoController.getEnderecoById);

// Rota de Produtos
app.get(`${rota2}`, )

// Escuta o servidor na porta definida no .env
app.listen(porta, () =>{
    console.log('Servidor rodando em:')
    console.log(`http://localhost:${porta}`)
})

