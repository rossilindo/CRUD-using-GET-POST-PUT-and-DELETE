<h1 style='color: green'>API de Lista de Tarefas</h1>
<img src='https://github.com/rossilindo/CRUD-using-GET-POST-PUT-and-DELETE/blob/main/mgt/Organizar-n%C3%A3o-%C3%A9-limitar.png'>

<p>Os alunos devem desenvolver uma API usando Express.js para gerenciar uma lista de tarefas. A API deve permitir adicionar, visualizar, atualizar e remover tarefas, além de garantir que não sejam criadas tarefas com o mesmo nome.<p>

# Requisitos
 <p>- Node.js v12 ou superior</p>
 <p>- NPM (gerenciador de pacotes do Node.js) ou yarn</p>

# 1º Passo: Instalação

<details>
   <summary><b>Clique aqui</b></summary>

 1. Crie uma pasta onde deseja armazenar nosso projeto, e então abra-a e clique na url da pasta, ou então utilize o atalho `Ctrl+L` para selecionar a url, e escreva 'cmd' para abrir o prompt de comando.
 Um prompt de comando irá se abrir, e então execute o comando abaixo:
  
  ```
  git clone https://github.com/rossilindo/CRUD-using-GET-POST-PUT-and-DELETE .
  ``` 

 2. Com o VSCODE aberto, clique em `File` e depois em `Open Folder` ou aperte  `Ctrl+K Ctrl+O` e selecione a pasta onde você clonou o repositório

 3. Abra um terminal apertando `Ctrl+Shift+'` e instale a dependência necessária escrevendo o seguinte comando: 
  ```
  npm install
  ```

  > _Obs.: Caso esteja usando o yarn, utilize o seguinte comando `yarn install
`_

</details>
<br>

# 2º Passo: Execução da API

<details>
   <summary><b>Clique aqui</b></summary>

 1. Após a instalação das dependências, inicie o servidor:
  ```
  node index.js
  ```
  > _Obs.: Ou use `yarn start` caso esteja usando o yarn_

 2. A API estará rodando na porta 3000. Você pode acessá-la em http://localhost:3000

</details>
<br>

# Rotas Disponíveis

<details>
   <summary><b>Clique aqui</b></summary>

## 1. Ver todas as tarefas
   - Rota: GET /tarefas
   - Descrição: Retorna todas as tarefas cadastradas.
   - Exemplo de Resposta:
    
    [
     {
        "id": 1,
        "nome": "Estudar para o exame",
        "status": false
    },
    {
        "id": 2,
        "nome": "Fazer compras",
        "status": true
     }
    ]
   

## 2. Adicionar uma nova tarefa
   - Rota: POST /tarefas
   - Descrição: Adiciona uma nova tarefa. O status é false por padrão (não concluído).
   - Corpo da Requisição:
   ```
   {
     "nome": "Nome da tarefa"
   }
   ```
   - Exemplo de Resposta:
   ```
   {
    "id": 3,
    "nome": "Nome da tarefa",
    "status": false
   }
   ```

## 3. Atualizar uma tarefa existente
   - Rota: PUT /tarefas/:id
   - Descrição: Atualiza uma tarefa existente com base no id, permitindo modificar o nome e o status.
   - Corpo da Requisição:
   ```
   {
    "nome": "Novo nome da tarefa",
    "status": true
   }
   ```
   - Exemplo de Resposta:
   ```
   {
    "id": 1,
    "nome": "Novo nome da tarefa",
    "status": true
   }
   ```

## 4. Excluir uma tarefa
   - Rota: DELETE /tarefas/:id
   - Descrição: Remove uma tarefa da lista com base no id.
   - Exemplo de Resposta:
   ```
   {
    "message": "Tarefa removida com sucesso."
   }
   ```

## 5. Filtrar tarefas por status
   - Rota: GET /tarefas?status=true ou GET /tarefas?status=false
   - Descrição: Filtra as tarefas de acordo com o status (Verdadeiro ou Falso).
   - Exemplo de Resposta:
   ```
   [
    {
     "id": 2,
     "nome": "Fazer compras",
     "status": true
    }
   ]
   ```
</details>
<br>
