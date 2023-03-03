import styled from "styled-components";

export const Header = styled.header`
display: flex;
width: 100%;

.navMenu {
display: flex;
}
`

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
width: 100%;

margin: 2rem 5rem;

align-items: center;




.navMenu {

    ul {
        margin: 0 2.5rem;
        display: flex;

        @media (max-width: 768px) {
            display: none
        }
    }

    li {
        cursor: pointer;

        list-style: none;
        margin: 0 0.5rem;

        font-size: 1.135rem;
        color: ${({ theme }) => theme.Gray};

        transition: ease-in-out 0.2s;
        :hover{
            color: black;
            font-weight: 700;
        }
    }
}

.LogButtons {

    @media (max-width: 768px) {
            display: none
        }
  button {
    margin: 0 0.5rem;

    font-family: "poppins", sans-serif;

    height: 2.5rem;
    width: 6.5rem;

    border: none;
    border-radius: 2rem;

    font-weight: bold;
    font-size: 1.135rem;

    cursor: pointer;
  }
   
  .Login {
    background: none;
    color: ${({ theme }) => theme.Gray};

    transition: ease-in-out 0.2s;
    :hover{
        color: black;
    }
   
  }

  .SignUp {
    background-color: ${({ theme }) => theme.ButtonBackground};
    color: #ffffff;

    transition: ease-in-out 0.2s;

    :hover{
                background-color: rgba(48, 234, 234, 0.7);
    }
  }

}
`