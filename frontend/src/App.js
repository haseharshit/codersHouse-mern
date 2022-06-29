
import './App.css';
import Home from './Pages/Home/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navigation from './components/shared/Navigation/Navigation';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
function App() {
  return (
    <>
     <BrowserRouter>
     <Navigation/>
     <Routes>
      <Route path='/' element={<Home/>}>
        
      </Route>
      <Route path='/register' element={<Register></Register>}/>
      <Route path="/login" element={<Login/>}>

      </Route>
     </Routes>
     
    </BrowserRouter>
    </>
   
  );
}

export default App;
