const orm = require('../config/orm');

module.exports = (app) => {
    app.get('/', (req, res) => {
        orm.selectAll(data => {
            console.log(data);
            res.render('index', {data});
        });
    });

    app.put('/api/:id', (req, res) => {
        orm.updateOne(req.params.id, data => {
            console.log(data);
            res.json(data);
        });
    });
    
    app.post('/api', (req, res) => {
        orm.insertOne(req.body, data => {
            console.log(data);
            res.json(data);
        });
    });
};