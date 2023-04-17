import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getCharactersByNameFilters } from '../../redux/personajesSlice';
import './filtros.css';
import { IFiltersComponent } from './filtros.componente.interface';
import { ChangeEvent } from 'react';

/**
 * Componente que renderiza el panel de filtros del catálogo de personajes, que permite filtrar los personajes por nombre.
 * 
 * @component
 * @name Filters
 * @param {object} props - Propiedades del componente.
 * @param {string} props.filter - Filtro actual.
 * @param {function} props.setFilter - Función para actualizar el filtro.
 * @returns {JSX.Element} El panel de filtros, representado como un elemento JSX.
 * 
 * @example
 * // Uso:
 * import Filters from '../componentes/personajes/filtros.componente';
 * 
 * <Filters />
 */

const Filters = ({filter, setFilter}: IFiltersComponent): JSX.Element => {
    const dispatch = useDispatch();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const filterInput = event.target.value;
      setFilter(filterInput);
      dispatch(getCharactersByNameFilters(filterInput));
    };

    return <div className="filtros">
        <label htmlFor="name">Filtrar por nombre:</label>
        <input type="text" placeholder="Coloca un nombre para buscar un personaje" name="name" value={filter} onChange={handleInputChange} />
    </div>
}
Filters.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
  };

export default Filters;