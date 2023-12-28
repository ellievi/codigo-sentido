import React from "react";
import Section from "../section";
import Card from "../card";
import Button from "../button";

const SectionList = () => {

  const didaticContentsList = [
    {
      name: 'CEaD IBC',
      description: 'Canal com intuito divulgativo de ensino de tecnologia para deficientes visuais.',
      contentLink: 'https://www.youtube.com/@ceadibc/featured'
    },
    {
      name: 'BlindTec Oficial',
      description: 'Canal com objetivo de comunicar acerca da tecnologia assistiva para deficientes visuais.',
      contentLink: 'https://www.youtube.com/@BlindTecOficial/streams'
    },
    {
      name: 'Curso de Windows 11 com o NVDA',
      description: 'Playlist com vídeos ensinando a navegar e utilizar o Windows 11 com NVDA.',
      contentLink: 'https://www.youtube.com/playlist?list=PLP1oneJ9pfptAffLDhOznVAKlGYQYHvbl'
    },
    {
      name: 'Curso de Microsoft Teams com o NVDA',
      description: 'Playlist com vídeos ensinando a navegar e utilizar o Microsoft Teams com NVDA.',
      contentLink: 'https://www.youtube.com/playlist?list=PLP1oneJ9pfpsDjgMk1oEgutjuhn38_wfD'
    },
    {
      name: 'Configurando Emacs',
      description: 'Playlist com intuito de orientar a configurar o Emacs.',
      contentLink: 'https://www.youtube.com/playlist?list=PLOQgLBuj2-3I7w8JQvCY8lbbrUZL-gf4m'
    }
]
  const webSitesList = [
  {
    name: 'BlindTec',
    description: 'O site da BlindTec visa a organização de conteúdos de tecnologia didáticos e acessíveis para deficientes visuais.',
    siteLink: 'https://www.blindtec.com.br/blog/'
  },
  {
    name: 'Acessibilidade Legal',
    description: 'O site Acessibilidade Legal reúne tópicos acerca da acessibilidade sobre a tecnologia web.',
    siteLink: 'http://www.acessibilidadelegal.com/13-landmarks.php'
  },
  {
    name: 'ChromeVox',
    description: 'ChromeVox é um leitor de tela para o google chrome. Para baixa-lo é necessário clicar no botão "Usar no chrome" e depois em "Adicionar Extensão". Caso queira desativar a extensão é preciso ir ao Gerenciador de Extensões presente no menu do google.',
    siteLink: 'https://chromewebstore.google.com/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=pt-BR&utm_source=ext_sidebar'
  },
  {
    name: 'Manual de uso NVDA',
    description: 'Este tópico se trata de um manual acerca do NVDA.',
    siteLink: 'https://www.guarapari.es.gov.br/pagina/ler/2078/acessibilidade-leitor-de-tela-nvda'
  },
  {
    name: 'Manual do EmacSpeak',
    description: 'Este tópico reúne informações diversas sobre tópicos do EmacSpeak.',
    siteLink: 'https://tvraman-github-io.translate.goog/emacspeak/manual/?_x_tr_sl=en&_x_tr_tl=pt-PT&_x_tr_hl=pt-PT&_x_tr_pto=tc'
  },
  {
    name: 'Sites diversos recomendados pela BlindTec',
    description: 'Listagem de variedades de sites úteis disponibilizados pela BlindTec.',
    siteLink: 'https://www.blindtec.com.br/blog/sites-uteis/'
  },
  {
    name: 'Dicas de acessibilidade do Visual Studio',
    description: 'Este tópico visa a exposição de dicas de acessibilidade para o Visual Studio.',
    siteLink: 'https://learn.microsoft.com/pt-br/visualstudio/ide/reference/accessibility-tips-and-tricks?view=vs-2022'
  }
  ,
  {
    name: 'HandTalk',
    description: 'O site da Hand Talk abrange temas sobre acessibilidade.',
    siteLink: 'https://www.handtalk.me/br/ajudaacessibilidade/#navbar'
  },
  {
    name: 'Blog oficial do Emacspeak',
    description: 'Blog oficial do Emacspeak (com idioma em inglês).',
    siteLink: 'https://emacspeak.blogspot.com'
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
          e as próximas que podem vir.
        </div>
        }
        bgGrey
      />

      <Section
        sectionTitle="Softwares"
        description={
        <div>
          Ao clicar no botão abaixo você será direcionado para a página com a seção de lista de softwares mais 
          atuantes no mercado para auxílio de manuseio de diversas ferramentas de tecnologia envolvendo o mundo da programação 
          para deficientes visuais. Cada bloco de software listado terá uma breve descrição da sua função e logo 
          abaixo botões que redirecionam para acessar o site fonte e efetuar o download do software, bem como, 
          sites de orientação para instalação ou configuração do mesmo.
        </div>
        }
        buttonTitle="Ir para lista de softwares"
        link="/lista_de_softwares"
      />

      <Section
        sectionTitle="Conteúdos de mídia didáticos"
        id="conteudos"
        description={
          <div>
            Esta seção possui cards contendo nome, descrição e botão de redirecionamento para o site de conteúdos 
            de mídia didáticos referentes à programação.
            <br/>
            Os conteúdos didáticos podem redirecionar para canais, playlists ou vídeos do youtube que contenham 
            objetivo educacional acerca de assuntos que envolvam tecnologia acessiva ou programação.
          </div>
          }
          bgGrey
          >
            <div className="grid grid-cols-3 gap-10 p-10">
              {didaticContentsList.map(content => {
                return <Card 
                title={content.name} 
                description={content.description} 
                >
                  <Button title="Redirecionar ao site" link={content.contentLink}/>
                </Card>
              })}
            </div>
      </Section>

      <Section
        sectionTitle="Sites didáticos"
        id="sites"
        description={
        <div>
          A seguir segue uma lista de cards para sites ou tópicos de sites que seguem como referência sobre acessibilidade tecnológica 
          para deficientes visuais. Cada card terá o nome do site seguido abaixo de uma breve
          descrição acerca do objetivo principal dele mais um botão de redirecionamento para link do site.
        </div>
        }
        card
        >
          <div className="grid grid-cols-3 gap-10 p-10">
            {webSitesList.map(content => {
              return <Card 
              title={content.name} 
              description={content.description}
              >
                <Button title="Redirecionar ao site" link={content.siteLink}/>
              </Card>
            })}
          </div>
      </Section>
    </div>
  )
}

export default SectionList;