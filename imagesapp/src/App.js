import logo from "./assets/logo.png"

function App() {
  const styles = {
    transform: "scaleX(-1)",
    display: "inline"
  };
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img src={logo} alt="Logo"></img>
      <img src={logo} alt="Logo"
      style={styles}></img>
    </div>
  );
}

export default App;