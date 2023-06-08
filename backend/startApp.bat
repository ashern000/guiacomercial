:: ------------------------------------------------------------------------------------------------------- ::
::
:: Script para inicialização da aplicação ::
::
:: ------------------------------------------------------------------------------------------------------- ::
::
:: Autor: Asher Novelli Bittencourt De Bortoli ::
:: Site: github.com/ashern000 ::
:: Manutenção: Asher Novelli Bittencourt De Bortoli ::
::
:: ------------------------------------------------------------------------------------------------------- ::
::
:: Historico: ::
:: Testado em  em 01/05/2023 ::
:: Testado nas versões: Windows 10 ::
::
:: ------------------------------------------------------------------------------------------------------- ::
::
:: v1.0, 01/05/2023, Asher: ::
:: Criação do script para iniciar a aplicação de maneira mais fácil. ::
:: -------------------- EXECUÇãO ---------------------- ::


@title 'Start App'
@echo "Olá, esse script inicia a aplicação toda, click para continuar!"
@pause
docker compose down
docker compose up -d
@echo "esperando a configuração do replica set" 
@timeout -t 10 /nobreak 
@docker exec -it mongo1 mongosh --eval "rs.initiate({_id:'comartSet', members: [{_id:0, host: 'mongo1'},{_id:1, host: 'mongo2'},{_id:2, host: 'mongo3'}]})"
@echo status of replica set
@docker exec -it mongo1 mongosh --eval "rs.status()"
@npm i && npm run dev
