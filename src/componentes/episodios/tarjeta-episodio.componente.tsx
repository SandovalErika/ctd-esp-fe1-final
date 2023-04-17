import { ICardEpisode } from './tarjeta-episodio.componente.interface';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * * @typedef {object} Episode
 * @property {Episode} episode - El episodio a mostrar.
 *
 * @returns {JSX.Element} Componente de React.
 * 
 * @returns un JSX element 
 */
const CardEpisode = ({episode}: ICardEpisode): JSX.Element => {

    return <div className="tarjeta-episodio">
            <h4>{episode.name}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>{episode.air_date}</span>
            </div>
    </div>
}

export default CardEpisode;