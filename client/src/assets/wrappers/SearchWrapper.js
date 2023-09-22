import styled from "styled-components";

const Wrapper = styled.div`
    input[type=text]{
        background-color: #e6e6e6;
        border: none;
        width: 350px;
        height: 30px;
        border-radius: 5px;
        padding-left: 40px;
        color: black;
        font-weight: 500;
        font-size: 15px;
        /* transition: 0.5s; */
    }
    input[type=text]:focus{
        outline: 2px solid #e6e6e6;
        background-color: var(--backgroundColor);
    }
    .searchIcon{
        position: absolute;
        margin: 5px 0px 0px 8px;
    }
`;

export default Wrapper