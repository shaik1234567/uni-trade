
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Register from './components/Register';
import About from './components/About';
import DashBoardM from './components/DashBoardM';
import ProductsM from './components/ProductsM';
import CustomersM from './components/CustomersM';
import AuthGuard from './guards/AuthGuard.js';
import Additems from './components/Additems.js';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/main" element={<AuthGuard><Main/></AuthGuard>} />
        <Route path="/register" element={<Register/>}/>
        <Route path='/aboutus' element={<About/> } />
        <Route path='/dashboard' element ={<AuthGuard><DashBoardM/></AuthGuard>} />
        <Route path='/products' element = {<AuthGuard><ProductsM/></AuthGuard>} />
        <Route
          path="/customers"
          element={
            <AuthGuard>
              <CustomersM />
            </AuthGuard>
          }
        />
        <Route path='/add-items' element = {<AuthGuard><Additems/></AuthGuard>} />
         
      </Routes>
            
    </div>
  );
}

export default App;
