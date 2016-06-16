'use strict'

const solr = require('solr-client');
const client = solr.createClient('127.0.0.1', 8983, 'semantic');
const fs = require('fs');
const request = require('request');

var express = require('express');
var app = express();

app.use('/', express.static('public'));

app.get('/query/:input', function (req, res) {
  let qry = req.params.input;
  console.log("Anfrage mit Query: "+qry)
  search(qry, function(err, obj) {
    res.send(obj);
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function search(qry, callback) {
  let query = `http://localhost:8983/solr/semantic/select`+
  `?q=*${qry}*`+
  `&wt=json`+
  `&rows=100`+
  `&indent=true`/*+
  `&defType=dismax`+
  `&qf=forename%5E2`+
  `+surname%5E2`+
  `+mail%5E1`+
  `+function%5E1`+
  `+type%5E1`+
  `+sex%5E1`+
  `+fhs%5E1`*/;
  request(query,(e,res,obj) => {callback(null, obj);});
}

/*function search(qry, callback) {
  const options = {
    "q":qry,
    "defType":"dismax",
    "indent":"true",
    "qf":"forename^2 surname^2 mail^1 function^1 type^1 sex^1 fhs^1",
    "rows":"100",
    "wt":"json"
  }

  var query = client.createQuery()
  .group(options);
  client.search(query, function(err, data){
    console.log(data);
    callback(err, data);
  });
}*/
