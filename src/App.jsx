import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./paginas/Inicio.pagina";
import FavoritePage from "./paginas/Favoritos.pagina";
import DetailPage from "./paginas/Detalle.pagina";
import Header from "./componentes/layout/encabezado.componente";

/**
 * Componente principal de la aplicación.
 *
 * Encapsula todas las páginas de la aplicación y el encabezado.
 *
 * @returns {JSX.Element} Componente de React.
 */

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="favoritos" element={<FavoritePage />} />
        <Route path="detalle/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
