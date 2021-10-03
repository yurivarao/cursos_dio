import Item from "./components/Item";
import Card from "./components/Card";

const App = () => {
  return(
    <>
      <h1>Minha primeira aplicação em React</h1>
      
      <h2>Lista de Items</h2> 
      <ul>
        <Item texto = "Utilizando props.texto"/>
        <Item texto = "Utilizando props.texto"/>
        <Item>Utilizando props.children</Item>
        <Item>Utilizando children</Item>
      </ul>
      
      <h2>Card com butões e eventos</h2> 
      <Card />
    </>
  )
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

