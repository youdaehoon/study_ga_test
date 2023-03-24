
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.css"
const Home : React.FC = () => {
  const navigate=useNavigate()
  
  return (
    <div className='home-container'>
        <button onClick={()=>navigate("/product")}>상품페이지</button>
        <button onClick={()=>navigate("/signup")}>회원가입</button>
        <button onClick={()=>navigate("/my")}>마이페이지</button>
    </div>
  )
}

export default Home