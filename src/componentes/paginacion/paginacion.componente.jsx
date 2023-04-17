import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getCharacters } from '../../redux/personajesSlice';
import { useAppSelector } from '../../redux/hooks';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * @component
 * @name Paginacion
 * @returns {JSX.Element} - Botones Anterior/Siguiente de paginacion 
 */
const Paginacion = () => {
    const dispatch = useDispatch()
    const { next, prev } = useAppSelector(state => state.personajes.infoPages)
    const loading = useAppSelector((state) => state.personajes.loading);

    
    useEffect(()=>{
        dispatch(getCharacters())
    },[ dispatch])

    const prevPage = () => {
        if (prev !== null) {
          dispatch(getCharacters(prev));
        }
      };
    
      const nextPage = () => {
        if (next !== null) {
          dispatch(getCharacters(next));
        }
      };

    return <div className="paginacion">
        {!loading ?
        (
        <>
            <button disabled={prev === null} className={"primary"} onClick={prevPage}>Anterior</button>
            <button disabled={next === null} className={"primary"} onClick={nextPage}>Siguiente</button>
        </>
        ) : 'Cargando...' }
        
    </div>
}

export default Paginacion;