## API-USERS

## Descrição

  API de cadastro de usuários. 
  Utiliza NodeJS com o banco de dados MongoDB.

## Como rodar o projeto

  Para rodar o projeto primeiro é preciso ter o MongoDB, Git (caso queira utilizar o método do git clone) e WinRar (caso esteja com oarquivo doprojeto compactado) instalado no máquina.
  
  Utilizando Git:
  No seu terminal, navegue até a sua pasta de preferência e rode o comando: 
  git clone https://github.com/fernandoc89/api-users.git 

  Isso irá baixar todos os arquivos para a sua máquina. 
  
  Com seu repositório baixado na sua máquina, execute o comando yarn na pasta do projeto clonado para instalar todas as dependências.

  Utilizando WinRar:
  Crie uma pasta para o projeto. Dentro desse diretório, extraia os arquivos de dentro do arquivo .zip recebido.

  Após isso, basta rodar o comando yarn dev para iniciar o projeto.

  Para testar o projeto com as rotas utilize o Insomnia ou algum outro programa se sua preferência.

## Informações sobre a API
  Possui 4 métodos e rotas. 
      
      **Create** 
        - Método: POST
        - Rota: localhost:3000/users/create
        - Descrição: Cria um novo usuário
        - Exemplo:
            Rota: localhost:3000/users/create
            Body (JSON): 
            }
              "name": "User",
              "username": "username",
              "password": "1234568"
            }
        - Retorno:
          - 200: Success
          - 400: Username already exists
          - 400: Registration failed. User not created

      **Read** 
        - Método: GET
        - Rota: localhost:3000/users/read
        - Descrição: Retorna a lista de usuários cadastrados
      
      **Update** 
        - Método: PUT
        - Rota: localhost:3000/users/update/id
        - Descrição: Atualiza um usuário passado pelo id na rota
        - Exemplo:
            Rota:
            localhost:3000/users/update/123456789
            Body (JSON): 
            }
              "name": "User",
              "username": "username",
              "password": "1234568"
            } 
        - Retorno:
          - 200: User has been updated
          - 400: Error updating user

      **Delete** 
        - Método: Delete
        - Rota: localhost:3000/users/delete/id 
        - Descrição: Remove um usuário passado pelo id na rota
        - Exemplo:
            Rota:
            localhost:3000/users/delete/123456789
        - Retorno:
          - 200: User has been removed
          - 400: Error removing user
          

## Stacks
  - Javascript
  - NodeJS
  - MongoDB

## Bibliotecas

  - express
  - bcryptjs
  - mongoose

## Regras de negócio

### Cadastro de Usuário
**RF**
- Deve ser possível cadastrar um novo usuário.
- O password deve ser criptografado.

**RN**
- Não deve ser possível cadastrar um usuário com um username. 

### Listagem de usuários

**RF**
- Deve ser possível listar todos os usuários cadastrados.

**RN**
- O usuário não precisa estar logado no sistema.

### Atualização de usuário 

**RF**
- Deve ser possível atualizar um usuário existente.

### Deleção de usuário 

**RF**
- Deve ser possível deletar um usuário existente.

