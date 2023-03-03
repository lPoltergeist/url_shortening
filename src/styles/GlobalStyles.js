import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.VeryDarkBlue}; 
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

 }

 body{
   font-family: "poppins", sans-serif;

   //Buttons
   button {
    border: none;

    font-family: "poppins", sans-serif;

    height: 2.5rem;
    width: 6.5rem;

    border-radius: 2rem;

    font-weight: bold;
    font-size: 1.135rem;

    cursor: pointer;

    transition: ease-in-out 0.5s;

   }

   //Login Buttons
   .Login {
    background: none;
    color: ${({ theme }) => theme.Gray};

    :hover{
        color: black;
    }
   }

   //Sign Up Buttons
  .SignUp{
    background-color: ${({ theme }) => theme.ButtonBackground};
    color: #ffffff;

    :hover{
                background-color: rgba(48, 234, 234, 0.7);
    }
   }
 }


 //Nav Menu
li {
  cursor: pointer;
  list-style: none;
}


//Text

span {
  color: ${({ theme }) => theme.VeryDarkBlue}
}

`