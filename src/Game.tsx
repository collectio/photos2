import React, { useState, useEffect, Dispatch } from 'react'
import {withRouter} from 'react-router-dom'

function Game(props: any) {
    const { game } = props.location.state as any
    return (<div id="game">
        <nav>
            <a onClick={() => props.history.goBack()}>
                <img className="logo" src="./assets/back.svg" alt="戻る" />
            </a>
            <span></span>
            <span></span>
        </nav>
        <div className="game">
            {game.image ? (
                <img src={game.image} alt={game.title} />
            ) : (
                <div className="noimage">
                    {game.title}
                </div>
            )}
            <p className="title">
                {game.title}
            </p>
            {game.year !== '0' ? (
                <p className="year">
                    {game.year}
                </p>
            ) : null}
            <div className="links">
                <a href={`https://www.amazon.co.jp/s?k=` + encodeURIComponent(game.title)} className="amazon" target="_blank">Amazonで探す</a>
                {game.bodogema ? (
                    <a href={game.bodogema} className="bodogema" target="_blank">ボドゲーマ</a>
                ) : null}
                {game.bgg ? (
                    <a href={game.bgg} className="bgg" target="_blank">BoardGameGeek</a>
                ) : null}
                {game.bgdb ? (
                    <a href={game.bgdb} className="bgdb" target="_blank">ボードゲームデータベース</a>
                ) : null}
            </div>
        </div>
    </div>);

}

export default withRouter(Game)