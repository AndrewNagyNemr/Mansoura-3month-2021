import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
// import { AuthContext } from "./contexts/AuthContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);



// ReactDOM.render(
//   <BrowserRouter>
//     <AuthContext.Provider value={{

//     }}>
//       <App />
//     </AuthContext.Provider>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
