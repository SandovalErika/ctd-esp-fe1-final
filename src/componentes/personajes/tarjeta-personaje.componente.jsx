import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import  { agregarFavorito, removerFavorito }  from '../../redux/personajesSlice'

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 * 
 */

const TarjetaPersonaje = ({ personaje }) => {
    console.log('personaje', personaje)
    const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.personajes.favoritos);
  console.log('favorites', favorites)

//   const handleClickFavorito = () => {
//     dispatch(agregarFavorito(({ id: personaje.id, name: personaje.name, image: personaje.image })));
//   }
const handleClickFavorito = () => {
    if (esFavorito) {
        console.log('entraaa')
        dispatch(removerFavorito(personaje.id));
    } else {
        dispatch(agregarFavorito(({ id: personaje.id, name: personaje.name, image: personaje.image })));
    }
}

  const esFavorito = favorites.some(f => f.id === personaje.id);

    return <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={esFavorito} onFavoriteClick={handleClickFavorito}/>
        </div>
    </div>
}

export default TarjetaPersonaje;