# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Criar conta na aplicação**
 :--------------: | ------------
**Procedimento**  | 1) O usuário deve acessar o site através do seguinte endereço: https://nutrischedule.vercel.app. Na página inicial, o usuário deve clicar no botão "Cadastre-se" e preencher os campos solicitados, incluindo nome, e-mail, senha, confirmação de senha, peso atual, altura, data de nascimento e sexo. Em seguida, o usuário deve clicar no botão "Cadastrar". <br> 2) A aplicação deve verificar se os dados fornecidos são válidos e fornecer feedback ao usuário caso haja algum problema.
**Requisitos associados** | RF-001 RNF-003
**Resultado esperado** | O cadastro do usuário é concluído com sucesso.
**Dados de entrada** | Inserção de dados válidos nos campos do formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Recuperação de Senha**
 :--------------: | ------------
**Procedimento**  | 1) O usuário deve acessar a tela de login da aplicação.<br>2) Na tela de login, o usuário deve clicar no link ou no botão "Esqueceu sua senha?" para acessar a tela de recuperação de senha.<br>3) Na tela de recuperação de senha, o usuário deve inserir o e-mail associado à sua conta.<br>4) O usuário deve clicar no botão "Enviar" para solicitar a recuperação de senha.<br>5) A aplicação deve verificar se o e-mail fornecido é válido e se está associado a uma conta registrada.<br>6) Caso o e-mail seja válido, a aplicação deve enviar um e-mail com instruções para recuperação de senha ao endereço fornecido.<br>7) O usuário deve verificar a caixa de entrada do e-mail fornecido e seguir as instruções para concluir o processo de recuperação de senha.
**Requisitos associados** | RF-010 RNF-005
**Resultado esperado** | O usuário recebe um e-mail com instruções para recuperação de senha.
**Dados de entrada** | E-mail válido associado a uma conta registrada na aplicação.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Autogerenciamento do Cadastro de Usuário**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação utilizando suas credenciais de login.<br>2) Na interface da aplicação, o usuário localiza a opção de Dados pessoais.<br>3) O usuário clica na opção correspondente para acessar a página de autogerenciamento do cadastro de usuário.<br>4) Na página de autogerenciamento do cadastro, o usuário verifica a presença de campos editáveis que permitem a atualização das informações do seu perfil, como nome, e-mail, senha, entre outros dados pessoais.<br>5) O usuário realiza alterações em um ou mais campos do cadastro de usuário e clica no botão de Atualizar.<br>6) A aplicação processa as alterações realizadas pelo usuário e exibe uma mensagem de sucesso ou feedback indicando o resultado da operação.<br>7) O usuário verifica se as alterações foram devidamente aplicadas e refletidas no seu perfil de usuário.
**Requisitos associados** | RF-009
**Resultado esperado** | O usuário consegue acessar a página de Dados pessoais, realizar alterações nos campos do seu perfil e as alterações são devidamente aplicadas e refletidas no seu perfil de usuário.
**Dados de entrada** | Dados pessoais válidos para atualização do cadastro de usuário.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT04 - Visualização de Lista de Receitas Saudáveis**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega para a seção de receitas da aplicação através da página inicial ou do menu.<br>3) A aplicação exibe uma carrossel de receitas saudáveis disponíveis.<br>4) O usuário terá acesso ao nome da receita e à indicação de sua adequação, levando em consideração restrições alimentares como intolerância à lactose, glúten, opções veganas e vegetarianas.<br>5) O usuário seleciona uma receita da lista para visualização mais detalhada.<br>6) A aplicação exibe as informações detalhadas da receita selecionada, incluindo ingredientes, modo de preparo e informações nutricionais.
**Requisitos associados** | RF-002 RF-003 RF-007
**Resultado esperado** | A lista de receitas exibida na aplicação contém apenas alimentos saudáveis e as informações detalhadas das receitas indicam claramente que são compostas por alimentos saudáveis. Além disso, a aplicação indica claramente se cada receita é adequada ou não para pessoas com intolerância à lactose, glúten, vegana ou vegetariana, conforme as restrições alimentares selecionadas pelo usuário.
**Dados de entrada** | Navegação na interface da aplicação.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 – Avaliação das receitas**
 :--------------: | ------------
