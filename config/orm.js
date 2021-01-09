const connection = require('./connection');

module.exports = {
    selectAll(cb) {
        connection.query('SELECT * FROM burgers', (err, data) => {
            if (err) console.error(err);
            cb(data);
        });
    },
    insertOne(burgerData, cb) {
        connection.query('INSERT INTO burger (burger_name, devoured) VALUES (?, ?)', [burgerData.name, burgerData.devoured], (err, data) => {
            if (err) console.error(err);
            cb(data);
        });
    },
    updateOne(burgerID, cb) {
        connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [false, burgerID], (err, data) => {
            if (err) console.error(err);
            cb(data);
        });
    }
};