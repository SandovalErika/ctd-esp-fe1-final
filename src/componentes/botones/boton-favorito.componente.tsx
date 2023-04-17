import './boton-favorito.css';
import { IBtnFavoriteComponent } from './boton-favorito.componente.interface'
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @param {boolean} isFavorite - Indica si el elemento es favorito o no
 * @param {function} onFavoriteClick - Función que se ejecutará al hacer clic en el botón favorito
 * 
 * @returns {JSX.Element} Componente de React 
 */
const ButtonFavorite = ({isFavorite, onFavoriteClick}: IBtnFavoriteComponent): JSX.Element => {
    const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    const handleClick: () => void = () => {
        onFavoriteClick && onFavoriteClick();
      }

    return <div className="boton-favorito">
        <img src={src} alt={"favorite"} onClick={handleClick} />
    </div>
}

export default ButtonFavorite;