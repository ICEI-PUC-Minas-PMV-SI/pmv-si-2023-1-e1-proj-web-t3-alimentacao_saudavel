# Testes


# Teste de Software


## Plano de Testes de Software

**Caso de Teste** | **CT01 - Criar conta na aplicação**
 :--------------: | ------------
**Procedimento**  | 1) O usuário deve acessar o site através do seguinte endereço: https://nutrischedule.vercel.app.<br>2) Na página inicial, o usuário deve clicar no botão "Cadastre-se".<br> 3) O usuário deve preencher os campos solicitados, incluindo nome, e-mail, senha, confirmação de senha, peso atual, altura, data de nascimento e sexo.<br> 4) Em seguida, o usuário deve clicar no botão "Cadastrar".
**Requisitos associados** | RF-001 RNF-003
**Resultado esperado** | A aplicação deve verificar se os dados fornecidos são válidos e fornecer feedback ao usuário caso haja algum problema. <br> O cadastro do usuário é concluído com sucesso.
**Dados de entrada** | Inserção de dados válidos nos campos do formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Recuperação de Senha**
 :--------------: | ------------
**Procedimento**  | 1) O usuário deve acessar a tela de login da aplicação através do menu.<br>2) Na tela de login, o usuário deve clicar em "Esqueceu sua senha?" para acessar a tela de recuperação de senha.<br>3) Na tela de recuperação de senha, o usuário deve inserir o e-mail associado à sua conta.<br>4) O usuário deve clicar no botão "Enviar" para solicitar a recuperação de senha.<br>5) O usuário deve verificar a caixa de entrada do e-mail fornecido e seguir as instruções para concluir o processo de recuperação de senha.
**Requisitos associados** | RF-010 RNF-005
**Resultado esperado** |  A aplicação deve verificar se o e-mail fornecido é válido e se está associado a uma conta registrada.<br> Caso o e-mail seja válido, a aplicação deve enviar um e-mail com instruções para recuperação de senha ao endereço fornecido.<br>O usuário recebe um e-mail com instruções para recuperação de senha.
**Dados de entrada** | E-mail válido associado a uma conta registrada na aplicação.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Autogerenciamento do Cadastro de Usuário**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação utilizando suas credenciais de login.<br>2) Na interface da aplicação, o usuário localiza a opção de Dados pessoais através do menu.<br>3) O usuário clica na opção correspondente "Dados pessoais" para acessar a página de autogerenciamento do cadastro de usuário.<br>4) Na página de autogerenciamento do cadastro, o usuário verifica a presença de campos editáveis que permitem a atualização das informações do seu perfil, como nome, e-mail, senha, entre outros dados pessoais.<br>5) O usuário realiza alterações em um ou mais campos do cadastro de usuário e clica no botão de Atualizar.<br>6)O usuário verifica se as alterações foram devidamente aplicadas e refletidas no seu perfil de usuário.
**Requisitos associados** | RF-009
**Resultado esperado** | O usuário consegue acessar a página de Dados pessoais, realizar alterações nos campos do seu perfil e as alterações são devidamente aplicadas e refletidas no seu perfil de usuário. <br> A aplicação processa as alterações realizadas pelo usuário e exibe uma mensagem de sucesso ou feedback indicando o resultado da operação.
**Dados de entrada** | Dados pessoais válidos para atualização do cadastro de usuário.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT04 - Visualização de Lista de Receitas Saudáveis**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega para a seção de receitas da aplicação através da página inicial ou do menu clicando em "Receitas".<br>3) O usuário seleciona uma receita da lista para visualização mais detalhada.
**Requisitos associados** | RF-002 RF-003 RF-007
**Resultado esperado** |  A aplicação exibe uma carrossel de receitas saudáveis disponíveis.<br>A lista de receitas exibida na aplicação contém apenas alimentos saudáveis e as informações detalhadas das receitas indicam claramente que são compostas por alimentos saudáveis. Além disso, a aplicação indica claramente se cada receita é adequada ou não para pessoas com intolerância à lactose, glúten, vegana ou vegetariana, conforme as restrições alimentares selecionadas pelo usuário.
**Dados de entrada** | Navegação na interface da aplicação.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 – Avaliação das receitas**
 :--------------: | ------------
