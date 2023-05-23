# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir as notícias mais populares. | ALTA | index.html |
|RF-002| Usuários autenticados podem registrar novas notícias. | ALTA | cadastro-noticia.html |

## Descrição das estruturas:


## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|:-------------------:|:-------------------------------------------:|:------------------------------------------------:|
|Id do usuário|Número (Inteiro)|Identificador único do usuário.| 1|
|Nome|Texto|Nome do usuário.|Paulo Henrique|
|Idade|Número (Inteiro)|Idade do usuário que irá realizar acompanhamento por meio da aplicação.|25|
|Peso|Número|Peso do usuário que irá realizar acompanhamento por meio da aplicação.|72,65|
|Altura|Número|Altura do usuário que irá realizar acompanhamento por meio da aplicação.|1,75|
|E-mail|Texto|Email utilizado para cadastro do usuário no sistema.|paulo.henrique@email.com|
|Senha|Texto|Senha de cadastro no sistema.|SenhaNutri123|


## Registro Alimentar
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|:-------------------:|:-------------------------------------------:|:------------------------------------------------:|
|Id do alimento|Número (Inteiro)|Identificador único do alimento no relatório.|1|
|Nome Alimento|Texto|Nome característico do alimento consumido.|Arroz|
|Refeição|Número (Inteiro)|Identificador padrão da refeição.|2 - Almoço|
|Data|Data|Data em que será realizado o cadastro do alimento ingerido.|25/04/2022|
|Quantidade|Número|Quantidade do alimento consumida.|200         
|Unidade|Texto|Unidade de referência do alimento cadastrado.|gramas        

## Refeição
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|:-------------------:|:-------------------------------------------:|:------------------------------------------------:|
|Café da manhã|Número (Inteiro)|Identificador da refeição.| 1|
|Almoço|Número (Inteiro)|Identificador da refeição.|2|
|Lanche|Número (Inteiro)|Identificador da refeição.|3|
|Jantar|Número (Inteiro)|Identificador da refeição.|4|
