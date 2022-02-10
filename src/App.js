import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/menu_component';
function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Idk i'm confused</NavbarBrand>
      </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
