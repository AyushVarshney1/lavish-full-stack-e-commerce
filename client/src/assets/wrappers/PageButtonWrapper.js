import { styled } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 300px;

    .prevButton, .nextButton{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 10%;
        background-color: var(--backgroundColor);
        border: 2px solid #C0C0C0;
    }

    .prevButton:hover, .nextButton:hover{
        border: 2px solid #71797E;
        color: #71797E;
    }

    
    .prevIcon, .nextIcon{
        color: 	#71797E;
    }

    .buttonContainer{
        display: flex;
        flex-direction: row;
        width: auto;
        height: 50px; 
        column-gap: 10px;
        margin: 0px 40px;
        
    }
    .pageButton{
        width: 50px;
        font-size: 20px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: var(--primaryColor);
        font-weight: 600;
        transition: 0.1s;
    }
    .pageButton:hover{
        border: 2px solid var(--primaryColor);
        border-radius: 10%;
    }
    .active{
        background-color: var(--primaryColor);
        color: white;
        border-radius: 10%;
    }
`

export default Wrapper