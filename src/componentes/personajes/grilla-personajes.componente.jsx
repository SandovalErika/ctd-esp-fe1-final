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
    const personajesRedux = useAppSelector(state => state.personajes.personajes.results)
    const filtrosRedux = useAppSelector((state) => state.personajes.filters);

    let personajesRenderizar ;
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

    return <div className="grilla-personajes">
        {personajesRenderizar}
    </div>

    
}
 
export default GrillaPersonajes;