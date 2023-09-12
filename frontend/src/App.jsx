import { Route, Routes } from "react-router-dom";
import Article from "./componentes/article";
import Coments from "./componentes/coments";
import Recipe from "./componentes/recipe";
import Users from "./componentes/Users";
import Navbar from "./componentes/Navbar";
import Contact from "./componentes/Contact";
import NotFound from './componentes/NotFound';
import RecipeForm from "./componentes/RecipeFrom";


function App() {
  return (
    <div className="container px-3 bg-slate-100">
      <Navbar />
      <Routes>
        <Route path="/recipeform" element={<RecipeForm/>} />
        <Route path="/coments" element={<Coments />} />
        <Route path="/coments" element={<Coments />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/users" element={<Users />} />
        <Route exact path="/" element={<Article />} />
        <Route  path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

