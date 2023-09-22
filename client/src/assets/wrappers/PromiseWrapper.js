import styled from "styled-components";

const Wrapper = styled.div`
    border: 2px solid #D3D3D3;
    width: 70%;
    display: flex;
    flex-direction: row;
    .promiseContainer{
        border-right: 2px solid #D3D3D3;
        width: 33.4%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        
    }
    .promiseTextContainer{
        margin-left: 15px;
    }
    .boldPromise{
        font-weight: 900;
        font-size: 20px;
        /* padding-top: 5px; */
    }
    .promiseText{
        font-size: 15px;
        margin-top: -15px;
    }
    .noRightBorder{
        border-right: none;
    }
`

export default Wrapper