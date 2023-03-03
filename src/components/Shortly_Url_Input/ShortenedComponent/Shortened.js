import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { ShortenedLink } from './style'

const Shortened = ({ Link, Shorted, Copy }) => {
    const [Clicked, setClicked] = useState(false)

    return (
        <>
            <ShortenedLink>
                <span>{Link}</span>

                <div className="shortened">
                    <span className="shortLink" id="Shorted">{Shorted}</span> 

                    <CopyToClipboard text={Copy}>
                        {Clicked ?
                            <button className="Clicked">
                                Copied!
                            </button>
                            :
                            <button onClick={() => setClicked(true)} className="SignUp">
                                Copy
                            </button>}
                    </CopyToClipboard>
                    
                </div>
            </ShortenedLink>
        </>
    )
}

export default Shortened