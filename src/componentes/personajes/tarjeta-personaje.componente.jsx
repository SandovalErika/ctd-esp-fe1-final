import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import  { addFavorite, deleteFavorite }  from '../../redux/personajesSlice'
import { seleccionarPersonaje, getEpisodesByCharacter } from '../../redux/personajesSlice';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.personajes.favorites);

const handleClickFavorito = () => {
    if (isFavorite) {
        dispatch(deleteFavorite(personaje.id));
    } else {
        dispatch(addFavorite(({ id: personaje.id, name: personaje.name, image: personaje.image })));
    }
}

  const isFavorite = favorites.some(f => f.id === personaje.id);

  const handleSeleccionarPersonaje = (personaje) => {
    dispatch(seleccionarPersonaje(personaje));
    dispatch(getEpisodesByCharacter(personaje));
    localStorage.setItem('selectedCharacter', JSON.stringify(personaje));
    navigate(`/detalle/${personaje.id}`);
  }

    return (
    <>
        <div className="tarjeta-personaje">
            <img src={personaje.image} alt={personaje.name} onClick={() => handleSeleccionarPersonaje(personaje)}/>
            <div className="tarjeta-personaje-body">
                <span>{personaje.name}</span>
                <BotonFavorito isFavorite={isFavorite} onFavoriteClick={handleClickFavorito}/>
            </div>
        </div>
    </>
    )
}

export default TarjetaPersonaje;