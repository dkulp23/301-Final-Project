var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.use(express.static('./'))

app.get('*', function(request, response) {
  console.log(`New request ${request.url}`)
  response.sendFile('index', {root: '.'})
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})
