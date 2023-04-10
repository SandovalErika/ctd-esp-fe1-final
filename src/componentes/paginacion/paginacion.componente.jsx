import { useEffect, useState } from 'react'
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
    const { currentPage, personajes } = useAppSelector(state => state.personajes)

    const [pages, setPages] =useState(currentPage)
    
    useEffect(()=>{
        dispatch(getCharacters(pages))
    },[pages, dispatch])

    const prevPage  = () => {
        setPages(pages - 1)
    }

    const nextPage = () => {
        setPages(pages + 1)
    }

    return <div className="paginacion">
        <button disabled={personajes && personajes.info && personajes.info.prev === null ? true : false} className={"primary"} onClick={prevPage}>Anterior</button>
        <button disabled={personajes && personajes.info && personajes.info.next === null ? true : false} className={"primary"} onClick={nextPage}>Siguiente</button>
    </div>
}

export default Paginacion;