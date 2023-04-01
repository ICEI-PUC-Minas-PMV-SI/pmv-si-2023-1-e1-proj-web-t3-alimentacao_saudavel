# Introdução

A relação dos humanos com o alimento vem se modificando a milhares de anos, passando por sua escassez e consumo dos alimentos na sua forma bruta para abundância e consumo de alimentos acompanhados de novos métodos de conservação e meios de preparo. Além disso, com o passar do tempo, foram aderidos ao nosso dia a dia as comidas processadas. Com a chegada da pandemia em 2019 a escolha desse tipo de alimento cresceu em 8 meses 7% segundo a reportagem **Agencia Brasil[[2]](../docs/references.md)**.

Em decorrência do aumento do consumo de alimentos e processados geraram-se também uma serie de problemas de saúde. Sendo que um dos mais graves problemas do mundo atual é a  obesidade. No Brasil essa doença crônica aumentou 72% nos últimos 13 anos segundo **OMS[[3]](../docs/references.md)** . A estimativa é de que no ano de 2025 serão 2,3 bilhões de adultos ao redor do mundo acima do peso. 

No mundo atual, muitos têm uma vida ocupada e não possuem tempo ou não são capazes de cozinhar um prato saudável. Alguns não sabem nem mesmo por onde começar a ter hábitos saudáveis. 

 **NutriSchedule** tem a proposta de trazer receitas saudáveis e fáceis, além de fornecer uma maneira rápida de contar, acompanhar e contabilizar as calorias ingeridas durante o dia.

**Por que contar calorias?**

Homens e mulheres tem um número personalizado de calorias que devem comer diariamente, como sugerido por **OPAS[[4]](../docs/references.md)**. Fatores como o peso, a altura, frequência e intensidade das atividades físicas e metas de ganho e manutenção de peso são fatores  importantes na consideração da quantidade de caloria que cada individuo deve ingerir diariamente. 

É difícil controlar a ingestão de calorias, embora seja fácil esquecer tudo o que você come durante um dia agitado.

Registrar suas calorias de cada refeição ingerida fornece vários benefícios, como obter uma imagem clara das calorias que você está consumindo e aumentar sua consciência sobre os valores dos alimentos e os níveis de nutrientes que você está ingerindo. Por fim, o objetivo desse projeto é auxiliá-lo na escolha de quais são os alimentos e a quantidade ideal de calorias que você deve ingerir em cada refeição, com objetivo de aderir uma alimentação mais saudável.


## Problema

Os produtos ultraprocessados da indústria alimentícia estão presentes em abundância na nossa alimentação e como consequência adquirimos várias doenças tais como: intolerância alimentar, desnutrição, gastrite, diabetes, obesidade, colesterol elevado e hipertensão. Aliado a esse problema, o intenso rítimo  de trabalho das pessoas contribui para que elas não tenham tempo para se dedicar a uma alimentação saudável.


# Objetivos

## Objetivo geral

Desenvolver uma aplicação que atenda aos usuários que precisam mudar seus hábitos, interpor uma alimentação mais saudável e ter um controle de calorias ingeridas diariamente.

## Objetivos específicos

-   Calcular as calorias do usuário com bases nos alimentos consumidos por ele.
-   Promover sugestões de rotinas com alimentos mais saudáveis e dicas de como organizar o tempo para o perda das calorias recomendáveis ou desejáveis para cada tipo de pessoa(sexo, idade, peso e altura).
-   Adicionar a aplicação receitas mais saudáveis com a utilização de produtos orgânicos.
-   Sugerir quantidade de água para o peso e altura do usuário.
-   Indicar alimentos que devem ser consumidos durante o dia.
-   Inserir um medidor de **Índice de massa corporal (IMC).**
-   Fornecer um relatório semanal das metas atingidas.   

## Justificativa

A pandemia do covid-19 evidenciou ainda mais algumas problemáticas já enfrentadas por grande parte da população. Assim, a negligência de problemas como hipertensão, diabetes e obesidade são colocados em pauta, uma vez que foram considerados como agravantes do vírus, o que enquadra os portadores no grupo de risco, conforme apresenta o artigo publicado pelo **Conselho Federal de Enfermagem (COFEN)[[7]](../docs/references.md)**. Por conseguinte, a obesidade é uma doença crônica, definida pela Organização Mundial de Saúde (OMS) conforme apresentada pela publicação da **Blibioteca Virtual de Saúde[[5]](../docs/references.md)**  como o acúmulo anormal ou excessivo de gordura no corpo, sendo assim, um dos principais fatores para várias doenças não transmissíveis (DNTs), como diabetes tipo 2, doenças cardiovasculares, hipertensão, acidente vascular cerebral (AVC) e várias formas de câncer. Bem como todas as doenças crônicas, a obesidade tem causas profundas e complexas provenientes de fatores dietéticos, de estilo de vida, genéticos, psicológicos, socioculturais, econômicos e ambientais. Desse modo, são necessárias alternativas que possam incentivar a redução das condições que colocam a população ainda mais em risco, no que se refere a manter bons hábitos nutricionais.  

