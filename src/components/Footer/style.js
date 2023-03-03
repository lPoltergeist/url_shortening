import styled from "styled-components";

export const FooterContainer = styled.footer`
background-color: ${({ theme }) => theme.VeryDarkViolet};
min-height: 15rem;
width: 100%;


`
export const MenuContainer = styled.div`
width: 100%;
`

export const FooterNav = styled.nav`
display: flex;
justify-content: space-around;
padding-top: 2rem;
margin: 0 1rem;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 2rem;;

    ul {
        padding-bottom: 1rem;
    }
}

.bottomLogo {
cursor: pointer;

@media (max-width: 768px) {
    padding-bottom: 2rem;
}

svg {
    color: white;
}

}



h4,li {
   color: #fff; 
}


h4 {
    padding-bottom: 1rem;
}


li {
    padding-bottom: 0.5rem;

    transition: ease-in-out 0.3s;

    :hover {
        color: cyan;
    }

}

`

export const SocialMidiaIcons = styled.div`
display: flex;
width: 15rem;

.icon {
    margin: 0 0.5rem;
    cursor: pointer;
}

svg{
    color: white;

    transition: ease-in-out 0.3s;
    :hover {
        color: cyan;
    }
}

`