**Procedimento**  | 1) O usuário seleciona uma receita disponível na plataforma.<br>2) O usuário atribui uma avaliação numérica e fornece feedback na área designada.<br>3) O usuário clica no botão "Envia". <br>4) Várias avaliações são atribuídas a uma receita por usuários cadastrados.<br>5) O sistema calcula a média das avaliações numéricas atribuídas à receita.
**Requisitos associados** | RF-013 RF-014
**Resultado esperado** | Os usuários devem ser capazes de avaliar as receitas, fornecer feedback e classificações. <br>O sistema deve ser capaz de calcular corretamente a média das avaliações das receitas feitas pelos usuários cadastrados.
**Dados de entrada** | A avaliação e feedback são registrados corretamente para a receita selecionada. <br>Avaliações numéricas atribuídas à receita.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 – Visualizar alimentos não recomendados**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a tela de alimentos não recomendados através da página inicial ou do menu.
**Requisitos associados** | RF-006
**Resultado esperado** | A aplicação deve exibir corretamente os alimentos não recomendados para consumo recorrente.
**Dados de entrada** | Navegação até a tela de alimentos não recomendados.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 – Acesso às informações sobre os grupos de alimentos**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega para a seção de informações sobre os grupos de alimentos através da página inicial ou do menu..<br>3) A aplicação exibe uma lista dos principais grupos de alimentos.<br>4) O usuário seleciona um grupo de alimento para visualização mais detalhada.<br>5) A aplicação exibe informações sobre o grupo de alimento selecionado, como descrição, exemplos de alimentos pertencentes a esse grupo e suas propriedades nutricionais.
**Requisitos associados** | RF-008
**Resultado esperado** | O usuário consegue acessar as informações sobre os grupos de alimentos na aplicação. As informações exibidas são claras, concisas e fornecem um entendimento abrangente sobre cada grupo de alimento.
**Dados de entrada** | Navegação até a tela de Informações dos alimentos.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 – Cálculo do Índice de Massa Corporal (IMC)**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega para a seção de cálculo do IMC através do menu.<br>3) A aplicação exibe uma tela dedicada ao cálculo do IMC.<br>4) O usuário fornece os dados necessários para o cálculo do IMC, como peso e altura.<br>5) O usuário clica no botão "Calcular" para obter o resultado do IMC.<br>6) A aplicação verifica se os dados fornecidos pelo usuário são válidos, realizando as devidas validações.<br>7) A aplicação realiza o cálculo do IMC com base nos dados fornecidos pelo usuário.<br>8) A aplicação exibe o resultado do IMC ao usuário, indicando o valor calculado e sua classificação (ex: abaixo do peso, peso normal, sobrepeso, etc.).<br>9) O usuário verifica o resultado do cálculo do IMC apresentado pela aplicação.<br>10) O usuário tem a opção de realizar novos cálculos do IMC ou retornar a outras funcionalidades da aplicação.
**Requisitos associados** | RF-005
**Resultado esperado** | A aplicação realiza o cálculo do IMC corretamente e exibe o resultado ao usuário.
**Dados de entrada** | Inserção de dados válidos de peso e altura para o cálculo do IMC.
**Resultado obtido** | Sucesso. O cálculo do IMC é realizado com precisão e o resultado é apresentado ao usuário.


**Caso de Teste** | **CT09 - Autogerenciamento dos Alimentos Ingeridos**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação como usuário cadastrado.<br>2) O usuário navega para a seção de autogerenciamento dos alimentos ingeridos através da página inicial ou do menu.<br>3) A aplicação exibe uma interface que permite ao usuário adicionar, remover ou editar os alimentos ingeridos ao longo do dia e a data que foi ingerida.<br>4) O usuário seleciona a opção de adicionar um alimento.<br>5) O usuário insere as informações do alimento, como tipo de alimento, quantidade e tipo de refeição.<br>6) O usuário confirma a adição do alimento.<br>7) A aplicação registra o alimento ingerido pelo usuário.<br>8) O usuário tem a opção de remover ou editar os alimentos já registrados.<br>9) O usuário verifica as funcionalidades de adição, remoção e edição dos alimentos ingeridos pela aplicação.<br> 10) A aplicação exibe a informação sobre a quantidade recomendada de água abaixo da tabela de registro de alimentos, levando em consideração o peso fornecido pelo usuário durante o cadastro na aplicação.<br>11) O usuário verifica a quantidade de água recomendada apresentada pela aplicação.<br> 12) A Aplicação fornece a opção de gerar relatório dos alimentos ingeridos. <br> 13) O usuário seleciona a opção de relatório, podendo emitir por data, semana ou mês.<br>14) A aplicação processa os dados e gera o relatório com os alimentos ingeridos pelo usuário.<br>15) O usuário visualiza e analisa o relatório gerado pela aplicação.<br>16) A aplicação fornece a opção de download do relatório ou enviá-lo para o e-mail cadastrado na aplicação. <br>17) O usuário pode retornar a outras funcionalidades da aplicação.
**Requisitos associados** | RF-011 RF-004 RF-012 RNF-007
**Resultado esperado** | A aplicação permite ao usuário cadastrado autogerenciar os alimentos ingeridos, fornecendo opções para adicionar, remover e editar as informações. <br> A aplicação informa corretamente ao usuário cadastrado a quantidade de água que deve ser ingerida de acordo com o peso dele. <br> A aplicação gera um relatório com os alimentos ingeridos pelo usuário cadastrado.
**Dados de entrada** | Adição, remoção ou edição de alimentos ingeridos. <br> Seleção do relatório de alimentos ingeridos.
**Resultado obtido** | Sucesso. O usuário pode gerenciar seus alimentos ingeridos de forma eficiente e as alterações são registradas corretamente pela aplicação. <br> A aplicação fornece a informação correta sobre a quantidade de água recomendada ao usuário com base no peso informado. <br> O relatório é gerado corretamente e apresenta os alimentos ingeridos pelo usuário de forma clara e organizada.

