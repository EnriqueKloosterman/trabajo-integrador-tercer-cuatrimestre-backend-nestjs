import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from './componentes/Article';
import Coments from './componentes/Coments';
import Recipe from './componentes/Recipe';
import Users from './componentes/Users';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Encabezado u otras partes comunes */}
        <Switch>
          <Route path="/articles" component={Article} />
          <Route path="/coments" component={Coments} /> 
          <Route path="/recipes" component={Recipe} />  
          <Route path="/users" component={User} />        
          {/* Establece la ruta raíz como página de inicio */}
          <Route exact path="/" component={Article} />  
        </Switch>
        {/* Pie de página u otras partes comunes */}
      </div>
    </Router>
  );
}

export default App;

