const connection = require('./connection');

module.exports = {
    selectAll() {
        connection.query('SELECT * FROM burgers', (err, data) => {
            if (err) console.error(err);
            return data;
        });
    },
    insertOne(burgerData) {
        connection.query('INSERT INTO burger (burger_name, devoured) VALUES (?, ?)', [burgerData.name, burgerData.devoured], (err, data) => {
            if (err) console.error(err);
            return data;
        });
    },
    updateOne(burgerID) {
        connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [FALSE, burgerID], (err, data) => {
            if (err) console.error(err);
            return data;
        });
    }
};