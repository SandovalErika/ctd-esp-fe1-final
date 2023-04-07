import { useAppSelector } from '../../redux/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */


const GrillaPersonajes = ({personajes}) => {
    const personaj = useAppSelector(state => state.personajes)
    console.log('personajes', personaj)

    const personajesRedux = personaj.personajes.results;

    return <div className="grilla-personajes">
        {
        (personajes && personajes.length > 0) ?
            personajes.map((personaje) => (
              <TarjetaPersonaje personaje={personaje} key={personaje.id} />
            )) :
            (personajesRedux && personajesRedux.length > 0) ?
              personajesRedux.map((personaje) => (
                <TarjetaPersonaje personaje={personaje} key={personaje.id} />
              )) :
              <p>No hay personajes disponibles</p>
        }
    </div>

    
}
 
export default GrillaPersonajes;