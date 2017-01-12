var express = require('express')
var port = process.env.PORT || 3000
var app = express()
var pg = require('pg')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432'

app.get('/carriersDB', function(req, res) {
  console.log(connectionString);
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

app.post('/carriersDB', bodyParser.json(), function(req, res){
  console.log(req.body.name);
  const client = new pg.Client(connectionString);

  client.connect(function(err){
    if(err) console.error('Trouble connecting to postgres', err)

  client.query(
    'INSERT INTO carrier_data (name, number, address, city, state, zip, email) VALUES($1, $2, $3, $4, $5, $6, $7)',
    [req.body.name, req.body.number, req.body.address, req.body.city, req.body.state, req.body.zip, req.body.email],
    function(err) {
      if(err) console.error('Error running query', err);
      client.end();
    })
})
res.send('Post complete')
})

app.get('/email', function(req, res){
 var helper = require('sendgrid').mail;
 var from_email = new helper.Email('app61618793@heroku.com');
 // to email is where we will build some additional logic to query the DB for any users that need to receive this email
 var to_email = new helper.Email('dkulp23@gmail.com');
 var subject = 'Hello World from the SendGrid Node.js Library!';
 var content = new helper.Content('text/plain', 'Hello, Email!');
 var mail = new helper.Mail(from_email, subject, to_email, content);

 var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
 var request = sg.emptyRequest({
   method: 'POST',
   path: '/v3/mail/send',
   body: mail.toJSON(),
 });

 sg.API(request, function(error, response) {
   console.log(response.statusCode);
   console.log(response.body);
   console.log(response.headers);
 });
 //sends us home after triggering an api request
 res.redirect('/')
})

app.use(express.static('./'))


app.get('*', function(request, response) {
  console.log(`New request ${request.url}`)
  response.sendFile('index', {root: '.'})
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})
