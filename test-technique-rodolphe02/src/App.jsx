//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pokemons from "./pages/Pokemons";
import Pokemon from "./pages/Pokemon";
import Types from "./pages/Types";
import Type from "./pages/Type";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="/pokemon/types" element={<Types />} />
        <Route path="/pokemon/type/:type" element={<Type />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
