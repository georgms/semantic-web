#!/bin/sh

CONTAINER=personensuche_solr

docker kill $CONTAINER;
docker rm $CONTAINER;

docker run --name $CONTAINER --publish 8983:8983 -d -t solr:6.1 &&
sleep 3 &&
docker exec -it --user=solr $CONTAINER bin/solr create -c semantic &&
docker cp managed-schema $CONTAINER:/opt/solr/server/solr/semantic/conf/ &&
curl "http://localhost:8983/solr/admin/cores?_=1466937329809&action=RELOAD&core=semantic&wt=json"