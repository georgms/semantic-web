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
  search(qry, function(err, obj) {
    res.send(obj);
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function search(qry, callback) {
  var obj = {
  "responseHeader": {
    "status": 0,
    "QTime": 23,
    "params": {
      "q": "Josef",
      "indent": "true",
      "rows": "1",
      "wt": "json",
      "_": "1465505629357"
    }
  },
  "response": {
    "numFound": 38,
    "start": 0,
    "docs": [
      {
        "index": [
          1406
        ],
        "fhs": [
          "fhs36905"
        ],
        "forename": [
          "Sebastian"
        ],
        "surname": [
          "Burkhart"
        ],
        "function": [
          "josef-ressel-zentrum (wissenschaftlicher mitarbeiter)"
        ],
        "type": [
          "Personal, Studierender"
        ],
        "mail": [
          "sebastian.burkhart@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "male"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1405
        ],
        "fhs": [
          "fhs36904"
        ],
        "forename": [
          "Sebastiane"
        ],
        "surname": [
          "Burkhartin"
        ],
        "function": [
          ""
        ],
        "type": [
          "Studierender"
        ],
        "mail": [
          "sebastiane.burkhartin@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "w/s"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1406
        ],
        "fhs": [
          "fhs36905"
        ],
        "forename": [
          "Sebastian"
        ],
        "surname": [
          "Burkhart"
        ],
        "function": [
          "josef-ressel-zentrum (wissenschaftlicher mitarbeiter)"
        ],
        "type": [
          "Personal, Studierender"
        ],
        "mail": [
          "sebastian.burkhart@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "male"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1405
        ],
        "fhs": [
          "fhs36904"
        ],
        "forename": [
          "Sebastiane"
        ],
        "surname": [
          "Burkhartin"
        ],
        "function": [
          ""
        ],
        "type": [
          "Studierender"
        ],
        "mail": [
          "sebastiane.burkhartin@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "female"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1406
        ],
        "fhs": [
          "fhs36905"
        ],
        "forename": [
          "Sebastian"
        ],
        "surname": [
          "Burkhart"
        ],
        "function": [
          "josef-ressel-zentrum (wissenschaftlicher mitarbeiter)"
        ],
        "type": [
          "Personal, Studierender"
        ],
        "mail": [
          "sebastian.burkhart@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "male"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1405
        ],
        "fhs": [
          "fhs36904"
        ],
        "forename": [
          "Sebastiane"
        ],
        "surname": [
          "Burkhartin"
        ],
        "function": [
          ""
        ],
        "type": [
          "Studierender"
        ],
        "mail": [
          "sebastiane.burkhartin@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "w/s"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1406
        ],
        "fhs": [
          "fhs36905"
        ],
        "forename": [
          "Sebastian"
        ],
        "surname": [
          "Burkhart"
        ],
        "function": [
          "josef-ressel-zentrum (wissenschaftlicher mitarbeiter)"
        ],
        "type": [
          "Personal, Studierender"
        ],
        "mail": [
          "sebastian.burkhart@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "male"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1405
        ],
        "fhs": [
          "fhs36904"
        ],
        "forename": [
          "Sebastiane"
        ],
        "surname": [
          "Burkhartin"
        ],
        "function": [
          ""
        ],
        "type": [
          "Studierender"
        ],
        "mail": [
          "sebastiane.burkhartin@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "female"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1406
        ],
        "fhs": [
          "fhs36905"
        ],
        "forename": [
          "Sebastian"
        ],
        "surname": [
          "Burkhart"
        ],
        "function": [
          "josef-ressel-zentrum (wissenschaftlicher mitarbeiter)"
        ],
        "type": [
          "Personal, Studierender"
        ],
        "mail": [
          "sebastian.burkhart@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "male"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1405
        ],
        "fhs": [
          "fhs36904"
        ],
        "forename": [
          "Sebastiane"
        ],
        "surname": [
          "Burkhartin"
        ],
        "function": [
          ""
        ],
        "type": [
          "Studierender"
        ],
        "mail": [
          "sebastiane.burkhartin@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "k.A."
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1406
        ],
        "fhs": [
          "fhs36905"
        ],
        "forename": [
          "Sebastian"
        ],
        "surname": [
          "Burkhart"
        ],
        "function": [
          "josef-ressel-zentrum (wissenschaftlicher mitarbeiter)"
        ],
        "type": [
          "Personal, Studierender"
        ],
        "mail": [
          "sebastian.burkhart@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "male"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      },
      {
        "index": [
          1405
        ],
        "fhs": [
          "fhs36904"
        ],
        "forename": [
          "Sebastiane"
        ],
        "surname": [
          "Burkhartin"
        ],
        "function": [
          ""
        ],
        "type": [
          "Studierender"
        ],
        "mail": [
          "sebastiane.burkhartin@fh-salzburg.ac.at"
        ],
        "course": [
          "Josef-Ressel-Zentrum"
        ],
        "sex": [
          "female"
        ],
        "image_id": [
          36905
        ],
        "id": "7c4f026e-bcc8-46ed-99ca-7e3d1be3a794",
        "_version_": 1536688650991960000
      }
    ]
  }
};

  callback(null, obj)
  // request(`http://localhost:8983/solr/semantic/select`+
  //   `?q=${qry}`+
  //   `&wt=json`+
  //   `&rows=100`+
  //   `&indent=true`+
  //   `&defType=dismax`+
  //   `&qf=forename%5E2`+
  //   `+surname%5E2`+
  //   `+mail%5E1`+
  //   `+function%5E1`+
  //   `+type%5E1`+
  //   `+sex%5E1`+
  //   `+fhs%5E1`,(e,res,obj) => {callback(null, obj)});
}
