import "./App.css";
import Navbar from "./components/Navigationbar.js";
import Content from "./components/Content.js";
import a,{b,c,d} from "./components/Values.js"
import Heading from "./components/Heading.js";


function App() {
  console.log("Value of a",a);
  console.log("Value of b",b);
  console.log("Value of c",c);
  console.log("Value of d",d);

  return (
    <>
      <Navbar/>
      <Heading name="Rajat" age="30"/>
      <Heading name="Chetan" age="30"/>
      <Heading name="Abhishek" age="30"/>

    </>
  );
}

export default App;
