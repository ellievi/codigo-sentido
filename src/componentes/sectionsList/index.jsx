import React from "react";
import Section from "../section";
import Card from "../card";

const SectionList = () => {

  const contentList = [
    {
      name: 'Conteúdo',
      description: 'Descrição do site'
    },
    {
      name: 'Conteúdo 2',
      description: 'Descrição do site 2'
    },
    {
      name: 'Conteúdo 3',
      description: 'Descrição do site 3'
    }
]
const webSitesList = [
  {
    name: 'Site',
    description: 'Descrição do site'
  },
  {
    name: 'Site 2',
    description: 'Descrição do site 2'
  },
  {
    name: 'Site 3',
    description: 'Descrição do site 3'
  }
]

  return (
    <div>
      <Section
        sectionTitle="Sobre"
        id="sobre"
        description={
        <div>
          O crescimento diário do uso da tecnologia em diversos setores mundiais resultou na maior demanda por profissionais 
        na área de tecnologia da informação (TI). Com um aumento de procura por trabalhadores do ramo tecnológico, 
        o investimento e propagação da área educacional para todos se tornou vital para construir um futuro congruente aos avanços ocorrentes.
          <br/>
          Partindo deste pressuposto, a acessibilidade e oportunidade de estudo e ingressão de pessoas PcD no ramo tecnológico, 
          sobretudo os relacionados à programação, precisam ser ampliadas vigorosamente. Para os deficientes visuais, o estudo e trabalho 
          com desenvolvimento de códigos pode tornar-se muito mais aproveitado e divulgado com as tecnologias já existentes 
          e as próximas que podem vir
        </div>
        }
        bgGrey
      />

      <Section
        sectionTitle="Softwares"
        description={
        <div>
          Ao clicar no botão você será direcionado para a página com a seção da lista dos softwares mais atuantes no mercado para 
          auxílio de manuseio de computador para deficientes visuais. Cada bloco de software listado terá uma breve descrição 
          da sua função e logo abaixo botões que redirecionam para acessar o site fonte e efetuar o download do sotware, 
          bem como, se necessário, sites de orientação para instalação ou configuração.
        </div>
        }
        buttonTitle="Ir para lista de softwares"
        link="/lista_de_softwares"
      />

      <Section
        sectionTitle="Conteúdos didáticos"
        id="conteudos"
        description={
          <div>
            Esta seção possui cards contendo nome, descrição e botão de redirecionamento para o site de conteúdos 
            didáticos referentes à programação.
            <br/>
            Os conteúdos didáticos podem redirecionar para sites próprios ou playlists de youtube que contenham 
            vídeos com teor educacional acerca de assuntos que envolvam tecnologia acessiva ou programação.
          </div>
          }
          bgGrey
          >
            <div className="grid grid-cols-3 gap-10 p-10">
              {contentList.map(content => {
                return <Card 
                title={content.name} 
                description={content.description} 
                buttonTitle="Redirecionar ao site"
                />
              })}
            </div>
      </Section>

      <Section
        sectionTitle="Sites"
        id="sites"
        description={
        <div>
          A seguir segue uma lista de card para sites que seguem como referência sobre acessibilidade tecnológica 
          para deficientes visuais. Cada card terá o nome do site em cima seguido abaixo de uma breve
          descrição acerca do objetivo principal dele mais um botão de redirecionamento de link.
        </div>
        }
        card
        >
          <div className="grid grid-cols-3 gap-10 p-10">
            {webSitesList.map(content => {
              return <Card 
              title={content.name} 
              description={content.description} 
              buttonTitle="Redirecionar ao site"
              />
            })}
          </div>
      </Section>
    </div>
  )
}

export default SectionList;