export interface IInitialType {
    personajes:  IResponseApiGetCharacters
    currentPage: number
    favorites: IFavorite[]
    filters: IFilter[]
    episodes: []
    selectedCharacter: IDataCharacter[]
    loading: boolean
}

export interface IResponseApiGetCharacters {
    info: {
        count: number
        pages: number
        next: string
        prev: null
    }
    results: IDataCharacter[]
}

export interface IDataCharacter {
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

export interface IFavorite {
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

export interface IFilter {
    id: string
    name: string
    image: string
}