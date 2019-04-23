var app = require('express')();
var http = require('http').Server(app);

app.post('/request-money', function (_, res) {
  console.log('Creating request money with amount...');
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify({
    id: 123,
    amount: 5,
  }));
});

http.listen(3000, function () {
  console.log('Server listening on http://127.0.0.1:3000');
});
