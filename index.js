const solr = require('solr-client');
const client = solr.createClient('127.0.0.1', 8983, 'gettingstarted');

var express = require('express');
var app = express();

app.use('/', express.static('public'));

//var serve = serveStatic('public/ftp', {'index': ['index.html', 'index.htm']})

app.get('/query/:input', function (req, res) {
   search(req.params.query, function(err, obj) {
   	res.send(obj);
   })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function search(qry, callback) {
  const query = client.createQuery()
  .q(`*${qry}*~3`)
  .qf({'forename' : 10 , 'surname' : 8, 'email': 5, 'function': 1, 'type': 2, 'sex': 3, 'fhsNr': 8})
  .qs(14);

  client.search(query,function(err,obj){
    console.log("hier");
  	if(err){
  		callback(err);
  	}else{
  		callback(null, obj);
  	}
  });
}