#!/bin/sh

docker build -t personensuche .
docker run -it --rm --name personensuche --publish=3000:3000 --link personensuche_solr personensuche