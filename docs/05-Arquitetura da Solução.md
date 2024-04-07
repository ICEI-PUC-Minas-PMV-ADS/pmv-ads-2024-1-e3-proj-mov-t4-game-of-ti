# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Arquitetura da Solução](img/ClasseUML.jpeg)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

### Dentre os atributos e subcaracterísticas da ISO/IEC 25010, foram escolhidos:

### Adequação funcional
Essa característica envolve a capacidade do software de realizar o que ele se propõe a fazer. As subcaracterísticas são:

Integridade funcional: cobertura de todas as tarefas e objetivos;
Motivo: Visamos garantir total funcionamento da aplicação para gerar uma ótima experiência para os usuários.

### Eficiência de performance
Esse atributo está relacionado à performance do software relacionada à quantidade de recursos utilizados e possui as seguintes subdivisões:

Comportamento do tempo: tempo de resposta e processamento;
Motivo: Ofertar um aplicativo rápido que satisfaça as expectativas do usuário. No mundo atual, buscamos sempre por coisas mais ágeis que facilite a nossa vida e por vezes trocamos algo ultrapassado por um novo e mais rápido por causa da correria do dia a dia afim de economizar tempo. Um sistema lento causaria desinteresse em nossos usuários.

Uso de recursos: quantidade e tipos de recursos utilizados por um produto ou sistema;
Motivo: Oferecer ao usuário ferramentas para facilitar a utilização do aplicativo.

Capacidade: limite máximo de um produto.
Motivo: Ter capacide de receber implementações e atualizações do administrador a qualquer momento sem que exceda a capacidade.

### Compatibilidade
É a capacidade de um produto, sistema ou componente de trocar informações, assim como de realizar funções enquanto compartilha um hardware. São subcaracterísticas:

Coexistência: capacidade de realizar funções eficientemente enquanto compartilha um ambiente ou recursos com outros produtos;
Motivo: Garantir a eficiência da aplicação.

### Usabilidade
Trata-se da capacidade de um produto ou sistema de realizar objetivos eficientemente, efetivamente e de maneira satisfatória. As subcaracterísticas são as seguintes:

Adequação reconhecível: capacidade de reconhecer se um produto ou sistema é apropriado para suas necessidades;
Motivo: Temos foco em pessoas interessadas por TI e ofereceremos à elas conteudos temáticos que abrangem várias áreas correlatas e com a possibilidade de pesquisar e favoritar os temas escolhidos.

Capacidade de aprendizado: facilidade de aprender como utilizar o produto ou sistema;
Motivo: Desejamos elaborar uma aplicação de fácil utilização e que conte com ferramentas para alcançar tal objetivo.

Operabilidade: se um produto ou sistema possui atributos que facilitam seu uso e controle;

Estética da interface de usuário: agradabilidade da interface;
Motivo: Desejamos criar um ambiente agradável que trasmita calmaria, sem multas confusões visuais ou agitações, uma vez que nossa aplicação ofertará conteúdos didáticos para fins de aprendizado.

### Confiabilidade
Diz respeito a quão bem um produto realiza funções específicas sob condições específicas. Estas são as subcaracterísticas deste atributo da ISO/IEC 25010:

Maturidade: capacidade do produto atingir as necessidades de confiabilidade;
Motivo: Queremos transmitir segurança e confiabilidade para nossos usuários.
Disponibilidade: se um sistema, produto ou componente está acessível e operante;
Motivo: Queremos garantir que a aplicação esteja operante e  todas as suas funcionalidades.

### Segurança
A capacidade de um produto ou sistema proteger informação e dados de vulnerabilidades é chamada de segurança, dentre as características da ISO/IEC 25010. As subdivisões são:

Confidencialidade – produto ou sistema é capaz de garantir que dados são acessados apenas por aqueles que têm acesso autorizado.
Motivo: Almejamos integrar junto a aplicação o cadastro de perfil profissional que pode conter dados pessoais, por isso é preciso total segurança a estes dados se tal funcionalidade for implementada no sistema.

Integridade – capacidade de prevenir acesso não-autorizado e modificação de dados ou programas de computador.
Motivo: Desejamos uma aplicação segura que seja acessada por login e senha e que posteriormente o usuário possa acessar suas fotos para editar seu perfil, mas sem comprometer a segurança da aplicação.

Autenticidade – a identidade de um sujeito ou recurso pode ser provada.
Motivo: Queremos emitir certificados que comprovem que nosso usuário completou os estudos a um devido tema sempre após concluir 100% do conteúdo.

### Manutenibilidade
A manutenibilidade é a característica que engloba a capacidade de um produto ou sistema ser modificado, atualizado e adaptado às mudanças de ambiente e requerimentos. Abaixo, vamos ver as subcaracterísticas deste atributo.

Modularidade: programas ou sistemas podem sofrer mudanças sem impactar em outros componentes;
Reusabilidade: capacidade de um recurso poder ser utilizado em mais de um sistema;
Modificabilidade: capacidade de um produto ou sistema ser modificado sem introduzir defeitos ou diminuir a qualidade atual;
Motivo: Nossa aplicação deverá contar com atualizações dos materiais didáticos e implementação de novos conteúdos, o que torna necessário a manutenibilidade.

### Portabilidade
Esta característica é a capacidade de um sistema, produto ou componente de ser transferido de um ambiente para outro. As suas subcaracterísticas são:

Adaptabilidade: capacidade de um produto ou sistema de ser adaptado a um novo hardware, software ou outros ambientes;
Motivo: É interessante que o aplicativo seja compatível a versões diferentes de Android e possivelmente adaptável para IOS.
