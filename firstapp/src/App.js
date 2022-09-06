import logo from './logo.svg';
import './App.css';


function Heading() {
  return(
    <h1 className="App-header">Practice building a component complete</h1>
  );
}

function Logo() {
  return(
    <img src={logo} alt="logo" className="App-logo"></img>
  );
}

function App() {
  return ( 
    <div className="App"> 
      <Logo />
      <Heading /> 
      <p>This is the starting code for "Your first component" ungraded lab </p>
    </div> 
  );
}

export default App;
