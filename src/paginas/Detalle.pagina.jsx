import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import  { addFavorite, deleteFavorite }  from '../redux/personajesSlice'

/*
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * @component
 * @name PaginaDetalle
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns {JSX.Element} Componente de React que renderiza la pagina de detalle
 */
const PaginaDetalle = () => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.personajes.favorites);
    const [selectedCharacterLocal, setselectedCharacterLocal] = useState({});
    const selectedCharacter = useAppSelector(state => state.personajes.selectedCharacter);
    const episodes =  useAppSelector(state => state.personajes.episodes);
   
    useEffect(() => {
      const selectedCharacterLS = JSON.parse(localStorage.getItem('selectedCharacter'));
      if (selectedCharacterLS) {
        setselectedCharacterLocal(selectedCharacterLS);
      } else {
        setselectedCharacterLocal(selectedCharacter);
      }
    }, [selectedCharacter]);

    const handleClickFavorito = () => {
      if (isFavorite) {
          dispatch(deleteFavorite(selectedCharacterLocal.id));
      } else {
          dispatch(addFavorite(({ id: selectedCharacterLocal.id, name: selectedCharacterLocal.name, image: selectedCharacterLocal.image })));
      }
  }
    const isFavorite = favorites.some(f => f.id === selectedCharacterLocal.id);

    return <div className="container">
        <h3>{selectedCharacterLocal.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={selectedCharacterLocal.image} alt={selectedCharacterLocal.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{selectedCharacterLocal && selectedCharacterLocal.name ? selectedCharacterLocal.name : ''}</p>
                    <p>{selectedCharacterLocal && selectedCharacterLocal.origin && selectedCharacterLocal.origin.name ? selectedCharacterLocal.origin.name : ''}</p>
                    <p>{selectedCharacterLocal && selectedCharacterLocal.gender ? selectedCharacterLocal.gender : ''}</p>
                </div>
                <BotonFavorito isFavorite={isFavorite} onFavoriteClick={handleClickFavorito} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
           {episodes ? episodes.map((episode) => <TarjetaEpisodio episode={episode} />) : ''}
        </div>
    </div>
}

export default PaginaDetalle