    import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
    import { IInitialType, IFavorite, IResponseApiGetCharacters, IDataCharacter } from './interfaces/interfaces'

    const initialState: IInitialType  = {
        personajes: {
            info: {
                count: 0,
                pages: 0,
                next: '',
                prev: null
            },
            results: []
        },
        infoPages: {
            count: 0,
            pages: 0,
            next: '',
            prev: ''
        },
        currentPage: 1,
        favorites: [],
        filters: [],
        episodes: [],
        selectedCharacter: [],
        loading: false
        }

    export const getCharacters = createAsyncThunk(
        'personajes/getPersonajes',
        async (url: string) => {
            const res = await fetch(url ? url : `https://rickandmortyapi.com/api/character`)
            const parseRes: IResponseApiGetCharacters = await res.json()
            return parseRes
        }
    )

    export const getEpisodesByCharacter = createAsyncThunk(
        'personajes/getEpisodiosPorPersonaje',
        async (character: IDataCharacter) => {
            const episodesIds: any[] = [];
            character.episode.map((url) => 
                episodesIds.push(url.split('/').pop()))
          const res = await fetch(`https://rickandmortyapi.com/api/episode/[${episodesIds.join(',')}]`);
          const episodes: any= await res.json();
          return episodes
        }
      )

      export const getCharactersByNameFilters = createAsyncThunk(
        'personajes/getPersonajesByName',
        async (name: string) => {
            const res = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
            const parseRes: IResponseApiGetCharacters = await res.json()
            return parseRes
        }
    )

    const grillaPersonajesSlice = createSlice({
        name: 'personajes',
        initialState,
        reducers: {
            seleccionarPersonaje: (state, action) => {
                state.selectedCharacter = action.payload;
                state.episodes = action.payload.episode
              },
            addFavorite: (state, action: PayloadAction<IFavorite>) => {
                const index = state.favorites.findIndex(f => f.id === action.payload.id);
                if (index === -1) {
                    state.favorites.push(action.payload);
                }
            },
            deleteFavorite: (state, action: PayloadAction<string>) => {
                state.favorites = state.favorites.filter(f => f.id !== action.payload);
            },

            deleteAllFavorites: (state) => {
                state.favorites = [];
            },

            searchCharactersByFilter: (state, action: PayloadAction<string>) => {
                if (action.payload === '') {
                    state.filters = state.personajes.results;
                  } else {
                    state.filters = state.personajes.results.filter(
                      (personaje: IDataCharacter) =>
                        personaje.name.toLowerCase().includes(action.payload.toLowerCase())
                    );
                  }
              },
        },
        extraReducers: (builder) => {
            builder
                .addCase(getCharacters.pending, (state) => {
                    state.loading = true
                })
                .addCase(getCharacters.fulfilled, (state, action) => {
                    state.loading = false
                    state.personajes = action.payload
                    state.infoPages = action.payload.info
                    console.log('infoPages', state.infoPages)
                })
                .addCase(getCharacters.rejected, (state, action) => {
                    state.loading = false
                })
                .addCase(getEpisodesByCharacter.pending, (state) => {
                    state.loading = true
                })
                .addCase(getEpisodesByCharacter.fulfilled, (state, action) => {
                    state.loading = false;
                    state.episodes = action.payload;
                })
                .addCase(getEpisodesByCharacter.rejected, (state, action) => {
                    state.loading = false
                })
                .addCase(getCharactersByNameFilters.fulfilled, (state, action) => {
                    state.loading = false;
                    state.personajes = action.payload;
                    state.infoPages = action.payload.info
                    console.log(' state.personajes', state.personajes)
                    console.log('infoPages', state.infoPages)

                })
        }
    })

    export const { addFavorite, deleteFavorite, searchCharactersByFilter, deleteAllFavorites, seleccionarPersonaje } = grillaPersonajesSlice.actions

    export default grillaPersonajesSlice.reducer