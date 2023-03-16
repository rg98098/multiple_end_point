import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MainContext } from "./MainApp";

ReactDOM.render(
  <BrowserRouter>
    <MainContext>
      <App />
    </MainContext>
  </BrowserRouter>,
  document.getElementById("root")
);
