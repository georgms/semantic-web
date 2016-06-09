const solr = require('solr-client');
const client = solr.createClient('127.0.0.1', 8983, 'semantic');
const fs = require('fs');



fs.readFile('seed.json', (err, data) => {
	if (err) throw err;
	const StringDecoder = require('string_decoder').StringDecoder;
	const decoder = new StringDecoder('utf8');
	var daten = JSON.parse(decoder.write(data));

	client.autoCommit = true;


	client.add(daten,function(err,obj){
		if(err){
			console.log(err);
		}else{
			console.log(obj);
		}
	});
});