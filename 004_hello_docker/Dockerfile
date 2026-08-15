# Imagem com node versão 26 e sistema operacional Alpine
FROM node:26-alpine

# Definindo o diretório de trabalho para os comandos seguintes
WORKDIR /app

# Copiando o arquivo package.json para o diretório de trabalho para executar o comando npm install
COPY package.json .

# Instalando as dependências do projeto
RUN npm install

# Copiando todos os arquivos do projeto (.) para o diretório de trabalho(.)
COPY . .

# Tornando o container acessível na porta 5200
EXPOSE 5200

# Comando para iniciar a aplicação Node.js
CMD ["node", "index.js"]