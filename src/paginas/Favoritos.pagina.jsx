import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector } from '../redux/hooks';
import { useDispatch } from 'react-redux';
import { deleteAllFavorites } from '../redux/personajesSlice'

/**
 * Página que muestra la lista de personajes favoritos del usuario
 *
 * @returns {JSX.Element} Componente de React
 */

const PaginaFavoritos = () => {
    const favorites = useAppSelector(state => state.personajes.favorites);
    const dispatch = useDispatch();
  
    const handleDeleteAll = () => {
      dispatch(deleteAllFavorites());
    };

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button onClick={handleDeleteAll} className="danger">Eliminar todos</button>
        </div>
        <GrillaPersonajes personajes={favorites}/>
    </div>
}

export default PaginaFavoritos