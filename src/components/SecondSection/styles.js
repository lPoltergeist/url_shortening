import styled from "styled-components";

export const Section = styled.section`
        background-color: #f0f0f0;

        margin: 5rem 0 0 0;
        
        display: flex;
        flex-direction: column;
        align-items: center;
    `

export const Title = styled.div`
        flex-direction: column;
        align-items: center;
        text-align: center;
        display: flex;
        width: 40%;

        @media (max-width: 768px) {
            width: 90%;
        }

    h3 {
        font-size: 2.5rem;
    }

`



export const Card = styled.div`
        margin: 5rem 0 5rem 0;
        display: flex;

        @media (max-width: 768px) {
            flex-direction: column;
        }

        section:nth-child(n+3) {
            margin-top: 3rem;

            @media (max-width: 768px) {
                margin: 0;
            }
        } 

        section:nth-child(n+4) {
            margin-top: 6rem;

            @media (max-width: 768px) {
                margin: 0;
            }
        }       

.rectangle {
        height: 0.5rem;
        width: 2rem;
        background-color: ${({ theme }) => theme.ButtonBackground};

        position: relative;
        top: 10rem;
        left: 0;

        @media (max-width: 768px) {
            top: -0rem;
            left: 9rem;

           height: 5rem;
           width: 1rem;
        }
}
`