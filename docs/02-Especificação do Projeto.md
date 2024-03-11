# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Dado problema das personas têm dificuldade de compreensão da área de TI (tecnologia da informação) a ideia é buscar a solução a partir da perspectiva das personas entrevistadas.

Tabelas de conteúdo 
1. [Personas](#personas)
2. [Histórias de Usuários](#histórias-de-usuários)
3. [Modelagem do Processo de Negócio</span>](#modelagem-do-processo-de-negócio)
4. [Indicadores de Desempenho](#indicadores-de-desempenho)
5. [Requisitos](#requisitos)
6. [Requisitos Funcionais](#requisitos-funcionais)
7. [Requisitos não Funcionais](#requisitos-não-funcionais)
8. [Restrições](#restrições)
9. [Diagrama de Casos de Uso](#diagrama-de-casos-de-uso)
10. [Matriz de Rastreabilidade](#matriz-de-rastreabilidade)

## Personas

### As personas levantadas durante o processo de entendimento do problema são apresentadas abaixo. 

**Obs:** *Personas essas que tem a necessidade de entendimento e o real interesse pela carreira do profissional de TI (tecnologia da informação), mas devido a complexidade de cada área e as nomenclaturas não conseguem buscar um trilha de capacitação conforme sua afinidade.*

O **primeiro caso** é do Renato Machado, trabalhador autônomo que aos seus 43 anos de vida, busca se qualificar para atuar como gestor de TI (tecnologia da informação). Sua história traz na fala a dificuldade de entendimento das nomenclaturas adotadas pelo mercado, tendo como sua maior dificuldade o entendimento de termos em inglês.

O **segundo caso** é da Cecília Fernandez, desempregada e formada em gastronomia que aos seus 35 anos de vida, busca se qualificar para atuar como gestor de TI (tecnologia da informação). Sua história traz na fala a dificuldade de entendimento das possibilidades de atuação no mercado, tendo como seu maior diferencial o inglês e a criação de pratos visando a melhor experiência para o cliente.

O **terceiro caso** é do Givanildo de Souza, estudante do primeiro semestre de TI que aos seus 20 anos de vida, busca atuar com TI (tecnologia da informação). Sua história traz na fala a dificuldade de entendimento das possibilidades de atuação no mercado, sem experiência mas com algumas passagens por outras áreas do mercado de trabalho.

O **quarto caso** é da Sara Bianchi, estudante do último semestre de TI 30 anos de vida, busca se qualificar para atuar como programadora de TI (tecnologia da informação). Sua história traz na fala a dificuldade de entendimento das possibilidades de atuação como programadora no mercado, sem experiência e dificuldades de saber quais cursos e aperfeiçoamentos deve obter.

O **quinto caso** é do Pedro Moraes, empregado e formado em TI aos seus 25 anos de vida, busca se qualificar para atuar com DevOps de TI (tecnologia da informação). Sua história traz na fala a dificuldade de entendimento das possibilidades de atuação com cloud no mercado, tendo como seu maior diferencial o inglês e a vivência em empresas que usam sistemas on-premises.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

### Usuário do sistema

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR` |
|--|--|--|
| Usuário do sistema | Registrar ou trocar e deletar meus interesses | Manter o foco na jornada |
| Usuário do sistema | Buscar por conteúdos relacionados aos meus interesses | Manter o foco na jornada |
| Usuário do sistema | Entender sobre o tema relacionados aos meus interesses | Qualificar conforme a jornada |
| Usuário do sistema | Entender sobre as possibilidades de atuação relacionados aos meus interesses | Qualificar conforme a jornada |
| Usuário do sistema | Obter formas de demonstrar o conhecimento obtidos conforme os meus interesses | Qualificar conforme a jornada |
| Usuário do sistema | Cadastrar e editar um perfil profissional | Buscar uma colocação no mercado|

### Administrador do sistema

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR` |
|--|--|--|
| Administrador | Alterar permissões | Permitir que possam administrar contas |
| Administrador | Cadastrar conteúdo | Permitir que possam administrar o sistema |
| Administrador | Editar conteúdo | Permitir que possam administrar o sistema |


As histórias de usuário listadas acima, são relevantes para o projeto de sua solução. 

Conforme as Histórias de Usuário, sendo admistrador ou não, consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação listados abaixo neste documento.

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.


### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais
[Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).

| ID | Descrição do Requisito | Prioridade |
|--|--|--|
| RF-001 | Permitir que o usuário cadastre no sistema | ALTA |  |
| RF-002 | Permitir que o usuário cadastre seu perfil profissional no sistema | ALTA |  |
| RF-003 | Permitir que o usuário edite seu cadastro no sistema | MÉDIA |  |
| RF-004 | Permitir que o usuário cadastre interesses | ALTA |  |
| RF-005 | Permitir que o usuário edite seu cadastro de interesses | MÉDIA |  |
| RF-006 | Permitir que o usuário delete seu cadastro de interesses | MÉDIA |  |
| RF-007 | Permitir que o usuário interaja no sistema conforme cadastro de interesses | MÉDIA |  |
| RF-008 | Permitir que o usuário busque no sistema informações conforme cadastro de interesses | MÉDIA |  |
| RF-009 | Permitir que o usuário delete no sistema conforme cadastro de interesses | MÉDIA |  |
| RF-010 | Permitir que o usuário administrador cadastre conteúdos novos no sistema | ALTA |  |
| RF-011 | Permitir que o usuário administrador edite conteúdos no sistema | MÉDIA |  |
| RF-012 | Permitir que o usuário administrador edite o nível de permissão do usuário no sistema | MÉDIA |  |
| RF-013 | Emitir um relatório de tarefas no mês | BAIXA |
| RF-014 | Emitir um certificado de qualificação sobre o conteúdo concluído | BAIXA |

### Requisitos não Funcionais
[Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).

| ID | Descrição do Requisito | Prioridade |
|--|--|--|
| RNF-001 | O sistema deve rodar em um dispositivos móvel | MÉDIA |  |
| RNF-002 | Deve processar requisições do usuário em no máximo 3s | BAIXA |  |
| RNF-003 | Deve processar manter salvo o coteúdo de interesse do usuário | ALTA |  |
| RNF-004 | Deve processar novos coteúdo publicados por parte do usuário administrador | MÉDIA |  |
| RNF-005 | Deve processar como concluido coteúdo finalizado pelo usuário | MÉDIA |  |
| RNF-006 | Deve processar um certificado de conclusão de coteúdo após finalizado pelo usuário | MÉDIA |  |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID | Restrição |
|--|--|
| 01 | O projeto deverá ser entregue até o final do semestre |
| 02 | O projeto deverá ser desenvolvido um módulo de backend para administrar conteúdo |
| 03 | O projeto deverá ser desenvolvido um módulo de aplicação movél |
| 04 | O projeto deverá conter usando a tecnica de gamificação (ou gamification, em inglês) |
| 05 | O projeto deverá explor os pilares de autonomia, propósito e maestria de gamificação (ou gamification, em inglês) |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

Dados os requisitos funcionais e não funcionas a matriz de rastreabilidade será uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

|  | USER | ADM | RF-001 | RF-002 | RF-003 | RF-004 | RF-005 | RF-006 | RF-007 | RF-008 | RF-009 | RF-010 | RF-011 | RF-012 | RF-013 | RF-014 | RNF-001 | RNF-002 | RNF-003 | RNF-004 | RNF-005 | RNF-006 | TC-001 | DC-001 |
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
| USER |  |  |  |
| ADM |  |  |  |
| RF-001 |  |  |  |
| RF-002 |  |  |  |
| RF-003 |  |  |  |
| RF-004 |  |  |  |
| RF-005 |  |  |  |
| RF-006 |  |  |  |
| RF-007 |  |  |  |
| RF-008 |  |  |  |
| RF-009 |  |  |  |
| RF-010 |  |  |  |
| RF-011 |  |  |  |
| RF-012 |  |  |  |
| RF-013 |  |  |  |
| RF-014 |  |  |  |
| RNF-001 |  |  |  |
| RNF-002 |  |  |  |
| RNF-003 |  |  |  |
| RNF-004 |  |  |  |
| RNF-005 |  |  |  |
| RNF-006 |  |  |  |
| TC-001 |  |  |  |
| DC-001 |  |  |  |

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