**Procedimento**  | 1) O usuário seleciona uma receita disponível na plataforma.<br>2) O usuário atribui uma avaliação numérica e fornece feedback na área designada.<br>3) O usuário clica no botão "Enviar".
**Requisitos associados** | RF-013 RF-014
**Resultado esperado** | Os usuários devem ser capazes de avaliar as receitas, fornecer feedback e classificações. <br>O sistema deve ser capaz de calcular corretamente a média das avaliações das receitas feitas pelos usuários cadastrados.
**Dados de entrada** | A avaliação e feedback são registrados corretamente para a receita selecionada. <br>Avaliações numéricas atribuídas à receita.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 – Visualizar alimentos não recomendados**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário acessa a tela de alimentos não recomendados através da página inicial ou do menu clicando em "Alimentos não recomendados".
**Requisitos associados** | RF-006
**Resultado esperado** | A aplicação deve exibir corretamente os alimentos não recomendados para consumo recorrente.
**Dados de entrada** | Navegação até a tela de alimentos não recomendados.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 – Acesso às informações sobre os grupos de alimentos**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega para a seção de informações sobre os grupos de alimentos através da página inicial ou do menu clicando em "Informações dos Alimentos".
**Requisitos associados** | RF-008
**Resultado esperado** | O usuário consegue acessar as informações sobre os grupos de alimentos na aplicação. As informações exibidas são claras, concisas e fornecem um entendimento abrangente sobre cada grupo de alimento.
**Dados de entrada** | Navegação até a tela de Informações dos alimentos.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 – Cálculo do Índice de Massa Corporal (IMC)**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação, seja como usuário cadastrado ou não.<br>2) O usuário navega para a seção de cálculo do IMC através do menu clicando em "Calculo IMC".<br>3) O usuário fornece os dados necessários para o cálculo do IMC, como peso e altura.<br>4) O usuário clica no botão "Calcular" para obter o resultado do IMC.<br>5) O usuário verifica o resultado do cálculo do IMC apresentado pela aplicação.<br>6) O usuário tem a opção de realizar novos cálculos do IMC ou retornar a outras funcionalidades da aplicação.
**Requisitos associados** | RF-005
**Resultado esperado** | A aplicação verifica se os dados fornecidos pelo usuário são válidos, realizando as devidas validações.<br> A aplicação realiza o cálculo do IMC com base nos dados fornecidos pelo usuário.<br> A aplicação exibe o resultado do IMC ao usuário, indicando o valor calculado e sua classificação (ex: abaixo do peso, peso normal, sobrepeso, etc.
**Dados de entrada** | Inserção de dados válidos de peso e altura para o cálculo do IMC.
**Resultado obtido** | Sucesso. O cálculo do IMC é realizado com precisão e o resultado é apresentado ao usuário.


**Caso de Teste** | **CT09 - Autogerenciamento dos Alimentos Ingeridos**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação como usuário cadastrado.<br>2) O usuário acessa a seção de autogerenciamento dos alimentos ingeridos ao clicar em "Registro Alimentar" na página inicial ou no menu.<br>3)O usuário escolhe uma refeição (Café da manhã / Almoço / Lanche / Jantar).<br>4) Para adicionar um alimento, o usuário deve clicar no botão "+" e selecionar os alimentos disponíveis.<br>5) O usuário insere as informações do alimento, como tipo de alimento, quantidade.<br>6) Para cadastrar um novo alimento, o usuário pode adicionar clicando no botão "+".<br> 8)O usuário será direcionado para a próxima etapa de cadastro do alimento, onde deverá informar o nome do alimento e a unidade de medida associada (unidade, colher, grama, pedaço).<br> 9)O usuário tem a opção de remover ou editar os alimentos já registrados.<br>9) O usuário verifica as funcionalidades de adição, remoção e edição dos alimentos ingeridos pela aplicação.<br> 11) O usuário verifica a quantidade de água recomendada apresentada pela aplicação.<br> 13) O usuário seleciona a opção de "Conferir relatório", podendo emitir por data, semana ou mês.<br>14)  O usuário visualiza e analisa o relatório gerado pela aplicação.<br>16) O usuário pode enviar o relatório gerado para o seu email cadastrado.<br>17) O usuário pode retornar a outras funcionalidades da aplicação.
**Requisitos associados** | RF-011 RF-004 RF-012 RNF-007
**Resultado esperado** | A aplicação exibe uma interface que permite ao usuário adicionar, remover ou editar os alimentos ingeridos ao longo do dia e a data que foi ingerida.<br> A aplicação registra o alimento ingerido pelo usuário.<br>A aplicação permite ao usuário cadastrado autogerenciar os alimentos ingeridos, fornecendo opções para adicionar, remover e editar as informações. <br>  A aplicação exibe a informação sobre a quantidade recomendada de água abaixo da tabela de registro de alimentos, levando em consideração o peso fornecido pelo usuário durante o cadastro na aplicação. <br> A aplicação gera um relatório com os alimentos ingeridos pelo usuário cadastrado. <br> A aplicação fornece a opção de download do relatório ou enviá-lo para o e-mail cadastrado na aplicação.
**Dados de entrada** | Adição, remoção ou edição de alimentos ingeridos. <br> Seleção do relatório de alimentos ingeridos.
**Resultado obtido** | Sucesso. O usuário pode gerenciar seus alimentos ingeridos de forma eficiente e as alterações são registradas corretamente pela aplicação. <br> A aplicação fornece a informação correta sobre a quantidade de água recomendada ao usuário com base no peso informado. <br> O relatório é gerado corretamente e apresenta os alimentos ingeridos pelo usuário de forma clara e organizada.

