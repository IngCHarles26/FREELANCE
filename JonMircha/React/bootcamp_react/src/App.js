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

function App() {
  // console.clear()
  let hola = false;
  let lista = [1,2,3,4,5]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{hola?"el usuario ta cagao":"el usuario ta fino"}</h1>
        {/* <ul>{lista.map(el=><li>{el}</li>)}</ul> */}
        {/* <Componente_c msg="Hola soy otro componente"/> */}
        {/* <Componente_f msg="Hola soy otro nuevo componente de"/> */}
        {/* <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Propiedades 
          cadena="string" 
          numero={1} 
          booleano={true} 
          array={[1,2,3,4]} 
          objeto={{"1":2,"2":3}} 
          react_element={<b>Es un elemento React</b>}
          funcion={(n)=>n**2}
          react_component={<Componente_c msg="soy un componente pasado como prop"/>}
        /> */}
        {/* <hr /> */}
        {/* <Estado /> */}
        {/* <hr /> */}
        {/* <RenderizadoCondicional /> */}
        {/* <hr /> */}
        {/* <RenderizadoElementos/> */}
        {/* <hr /> */}
        {/* <EventosES6/> */}
        {/* <hr /> */}
        {/* <EventosES7/> */}
        {/* <hr /> */}
        {/* <MasEventos/> */}
        {/* <hr /> */}
        {/* <Padre/> */}
        {/* <hr /> */}
        {/* <CicloVida/> */}
        {/* <hr /> */}
        {/* <AjaxApis/> */}
        {/* <hr /> */}
        {/* <ContadorHooks titulo="seguidores"/> */}
        {/* <hr /> */}
        {/* <ScrollHooks /> */}
        {/* <RelojHooks/> */}
        <AjaxHooks/>
      </header>
    </div>
  );
}

export default App;
