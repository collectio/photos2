import React, { useState, useEffect, Dispatch } from 'react'
import {Link} from 'react-router-dom'

const Component: React.VFC = (props: any) => {
    return (
        <div id="home">
            <nav>
                <Link to="/">
                    <img className="logo" src="/collectio.svg" alt="Collectio" />
                </Link>
            </nav>

            <div className="loading">
                <p>読み込み中...</p>
            </div>
        </div>
    )
}

export default Component