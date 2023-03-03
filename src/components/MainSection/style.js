import styled from "styled-components";

export const Section = styled.section`
display: flex;
margin: 0 5%;
justify-content: space-between;

@media (max-width: 768px) {
    flex-direction: column-reverse;

    margin-bottom: 10rem;
}
`

export const SectionText = styled.div`
width: 60%;
margin-right: 1.5rem;

display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 768px) {
    width: 100%;
    text-align: center;
}

h1 {
    font-size: 5rem;
    line-height: 5rem;

    @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 3.5rem;

    margin: 2rem 0 1rem 0 ;
}
}

span {
    margin: 0.5rem 0 2rem 0;
    font-size: 1.3rem;
    width: 70%;

    color: ${({theme}) => theme.GrayishViolet};

    @media (max-width: 768px) {
    width: 100%;
}

}

.SignUp {
    width: 10rem;
    height: 3rem;
}
`

export const SectionImage = styled.div`

img{ 
    height: auto;
    width: 100%;
}
`