import logo from './logo.svg';
import './App.css';
import {Componente_c,Componente_f} from "./components/Componente"
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6,EventosES7, MasEventos} from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';

function App() {
  // console.clear()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El usuario ta fino</h1>
        {/* <Estado /> */}
        {/* <RenderizadoCondicional /> */}
        {/* <RenderizadoElementos/> */}
        {/* <EventosES6/> */}
        {/* <EventosES7/> */}
        {/* <MasEventos/> */}
        {/* <Padre/> */}
        {/* <CicloVida/> */}
        {/* <AjaxApis/> */}
        {/* <ContadorHooks titulo="seguidores"/> */}
        {/* <ScrollHooks /> */}
        {/* <RelojHooks/> */}
        {/* <AjaxHooks/> */}
        {/* <HooksPersonalizados/> */}
        {/* <Referencias/> */}
        <Formularios/>
      </header>
    </div>
  );
}

export default App;
