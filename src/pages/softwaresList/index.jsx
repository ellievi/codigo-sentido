import React from "react";
import Section from "../../componentes/section";
import Card from "../../componentes/card";
import Menu from "../../componentes/menu";
import Footer from "../../componentes/footer";
import Button from "../../componentes/button";

const SoftwaresList = () => {

  const contentList = [
    {
      name: 'Software',
      description: 'Descrição do software',
      tutorial: 'Redirecionar ao site tutorial'
    },
    {
      name: 'Software 2',
      description: 'Descrição do software 2'
    },
    {
      name: 'Software 3',
      description: 'Descrição do software 3'
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
                  <Button title="Redirecionar ao site"/>
                  {content.tutorial && (
                  <Button title={content.tutorial}/>
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