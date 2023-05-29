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

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve disponibilizar para os usuários cadastrados ou não uma lista de receitas contendo apenas alimentos saudáveis. | Italo | index.html |
|RF-002| A aplicação deve fornecer ao usuário receitas, indicando se são adequadas para pessoas com intolerância à lactose, glúten, vegana ou vegetariana. | Jully | receitas.html  bolomilho.html espetovegan.html graodebico.html pizzavegana.html saladagrega.html soup.html spaghettisquash.html suflespinafre.html pastapesto.html|
|RF-003| A aplicação deve informar ao usuário cadastrado a quantidade que o mesmo deve ingerir de água de acordo com o peso dele. | Vinicius | registro_alimentar.html |
|RF-004| A aplicação deve ter uma tela para cálculo do Índice de Massa Corporal para usuários cadastrados ou não. | Vinicius | imc.html |
|RF-005| A aplicação deve disponibilizar tela com alimentos que não são recomendados de se consumir recorrentemente para qualquer usuário. | Mariana |  |
|RF-006| A aplicação deve disponibilizar tela com os dados nutricionais das receitas cadastradas para qualquer usuário. | Jully |bolomilho.html espetovegan.html pastapesto.html graodebico.html pizzavegana.html saladagrega.html soup.html spaghettisquash.html steak.html  suflespinafre.html|
|RF-007| A aplicação deve diponibilizar informações sobre os grupos de alimentos. | Mariana | conhecalimentos.html |
|RF-008| A aplicação deve permitir o autogerenciamento do cadastro de usuário. | Italo | dados_pessoais.html dados_pessoais_edicao.html alterar_senha.html login.html cadastro.html |
|RF-009| A aplicação deve disponibilizar tela de recuperação de senha.  | Italo |recuperacao_senha.html |
|RF-010| A aplicação deve permitir que um usuário cadastrado autogerencie os alimentos ingeridos ao longo do dia.  | Vinicius | registro_alimentar.html |
|RF-011| A aplicação deve gerar relatório com os alimentos ingeridos pelo usuário cadastrado.  | Vinicius | |



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
|Status|Booleano|Informa o status referente a conta do usuário(ATIVO/INATIVO).|Ativo|


## Registro Alimentar
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|:-------------------:|:-------------------------------------------:|:------------------------------------------------:|
|Descrição|Texto|Descrição completa dos alimentos inseridos para a respectiva refeição.|200 gramas de arroz, 2 litros de coca-cola, 1 unidade de maçã.|
|Refeição|Número (Inteiro)|Identificador padrão da refeição.|2 - Almoço|
|Data|Data|Data em que será realizado o cadastro do alimento ingerido.|25/04/2022|
|Id Usuário|Número (Inteiro)|Identificador do usuário à refeição|1|


