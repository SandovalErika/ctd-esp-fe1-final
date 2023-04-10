import { useDispatch } from 'react-redux';
import { searchCharactersByFilter } from '../../redux/personajesSlice';
import './filtros.css';

const Filtros = () => {
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const filtro = event.target.value;
        dispatch(searchCharactersByFilter(filtro));
      };

    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={handleInputChange} />
    </div>
}

export default Filtros;