**Caso de Teste** | **CT10 - Compatibilidade com Navegadores**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação por meio dos navegadores Google Chrome, Mozilla Firefox e Safari.<br>2) O usuário navega pelas diferentes funcionalidades da aplicação em cada um dos navegadores.<br>3) O usuário verifica se o layout da aplicação é intuitivo e de fácil entendimento em cada um dos navegadores.<br>4) O usuário verifica se todas as funcionalidades da aplicação estão funcionando corretamente em cada um dos navegadores.<br>5) O usuário avalia a compatibilidade da aplicação com os navegadores testados.
**Requisitos associados** | RNF-001 RNF-002
**Resultado esperado** | A aplicação é compatível e funciona corretamente nos navegadores Google Chrome, Mozilla Firefox e Safari.
**Dados de entrada** | Acesso à aplicação pelos navegadores mencionados.
**Resultado obtido** | Sucesso. A aplicação é compatível e todas as funcionalidades são executadas corretamente nos navegadores Google Chrome, Mozilla Firefox e Safari.


**Caso de Teste** | **CT11 - Responsividade em Dispositivos Móveis**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação por meio de um dispositivo móvel, como um smartphone ou tablet.<br>2) O usuário navega pelas diferentes funcionalidades da aplicação utilizando o dispositivo móvel.<br>3) O usuário verifica se o layout da aplicação se adapta adequadamente ao tamanho da tela do dispositivo móvel.<br>4) O usuário verifica se todas as funcionalidades da aplicação estão acessíveis e funcionando corretamente no dispositivo móvel.<br>5) O usuário avalia a responsividade da aplicação em dispositivos móveis.
**Requisitos associados** | RNF-004
**Resultado esperado** | A aplicação é responsiva e se adapta adequadamente ao tamanho da tela em dispositivos móveis, mantendo todas as funcionalidades acessíveis e funcionais.
**Dados de entrada** | Acesso à aplicação por meio de um dispositivo móvel.
**Resultado obtido** | Sucesso. A aplicação é responsiva e se adapta corretamente ao tamanho da tela em dispositivos móveis, permitindo o acesso e funcionamento adequados de todas as funcionalidades.

**Caso de Teste** | **CT12 - Tempo de Processamento de Requisições**
 :--------------: | ------------
**Procedimento**  | 1) 1) O usuário realiza diversas ações que geram requisições à aplicação, como cadastro, busca, visualização de dados, entre outras.<br>2) O usuário cronometra o tempo necessário para que a aplicação processe cada requisição.<br>3) O usuário verifica se todas as requisições são processadas pela aplicação em no máximo 5 segundos.<br>4) O usuário avalia o tempo de processamento das requisições da aplicação.
**Requisitos associados** | RNF-006
**Resultado esperado** | A aplicação processa todas as requisições do usuário em no máximo 5 segundos.
**Dados de entrada** | Realização de diversas ações que geram requisições à aplicação.
**Resultado obtido** | Sucesso. A aplicação processa todas as requisições do usuário dentro do limite de tempo estabelecido, ou seja, em no máximo 5 segundos.


_________________________________________________________________________________________________________________________________________________


## Registro dos Testes de Software

