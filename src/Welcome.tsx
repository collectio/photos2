import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    GoogleLogin: () => void
}

const Welcome: React.VFC<Props> = (props) => {
    return (
        <div id="home">
            <nav>
                <Link to="/">
                    <img className="logo" src="/collectio.svg" alt="Collectio" />
                </Link>
            </nav>
            <div className="login">
                <h2>Collectio Photoへようこそ</h2>
                <p>
                    このアプリは、ボードゲームを遊んだ時の写真をアルバムにまとめて、遊んだゲームを記録できるアプリです。<br /><br />
                    「この前、あの時、遊んだゲームはなんだった？」<br />
                    そんな時に役立ちます。<br /><br />
                    どんな風に使えるか、ログインしてサンプルのアルバムを見てみましょう。
                </p>
                <p>
                    <button className="google" onClick={props.GoogleLogin}>
                        Googleでログイン
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Welcome