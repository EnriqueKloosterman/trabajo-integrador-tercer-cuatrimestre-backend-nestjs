import { Route, Routes } from "react-router-dom";
import Article from "./componentes/article";
import Coments from "./componentes/coments";
import Recipe from "./componentes/recipe";
import Users from "./componentes/Users";
import Navbar from "./componentes/Navbar";
import Contact from "./componentes/Contact";
import NotFound from './componentes/NotFound';
import CreateRecipe from './componentes/CreateRecipe';
import RecipeDetail from "./componentes/RecipeDetail";




function App() {
  return (
    <div className="container px-3 bg-slate-100">
      <Navbar />
      <Routes>
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/coments" element={<Coments />} />
        <Route path="/coments" element={<Coments />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="recipes/:id" element={<RecipeDetail />} />
        <Route path="/users" element={<Users />} />
        <Route exact path="/" element={<Article />} />
        <Route  path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