|*Caso de Teste*                                 |*TC-01 - Criar conta na aplicação *                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que o usuário se cadastre, fornecendo as informações necessárias para criar uma conta no sistema. <br>RNF-003 - A aplicação deve garantir a proteção de dados pessoais do usuário respeitando a LGPD (Lei Geral de Proteção de Dados). |
|Link do vídeo do teste realizado: | [https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/038df8f2-336c-421a-bc40-0216b77cd7bc)| 

|*Caso de Teste*                                 |*TC-02 - Recuperação de Senha *                                         |
|---|---|
|Requisito Associado | RF-010 - A aplicação deve disponibilizar tela de recuperação de senha. <br>RNF-005 - O e-mail de recuperação de senha deve ser enviado apenas para o endereço de e-mail cadastrado pelo usuário. |
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/c2ebf45f-0c1f-40b7-94d3-cf7596aa039a) |

|*Caso de Teste*                                 |*TC-03 - Autogerenciamento do Cadastro de Usuário *                                         |
|---|---|
|Requisito Associado | RF-009 - A aplicação deve permitir o autogerenciamento do cadastro de usuário.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/f2812729-dd6f-4d92-bfbe-b0134f517de7) |

|*Caso de Teste*                                 |*TC-04 - Visualização de Lista de Receitas Saudáveis *                                         |
|---|---|
|Requisito Associado | RF-002 - A aplicação deve disponibilizar para os usuários cadastrados ou não uma lista de receitas contendo apenas alimentos saudáveis. <br> RF-003 - A aplicação deve fornecer ao usuário receitas, indicando se são adequadas para pessoas com intolerância à lactose, glúten, vegana ou vegetariana. <br> RF-007 - A aplicação deve disponibilizar tela com os dados nutricionais das receitas cadastradas para qualquer usuário.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*TC-05 - Avaliação das receitas *                                         |
|---|---|
|Requisito Associado | RF-013 - A aplicaçã deve permitir aos usuários avaliar as receitas disponíveis na plataforma, a fim de fornecer feedback e classificações. <br> RF-014 - A aplicação deve calcular a média das avaliações das receitas feitas pelos usuários cadastrados, levando em consideração as avaliações numéricas atribuídas a cada receita.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/bcced89b-a9d2-45cb-b215-e756e67a46e1) |

|*Caso de Teste*                                 |*TC-06 - Visualizar alimentos não recomendados *                                         |
|---|---|
|Requisito Associado | RF-006 - A aplicação deve disponibilizar tela com alimentos que não são recomendados de se consumir recorrentemente para qualquer usuário.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*TC-07 - Acesso às informações sobre os grupos de alimentos *                                         |
|---|---|
|Requisito Associado | RF-008 - A aplicação deve diponibilizar informações sobre os grupos de alimentos.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*TC-08 - Cálculo do Índice de Massa Corporal (IMC) *                                         |
|---|---|
|Requisito Associado | RF-005 - A aplicação deve ter uma tela para cálculo do Índice de Massa Corporal para usuários cadastrados ou não.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |


|*Caso de Teste*                                 |*TC-09 - Autogerenciamento dos Alimentos Ingeridos *                                         |
|---|---|
|Requisito Associado | RF-011- A aplicação deve permitir que um usuário cadastrado autogerencie os alimentos ingeridos ao longo do dia. <br> RF-004 - A aplicação deve informar ao usuário cadastrado a quantidade que o mesmo deve ingerir de água de acordo com o peso dele. <br> RF-012 - A aplicação deve gerar relatório com os alimentos ingeridos pelo usuário cadastrado.  <br> RNF-007 - A aplicação deve disponibilizar um relatório de alimentação e deve poder ser obtido por download via formato PDF.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |


|*Caso de Teste*                                 |*TC-10 - Compatibilidade com Navegadores *                                         |
|---|---|
|Requisito Associado | RNF-001 - A aplicação deve ser compatível com diversos navegadores, sendo eles: Google Chrome, Mozilla Firefox e Safari. <br>  RNF-002 - O layout da aplicação deve ser intuitivo e de fácil entendimento.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |


|*Caso de Teste*                                 |*TC-11 - Responsividade em Dispositivos Móveis *                                         |
|---|---|
|Requisito Associado | RNF-004 - O sistema deve ser responsivo para rodar em um dispositivos móvel.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |


|*Caso de Teste*                                 |*TC-12 - Tempo de Processamento de Requisições *                                         |
|---|---|
|Requisito Associado | RNF-006 - A aplicação deve processar requisições do usuário em no máximo 5s.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

_________________________________________________________________________________________________________________________________________________

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



