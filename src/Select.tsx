import React, { useState, useEffect, useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { AlbumType, PhotoType, GameType } from './@types/index'

import fetchJsonp from 'fetch-jsonp'

import { useSelector, useDispatch } from 'react-redux'
import { selectAlbums } from './store/albums'

interface Props {
    user: any
    album: AlbumType
    albums: AlbumType[]
    game: GameType | null
    updateAlbum: (album: AlbumType, dispatch:any) => void
    // setGame: (game: GameType) => void
}
interface State {
    loading: boolean
    album: AlbumType
    index: number
    suggests: GameType[]
    // histories: GameType[]
}

const hiraToKana = (str: string) => {
    return str.replace(/[\u3041-\u3096]/g, function (match: any) {
        const chr = match.charCodeAt(0) + 0x60
        return String.fromCharCode(chr)
    })
}

const Select: React.VFC<Props> = (props: any) => {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const textInput = useRef(null)
    const [loading, setLoading] = useState(false)
    const defaultAlbum: unknown = null
    const [album, setStateAlbum] = useState(defaultAlbum as AlbumType)
    const [suggests, setSuggests] = useState([] as GameType[])

    let { id } = useParams<{ id: string }>()
    const dispatch = useDispatch()
    const history = useHistory()

    let prevQuery = ''

    useEffect(() => {
        scrollTo(0, 0)
        if (!album) {
            const alb = albums.filter((a) => a.id === id)[0]
            if (alb) setStateAlbum(alb)
        }
        // @ts-ignore
        if (textInput.current) textInput.current.focus()
        // インスタンスを立ち上げておく
        fetch('https://db-api-mxiq5qapta-an.a.run.app/search')
    }, [albums])

    const onSearch = async (event: any) => {
        event.preventDefault();
        // @ts-ignore
        const query = textInput.current.value;
        if (query === '') return setSuggests([])
        if (query === prevQuery) return
        prevQuery = query
        let games = await search(query)
        setLoading(true)
        if (games.length === 0) {
            games = await search(hiraToKana(query))
        } else {
            setLoading(false)
            setSuggests(games)
        }
        if (games.length <= 0) {
            const suggests = await suggest(query)
            games = games.concat(suggests)
        }
        setLoading(false)
        setSuggests(games)
    }
    const search = async (query: string) => {
        const r = await fetch(
            'https://db-api-mxiq5qapta-an.a.run.app/search?q=' + encodeURIComponent(query)
        ).then((r) => r.json());
        const suggests: GameType[] = [];
        r.map((game: GameType) => {
            suggests.push(game)
        })
        return suggests;
    }
    const suggest = async (query: string) => {
        const result = await fetchJsonp(
            'https://www.google.com/complete/search?hl=ja&client=firefox&q=' + encodeURIComponent(query)
        ).then((r) => r.json());
        const suggests: any[] = [];
        result[1].map((suggest: string) => {
            const data = {
                id: null,
                title: suggest,
                image: null
            }
            suggests.push(data)
        })
        // 見つからなかった場合、検索キーワードを出す
        if (suggests.length === 0 || suggests.findIndex((s) => query === s.title) === -1) {
            const suggest: any = {
                id: null,
                title: query,
                image: null
            }
            suggests.unshift(suggest)
        }
        return suggests
    }
    const selectSuggest = async (suggest: GameType) => {
        // データベースにあるゲームだったら画像を取得
        if (suggest.id) {
            const game = await fetch(`https://db.collectio.jp/wp-json/wp/v2/posts/${suggest.id}?_embed`).then((r) => r.json())
            const gameImage = game.featured_image.src
            if (gameImage !== 'https://db.collectio.jp/wp-includes/images/media/default.png') {
                suggest.image = gameImage
            } else {
                suggest.image = null
            }
            if (album.games.findIndex((g: GameType) => g.id === suggest.id) === -1) {
                const newAlbum = Object.assign({}, album, { games: [...album.games, suggest] })
                setStateAlbum(newAlbum)
            }
        } else {
            if (album.games.findIndex((g: GameType) => g.title === suggest.title) === -1) {
                const newAlbum = Object.assign({}, album, { games: [...album.games, suggest] })
                setStateAlbum(newAlbum)
            }
        }
        setSuggests([])
        // @ts-ignore
        textInput.current.value = ''
    }

    const updateAlbum = async () => {
        props.updateAlbum(album, dispatch)
        history.push(`/album`)
    }

    if (album === null) return null

    return (
        <div id="select">
            <nav>
                <a onClick={() => history.goBack()}>
                    <img className="logo" src="/back.svg" alt="戻る" />
                </a>
                {suggests.length === 0 ? (
                    <a onClick={() => {
                        updateAlbum()
                    }}>
                        完了
                    </a>
                ) : null}
            </nav>
            <form action="" onSubmit={onSearch}>
                <div className="bg">
                    <input type="text" ref={textInput} placeholder="ゲームを検索" onChange={onSearch} />
                </div>
                {suggests.length === 0 && loading ? (
                    <div className="suggests">読み込み中...</div>
                ) : null}
                {suggests.length > 0 ? (
                    <div className="suggests">
                        {suggests.slice(0, 100).map((suggest: GameType, i: number) => {
                            return <div key={'suggest' + i} onClick={selectSuggest.bind(this, suggest)}>{suggest.title}</div>;
                        })}
                    </div>
                ) : null}
            </form>
            {album.games.length > 0 ? (
                <div className="games">
                    <h3>遊んだゲーム</h3>
                    {album.games.map((game: GameType, i: number) => {
                        return (
                            <div key={'game' + i} className="game">
                                {game.image ? (
                                    <img src={game.image} alt="" />
                                ) : (
                                    <span className="image"></span>
                                )}
                                <span className="title">
                                    {game.title}
                                </span>
                                <span className="delete" onClick={() => {
                                }}>
                                    <img src="/delete.svg" alt="削除" />
                                </span>
                            </div>
                        )
                    })}
                </div>
            ) : null}
        </div>
    );
}

export default Select