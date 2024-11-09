FAZENDO DOWNLOAD DO INSTALADOR & INICIANDO A PRIMEIRA INSTALAÇÃO (USAR SOMENTE PARA PRIMEIRA INSTALAÇÃO):

sudo apt install -y git && git clone https://github.com/plwdesign/instaladorwhatsapsaas-main && sudo chmod -R 777 instaladorwhatsapsaas-main && cd instaladorwhatsapsaas-main && sudo ./install_primaria

ACESSANDO DIRETORIO DO INSTALADOR & INICIANDO INSTALAÇÕES ADICIONAIS (USAR ESTE COMANDO PARA SEGUNDA OU MAIS INSTALAÇÃO:

cd ./instaladorwhatsapsaas-main && sudo ./install_instancia

1- Digite 0 (Para instalar)
2- Digite nome do banco, NÃO USE caracteres especiais.
3- Cole link do github: https://github.com/plwdesign/vipclub
 https://github.com/william81484016/whaticket1
4- Digite o nome da instância.

Feito isso prossiga com a instalação assistindo o vídeo.

No decorrer da instalação vai ser solicitado um password e username cole no terminal:








1 - INSTALAR NORMAL COM INSTALADOR

2 - COMO CRIAR O APLICATIVO GERENCIANET https://gerencianet.com.br/artigo/como-criar-uma-nova-aplicacao-para-usar-a-api-pix/#versao-7

3 - COMO CRIAR O CERTIFICADO GERENCIANET https://gerencianet.com.br/artigo/como-gerar-o-certificado-para-usar-a-api-pix/#versao-7

4 - COPIAR OS CERTIFICADOS PARA A PASTA /backend/certs

5 - CONFIGURAR .ENV ADICIONAR OS SEGUINTES DADOS

GERENCIANET_SANDBOX=false
GERENCIANET_CLIENT_ID=Client_Id_
GERENCIANET_CLIENT_SECRET=Client_Secret_
GERENCIANET_PIX_CERT=nome do certificado pix
GERENCIANET_PIX_KEY=chave pix do gerencianet

6 - RODE  cd ./instaladorwhatsapsaas-main && sudo ./install_instancia
6.1 - Digite 1 e depois digite nome de sua instancia

7 -CRIAR O WEBHOOH PARA RETORNO AUTOMATICO GERENCIANET E ENVIAR UM POST PARA O ENDEREÇO DO BACKEND COM OS DADOS EM JSON PELO POSTMAN OU COPIE O CODIGO ABAIXO ALTERE OS DADOS E COLE NO TERMINAL

CODIGO PELO SSH:

curl --request POST \
  --url https://api.wrbotchat.online/subscription/create/webhook \
  --header 'Content-Type: application/json' \
  --data '{ 
    "chave": "23d24435-851b-4e07-aff2-26af426b13fa", 
    "url": "https://api.wrbotchat.online/subscription/webhook"
 }'
DADOS PARA POSTMAN/INSOMINIA URL: https://api.wrbotchat.online/subscription/create/webhook

	{ 
		"chave": "23d24435-851b-4e07-aff2-26af426b13fa", 
		"url": "https://api.wrbotchat.online/subscription/webhook"
	}
