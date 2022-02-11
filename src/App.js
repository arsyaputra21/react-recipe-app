import React from "react";
import "./App.css";
import { RecipeProvider } from "./RecipeContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/pages/Home.js";
import RecipeDetails from "./Components/pages/RecipeDetails";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <RecipeProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">About</Route>
            <Route path="/recipes/:recipeId">
              <RecipeDetails />
            </Route>
          </Switch>
          <div id="edamam-badge" data-color="white"></div>
        </div>
      </Router>
    </RecipeProvider>
  );
}

export default App;
