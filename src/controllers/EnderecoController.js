const Endereco = require('../models/enderecoModel');

exports.listarEnderecos = (req,res) => {
    Endereco.getAllEndes((ende) => {
        res.status(200).json(ende);
        console.log(ende);
    });
}

exports.getEnderecoById = (req,res) => {
    const endeId = req.params.id;
    Endereco.getEndeById(endeId, (ende) => {
        res.status(201).json(ende);
    });
}

exports.addicionarEndereco = (req,res) => {
    const novoEndereco = req.body;
    Endereco.addEnde((result) => {
        res.status(201).json({ id: result.insertId, ...novoEndereco });
    }, novoEndereco);
}