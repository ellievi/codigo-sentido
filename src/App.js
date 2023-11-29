import './input.css';
import Banner from "./componentes/banner";
import Menu from './componentes/menu';
import SectionList from './componentes/sectionsList';
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App bg-gradient-purple">
      <Menu/>
      <Banner/>
      <SectionList/>
      <Footer/>
    </div>
  );
}

export default App;
