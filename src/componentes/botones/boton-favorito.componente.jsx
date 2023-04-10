import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @param {boolean} isFavorite - Indica si el elemento es favorito o no
 * @param {function} onFavoriteClick - Función que se ejecutará al hacer clic en el botón favorito
 * 
 * @returns {JSX.Element} Componente de React 
 */
const BotonFavorito = ({isFavorite, onFavoriteClick}) => {
    const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    const handleClick = () => {
        onFavoriteClick && onFavoriteClick(!isFavorite);
      }

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={handleClick} />
    </div>
}

export default BotonFavorito;