**Caso de Teste** | **CT10 - Compatibilidade com Navegadores**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação por meio dos navegadores Google Chrome, Mozilla Firefox e Safari.<br>2) O usuário navega pelas diferentes funcionalidades da aplicação em cada um dos navegadores.<br>3) O usuário verifica se o layout da aplicação é intuitivo e de fácil entendimento em cada um dos navegadores.<br>
**Requisitos associados** | RNF-001 RNF-002
**Resultado esperado** | A aplicação é compatível e funciona corretamente nos navegadores Google Chrome, Mozilla Firefox e Safari.
**Dados de entrada** | Acesso à aplicação pelos navegadores mencionados.
**Resultado obtido** | Sucesso. A aplicação é compatível e todas as funcionalidades são executadas corretamente nos navegadores Google Chrome, Mozilla Firefox e Safari.


**Caso de Teste** | **CT11 - Responsividade em Dispositivos Móveis**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a aplicação por meio de um dispositivo móvel, como um smartphone ou tablet.<br>2) O usuário navega pelas diferentes funcionalidades da aplicação utilizando o dispositivo móvel.
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

|*Caso de Teste*                                 |*CT-01 - Criar conta na aplicação *                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que o usuário se cadastre, fornecendo as informações necessárias para criar uma conta no sistema. <br>RNF-003 - A aplicação deve garantir a proteção de dados pessoais do usuário respeitando a LGPD (Lei Geral de Proteção de Dados). |
|Link do vídeo do teste realizado: | [https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/038df8f2-336c-421a-bc40-0216b77cd7bc)| 

|*Caso de Teste*                                 |*CT-02 - Recuperação de Senha *                                         |
|---|---|
|Requisito Associado | RF-010 - A aplicação deve disponibilizar tela de recuperação de senha. <br>RNF-005 - O e-mail de recuperação de senha deve ser enviado apenas para o endereço de e-mail cadastrado pelo usuário. |
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/c2ebf45f-0c1f-40b7-94d3-cf7596aa039a) |

|*Caso de Teste*                                 |*CT-03 - Autogerenciamento do Cadastro de Usuário *                                         |
|---|---|
|Requisito Associado | RF-009 - A aplicação deve permitir o autogerenciamento do cadastro de usuário.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/f2812729-dd6f-4d92-bfbe-b0134f517de7) |

