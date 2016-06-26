const solr = require('solr-client');
const client = solr.createClient('personensuche_solr', 8983, 'semantic');
const fs = require('fs');

var query = '*';
client.deleteByQuery(query,function(err,obj){
	if(err){
		console.log(err);
	}else{
		console.log(obj);
	}
});