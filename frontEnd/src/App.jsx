import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/signup";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup/>} />
               <Route path="/" element={<Chat/>}/>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
