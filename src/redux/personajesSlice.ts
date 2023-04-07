    import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

    export interface IApi {
        info: {
            count: number
            pages: number
            next: string
            prev: null
        }
        results: IDataPersonaje[]
    }

    interface IDataPersonaje {
        id: string
        name: string
        status: string
        species: string
        type: string
        gender: string
        origin: {
            name: string
            url: string
        }
        location: {
            name: string
            url: string
        }
        image: string
        episode: string[]
        url: string
        created: string
    }

    interface IFavorito {
        id: string;
        name: string;
        image: string;
    }

    interface initialType {
        personajes: IDataPersonaje[]
        currentPage: number
        favoritos: IFavorito[];
        loading: boolean
    }

    const initialState: initialType  = {
    personajes: [],
    currentPage: 1,
    favoritos: [],
    loading: false
    }

    interface DeseleccionarFavoritoPayload {
        id: string;
      }

    export const getPersonajes = createAsyncThunk(
        'personajes/getPersonajes',
        async (page: number) => {
            const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const parseRes: any = await res.json()
            console.log('res', parseRes)
            return parseRes
        }
    )

    const grillaPersonajesSlice = createSlice({
        name: 'personajes',
        initialState,
        reducers: {
            agregarFavorito: (state, action: PayloadAction<IFavorito>) => {
                const index = state.favoritos.findIndex(f => f.id === action.payload.id);
                if (index === -1) {
                    state.favoritos.push(action.payload);
                }
            },
            removerFavorito: (state, action: PayloadAction<any>) => {
                state.favoritos = state.favoritos.filter(f => f.id !== action.payload);
                // const index = state.favoritos.findIndex((f) => f.id === action.payload.toString());
                // if (index !== -1) {
                //   state.favoritos.splice(index, 1);
                // }
                // const index = state.favoritos.findIndex(f => f.id === action.payload.id);
                // if (index !== -1) {
                //     state.favoritos.splice(index, 1);
                // }
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(getPersonajes.pending, (state) => {
                    state.loading = true
                })
                .addCase(getPersonajes.fulfilled, (state, action) => {
                    state.loading = false
                    state.personajes = action.payload
                    // state.currentPage = action.payload.info.pages;
                })
                .addCase(getPersonajes.rejected, (state, action) => {
                    state.loading = false
                })
        }
    })

    export const { agregarFavorito, removerFavorito } = grillaPersonajesSlice.actions

    export default grillaPersonajesSlice.reducer