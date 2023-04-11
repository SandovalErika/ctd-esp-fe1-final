import PropTypes from 'prop-types';
import { useAppSelector } from '../../redux/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * @component
 * @param {Array} personajes - Un array de objetos que representan los personajes.
 * @returns {JSX.Element} Componente de React que renderiza una grilla de personajes.
 */


const GrillaPersonajes = ({personajes}) => {
    const personajesRedux = useAppSelector(state => state.personajes.personajes.results)
    const filtrosRedux = useAppSelector((state) => state.personajes.filters);
    
    let personajesRenderizar ;
    try {  
      if (personajes) {
        if (personajes.length === 0) {
          personajesRenderizar = <strong>No hay personajes favoritos</strong>;
        } else {
          personajesRenderizar = personajes.map((personaje) => (
            <TarjetaPersonaje personaje={personaje} key={personaje.id} />
          ));
        }
      } else {
        if (filtrosRedux && filtrosRedux.length > 0) {
          personajesRenderizar = filtrosRedux.map((personaje) => (
            <TarjetaPersonaje personaje={personaje} key={personaje.id} />
          ));
        } else if (personajesRedux && personajesRedux.length > 0) {
          personajesRenderizar = personajesRedux.map((personaje) => (
            <TarjetaPersonaje personaje={personaje} key={personaje.id} />
          ));
        } else {
          personajesRenderizar = <p>No hay personajes disponibles</p>;
        }
      }
    } catch (e) {
      console.log('Error', e.message)
    }
    

    return <div className="grilla-personajes">
        {personajesRenderizar}
    </div>
}

GrillaPersonajes.propTypes = {
  personajes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isOptional,
      species: PropTypes.string.isOptional,
      gender: PropTypes.string.isOptional,
      image: PropTypes.string.isRequired,
    })
  ),
};
export default GrillaPersonajes;