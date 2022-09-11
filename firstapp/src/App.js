import Header from './components/Header';
import Logo from './components/Logo';
import Button from './components/Button';
import './App.css';

function App() {
  return ( 
    <div className="App"> 
      <Logo />
      <Header text="Press this button for a random number guessing game"/> 
      <Button text="Random Number Guesser"/>
      <Header text="Props different text"/> 
      <Header text="Have some more text"/> 
    </div> 
  );
}

export default App;
