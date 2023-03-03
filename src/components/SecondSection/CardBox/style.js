import styled from "styled-components";

export const Box = styled.section`
background: #fff;
height: 15rem;
width: 20rem;

border-radius: 10px;
`

export const BoxIcon = styled.div`
width: 4rem;
height: 4rem;
border-radius: 50%;

position: relative;
top: -2rem;
right: -2rem;

display: flex;
align-items: center;
justify-content: center;

background-color: ${({theme}) => theme.VioletBackground};

@media (max-width: 768px) {
                margin-left: 5.5rem;
            }

`

export const Section = styled.section`
margin: 0 1rem;

h4 {
    margin-bottom: 1rem;
}
`