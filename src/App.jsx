import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";

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
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalle/:id" element={<PaginaDetalle />} />
      </Routes>
    </div>
  );
}

export default App;
