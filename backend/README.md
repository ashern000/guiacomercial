## Guia Comercial - Back-End

## Configuração para rodar a API

Para instalar os pacotes que a API foi construida, rode um dos comandos a seguir

    npm install

Ou

    yarn add

Antes de iniciar a API, caso esteja utilizando o Docker como contêiner para o banco de dados, precisa criar uma `replica set`, ou seja, um cluster para o banco de dados. Para isso, é necessário criar uma rede para os dockers containers.

    docker network create mongo-net

Depois de criada a rede, execute os contêiners

##### Contêiner 1

    docker run -d --rm -p 27017:27017 --name mongo1 --network mongo-net mongo:5 mongod --replSet comartSet --bind_ip localhost,mongo1

##### Contêiner 2

    docker run -d --rm -p 27018:27017 --name mongo2 --network mongo-net mongo:5 mongod --replSet comartSet --bind_ip localhost,mongo2

##### Contêiner 3

    docker run -d --rm -p 27019:27017 --name mongo3 --network mongo-net mongo:5 mongod --replSet comartSet --bind_ip localhost,mongo3

##### Configuração da replica set no banco principal

    docker exec -it mongo1 mongosh --eval "rs.initiate({
        _id: \"comartSet\",
        members: [
            {_id: 0, host: \"mongo1\"},
            {_id: 1, host: \"mongo2\"},
            {_id: 2, host: \"mongo3\"}
        ]
        })"

##### Verificar status do Cluster

    docker exec -it mongo1 mongosh --eval "rs.status()"

##### Connection String

    mongodb://<ip>:<port>/?directConnection=true&authSource=admin&replicaSet=comartSet&retryWrites=true

A connection string precisa referenciar a replica set e passar o parâmetro de conexão direta para não acontecer erros.

## Docker Compose

Nos arquivos da API, há também o arquivo `docker-compose.yaml`, invés de necessitar colocar todos os comandos do docker um por um, com o docker-compose você coloca esse comando:

    docker compose up

Logo em seguida esse

    docker exec -it mongo1 mongosh --eval "rs.initiate({_id:'comartSet', members: [{_id:0, host: 'mongo1'},{_id:1, host: 'mongo2'},{_id:2, host: 'mongo3'}]})"

Por fim verificar se a replicaSet está configurada:

    docker exec -it mongo1 mongosh --eval "rs.status()"

## Shell Script

Caso esteja em um sistema Linux, tem um script shell para executar a aplicação de maneira automática, para usá-lo, basta digitar no terminal:

    shell_que_utiliza ./startApp.sh start

Se quiser para a aplicação, digite:

    shell_que_utiliza ./startApp.sh stop

## .bat

No Windows, execute com double click o arquivo .bat para levantar a aplicação toda.
