
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnaliticEvent } from '../router/lib'

interface IProps{
    setUser:any
    user:string
}

const Signup : React.FC<IProps> = ({user,setUser}) => {
  const navigate=useNavigate()
  const handleClick=({id}:{id:number})=>{
    setUser(id+"")
    // AnaliticEvent("login",`${id}번유저 로그인`)
    navigate("/")
  }
  return (
    <div>
        <button onClick={()=>handleClick({id:1})}>1번유저로접속</button>
        <button onClick={()=>handleClick({id:2})}>2번유저로접속</button>
        <button onClick={()=>handleClick({id:3})}> 3번유저로접속</button>
        <button onClick={()=>handleClick({id:4})}>4번유저로접속</button>
        <button onClick={()=>handleClick({id:5})}>5번유저로접속</button>
        <button onClick={()=>handleClick({id:6})}>6번유저로접속</button>
    </div>
  )
}

export default Signup