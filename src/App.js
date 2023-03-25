import './App.css';
import {Route,Routes} from 'react-router-dom'
// import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import ProductItem from './Components/ProductItem';
import { Login } from './Components/Login';
function App() {
  return (
    <div className="App">
   {/* <Navbar/> */}
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/productItem/:id' element={<ProductItem/>}/>
</Routes>
    </div>
  );
}

export default App;