A princípio é importante ressaltar que os benefícios referentes à alimentação de qualidade são inegáveis, o que torna imprescindível a busca de um trajeto que seja alinhado com tais práticas. De acordo com a **Organização Pan-Americana da Saúde (OPAN)[[4]](../docs/references.md)**, refeições equilibradas favorecem a proteção contra diabetes, doenças cardiovasculares, AVC e câncer, por exemplo. Entretanto, as divulgações e ações efetivas a respeito do tema ainda não se estabeleceram de forma ampla. Uma vez que, em 2019 no Brasil, cerca de 41 milhões de pessoas enfrentavam a obesidade, conforme apresenta a pesquisa do **IBGE[[1]](../docs/references.md)**. Outrossim, estimativas recentes da **Sociedade Brasileira de Diabetes[[9]](../docs/references.md)**, inferem que 16,8 milhões de pessoas possuem diabetes. Nesse sentido, é possível identificar a correlação do perigo enfrentando por diversos indivíduos tanto com relação à própria doença, quanto a predisposição da doença infecciosa causada pelo coronavírus, por exemplo.

Conforme os dados fornecidos pelo **Hospital Israelita Albert Einstein[[7]](../docs/references.md)** o cálculo do Índice de Massa Corpórea (IMC), que avalia a relação entre o peso e a altura, é utilizado como parâmetro para indicar o peso ideal de cada pessoa. Nesse sentido, quando o IMC é maior do que 30, a pessoa é considerada obesa, ou seja, quanto maior o índice, maiores são as chances de indivíduos desenvolverem diabetes, problemas cardiovasculares e nas articulações, hipertensão arterial, depressão entre outros problemas diretamente ligados à pior qualidade de vida e menor longevidade. As respectivas classificações do resultado do índice obtido por meio do cálculo se apresentam na Tabela 1.

| IMC| CLASSIFICAÇÃO | OBESIDADE (GRAU)|
|:---:|:---:|:---:|
| MENOR QUE 18,5 | ABAIXO DO PESO | - |
| ENTRE 18,5 E 24,9 | PESO NORMAL | - |
| ENTRE 25,0 E 29,9 | SOBREPESO |-|
| ENTRE 30,0 E 34,9 | OBESIDADE | I|
| ENTRE 35,0 E 39,9 | OBESIDADE | II |
| MAIOR QUE 40 | OBESIDADE | III |

Tabela 1. Classificações IMC

Além disso, convém lembrar que a **Organização das Nações Unidas (ONU)[[10]](../docs/references.md)** possui como uma de suas metas o plano: Objetivos de Desenvolvimento Sustentável (ODS), o qual dentre as diversas áreas de foco, a saúde e o bem-estar se encontram como o terceiro objetivo. Com isso, é possível evidenciar a relevância de projetos e iniciativas relacionadas a proposição de melhores condições de vida, como a utilização das tecnologias disponíveis para criação e gestão de hábitos relacionados à alimentos saudáveis. Ademais, vale salientar que o processo de criação de rotina e estruturação de metas não são fáceis. Por isso, é necessário que as mudanças sejam realizadas com base na consistência e de modo gradual, para que não haja o desencorajamento do indivíduo em sua trajetória. Segundo a pesquisa realizada pela **Pesquisa Nacional de Saúde (PNS)[[11]](../docs/references.md)**, o sedentarismo afeta cerca de 40,3% da população do Brasil em 2019. Assim, o projeto visa mitigar alguns empecilhos relacionados a criação de uma alimentação adequada, e estimular também o início do combate do sedentarismo. Não somente, são necessárias ações estruturantes e políticas públicas que visem a promoção da saúde, implementação de medidas de prevenção do ganho de peso excessivo, por exemplo, diagnóstico precoce de eventuais males como a diabetes.

