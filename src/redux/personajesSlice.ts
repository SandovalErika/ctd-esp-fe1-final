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
        selectedCharacter: {
            id: '',
            name: '',
            status: '',
            species: '',
            type: '',
            gender: '',
            origin: {
                name: '',
                url: '',
            },
            location: {
                name: '',
                url: '',
            },
            image: '',
            episode: {},
            url: '',
            created: '',
        },
        loading: false,
        error: ''
        }

    export const getCharacters: any = createAsyncThunk(
        'personajes/getPersonajes',
        async (url: string | undefined) => {
            const res = await fetch(url ? url : `https://rickandmortyapi.com/api/character`)
            const parseRes: IResponseApiGetCharacters = await res.json()
            return parseRes
        }
    )

    export const getEpisodesByCharacter: any = createAsyncThunk(
        'personajes/getEpisodiosPorPersonaje',
        async (character: IDataCharacter) => {
            const episodesIds: any[] = [];
            character.episode.map((url: any) => 
                episodesIds.push(url.split('/').pop()))
          const res = await fetch(`https://rickandmortyapi.com/api/episode/[${episodesIds.join(',')}]`);
          const episodes: any= await res.json();
          return episodes
        }
      )

      export const getCharactersByNameFilters: any = createAsyncThunk(
        'personajes/getPersonajesByName',
        async (name: string | undefined) => {
            const res = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
            const parseRes: IResponseApiGetCharacters = await res.json()
            return parseRes
        }
    )

    const grillaPersonajesSlice = createSlice({
        name: 'personajes',
        initialState,
        reducers: {
            selectedCharacter: (state, action) => {
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
                })
                .addCase(getCharacters.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.error.message
                    if (action.error.code === '404')
                    {
                        state.personajes.results = []
                    }
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
                })
                .addCase(getCharactersByNameFilters.rejected, (state, action) => {
                    state.error = action.error.message
                    if (action.error.code === '404')
                    {
                        state.personajes.results = []
                    }
                })
        }
    })

    export const { addFavorite, deleteFavorite, searchCharactersByFilter, deleteAllFavorites, selectedCharacter } = grillaPersonajesSlice.actions

    export default grillaPersonajesSlice.reducer