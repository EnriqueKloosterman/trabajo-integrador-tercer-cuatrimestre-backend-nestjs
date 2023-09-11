import { Route, Routes } from "react-router-dom";
import Article from "./componentes/Article";
import Coments from "./componentes/Coments";
import Recipe from "./componentes/Recipe";
import Users from "./componentes/Users";
import Navbar from "./componentes/Navbar";

import Contact from "./componentes/Contact";

function App() {
  return (
    <div className="container px-3">
      <Navbar />
      <Routes>
      <Route path="/coments" element={<Coments />} />
        <Route path="/coments" element={<Coments />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/users" element={<Users />} />
        <Route exact path="/" element={<Article />} />
        <Route  path='/contact'element = {<Contact/>}/>
        
      </Routes>
    </div> 
  );
}

export default App;
