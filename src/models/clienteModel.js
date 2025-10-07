const db = require('../config/db');

const Client = {

    getAllClients: (callback) => {
        const sql = 'SELECT * FROM clientes';

        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);

        });
    },

    getClienteById: (id, callback) => {
        const sql = `SELECT * FROM clientes WHERE id = ?`;
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        })
    },
    addClient: (callback, client) => {
        const sql = 'INSERT INTO clientes SET ?';

        db.query(sql, client, (err, results) => {
            if (err) throw err;
            callback(results);
        })
    }
};

module.exports = Client;