|*Caso de Teste*                                 |*CT-04 - Visualização de Lista de Receitas Saudáveis *                                         |
|---|---|
|Requisito Associado | RF-002 - A aplicação deve disponibilizar para os usuários cadastrados ou não uma lista de receitas contendo apenas alimentos saudáveis. <br> RF-003 - A aplicação deve fornecer ao usuário receitas, indicando se são adequadas para pessoas com intolerância à lactose, glúten, vegana ou vegetariana. <br> RF-007 - A aplicação deve disponibilizar tela com os dados nutricionais das receitas cadastradas para qualquer usuário.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar ](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/baecb47b-249c-4efe-8400-198d0a483109)|

|*Caso de Teste*                                 |*CT-05 - Avaliação das receitas *                                         |
|---|---|
|Requisito Associado | RF-013 - A aplicaçã deve permitir aos usuários avaliar as receitas disponíveis na plataforma, a fim de fornecer feedback e classificações. <br> RF-014 - A aplicação deve calcular a média das avaliações das receitas feitas pelos usuários cadastrados, levando em consideração as avaliações numéricas atribuídas a cada receita.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/bcced89b-a9d2-45cb-b215-e756e67a46e1) |

|*Caso de Teste*                                 |*CT-06 - Visualizar alimentos não recomendados *                                         |
|---|---|
|Requisito Associado | RF-006 - A aplicação deve disponibilizar tela com alimentos que não são recomendados de se consumir recorrentemente para qualquer usuário.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/7e00ea72-4299-4938-bf3f-0ffbf11d9a1a) |

|*Caso de Teste*                                 |*CT-07 - Acesso às informações sobre os grupos de alimentos *                                         |
|---|---|
|Requisito Associado | RF-008 - A aplicação deve diponibilizar informações sobre os grupos de alimentos.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/ab3b54f0-4af2-44b8-9c7b-87a1ebd3bfeb) |

|*Caso de Teste*                                 |*CT-08 - Cálculo do Índice de Massa Corporal (IMC) *                                         |
|---|---|
|Requisito Associado | RF-005 - A aplicação deve ter uma tela para cálculo do Índice de Massa Corporal para usuários cadastrados ou não.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar ](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/54f9787e-1b73-411e-894f-f0c46850cd0d)|


|*Caso de Teste*                                 |*CT-09 - Autogerenciamento dos Alimentos Ingeridos *                                         |
|---|---|
|Requisito Associado | RF-011- A aplicação deve permitir que um usuário cadastrado autogerencie os alimentos ingeridos ao longo do dia. <br> RF-004 - A aplicação deve informar ao usuário cadastrado a quantidade que o mesmo deve ingerir de água de acordo com o peso dele. <br> RF-012 - A aplicação deve gerar relatório com os alimentos ingeridos pelo usuário cadastrado.  <br> RNF-007 - A aplicação deve disponibilizar um relatório de alimentação e deve poder ser obtido por download via formato PDF.|
|Link do vídeo do teste realizado: | [https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/129123809/b111a35e-8a8b-4abc-97f3-647ae21fca09](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/129123809/b111a35e-8a8b-4abc-97f3-647ae21fca09)|


|*Caso de Teste*                                 |*CT-10 - Compatibilidade com Navegadores*                                         |
|---|---|
|Requisito Associado | RNF-001 - A aplicação deve ser compatível com diversos navegadores, sendo eles: Google Chrome, Mozilla Firefox e Safari. <br>  RNF-002 - O layout da aplicação deve ser intuitivo e de fácil entendimento.|
|Link do vídeo do teste realizado: | *Google Chrome* [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/e6cc55db-f2d1-4c9e-abc7-4f9b64801832) <br> *Mozilla Firefox*[https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/129123809/b111a35e-8a8b-4abc-97f3-647ae21fca09](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/129123809/b111a35e-8a8b-4abc-97f3-647ae21fca09) <br> *Safari* [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/538a0a19-8f0f-407b-89d1-392be1acda4d) |


|*Caso de Teste*                                 |*CT-11 - Responsividade em Dispositivos Móveis *                                         |
|---|---|
|Requisito Associado | RNF-004 - O sistema deve ser responsivo para rodar em um dispositivos móvel.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar ](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/89afcfbc-bc7a-4af3-a858-da95ad3ba1ba)|


