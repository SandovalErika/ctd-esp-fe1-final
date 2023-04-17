export interface IInitialType {
    personajes:  IResponseApiGetCharacters
    infoPages: ICharacterInfo | undefined
    currentPage: number
    favorites: IFavorite[]
    filters: IFilter[]
    episodes: IEpisode[]
    selectedCharacter: IDataCharacter
    loading: boolean
    error: string | undefined
}

export interface IResponseApiGetCharacters {
    info: {
        count: number
        pages: number
        next: string | null
        prev: null | string
    }
    results: IDataCharacter[]
}

export interface ICharacterInfo{
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
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
    episode: any
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

export interface IEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    url: string
    created: string


}