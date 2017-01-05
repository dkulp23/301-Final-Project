var express = require('express')
var port = process.env.PORT || 3000
var app = express()
var pg = require('pg')

var connectionString = 'postgres://localhost:5432' || process.env.DATABASE_URL

app.get('/carriersDB', function(req, res) {
  const client = new pg.Client(connectionString);

  client.connect(function(err) {
    console.log('before connect if statement')
    if(err) {
      console.log('inside connect if statement')
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

app.use(express.static('./'))

app.get('*', function(request, response) {
  console.log(`New request ${request.url}`)
  response.sendFile('index', {root: '.'})
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})
