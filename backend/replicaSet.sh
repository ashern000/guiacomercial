#!/usr/bin/env sh

case $1 in

    start)
        docker compose up -d
        sleep 10
        docker exec -it mongo1 mongosh --eval "rs.initiate({_id:'comartSet', members: [{_id:0, host: 'mongo1'},{_id:1, host: 'mongo2'},{_id:2, host: 'mongo3'}]})"
        sleep 1
        docker exec -it mongo1 mongosh --eval "rs.status()"
        npm i
        npm run dev
        ;;
    stop)
        docker compose down
        npm stop
        echo "Finished!"
        exit 0
        ;;

esac