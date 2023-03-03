import React, { useState } from 'react'
import Axios from 'axios'

import Shortened from './ShortenedComponent/Shortened'
import { Section, InputContainer } from './styles'


const ShortlyInput = () => {
    const [Url, setUrl] = useState()
    const [OriginalLink, setOriginalLink] = useState([])
    const [Empty, setEmpty] = useState(false)



    const ShortenedUrl = () => {

        if (Url) {
            Axios.get(`https://api.shrtco.de/v2/shorten?url=${Url}`).then(
                (response) => {

                    setOriginalLink([...OriginalLink, {
                        original_link: response.data.result.original_link,
                        shorted_Link: response.data.result.short_link
                    }]);

                    console.log(OriginalLink);
                }
            )
        } else {
            setEmpty(true);
        }




    }
    return (

        <>
            <Section>
                <InputContainer>
                    <div className="container">
                        <input placeholder="Shorten a link here" target type={'url'} onChange={({ target }) => setUrl(target.value)} />
                        {Empty && <span>Please add a link</span>}
                    </div>

                    <button onClick={ShortenedUrl} className="SignUp">Shorten It</button>

                </InputContainer>

            </Section>


            {OriginalLink.map(link => (
                <Shortened Link={link.original_link} Shorted={link.shorted_Link} Copy={link.shorted_Link} />
            ))}

        </>
    )

}

export default ShortlyInput