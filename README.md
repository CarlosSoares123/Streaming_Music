# Soares Streaming

## Visão Geral

O Soares Streaming é uma aplicação completa para streaming de músicas, desenvolvida com uma arquitetura cliente-servidor. O projeto é dividido em duas partes principais: frontend e backend. O frontend é uma aplicação React desenvolvida com Vite e TypeScript, enquanto o backend é construído com Express, Sequelize e outras tecnologias.

## Tecnologias Utilizadas

### Frontend
- React
- Typescript
- Vite

### Backend
- Express
- Sequelize
- Bcrypt
- JSON Web Token (JWT)
- Multer
- Cors
- Morgan
- Dotenv
- MySQL2
- UUID

## Funcionalidades Principais

### Backend
- Registro de Usuário (POST /auth/register)
- Login (POST /auth/login)
- Adicionar Música (POST /upload/addMusic)
- Listar Músicas (GET /upload/list)
- Listar Músicas do Usuário (GET /upload/mylist)
- Excluir Música (DELETE /upload/:id/delete)

### Frontend
- Login
- Registro
- Verificação de Token
- Home
- Upload
- Minhas Músicas
- Reprodução de Áudio

