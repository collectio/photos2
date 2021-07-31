import React, { useState, useEffect, useRef } from 'react'
import { withRouter, Link, useParams } from 'react-router-dom'
import { AlbumType, PhotoType, GameType } from './@types/index'

import fetchJsonp from 'fetch-jsonp'

import { useSelector, useDispatch } from 'react-redux'
import { selectAlbums } from './store/albums'

interface Select {
    textInput: any;
}

interface Props {
    user: any
    album: AlbumType
    albums: AlbumType[]
    game: GameType | null
    updateAlbum: (album: AlbumType) => void
    setGame: (game: GameType) => void
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

const Select: React.VFC = (props: any) => {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const textInput = useRef(null)
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(false)
    const defaultAlbum: unknown = null
    const [album, setAlbum] = useState(defaultAlbum as AlbumType)
    const [suggests, setSuggests] = useState([] as GameType[])

    let { id } = useParams<{ id: string }>()

    useEffect(() => {
        scrollTo(0, 0)
        if (!album) {
            const alb = albums.filter((a) => a.id === id)[0]
            if (alb) setAlbum(alb)
        }
        // @ts-ignore
        if (textInput.current) textInput.current.focus()
        // インスタンスを立ち上げておく
        fetch('https://db-api-mxiq5qapta-an.a.run.app/search')
    })

    const onSearch = async (event: any) => {
        event.preventDefault();
        // @ts-ignore
        const query = textInput.current.value;
        if (query === '') return setSuggests([])
        let games = await search(query)
        setLoading(true)
        if (games.length === 0) {
            games = await search(hiraToKana(query))
        } else {
            setLoading(false)
            setSuggests(games)
        }
        if (games.length <= 5) {
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
        const s = await fetchJsonp(
            'https://www.google.com/complete/search?hl=ja&client=firefox&q=' + encodeURIComponent(query)
        ).then((r) => r.json());
        const suggests: any[] = [];
        s[1].map((suggest: string) => {
            const data = {
                id: null,
                title: suggest,
                image: null
            }
            suggests.push(data)
        })
        // 見つからなかった場合、検索キーワードを出す
        if (suggests.length === 0) {
            const suggest: any = {
                id: null,
                title: query,
                image: null
            }
            suggests.push(suggest)
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
            if (!album.games.some((game: GameType) => game.id === suggest.id)) {
                album.games.push(suggest)
            }
        } else {
            if (!album.games.some((game: GameType) => game.title === suggest.title)) {
                album.games.push(suggest)
            }
        }
        setSuggests([])
        // @ts-ignore
        textInput.current.value = ''
    }

    const updateAlbum = async () => {
        props.updateAlbum(album)
        props.history.push(`/album`)
    }

    if (album===null) return null

    return (
        <div id="select">
            <nav>
                <a onClick={() => props.history.goBack()}>
                    <img className="logo" src="/assets/back.svg" alt="戻る" />
                </a>
                <a onClick={() => {
                    updateAlbum()
                }}>
                    完了
                </a>
            </nav>
            <form action="" onSubmit={onSearch.bind(this)}>
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
                        return <Link to={{
                            pathname: "/game",
                            state: { game: game }
                        }} key={game.id} onClick={() => props.setGame(game)}>
                            <div key={'game' + i} className="game">
                                {game.image ? (
                                    <img src={game.image} alt="" />
                                ) : (
                                    <span className="image"></span>
                                )}
                                <span className="title">
                                    {game.title}
                                </span>
                            </div>
                        </Link>
                    })}
                </div>
            ) : null}
        </div>
    );
}

export default withRouter(Select);