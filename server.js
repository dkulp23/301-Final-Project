var express = require('express')
var port = process.env.PORT || 3000
var app = express()
var pg = require('pg')

var connectionString = process.env.DATABASE_URL

app.post()
// pg.defaults.ssl = true
// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   if(err) throw err
//   console.log('Connected to postress! Getting schemas...')
//
//   client
//     .query('SELECT table_schema, table_name FROM information_schema.tables')
//     .on('row', function(row) {
//       console.log(JSON.stringify(row))
//     })
// })

app.use(express.static('./'))

app.get('*', function(request, response) {
  console.log(`New request ${request.url}`)
  response.sendFile('index', {root: '.'})
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})
