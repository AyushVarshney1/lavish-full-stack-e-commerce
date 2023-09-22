import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .ratings{
        display: flex;
        flex-direction: row;
        position: relative;
        left: 30px;
        column-gap: 2px;
        cursor: pointer;
    }
    .top-margin{
        margin-top: 6px;
    }
    .ratingText{
        margin-left: 3px;
        font-size: 15px;
    }
    .ratingText:hover{
        color: var(--primaryColorDarker);
    }
    
`

export default Wrapper