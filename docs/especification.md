# Especificações do Projeto

Considerando o aumento no consumo de alimentos e processados junto com o crescimento no grau de obesidade no país ao longo desses últimos anos, diversas pessoas se encontram com dificuldade para organizar seus hábitos alimentares.

No processo de ideação da aplicação, utilizando as tecnicas logo abaixo:

      1.  Definição de publico alvo para busca de impacto do projeto

      2.  Mapa Mental para ramificação e criação de ideias

      3.  Personas para direcionamento de soluções e histórias de usuários

      4.  Mapeamento de requisitos para definição de prioridade e orientação do desenvolvimento do sistema

Foram levantados os dados logo abaixo, que fizeram que o intuito da aplicação fosse permitir que os usuários façam escolhas alimentares mais saudáveis para o dia a dia. Além disso, ela permite o registro de todas as refeições e a realização de cálculos das calorias, gerando uma análise do consumo, ajudando o usuário a entender como adequar as escolhas dos alimentos de forma mais inteligente, além de fornecer receitas para facilitar a nova rotina de alimentação.

## Personas

| ![1](https://user-images.githubusercontent.com/125522668/231544881-fad7aef3-15de-46d6-b422-8a1ee79c7db7.jpg) |
| -------------------------------------------------------------------------------------------------------------------------------- |



| ![Manual da persona apresentação (4)](https://user-images.githubusercontent.com/125522668/229296117-955719bb-09ac-4328-b98b-ce7b93b320c7.jpg) |
| -------------------------------------------------------------------------------------------------------------------------------- |

![Manual da persona apresentação (3)](https://user-images.githubusercontent.com/125522668/229296166-a7568769-92fc-4f4c-ba96-1321a48c31fc.jpg)
| -------------------------------------------------------------------------------------------------------------------------------- |


![Manual da persona apresentação](https://user-images.githubusercontent.com/125522668/228673217-ba3e7981-64e8-4ce4-98fd-3e4ab097fe2b.jpg)
| -------------------------------------------------------------------------------------------------------------------------------- |


![Manual da persona apresentação (1)](https://user-images.githubusercontent.com/125522668/228673332-b896d026-23b7-4e42-a6e0-d0fd920a9ca1.jpg)
| -------------------------------------------------------------------------------------------------------------------------------- |


![Manual da persona apresentação (2)](https://user-images.githubusercontent.com/125522668/228911286-6c556a73-65df-420f-81e2-0d6b1d0d96d8.jpg)
| -------------------------------------------------------------------------------------------------------------------------------- |


![Manual da persona apresentação (5)](https://user-images.githubusercontent.com/125522668/229296500-c67f2918-ab25-4bb9-9bf0-0f5555ba6150.jpg)
| -------------------------------------------------------------------------------------------------------------------------------- |

____________________________________________________________________________________________________________________________________________________

# Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Tatiana | Receitas adequadas aos alimentos que posso consumir.  | Melhorar a condição de vida diária evitando os alimentos que me fazem mal.   |
| Tatiana | Um registro dos alimentos ingeridos durante o dia a dia.  | Acompanhar melhor quais alimentos estou consumindo.   |
| Danilo | Alimentos de  auto índice glicemico.   | Saber melhor quais alimentos posso consumir sem essa característica.    |
| Carla | Receitas que não possuem alimentos com lactose.   | Saber melhor quais alimentos posso consumir sem essa característica.    |
| Paulo Henrique | Me aprofundar na rotina de alimentação saúdavel.  | Melhorar meu rendimento no dia a dia, trabalho e nos esportes.    |
| Paulo Henrique | Saber a quantidade de água que devo ingerir diariamente de acordo com o meu peso.  | Melhorar meu rendimento no dia a dia, trabalho e nos esportes.    |
| Luísa | Receitas que não possuem carnes.   | Inovar meu cardápio alimentar, basendo-se em novas receitas vegetarianas.    |
| Paulo Fernandes | Ter acesso às informações de alimentos saudáveis. | Mudar meus hábitos alimentares. |
| Paulo Fernandes | Contabilizar as calorias ingeridas durante o dia. | Saber se estou consumindo mais alimentos do que deveria. |
| Paulo Fernandes | Calcular o meu IMC. | Saber se estou com o peso adequado para a minha altura. |
| Francisco | Saber quais as informações nutricionais de cada alimento. | Poder melhorar minha saúde.  |
| Francisco | Saber quais alimentos devo evitar. | Evitar problemas de saúde.  |
_________________________________________________________________________________________________

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve permitir que o usuário se cadastre, fornecendo as informações necessárias para criar uma conta no sistema.| ALTA |  |
|RF-002| A aplicação deve disponibilizar para os usuários cadastrados ou não uma lista de receitas contendo apenas alimentos saudáveis. | ALTA |  |
|RF-003| A aplicação deve fornecer ao usuário receitas, indicando se são adequadas para pessoas com intolerância à lactose, glúten, vegana ou vegetariana. | ALTA |  |
|RF-004| A aplicação deve informar ao usuário cadastrado a quantidade que o mesmo deve ingerir de água de acordo com o peso dele. | ALTA |  |
|RF-005| A aplicação deve ter uma tela para cálculo do Índice de Massa Corporal para usuários cadastrados ou não. | ALTA |  |
|RF-006| A aplicação deve disponibilizar tela com alimentos que não são recomendados de se consumir recorrentemente para qualquer usuário. | ALTA |  |
|RF-007| A aplicação deve disponibilizar tela com os dados nutricionais das receitas cadastradas para qualquer usuário. | ALTA |  |
|RF-008| A aplicação deve diponibilizar informações sobre os grupos de alimentos. | ALTA |  |
|RF-009| A aplicação deve permitir o autogerenciamento do cadastro de usuário. | MÉDIA | |
|RF-010| A aplicação deve disponibilizar tela de recuperação de senha.  | MÉDIA | |
|RF-011| A aplicação deve permitir que um usuário cadastrado autogerencie os alimentos ingeridos ao longo do dia.  | MÉDIA | |
|RF-012| A aplicação deve gerar relatório com os alimentos ingeridos pelo usuário cadastrado.  | MÉDIA | |
|RF-013| A aplicaçã deve permitir aos usuários avaliar as receitas disponíveis na plataforma, a fim de fornecer feedback e classificações.  | MÉDIA | |
|RF-014| A aplicação deve calcular a média das avaliações das receitas feitas pelos usuários cadastrados, levando em consideração as avaliações numéricas atribuídas a cada receita.| MÉDIA | |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser compatível com diversos navegadores, sendo eles: Google Chrome, Mozilla Firefox e Safari. |  ALTA |
|RNF-002| O layout da aplicação deve ser intuitivo e de fácil entendimento. |  ALTA |
|RNF-003| A aplicação deve garantir a proteção de dados pessoais do usuário respeitando a LGPD (Lei Geral de Proteção de Dados).  |  ALTA |
|RNF-004| O sistema deve ser responsivo para rodar em um dispositivos móvel. | ALTA | 
|RNF-005| O e-mail de recuperação de senha deve ser enviado apenas para o endereço de e-mail cadastrado pelo usuário. |  MEDIA |
|RNF-006| A aplicação deve processar requisições do usuário em no máximo 5s. |  BAIXA | 
|RNF-007| A aplicação deve disponibilizar um relatório de alimentação e deve poder ser obtido por download via formato PDF. |  BAIXA | 

_________________________________________________________________________________________________

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Cada usuário poderá cadastrar no máximo 1 conta por endereço de e-mail |
|04| A aplicação não dispensa o acompanhamento de um profissional da saúde e nutricionista |
