import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCharactersByFilter } from '../redux/personajesSlice';
import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const dispatch = useDispatch();

  const [filtro, setFiltro] = useState('');

  const handleBorrarFiltro = () => {
    setFiltro('');
    dispatch(searchCharactersByFilter(''))
  };

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={handleBorrarFiltro}>Eliminar filtro</button>
        </div>
        <Filtros filtro={filtro} setFiltro={setFiltro}/>
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio