import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="App-link">Home</Link>
      <Link to="/articles" className="App-link">Articles</Link>
      <Link to="/about" className="App-link">About</Link>
      <Link to="/contact" className="App-link">Contact</Link>
    </nav>
  );
}
    
export default Nav;