#!/usr/bin/env sh
# ------------------------------------------------------------------------------------------------------- #
#
#
# Script para inicialização da aplicação #
# ------------------------------------------------------------------------------------------------------- #
#
# Autor: Asher Novelli Bittencourt De Bortoli #
# Site: github.com/ashern000 #
# Manutenção: Asher Novelli Bittencourt De Bortoli #
#
# ------------------------------------------------------------------------------------------------------- #
#
# Historico: #
# Testado em bash 5.1.16 em 01/05/2023 #
# Testado em zsh 5.8.1-1 em 01/05/2023 #
# Testado nas distros: Ubuntu e Lubuntu #
# ------------------------------------------------------------------------------------------------------- #
#
# v1.0, 01/05/2023, Asher: #
# Criação do script para iniciar a aplicação de maneira mais fácil. #

# ------------------------------------------- EXECUÇÃO ------------------------------------------------- #

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

*)
    echo "\a \n \033[1;32m script precisa da flag (start|stop) para funcionar! \n"
    ;;

esac
