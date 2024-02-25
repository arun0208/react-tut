import React,{useState} from 'react'
import '../components/Background.css'
const Background = () => {
  const[color,setColor] = useState("white");
  function red(){
    setColor("red");
  }
  return (
    <>
      <div className="bg" style={{backgroundColor:color}}></div>

      <button onClick={red}>Red</button>

    </>
  )
}

export default Background