|*Caso de Teste*                                 |*CT-12 - Tempo de Processamento de Requisições *                                         |
|---|---|
|Requisito Associado | RNF-006 - A aplicação deve processar requisições do usuário em no máximo 5s.|
|Link do vídeo do teste realizado: | Foi realizado um teste de velocidade na página de receita utilizando a ferramenta PageSpeed: [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/assets/125522668/aae415f1-959d-42f6-8096-b355baaaefde) |

_________________________________________________________________________________________________________________________________________________

## Avaliação dos Testes de Software

Durante a execução dos testes de software, foram obtidos resultados significativos que fornecem insights valiosos sobre a solução em questão. Esses testes visaram avaliar a qualidade, a funcionalidade e a confiabilidade do software, identificando pontos fortes e áreas que podem ser aprimoradas.


Os testes demonstraram consistência nos resultados obtidos em relação aos esperados, indicando que a solução está alinhada com os requisitos estabelecidos.
A cobertura dos principais cenários de uso da aplicação foi abrangente, garantindo uma ampla avaliação das funcionalidades críticas.
A equipe de testes demonstrou profissionalismo e competência na execução dos casos de teste, garantindo a confiabilidade dos resultados.
Pontos a serem melhorados:
Durante os testes, identificou-se a oportunidade de aprimorar a funcionalidade de registro alimentar. Sugere-se adicionar informações nutricionais e calorias no momento do registro para fornecer aos usuários uma visão mais detalhada de sua ingestão nutricional. Além disso, sugere-se implementar a funcionalidade que permite aos usuários adicionar fotos das receitas concluídas, enriquecendo a experiência na plataforma.

Para as próximas iterações, o grupo pretende abordar esses pontos e realizar as seguintes melhorias:

Priorizar a inclusão de dados nutricionais e informações sobre calorias no registro alimentar, fornecendo aos usuários uma experiência mais completa e útil.
Implementar a funcionalidade de adicionar fotos às receitas concluídas, permitindo que os usuários compartilhem visualmente suas criações culinárias e enriqueçam a experiência na plataforma.
Essas melhorias serão planejadas e implementadas no próximo período de desenvolvimento, levando em consideração os recursos disponíveis, as prioridades do projeto e o feedback dos usuários. A equipe de desenvolvimento está comprometida em aprimorar a solução, buscando sempre atender às necessidades e expectativas dos usuários.

As sugestões de melhoria identificadas nos testes de software são consideradas valiosas diretrizes para o aprimoramento contínuo da aplicação. Com base nos resultados obtidos nos testes, a equipe está confiante de que as melhorias planejadas contribuirão para elevar a qualidade e a usabilidade da solução, proporcionando uma experiência mais satisfatória aos usuários.

Dessa forma, o grupo está comprometido em aplicar as melhorias sugeridas nas próximas iterações, visando fornecer uma solução cada vez mais eficiente e alinhada com as necessidades dos usuários.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja criar uma nova conta no NutriSchedule. Encontre no site a aréa de cadastro e forneça informações básicas, como nome de usuário, senha e endereço de e-mail, para criar sua conta com sucesso. |
| 2             | Você é uma pessoa que deseja realizar alterações em sua conta no NutriSchedule. Acesse  as configurações da conta  utilizando e faça alterações nos dados pessoais, como nome, idade, altura, peso e senha. |
| 3             | Você é uma pessoa que deseja calcular seu Índice de Massa Corporal (IMC). Encontre no site o calculo de IMC e insera sua altura e peso e obtenha uma estimativa de seu estado nutricional.
| 4             | Você é uma pessoa que deseja visualizar uma receita específica e saber os dados nutricionais. Localize a no site as receitas disponíves e selecione uma de sua preferência.|
| 5             | Você é uma pessoa que deseja cadastrar os alimentos ingeridos ao logo do dia. Encontre no site a função Resgitro de alimento e registre sua alimentação.




## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja criar uma nova conta no NutriSchedule.

