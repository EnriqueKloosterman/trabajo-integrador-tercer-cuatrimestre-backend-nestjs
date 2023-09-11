import { Route, Routes } from "react-router-dom";
import Article from "./componentes/Article";
import Coments from "./componentes/Coments";
import Recipe from "./componentes/Recipe";
import Users from "./componentes/Users";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div className="container px-3">
      <Navbar />
      <Routes>
        <Route path="/coments" element={<Coments />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/users" element={<Users />} />
        <Route exact path="/" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
