const Client = require('../models/clienteModel');

exports.teste = (req, res) => {
    res.send('Sevidor funcionando!');
};

exports.listarClientes = (req, res) => {
    Client.getAllClients((client) => {
        res.status(200).json(client);
    });
}

exports.getClienteById = (req, res) => {
    const clientId = req.params.id;
    Client.getClienteById(clientId, (client) =>{
        res.status(201).json(client)
    })
}
exports.adicionarCliente = (req, res) => {
    const novoCliente = req.body;
    Client.addClient((result) => {
        res.status(201).json({ id: result.insertId, ...novoCliente });
    }, novoCliente);
}
