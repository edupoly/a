import './App.css';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className="mybox" style={{backgroundColor:'lightgray'}}>
      <h1>This is App Component</h1>
      <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/aboutus">Aboutus</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/contact">Contactus</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
