import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCharacters } from '../../redux/personajesSlice';
import { useAppSelector } from '../../redux/hooks';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const dispatch = useDispatch()
    const { currentPage } = useAppSelector(state => state.personajes)

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
        <button disabled={false} className={"primary"} onClick={prevPage}>Anterior</button>
        <button disabled={false} className={"primary"} onClick={nextPage}>Siguiente</button>
    </div>
}

export default Paginacion;