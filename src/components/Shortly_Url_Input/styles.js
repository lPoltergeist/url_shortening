import styled from "styled-components";
import BGDesktop from '../../images/bg-boost-desktop.svg'
import BGMobile from '../../images/bg-boost-mobile.svg'

export const Section = styled.section`
background: ${({ theme }) => theme.VioletBackground};
background-image: url(${BGDesktop});


padding: 0 2rem;
height: 6rem;
border-radius: 5px;

display: flex;
justify-content: center;

flex-direction: column;

position: relative;
top: -2.5rem;

@media (max-width: 768px) {
    background-image: url(${BGMobile});
    height: 10rem;

    top: -5rem;
}

span {
    font-weight: 300;
    color: #d46282;
    font-size: 0.8rem;
}

`

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 1rem 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        
    }


input {
    height: 2.5rem;
    width: 50vw;

    border-radius: 5px;
    border: none;

    margin-right: 2rem;
    padding-left: 1rem;

    :focus {
        outline: 1px solid red;
    }

    ::placeholder {
        color: #d46282;
    }

    @media (max-width: 768px) {
        margin: 0;
    }
}

button {
    width: 10rem;
    border-radius: 5px;

    @media (max-width: 768px) {
        width: 100%;
    }
    
}

`

