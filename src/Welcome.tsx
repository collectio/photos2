import React from 'react'
import { Link } from 'react-router-dom'

declare let window: any;
declare let device: any;

interface Props {
    GoogleLogin: () => void
    AppleLogin: () => void
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
                {window.cordova && device.platform==='iOS' ? (
                    <p>
                        <button className="apple" onClick={props.AppleLogin}>Signin with Apple</button>
                    </p>
                ) : null}
            </div>
        </div>
    )
}

export default Welcome
