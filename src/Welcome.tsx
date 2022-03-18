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
                <span></span>
            </nav>
            <div className="login">
                <h2>コレフォトへようこそ</h2>
                <p>
                    コレフォトは、ボードゲーム遊んだ写真のアルバムが作れるアプリです。<br /><br />
                    ゲーム会の後に、とりあえず写真を入れるだけ。<br />
                    あとから、気に入った写真をSNSへシェア。<br /><br />
                    まず、ログインしてサンプルのアルバムを見てみましょう。
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
