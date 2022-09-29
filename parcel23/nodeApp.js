module.exports = function(baseUrl, app) {
    console.log(baseUrl);

    app.get('/players', (req, res) => {
        console.log(req);
        res.send('players endpoint');
    });

    app.get('players23/addPlayer', (req, res) => {
        console.log(req);
        res.send('add player request received');
    })
}