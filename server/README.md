# Soares Streaming Backend
## Visão Geral
O Soares Streaming é uma aplicação para streaming de músicas, com funcionalidades de autenticação de usuários, upload de músicas e listagem personalizada de músicas por usuário.

## Tecnologias Utilizadas
- **Express**: Utilizado como o framework principal para a construção do servidor web devido à sua simplicidade e robustez.
- **Sequelize**: Escolhido como ORM para interagir com o banco de dados MySQL, proporcionando uma abstração fácil de usar para operações de banco de dados.
- **Bcrypt**: Utilizado para realizar o hash de senhas dos usuários de forma segura.
- **JSON Web Token (JWT)**: Implementado para fornecer autenticação e autorização seguras por meio de tokens.
- **Multer**: Utilizado para manipulação de dados de formulários, permitindo o upload de arquivos de áudio e imagem.
- **Cors**: Habilitado para garantir a segurança no acesso a recursos do servidor de diferentes origens.
- **Morgan**: Adicionado para gerar logs de requisições HTTP, facilitando o monitoramento e a depuração.
- **Dotenv**: Utilizado para carregar variáveis de ambiente a partir de um arquivo .env.
- **MySQL2**: Escolhido como o driver MySQL para interação com o banco de dados.
- **UUID**: Adotado para a geração de UUIDs únicos para identificação de músicas e usuários.

## Fluxo do Sistema

### Registro de Usuário

- **Endpoint:** `POST /auth/register`
- **Fluxo:** Os usuários podem se registrar fornecendo um e-mail e senha. A senha é criptografada antes de ser armazenada no banco de dados.

### Login

- **Endpoint:** `POST /auth/login`
- **Fluxo:** Os usuários podem fazer login com seu e-mail e senha. Um token JWT é gerado e retornado para autenticação subsequente.

### Adicionar Música

- **Endpoint:** `POST /upload/addMusic`
- **Fluxo:** Os usuários autenticados podem fazer upload de novas músicas, fornecendo informações como título, artista e arquivos de áudio e imagem.

### Listar Músicas

- **Endpoint:** `GET /upload/list`
- **Fluxo:** Retorna a lista de todas as músicas disponíveis, ordenadas por data de criação.

### Listar Músicas do Usuário

- **Endpoint:** `GET /upload/mylist`
- **Fluxo:** Retorna a lista de músicas pertencentes ao usuário autenticado.

### Excluir Música

- **Endpoint:** `DELETE /upload/:id/delete`
- **Fluxo:** Permite que o usuário autenticado exclua suas próprias músicas. Os arquivos de áudio e imagem são removidos do sistema de arquivos e o registro da música é excluído do banco de dados.


## Como Iniciar

Siga as etapas abaixo para iniciar o projeto em sua máquina local:

1. Clone o repositório:

`
  https://github.com/CarlosSoares123/Streaming_Music.git
  cd server
`

2. Navegue até o diretório do projeto:

  `
  cd seu-projeto
  `

3. Instale as dependências:

`
npm install
`

4. Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias, como chaves de API, configurações de banco de dados e segredos JWT. Certifique-se de incluir as seguintes variáveis para configurar a conexão com o banco de dados:

```bash
DB_USERNAME=seu-host

DB_PASSWORD=sua-senha

DB_DATABASE=banco-de-dados

DB_HOST=127.0.0.1

```


5. Execute as migrações do Sequelize para criar as tabelas no banco de dados:

`
npx sequelize-cli db:migrate
`

6. Inicie o servidor:

`
npm start
`

O sistema estará disponível em http://localhost:4000 por padrão.
