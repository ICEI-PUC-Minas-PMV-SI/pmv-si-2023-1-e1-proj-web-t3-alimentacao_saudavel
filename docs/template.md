# Template padrão do site

## Cores

Com base nas cores presentes na logomarca, a cor verde, que está associada à saúde e vitalidade, foi escolhida como cor principal, juntamente com o branco. Com isso, foi criada a seguinte paleta de cores. Vale ressaltar também que a logomarca do projeto se baseia na cor verde e branco onde buscamos refletir em nossa a aplicação web.


![Paleta de Cores](img/PaletaDeCores.png)

A cor #028F4B foi utilizada como fundo nas telas de cadastro e login, no cálculo do IMC e na edição de dados do usuário, a fim de destacar o conteúdo central que contém informações importantes. A cor foi aplicada na fonte de forma a atrair a atenção e harmonizar com a intenção do projeto. Na versão #028F4B - 70%, a cor foi utilizada na tela de receitas para destacar o nome, a dificuldade, o tempo de preparo e as porções. 

O branco #FFFFFF foi utilizado como fundo nas telas iniciais, nas telas de receitas e informações nutricionais, e como cor principal para as caixas de respostas de usuários nas telas de login, cadastro e cálculo do IMC.

A cor vermelha #E32900 foi utilizada nas fontes da tela de "falha no envio do e-mail" para indicar que houve algum problema de verificação que deve ser solucionado rapidamente para que o usuário possa ter acesso aos seus benefícios.

A cor preta #000000 foi utilizada como uma das cores de fonte nas telas de textos longos, como as de informações nutricionais e alimentos a serem evitados.

Os tons de cinza ##8D8585 e #D9D9D9 foram utilizados como fontes de texto na tela inicial e também como película das telas que contêm imagens no fundo.
  

## Tipografia

A fonte utilizada na criação das telas foi a Poppins, uma tipografia geométrica clássica com aparência simples e equilibrada[[12]](./docs/references.md). Essa fonte tornou-se padrão em toda a aplicação web, presente em todas as telas com textos e títulos. A fonte secundária utilizada foi a Inter, nas telas que incluem textos mais longos, como a de receitas.


![Tipografia](img/fontes_tipografia.png)

## Iconografia

![Iconografia](img/Iconografia.png)


Os ícones 1, 2, 5 e 7 são utilizados na página de cálculo do IMC, sendo que os dois primeiros representam o sexo do usuário, o terceiro representa a altura e o quarto representa o peso atual.
Já os ícones 3, 4, 5, 6, 7, 8 e 26 foram empregados nas telas de cadastro e login, edição de dados do usuário e informações pessoais, para representar respectivamente o nome (8), e-mail (6), data de nascimento (26), altura (5), peso (7), senha (4) e confirmação de senha (3).
Os demais ícones foram utilizados nas telas de informações sobre as receitas, informações nutricionais e alimentos a serem evitados.

## Design

### Header

![Header](img/Template_Header_Nav_Bar.PNG)

O header da aplicação se encontra presente em todas as telas com exceção das seguintes:
- Calculo IMC
- Cadastro/Gestão de dados

A barra de navegação contem um redirecionamento para as telas principais, sendo elas:
- Registro Alimentar
- Informações dos alimentos
- Receitas
- Alimentos não recomendados

A logo se encontra no canto superior esquerdo e funciona como um redirecionamento para a "Home" ao clicar, independente da tela ativa no momento.

Caso o dispositivo utilizado possua uma largura pequena, os elementos de navegação ficarão "escondidos" e so poderão ser acessados ao clicar no icone no canto superior direto

![Header Responsivo](img/Template_Header_Nav_Bar_Responsivo.PNG)

<details>
  <summary>Header/Nav Bar</summary>

  ```html
  <header>
      <nav class="navbar sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/main/src/imgs/LogoNutrischedule.png" alt="Logo" width="70" height="60">
            </a>
            <ul class="nav justify-content-center nav-fluid-content">
              <li class="nav-item">
                <a class="nav-link link-success" aria-current="page" href="#">Registro Alimentar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-success" href="#">Informações dos Alimentos</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link link-success" href="#">Receitas</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link link-success" href="#">Alimentos não recomendados</a>
              </li>
            </ul>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark bg-success" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <i class="bi bi-person-circle"></i>
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Login</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <li class="nav-item">
                    <a class="nav-link link-success" href="#">Calculo IMC</a>
                </li>
                <li class="nav-item nav-fluid-content-canvas">
                    <a class="nav-link link-success" href="#">Registro Alimentar</a>
                </li>
                <li class="nav-item nav-fluid-content-canvas">
                    <a class="nav-link link-success" href="#">Informações dos Alimentos</a>
                </li>
                <li class="nav-item nav-fluid-content-canvas">
                    <a class="nav-link link-success" href="#">Receitas</a>
                </li>
                <li class="nav-item nav-fluid-content-canvas">
                    <a class="nav-link link-success" href="#">Alimentos não recomendados</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  ```
</details>

---------------------
### Footer

A logo da aplicação está presente no canto inferior esquerdo e funciona como um redirecionamento para a tela inicial ao ser clicada, porém, nas seguintes telas abaixo ele não é visivel:
- Calculo IMC
- Cadastro/Gestão de dados

![Footer](img/Template_Footer.PNG)

<details>
  <summary>Footer</summary>

  ```html
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-alimentacao_saudavel/main/src/imgs/LogoNutrischedule.png" alt="Logo" width="80" height="60">
        </a>
      </div>
      <div>
        <span class="mb-3 mb-md-0 text-light">© 2023 Nutrischedule</span>
      </div>  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
            <i class="bi bi-github"></i>
        </li>
      </ul>
    </footer>
  ```
</details>

--------


[Clique aqui para visualizar o exemplo interativo da aplicação](https://codepen.io/IFVN/embed/QWZOLzM?default-tab=result&theme-id=dark)

O código html do template pode ser visualizado em `src/layout/layout.html` e o sua estilização em `src/layout/schema_padrao.css`

## Visual padrão as telas
![Template Padrão](img/TemplateNutriSchedule.png)

## Visual padrão de navegação das telas
![Template Navegacao](img/TemplateNutriSchedule_Navegacao.png)

## Tela Inicial
![Tela Inicial Navegacao](img/TemplateTelaInicial.PNG)

