import "./App.css";
import Navbar from "./components/Navigationbar.js";
import Content from "./components/Content.js";
import a,{b,c,d} from "./components/Values.js"
import Heading from "./components/Heading.js";
import Button from "./components/ButtonClick.js";
import Counter from "./components/counter.js";
import BasicHooks from "./components/BasicHooks.js";


function App() {
  // console.log("Value of a",a);
  // console.log("Value of b",b);
  // console.log("Value of c",c);
  // console.log("Value of d",d);
  //   function showAlert(){
  //     alert("Hello");
  //   }

  return (
    <>
      {/* <Navbar/> */}
      {/* <Heading name="Rajat" age="30"/>
      <Heading name="Chetan" age="23"/>
      <Heading name="Abhishek" age="467"/> */}

      {/* <Button clickFunction={showAlert} name="Rajat" age="25"/>
      <Counter/> */}
      
      <BasicHooks />
    </>
  );
}

export default App;
