import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Singup from "./pages/Signup";

function App() {
   return (
      <>
         <BrowserRouter>
            <Navigation />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Singup/>} />
               <Route path="/chat" element={<Chat/>}/>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
