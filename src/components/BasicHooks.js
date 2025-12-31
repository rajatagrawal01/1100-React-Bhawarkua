import {useState} from 'react'

export default function BasicHooks() {
    const [headingText,setHeadingText]=useState("Guest");
    console.log("component loaded");
  return (
    <div>
      <h1>Hello,{headingText}</h1>
      <input />
      <button onClick={()=>setHeadingText("Rajat")}>Click Here to change</button>
    </div>
  )
}
