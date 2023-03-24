import React from "react";
import {Route,Routes, useNavigate} from"react-router-dom"

import './App.css';
import Home from"./pages/Home"
import My from "./pages/My";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import RouteChangeTracker from "./router";



function App() {
  const [user,setUser]=React.useState<string>("")
const navigate=useNavigate()

RouteChangeTracker()
 
  return (
    <div className="App">
      <div>
        <button onClick={()=>navigate("/")}>홈으로가기</button>
      {user&&<span>{user}</span>}
      </div>
      
      
      <Routes>
        
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/signup' element={<Signup user={user} setUser={setUser} />}/>
      <Route path='/my' element={<My/>}/>
    </Routes>
    </div>
  );
}

export default App;
