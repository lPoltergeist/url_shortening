import styled from "styled-components";

export const ShortenedLink = styled.div`
background-color: #fff;

display: flex;
justify-content: space-between;

margin-bottom: 0.5rem;

align-items: center;

min-height: 3rem;
width: 65%;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: start;

    span {
        padding: 0.2rem 1rem;
    }
}

span {
    margin: 0 1rem;
}


.shortened {
    display: flex;
    align-items: start;

    @media (max-width: 768px) {
    flex-direction: column;
    border-top: 1px gray solid;
    width: 100%;
    padding: 0.5rem;
}

    .shortLink {
        color: ${({ theme }) => theme.ButtonBackground}
    }

    button{
        height: 2rem;
        width: 5rem;
        border-radius: 5px;

        font-size: 1rem;

        margin: 0 1rem;

        @media (max-width: 768px) {
            width: 100%;
            margin: 0;
        }
    }

    .Clicked{
        background-color: ${({ theme }) => theme.VioletBackground};
        color: #fff;
    }
}

`