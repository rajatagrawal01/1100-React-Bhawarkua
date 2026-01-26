import "./App.css";
import Navbar from "./components/Navigationbar.js";
import Content from "./components/Content.js";
import a,{b,c,d} from "./components/Values.js"
import Heading from "./components/Heading.js";
import Button from "./components/ButtonClick.js";
import Counter from "./components/counter.js";
import BasicHooks from "./components/BasicHooks.js";
import JsonTable from "./components/JsonTable.js";
import JsonTableCrud from "./components/JsonTableCrud.js";
import BasicEffect from "./components/BasicEffect.js";
import { useState } from "react";
import ApiCall from "./components/ApiCall.js";
import ApiCallAsync from "./components/ApiCallAsync.js"


function App() {
  // console.log("Value of a",a);
  // console.log("Value of b",b);
  // console.log("Value of c",c);
  // console.log("Value of d",d);
  //   function showAlert(){
  //     alert("Hello");
  //   }
  const [visibility,setVisibility]=useState(true)
  return (
    <>
      {/* <Navbar/> */}
      {/* <Heading name="Rajat" age="30"/>
      <Heading name="Chetan" age="23"/>
      <Heading name="Abhishek" age="467"/> */}

      {/* <Button clickFunction={showAlert} name="Rajat" age="25"/>
      <Counter/> */}
      
      {/* <BasicHooks /> */}
      {/* <JsonTable/> */}
      {/* <JsonTableCrud/> */}
      {/* <BasicEffect/> */}
      {/* {visibility? <Counter/>:""}
     
      <button onClick={()=>setVisibility(!visibility)} >Toggle</button> */}
      {/* <ApiCall/> */}
      <ApiCallAsync/>
    </>
  );
}

export default App;