Por outro lado, nota-se que a tendência de aumento do número de consumidores de alimentos orgânicos no Brasil continuou mesmo ante todos os desafios impostos pela Covid-19, logística e e renda. Desse modo, as pessoas passaram a comprar produtos livres de agrotóxicos, e a maior parte ou manteve, ou elevou as compras nesses últimos dois anos. É o que mostra a pesquisa Panorama do consumo de orgânicos no Brasil 2021, realizada pela Associação de Promoção dos Orgânicos [(Organis)](https://organis.org.br/imprensa/pesquisa-revela-que-31-dos-brasileiros-consomem-organicos/) em parceria com a consultoria Brain e com a iniciativa UnirOrgânicos. Por isso, o acesso a receitas saudáveis e fáceis, são imprescindíveis para que dados como este torne-se mais comum, já representa um indício de busca de melhor qualidade de vida. 

Entretanto, iniciativas voltadas à gestão da alimentação não são novidades, uma vez que no mercado existem diversas aplicações com objetivos equivalentes. Com isso, é interessante avaliar suas semelhanças e diferenças a fim de identificar a sua abrangência e eficiência. Dessa forma, foram elencados alguns dos produtos disponíveis atualmente, e comparados com as soluções que o NutriSchedule apresenta. Os projetos selecionados foram: [FatSecret](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjbgbjjlon-AhXopJUCHXXYAZEQFnoECAcQAQ&url=https%3A%2F%2Fwww.fatsecret.com.br%2F&usg=AOvVaw2CUXo7AcNeof_gVLm4h4lr), [MyFitnessPal](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwizpNyhl4n-AhW1pJUCHUkJDegQFnoECAYQAQ&url=https%3A%2F%2Fwww.myfitnesspal.com%2F&usg=AOvVaw2O1PD0WVe1gYkxOiAuVAK8), [Nutrilio](https://play.google.com/store/apps/details?id=net.nutrilio&hl=pt_BR&gl=US) e [Lifesum](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiP8ZGul4n-AhX9qpUCHasSD6MQFnoECA4QAQ&url=https%3A%2F%2Flifesum.com%2Fpt%2F&usg=AOvVaw2iICms_wbdJhkT-y012OWG). Com isso, a Tabela 2 evidencia alguns dos aspectos que são base da aplicação proposta.

| RECURSOS| NutriSchedule| FatSecret | MyFitnessPal | Nutrilio | Lifesum|
|:---: |:---: |:---: |:---: |:---: |:---: |
|Controle de calorias ingeridas|:white_check_mark:|:white_check_mark:|:white_check_mark:|:x: |:white_check_mark:|
|Apresenta sugestões de receitas |:white_check_mark:|:white_check_mark:|:white_check_mark:|:x:| :white_check_mark:|
|Sugere quantidade de água|:white_check_mark:|:x:|:white_check_mark:|:white_check_mark:|:x:|
|Calcula o Índice de massa corporal (IMC)|:white_check_mark:|:x:|:x:|:x:|:x:|
|Sugere alimentos a serem consumidos|:white_check_mark:|:x:|:x:|:x:|:x:|
|Sugere alimentos a serem evitados|:white_check_mark:|:x:|:x:|:x:|:x:|
|Exporta relatório da alimentação realizada|:white_check_mark:|:x:|:white_check_mark:|:white_check_mark:|:x:|
|Apresenta informação nutricional de cada alimento|:white_check_mark:|:white_check_mark:|:white_check_mark:|:x:|:white_check_mark:|
|Aplicação gratuita|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Possui versão web|:white_check_mark:|:white_check_mark:|:white_check_mark:|:x:|:x:|

Tabela 2. Comparativo NutriSchedule

Portanto, é nítida que a situação de saúde e bem-estar confere uma responsabilidade compartilhada entre a sociedade, uma vez que em contexto globalizado, a comunidade está conectada em rede, como apresentado por Manuel Castells no livro A Sociedade em Rede. Dessa maneira, a divulgação de boas práticas referentes à alimentação saudável, são essenciais para o processo de combate de possíveis agravantes de doenças e outros problemas envolvidos. Logo, o projeto se alinha com as metas propostas pela ONU, e atenuar os índices de problemas relacionados à má alimentação.


## Público-Alvo

O público alvo da aplicação provém de usúarios de todos os gêneros e idades que almejam mudar seus hábitos por meio da alimentação saudável, renovar seu cardápio, alcançar satisfação nutricional e comedir doenças incorporadas pela alimentação.
