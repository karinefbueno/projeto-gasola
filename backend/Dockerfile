# Use a imagem oficial do Node.js com a versão 21.0.0
FROM node:21.0.0

# Configuração do diretório de trabalho no contêiner
WORKDIR /app

# Copiar o package.json e package-lock.json (se existir)
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todos os arquivos do diretório atual para dentro do diretório de trabalho no contêiner
COPY . .

# Expor a porta que o aplicativo Adonis.js utiliza (por padrão é a porta 3333)
EXPOSE 3333

# Comando para executar o aplicativo Adonis.js em modo de desenvolvimento
CMD ["npm", "run", "dev"]
