import styled from "styled-components";

export const MenuIconDiv = styled.div`

@media (min-width: 768px) {
    display: none;
}
`

export const SidebarContainer = styled.div`

@media (min-width: 768px) {
    display: none;
}

z-index: 99;

background-color: ${({ theme }) => theme.VioletBackground};

position: fixed;
top: 45vh;
left: 50vw;
transform: translate(-50%, -50%);

height: 20rem;
width:  80vw;
max-width: 25rem;
border-radius: 10px;

display: flex;
justify-content: center;
align-items: center;

text-align: center;

`

export const SidebarMenu = styled.nav`
width: 80%;
ul {
    margin-top: -5rem;
}

li {
    list-style: none;
    color: #ffffff;
    margin: 1rem 0;
    
    transition: ease-in-out 0.2s;
    :hover {
        color: cyan;
    }
}
.rectangle {
    margin: 1rem auto;
    height: 2px;
  width: 100%;
  background-color: rgba(216,216,216, 0.5);


}
`

export const ButtonDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.Login {
    :hover{
        color: #fff;
    }
}

.SignUp {
    width: 100%;
}
`