import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getCharactersByNameFilters } from '../../redux/personajesSlice';
import './filtros.css';

/**
 * Componente que renderiza el panel de filtros del catálogo de personajes, que permite filtrar los personajes por nombre.
 * 
 * @component
 * @name Filtros
 * @param {object} props - Propiedades del componente.
 * @param {string} props.filtro - Filtro actual.
 * @param {function} props.setFiltro - Función para actualizar el filtro.
 * @returns {JSX.Element} El panel de filtros, representado como un elemento JSX.
 * 
 * @example
 * // Uso:
 * import Filtros from '../componentes/personajes/filtros.componente';
 * 
 * <Filtros />
 */

const Filtros = ({filtro, setFiltro}) => {
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
      const filtro = event.target.value;
      setFiltro(filtro);
      dispatch(getCharactersByNameFilters(filtro));
    };

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Busca por nombre" name="nombre" value={filtro} onChange={handleInputChange} />
    </div>
}
Filtros.propTypes = {
    filtro: PropTypes.string.isRequired,
    setFiltro: PropTypes.func.isRequired,
  };

export default Filtros;