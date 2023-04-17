import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Filters from "../componentes/personajes/filtros.componente"
import GridCharacters from "../componentes/personajes/grilla-personajes.componente"
import Pagination from "../componentes/paginacion/paginacion.componente";
import { getCharactersByNameFilters } from '../redux/personajesSlice';
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <Homepage /> ```
 * 
 * @returns la pagina de inicio
 */
const Homepage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleBorrarFiltro = () => {
    setFilter('');
    dispatch(getCharactersByNameFilters(''));
  };

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={handleBorrarFiltro}>Eliminar filtro</button>
        </div>
        <Filters filter={filter} setFilter={setFilter}/>
        <Pagination />
        <GridCharacters />
        <Pagination />
    </div>
}

export default Homepage