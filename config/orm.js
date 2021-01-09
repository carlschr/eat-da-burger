const connection = require('./connection');

module.exports = {
    selectAll(cb) {
        connection.query('SELECT * FROM burgers', (err, data) => {
            if (err) console.error(err);
            cb(data);
        });
    },
    insertOne(burgerData, cb) {
        console.log(burgerData)
        connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)', [burgerData.name, 0], (err, data) => {
            if (err) console.error(err);
            cb(data);
        });
    },
    updateOne(burgerID, cb) {
        connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [1, burgerID], (err, data) => {
            if (err) console.error(err);
            cb(data);
        });
    }
};