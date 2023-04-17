import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getCharacters } from '../../redux/personajesSlice';
import { useAppSelector } from '../../redux/hooks';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * @component
 * @name Pagination
 * @returns {JSX.Element} - Botones Anterior/Siguiente de paginacion 
 */
const Pagination = (): JSX.Element => {
    const dispatch = useDispatch()
    const infoPages: any = useAppSelector(state => state.personajes.infoPages)
    const { prev, next } = infoPages || []
    const loading: boolean = useAppSelector((state) => state.personajes.loading);

    
    useEffect(()=>{
        dispatch(getCharacters())
    },[ dispatch])

    const prevPage = () => {
        if (infoPages ? infoPages.prev !== null : '') {
          dispatch(getCharacters(prev));
        }
      };
    
      const nextPage = () => {
        if (infoPages ? infoPages.next !== null : '') {
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

export default Pagination;