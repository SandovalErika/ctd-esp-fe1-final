export interface IInitialType {
    personajes:  IResponseApiGetCharacters
    infoPages: CharacterInfo
    currentPage: number
    favorites: IFavorite[]
    filters: any
    episodes: []
    selectedCharacter: IDataCharacter[]
    loading: boolean
}

export interface IResponseApiGetCharacters {
    info: {
        count: number
        pages: number
        next: string
        prev: null | string
    }
    results: IDataCharacter[]
}

export interface CharacterInfo{
    count: number;
    pages: number;
    next: string;
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