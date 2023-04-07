import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito, onFavoriteClick}) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    const handleClick = () => {
        onFavoriteClick && onFavoriteClick(!esFavorito);
      }

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={handleClick} />
    </div>
}

export default BotonFavorito;