import React from "react";
import Section from "../../componentes/section";
import Card from "../../componentes/card";
import Menu from "../../componentes/menu";
import Footer from "../../componentes/footer";
import Button from "../../componentes/button";

const SoftwaresList = () => {

  const contentList = [
    {
      name: 'NVDA',
      description: 'Sigla, do inglês, de NonVisual Desktop Access, é um software de leitor de tela livre que permite que seja feita a leitura de conteúdos presentes no computador, seja dentro do sistema operacional, de softwares ou de sites web.',
      tutorial: 'Tutorial de instalação',
      siteLink: 'https://www.nvaccess.org/download/',
      tutorialLink: 'https://www.guarapari.es.gov.br/pagina/ler/2078/acessibilidade-leitor-de-tela-nvda'
    },
    {
      name: 'Emacs',
      description: 'Emacs é um editor de texto muito utilizado por programadores para desenvolver documentos técnicos.',
      tutorial: 'Tutorial de instalação',
      siteLink: 'https://www.gnu.org/savannah-checkouts/gnu/emacs/emacs.html',
      tutorialLink: 'https://www.gnu.org/software/emacs/download.html',
    },
    {
      name: 'EmacSpeak',
      description: 'EmacSpeak é um software que implementa um ambiente de áudio para realizar leitura de texto no Emacs.',
      tutorial: 'Tutorial de instalação',
      siteLink: 'https://emacspeak.sourceforge.net',
      tutorialLink: 'https://emacspeak-sourceforge-net.translate.goog/install-guide/installing-emacspeak.html?_x_tr_sl=en&_x_tr_tl=pt-PT&_x_tr_hl=pt-PT&_x_tr_pto=tc'
    },
    {
      name: 'VS Code',
      description: 'Pertecente à empresa Microsoft, o Vs Code é uma IDE (sigla, do inglês, Integrated Development Environment, ou, do português, Ambiente de Desenvolvimento Integrado) que permite a construção de códigos em diversas linguagens de programação.',
      tutorial: 'Tutorial de instalação',
      siteLink: 'https://code.visualstudio.com/download',
      tutorialLink: 'https://www.treinaweb.com.br/blog/instalacao-do-vs-code-no-windows-linux-e-macos'
    },
    {
      name: 'Eclipse',
      description: 'Eclipse é uma IDE com foco de desenvolvimento na linguagem JAVA.',
      tutorial: 'Tutorial de instalação',
      siteLink: 'https://www.eclipse.org/downloads/',
      tutorialLink: 'https://algol.dev/eclipse-ide-instalar-java-windows/'
    },
    {
      name: 'Jupyter Notebook',
      description: 'Descrição do software 3',
      tutorial: 'Tutorial de instalação',
      siteLink: 'https://www.anaconda.com/download',
      tutorialLink: 'https://www.alura.com.br/artigos/conhecendo-o-jupyter-notebook'
    },
    {
      name: 'Git',
      description: 'Descrição do software',
      tutorial: 'Tutorial de instalação',
      siteLink: 'https://git-scm.com/downloads',
      tutorialLink: 'https://git-scm.com/book/pt-br/v2/Começando-Instalando-o-Git'
    },
    {
      name: 'Python',
      description: 'Descrição do software',
      tutorial: 'Tutorial de instalação',
      siteLink: 'https://www.python.org/downloads/',
      tutorialLink: 'https://www.treinaweb.com.br/blog/instalacao-do-python-e-nosso-primeiro-ola-mundo'
    }
]

  return (
    <div>
      <Menu/>
      <Section
        sectionTitle="Lista de Softwares"
          bgGrey
          >
            <div className="grid grid-cols-3 gap-10 p-10">
              {contentList.map(content => {
                return <Card 
                title={content.name} 
                description={content.description}
                >
                  <Button title="Site do download" link={content.siteLink}/>
                  {content.tutorial && (
                  <Button title={content.tutorial} link={content.tutorialLink}/>
                  )}
                </Card>
              })}
            </div>
      </Section>
      <Footer/>
    </div>
  )
}

export default SoftwaresList;