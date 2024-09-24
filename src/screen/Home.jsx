import { useEffect, useState } from "react"


const Home = () => {

  const [hasReload, setHasReload] = useState(false)

  useEffect(()=>{
    if(!hasReload){
     const timer = setTimeout(()=>{
        window.location.reload()
      },1000)

      return ()=> clearTimeout(timer)
    }
  },[hasReload])

  useEffect(()=>{
    setHasReload(true)
  },[])


  return (
    <>
    <h2 style={{
        color: 'black',
        textAlign: 'center',
        margin: '50px 0',
        fontWeight: 'bold'
  
    }}>Comming Soon</h2>
    </>
  )
}

export default Home
