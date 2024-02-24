import React, { useEffect,useState } from 'react'
import { CiSearch } from "react-icons/ci";


const App = () => {

  const url = `https://api.unsplash.com/photos/?client_id=etfXuTu4ddKeqc-h9mniHfTi2-Dy4fkSseD0wDmg37k `

  const [data1,setData1]=useState([])
  const[search,setSearch]=useState("")

  useEffect(()=>{
    async function  unSplash(){
      const data = await fetch(url);
      const data2 = await data.json();
      console.log(data2);
      setData1(data2);
    }
    unSplash()
    },[])

    const handleClick = async ()=>{
      const url2 = ` https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=etfXuTu4ddKeqc-h9mniHfTi2-Dy4fkSseD0wDmg37k`
      const sear = await fetch(url2);
      const sear2 = await sear.json();
      console.log(sear2)

      setData1(sear2.result)  
    }


  return (
    <>
    <nav className='flex'> 
      <h2>Unsplash</h2>
      <h1><CiSearch /><input  type="text " placeholder='Search high-resulation images' /></h1>
      <ul>
        <li>Advertise</li>
        <li>Blog</li>
        <li>Unsplash+</li>
        <button>Submit a photo</button>
       <h3><IoNotifications /></h3>
       <h2><AiTwotoneProfile /></h2>
       <h2><FaBars /></h2>
      </ul>
    </nav>
    <div>
      <input type="text" style={{border:"2px solid black"}} onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={handleClick}> Click Me</button>
    </div>
    <div className='grid grid-cols-3 gap-5 w-[90%] m-auto'>
    {data1.map((packs)=>{
      const{urls,likes,id,slug,descripation}=packs
      return(
        <>
        <h1>{slug}</h1>
        <img src={urls.small} alt={slug} />
        <p>{likes}</p>
        </>
      )
    })}

      </div>  
      </>
  )
}

export default App