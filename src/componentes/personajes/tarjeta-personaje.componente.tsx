import PropTypes from 'prop-types';
import ButtonFavorite from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import  { addFavorite, deleteFavorite }  from '../../redux/personajesSlice'
import { selectedCharacter, getEpisodesByCharacter } from '../../redux/personajesSlice';
import { useNavigate } from 'react-router-dom';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * @component
 * @param {Object} props - Propiedades de la tarjeta.
 * @param {Object} props.personaje - Objeto que representa el personaje.
 * @returns {JSX.Element} - Tarjeta de personaje.
 */

const TarjetaPersonaje = ({ personaje }: any): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.personajes.favorites);

const handleClickFavorito: () => void  = () => {
    if (isFavorite) {
        dispatch(deleteFavorite(personaje.id)); 
    } else {
        dispatch(addFavorite((
          { 
          id: personaje.id, 
          name: personaje.name, 
          image: personaje.image, 
          status: personaje.status, 
          species: personaje.species, 
          type: personaje.type, 
          gender: personaje.gender, 
          origin: personaje.origin, 
          location: personaje.location,
          episode: personaje.episode,
          url: personaje.url,
          created: personaje.created 
          }
        )));
    }
}

  const isFavorite = favorites.some(f => f.id === personaje.id);

  const handleSelectedCharacter: (personaje: any) => void = (personaje) => {
    dispatch(selectedCharacter(personaje));
    dispatch(getEpisodesByCharacter(personaje));
    localStorage.setItem('selectedCharacter', JSON.stringify(personaje));
    navigate(`/detalle/${personaje.id}`);
  }

    return (
    <>
        <div className="tarjeta-personaje">
            <img src={personaje.image} alt={personaje.name} onClick={() => handleSelectedCharacter(personaje)}/>
            <div className="tarjeta-personaje-body">
                <span>{personaje.name}</span>
                <ButtonFavorite isFavorite={isFavorite} onFavoriteClick={handleClickFavorito}/>
            </div>
        </div>
    </>
    )
}

TarjetaPersonaje.propTypes = {
    personaje: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

export default TarjetaPersonaje;