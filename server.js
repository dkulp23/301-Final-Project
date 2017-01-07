var express = require('express')
var port = process.env.PORT || 3000
var app = express()
var pg = require('pg')
var bodyParser = require('body-parser').json()

var connectionString = 'postgres://localhost:5432' || process.env.DATABASE_URL

app.get('/carriersDB', function(req, res) {
  const client = new pg.Client(connectionString);

  client.connect(function(err) {
    if(err) {
      console.error('Trouble connecting to postgres', err)
    }
    client.query(
      'SELECT * FROM carrier_data',
      function(err, result) {
        if(err) {
          console.error('Query failed', err)
        }
        res.json(result);
        client.end();
      }
    )
  })
})

app.post('/carriersDB', bodyParser, function(req, res){
  console.log(req.body);
  const client = new pg.Client(connectionString);

  client.connect(function(err){
    if(err) console.error('Trouble connecting to postgres', err)

  client.query(
    'INSERT INTO carrier_data (name, number, address, city, state, zip, email)',
    [req.body.name, req.body.number, req.body.address, req.body.city, req.body.city, req.body.state, req.body.zip, req.body.email],
    function(err) {
      if(err) console.error('Error running query', err);
      client.end();
    })
})
res.send('Post complete')
})

app.use(express.static('./'))

app.get('*', function(request, response) {
  console.log(`New request ${request.url}`)
  response.sendFile('index', {root: '.'})
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})
