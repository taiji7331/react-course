import Header from './components/Header';
import Logo from './components/Logo';
import './App.css';

function App() {
  return ( 
    <div className="App"> 
      <Logo />
      <Header text="Props sample text"/> 
      <Header text="Props different text"/> 
      <Header text="Have some more text"/> 
      <p>This is the starting code for "Your first component" ungraded lab </p>
    </div> 
  );
}

export default App;
