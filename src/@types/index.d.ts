export interface AlbumType {
    id: string
    title: string
    date?: string | Date
    photos: PhotoType[]
    games: GameType[]
    userId: string
}

export interface PhotoType {
    image: string
}

export interface GameType {
    id: string | null
    title: string
    etitle: string
    image: string | null
    year: string
    bodogema: string | null
    bgg: string | null
    bgdb: string | null
    hasJPURL: number
    keyword: string | null
    maxPlayers: number | string | null
    minPlayers: number | string | null
    playAge: number | string | null
    playingTime: number | string | null
}