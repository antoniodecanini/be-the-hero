# Be The Hero
### Este projeto foi desenvolvido durante a Semana OmniStack #11, ministrada pela RocketSeat.

#### O projeto foi desenvolvido inteiramente em JS, utilizando node.js para o backend, ReactJS para o frontend e ReactNative.

## Features
Este projeto consiste em um app para ajudar ongs a captar recursos para solucionar seus problemas. Uma ong se cadastra no sistema e a partir dai pode criar o casos em quem precisa de ajuda. Um herói disposto a ajudar, pode buscar através de seu app os casos disponíveis, escolher um e salvar o dia.

## Desenvolvimento
Na criação do backend foi desenvolvida uma API, utilizando o micro-framework web express, banco de dados sqlite, para criação das querys foi utilizado Knex e como middleware foi utilizado celebrate.
Para testes foi utilizado Jest.

No desenvolvimento do frontend, foi utilizado axios para conexão com a API.

Para desenvolvimento mobile, também foi utilizado axios e o framework Expo.

## Instalação
Clone o projeto para sua máquina, é necessário ter instalado node.js v12 ou superior.

### Backend
```cd backend```
```npm install```
```npm start```

### Frontend
```cd ../frontend```
```npm install```
```npm start```
Após o servidor ter iniciado acessar [http://localhost:3000](http://localhost:3000)

### Mobile
Para testar a versão mobile, é necessário instalar o App Expo disponível para Android e IOS.
```cd ../mobile```
```npm instal```
```npm start```
Após iniciar o server mobile, abrir o app Expo no celular e escanear o QRcode mostrado em terminal.