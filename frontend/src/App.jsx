import {  Route, Routes } from 'react-router-dom';
import Article from './componentes/Article';
import Coments from './componentes/Coments';
import Recipe from './componentes/Recipe';
import Users from './componentes/Users';

function App() {
  return (

    <Routes>

          {/* <Route path="/articles" component={<Article />} /> */}
          <Route path="/coments" element={<Coments />} /> 
          <Route path="/recipes" element={<Recipe />} />  
          <Route path="/users" element={<Users />} />        

          <Route exact path="/" element={<Article />} />  

    </Routes>

    );

}

export default App;

