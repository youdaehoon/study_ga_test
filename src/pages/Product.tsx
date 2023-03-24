
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product : React.FC = () => {
const init:{name:string}[]=[{name:"기본증명서"},{name:"가족관계증명서"},{name:"혼인관계증명서"}]
    const [datas,setDatas]=React.useState<{name:string}[]>(init)
    const [selected,setSelected]=React.useState<{name:string}[]>([])
  const navigate=useNavigate()

  const handleClick=({data}:{data:{name:string}})=>{
    
    const newSelected=[...selected,data]
    setSelected(newSelected)
    console.log(data)

  }
  return (
    <div className='flex flex-column align-center'  style={{width:"100vw"}}>
        {datas.map((data,idx)=><div className="pointer" key={data.name} onClick={()=>handleClick({data})} style={{border:"1px solid black" ,width:"200px"}}>{data.name}</div>)}

        <br>
        </br>
        <div className='flex flex-column'>
            여기에서 담음
            {selected.map((data,idx)=><div className="pointer" key={data.name} style={{border:"1px solid black" ,width:"200px"}}>{data.name}</div>)}

<button onClick={()=>navigate("/my")}>구매하기</button>
        </div>
    </div>
  )
}

export default Product