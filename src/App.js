import "./App.css";
import Navbar from "./components/Navigationbar.js";
import Content from "./components/Content.js";
import a, { b, c, d } from "./components/Values.js";
import Heading from "./components/Heading.js";
import Button from "./components/ButtonClick.js";
import Counter from "./components/counter.js";
import BasicHooks from "./components/BasicHooks.js";
import JsonTable from "./components/JsonTable.js";
import JsonTableCrud from "./components/JsonTableCrud.js";
import BasicEffect from "./components/BasicEffect.js";
import { useState } from "react";
import ApiCall from "./components/ApiCall.js";
import ApiCallAsync from "./components/ApiCallAsync.js";
import ReducerComp from "./components/ReducerComp.js";
import AdvReducer from "./components/AdvReducer.js";
import PropDrilling from "./components/propDrilling.js";
import Redirect from "./components/Redirect.js";
import { BrowserRouter} from "react-router-dom";

function App() {

  const [visibility, setVisibility] = useState(true);
  return (
    <BrowserRouter>
      <>
        <Redirect />
      </>
    </BrowserRouter>
  );
}

export default App;
