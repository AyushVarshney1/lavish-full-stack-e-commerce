import { styled } from "styled-components";

const Wrapper = styled.div`
  margin-top: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* left: 245px; */
  .contactCardContainerTitle{
    color: #a9a9a9;
    font-weight: 400;
  }
  .contactCardsContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 50px;
    justify-content: center;
  }
  .contactCard{
    background-color: var(--backgroundColor);
    width: 325px;
    height: 275px;
    margin-top: 20px;
    border: 2px solid #D3D3D3;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: 0.1s;
  }
  .contactCard:hover{
    border: 2px solid var(--primaryColor);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  }
  .active{
    border: 2px solid var(--primaryColor);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  .contactIcon{
    color: var(--primaryColorLighter);
    margin-top: 20px;
  }
  .contactCardTitle{
    font-weight: 400;
    text-align: center;
  }
  .contactCardText{
    text-align: center;
    color: #a9a9a9;
    width: 280px;
    font-size: 13px;
  }
`;

export default Wrapper;
