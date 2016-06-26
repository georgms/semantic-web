#!/bin/sh

docker run --link personensuche_solr -it --rm --name personensuche_seed -v "$PWD":/usr/src/app -w /usr/src/app node:6.2 node seed.js