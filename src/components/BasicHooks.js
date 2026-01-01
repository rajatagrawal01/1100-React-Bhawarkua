// Single side working========================================

// import {useState} from 'react'

// export default function BasicHooks() {
//     const [headingText,setHeadingText]=useState("Guest");
//     console.log("component loaded");
//   return (
//     <div>
//       <h1>Hello,{headingText}</h1>
//       <input />
//       <button onClick={()=>setHeadingText("Rajat")}>Click Here to change</button>
//     </div>
//   )
// }


// Toggle side working========================================

import {useState} from 'react'
import on from '../assets/image.jpg'
import off from '../assets/download.jpg'

export default function BasicHooks() {
    const [isClicked,setIsClicked]=useState(true);
  return (
    <div>
      <h1>Button is : {isClicked?"On":"Off"}</h1>
      {/* <img src={isClicked?on:off}/> */}
      <button onClick={()=>setIsClicked(!isClicked)}>Toggle</button>
    </div>
  )
}
