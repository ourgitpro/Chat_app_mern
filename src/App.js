import "./App.css";
import Login from "./pages/login";
import Registration from "./pages/registration";
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
     
         <Routes>
         <Route path="registration" element={ <Registration/> } />
         <Route path="login" element={ <Login/> } />
         </Routes>
     
    </>
  );
}

export default App;
