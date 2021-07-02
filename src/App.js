import './App.css';
import Equipos from './Pages/Equipos';
import Servicio from './Pages/Servicio';
import Error404 from './Pages/error404/Error404';
import Perros from './Pages/perros/Perros';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    
      <Router>
            <Switch>

              <Route path="/equipo">
                <Equipos/>
              </Route>

              <Route path="/servicios">
                <Servicio/>
              </Route>

              <Route path="/perros">
                <Perros/>
              </Route>

              <Route exact path="/">
                <Home />
              </Route>       

              <Route path="*">
                <Error404 />
              </Route>

            </Switch>
          
      </Router>
    </div>
  );
}

export default App;
