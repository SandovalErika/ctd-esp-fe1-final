import PropTypes from 'prop-types';
import { useAppSelector } from '../../redux/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { IGridCharacters } from './grilla-personajes.interface';
import { IDataCharacter } from '../../../src/redux/interfaces/interfaces'

/**
 * Grilla de personajes para la pagina de inicio
 * @component
 * @param {Array} personajes - Un array de objetos que representan los personajes.
 * @returns {JSX.Element} Componente de React que renderiza una grilla de personajes.
 */


const GridCharacters = ({personajes}: IGridCharacters): JSX.Element => {
    const personajesRedux: IDataCharacter[] = useAppSelector(state => state.personajes.personajes.results)
    const filtrosRedux: IDataCharacter[] = useAppSelector((state) => state.personajes.filters);
    const loading: boolean = useAppSelector((state) => state.personajes.loading);
    
    let personajesRenderizar: JSX.Element[] | JSX.Element = []
    try {  
      if (personajes) {
        if (personajes.length === 0) {
          personajesRenderizar = <strong>No hay personajes favoritos</strong>;
        } else {
          personajesRenderizar = personajes.map((personaje: any) => (
            <TarjetaPersonaje personaje={personaje} key={personaje.id} />
          ));
        }
      } else {
        if (filtrosRedux && filtrosRedux.length > 0) {
          personajesRenderizar = filtrosRedux.map((personaje: any) => (
            <TarjetaPersonaje personaje={personaje} key={personaje.id} />
          ));
        } else if (personajesRedux && personajesRedux.length > 0) {
          personajesRenderizar = personajesRedux.map((personaje: any) => (
            <TarjetaPersonaje personaje={personaje} key={personaje.id} />
          ));
        } else {
          personajesRenderizar = <p>No hay personajes disponibles</p>;
        }
      }
    } catch (e: any) {
      console.log('Error', e.message)
    }
    

    return <div className="grilla-personajes">
      {!loading ? personajesRenderizar: 'Cargando...' }
    </div>
}

GridCharacters.propTypes = {
  personajes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string,
      species: PropTypes.string,
      gender: PropTypes.string,
      image: PropTypes.string.isRequired,
    })
  ),
};
export default GridCharacters;