import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Agente from "./pages/Agente";
import Mapas from "./pages/Mapas";
import Armas from "./pages/Armas";
import Ranques from "./pages/Ranques";
import Skins from "./pages/Skins";

import Header from "./components/Header";

function AppRoute(){
    return(
        <BrowserRouter>
           <Header/>
           <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/agente/:id" element={ <Agente/> }/>
              <Route path="/mapas" element={<Mapas/>}/>
              <Route path="/armas" element={<Armas/>}/>
              <Route path="/ranques" element={<Ranques/>}/>
              <Route path="/skins/:id" element={ <Skins/> }/>
           </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;