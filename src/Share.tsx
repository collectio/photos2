import React, {useState, useEffect, useRef} from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { AlbumType, PhotoType, GameType } from './@types/index'

interface Share {
    textArea: any
}
interface Props {
}
interface State {
    album: AlbumType
    photos: PhotoType[]
}

interface ShareData {
    text?: string;
    title?: string;
    url?: string;
    files?: File[];
}

const convertFile = async (url: string) => {
    const blob = await fetch(url).then(r => r.blob())
    // console.log(blob.type)
    return new File([blob], 'test.jpg',{ type: blob.type })
}

const share = async (text: string, album: AlbumType, photos: PhotoType[]) => {
    const files: File[] = []
    for (const photo of photos) {
        const file = await convertFile(photo.image)
        files.push(file)
    }
    const titles: string[] = []
    album.games.map((game) => {
        if (titles.indexOf(game.title) === -1) titles.push('#' + game.title)
    })
    text += '\n' + titles.join(' ')
    // console.log(text)
    // console.log(files)
    if (navigator.share) {
        navigator.share({
            text: text,
            url: 'https://collectio.jp/',
            files: files
        } as ShareData).then(() => {
            console.log('Share was successful.')
        }).catch((error) => {
            console.log('Sharing failed', error)
        })
    } else {
        alert('このブラウザではシェア機能が使えません。\n最新のSafari, Chromeをお使いください。')
    }
}


const Share: React.VFC = (props: any) => {
    const textArea = useRef(null)
    const [state, setState] = useState({
        album: {} as AlbumType,
        photos: []
    })
    
    useEffect(() => {
        try {
            const { photos } = props.location.state as any
            const { album } = props.location.state as any
            setState({
                album: album,
                photos: photos
            })
        } catch {
            props.history.push('/')
            location.reload()
        }
        scrollTo(0, 0)
        return () => {
        }
    }, [state.album, state.photos])

    const onClick = () => {
        // @ts-ignore
        share(textArea.current.value, state.album, state.photos)
    }

    if (state.album === null) return null
    return (<div id="share">
        <nav>
            <a onClick={() => props.history.goBack()}>
                <img className="logo" src="/back.svg" alt="戻る" />
            </a>
        </nav>
        <div className="photos">
            {state.photos.map((photo: PhotoType, index: number) => {
                return (<div key={photo.image} className={'photo'} style={{ backgroundImage: `url(${photo.image})` }}>
                </div>);
            })}
        </div>
        <textarea name="comment" id="comment" ref={textArea} placeholder="ゲームを遊んだ感想など"></textarea>
        <button onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19.067" height="24.245" viewBox="0 0 19.067 24.245"><path d="M.005-4.834a.855.855,0,0,0,.849-.838V-16.7L.79-18.315l.73.763,1.622,1.74a.784.784,0,0,0,.58.258.751.751,0,0,0,.784-.763.75.75,0,0,0-.247-.559l-3.631-3.5a.838.838,0,0,0-.623-.29.838.838,0,0,0-.623.29l-3.631,3.5a.76.76,0,0,0-.258.559.748.748,0,0,0,.773.763.79.79,0,0,0,.591-.258l1.633-1.74.73-.763L-.854-16.7V-5.672A.865.865,0,0,0,.005-4.834ZM-6.161,3.577H6.161c2.245,0,3.373-1.117,3.373-3.33V-10.474c0-2.213-1.128-3.33-3.373-3.33h-3v1.729H6.128a1.519,1.519,0,0,1,1.676,1.7V.15a1.519,1.519,0,0,1-1.676,1.7H-6.139A1.507,1.507,0,0,1-7.8.15V-10.377a1.507,1.507,0,0,1,1.665-1.7h2.976V-13.8h-3c-2.245,0-3.373,1.117-3.373,3.33V.247C-9.534,2.46-8.406,3.577-6.161,3.577Z" transform="translate(9.534 20.668)" /></svg>
            共有する
        </button>
    </div>)
}

export default withRouter(Share)