| Usuário | Idade | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-------|-----------------|----------------------|---------------------------------|
| 1       | 26    | SIM             | 5                    | 60.87 segundos                  |
| 2       | 39    | SIM             | 5                    | 71.08 segundos                  |
| 3       | 65    | SIM             | 5                    | 127.38 segundos                  |
| 4       | 30    | SIM             | 5                    | 72.39 segundos                  |
| 5       | 17    | SIM             | 5                    | 55.83 segundos                  |
| **Média**     | -     | 100%           | 5.0                | 77.11 segundos                  |
| **Tempo para conclusão pelo especialista** | -     | SIM | 5 | 41.33 segundos |



    Comentários dos usuários: Consegui fazer minha conta no site, achei a página de criação da conta o formulário é objetivo e prático, e percebi que a própria logo é interativa e posso voltar a página inicial através dela.



Cenário 2: Você é uma pessoa que deseja realizar alterações em sua conta no NutriSchedule. 

| Usuário | Idade | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-------|-----------------|----------------------|---------------------------------|
| 1       | 26    | SIM             | 5                    | 18.15 segundos                  |
| 2       | 39    | SIM             | 5                    | 22.27 segundos                  |
| 3       | 65    | SIM             | 4                    | 87.52 segundos                  |
| 4       | 30    | SIM             | 5                    | 20.94 segundos                  |
| 5       | 17    | SIM             | 5                    | 20.18 segundos                  |
| **Média**     | -     | 100%           | 4.8                | 33.41 segundos                  |
| **Tempo para conclusão pelo especialista** | -     | SIM | 5 | 17.56 segundos |


    Comentários dos usuários: Na hora que tive que atualizar meus dados não tive dificuldades, contudo senti falta de algum botão para reverter minhas atualizações.

Cenário 3: Você é uma pessoa que deseja calcular seu Índice de Massa Corporal (IMC).

    Comentários dos usuários: Achei interessante as imagens para a definição de gênero, e gostei que o questinário está em uma página só. O que faltou foi mais informações sobre meu nível de imc.

Cenário 4: Você é uma pessoa que deseja visualizar uma receita específica e saber os dados nutricionais.

| Usuário | Idade | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-------|-----------------|----------------------|---------------------------------|
| 1       | 26    | SIM             | 5                    | 6.10 segundos                  |
| 2       | 39    | SIM             | 5                    | 7.57 segundos                  |
| 3       | 65    | SIM             | 5                    | 18.92 segundos                  |
| 4       | 30    | SIM             | 5                    | 9.14 segundos                  |
| 5       | 17    | SIM             | 5                    | 6.80 segundos                  |
| **Média**     | -     | 100%           | 5.0                | 9.11 segundos                  |
| **Tempo para conclusão pelo especialista** | -     | SIM | 5 | 5.06 segundos |



    Comentários dos usuários: Tive facilidade de acessar todas as receitas em rápida respostas, gostei das ilustrações e da opção de poder avaliar a receita. Me chamou atenção as informações nutricionais da receita que não se acha em todas as páginas com esse mesmo ramo.
    
Cenário 5: Você é uma pessoa que deseja cadastrar os alimentos ingeridos ao logo do dia.

| Usuário | Idade | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-------|-----------------|----------------------|---------------------------------|
| 1       | 26    | SIM             | 5                    |  73.32 segundos                 |
| 2       | 39    | SIM             | 4                    |  87.66 segundos                 |
| 3       | 65    | SIM             | 4                    | 136.94 segundos                 |
| 4       | 30    | SIM             | 5                    |  82.56 segundos                 |
| 5       | 17    | SIM             | 5                    |  70.52 segundos                 |
| **Média**     | -     | 100%           | 4.6             |  90.20 segundos                 |
| **Tempo para conclusão pelo especialista** | -     | SIM | 65.2 |  segundos |

    Comentários dos usuários: O processo de cadastro e edição dos registros alimentares é relativamente simples e intuitivo. A forma de conferência do relatório dos registros ainda não está funcionando totalmente, uma vez que o relatório final visualizado não apresenta ordem cronológica e retorna tudo que meu usuário cadastrou, independente do período selecionado (Mensal, Semanal ou Diário). Acredito que seja uma sugestão de melhoria, ainda assim, é funcional e atende a minha necessidade.  

## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



