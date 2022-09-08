import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';

function App() {
  return ( 
    <div className="App"> 
      <Logo />
      <Header text="Props sample text"/> 
      <p>This is the starting code for "Your first component" ungraded lab </p>
    </div> 
  );
}

export default App;
