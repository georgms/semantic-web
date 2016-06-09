const solr = require('solr-client');
const client = solr.createClient('127.0.0.1', 8983, 'semantic');
const fs = require('fs');



fs.readFile('seed.json', 'utf8', (err, data) => {
	if (err) throw err;
	const daten = JSON.parse(data);

	client.autoCommit = true;


	client.add(daten,function(err,obj){
		if(err){
			console.log(err);
		}else{
			console.log(obj);
		}
	});
});