import React from "react";

// Routes
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

// Authentification Pages
// import Login from "./Authentification/Login/Login";
// import Inscription from "./Authentification/Inscription/Inscription";


import MotDePasseOublie from "./Authentification/MotDePasseOublie/MotDePasseOublie";
import Authentification from "./Authentification/Authentification" ;

//Chargement Page
import Chargement from "./Chargement/Chargement";

//Create Post
// import AjouterPublication from "./createPost/AjouterPublication";

//Home Page
const Home = React.lazy(()=>{
  return new Promise(resolve => {
    setTimeout(()=> resolve(import("./Accueil/Accueil")) , 600 );
  });
});





function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentification Routes */}

        <Route exact path="/" element={<Authentification />}/>
        <Route exact path="/chercher/motdepasse" element = {<MotDePasseOublie />} />
        <Route exact path="/Accueil" element={ <React.Suspense fallback={ <Chargement />}><Home /></React.Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;