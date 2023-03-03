import styled from "styled-components";
import BGDesktop from '../../images/bg-boost-desktop.svg'
import BGMobile from '../../images/bg-boost-mobile.svg'

export const Section = styled.section`
    background-color: ${({ theme }) => theme.VioletBackground};
    background-image: url(${BGDesktop});

@media (max-width: 768px) {
    background-image: url(${BGMobile});
}

    height: 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const BoostToday = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        color: #ffffff;
        font-size: 2rem;

        margin-bottom: 1rem;

    }

    .SignUp{
        width: 10rem;
    }
`

