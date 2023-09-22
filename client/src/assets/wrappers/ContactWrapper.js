import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 70px;
  align-items: center;
  .contactUsTitle{
    color: var(--primaryColor)
  }
  .contactUsText {
    font-size: 15px;
    color: #a9a9a9;
    margin-top: -10px;
  }
  .contactInfoContainer {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* row-gap: 0px; */
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 150px;
  }
  .contactInfoName {
    display: flex;
    flex-direction: column;
  }
  .contactInfoNameInput{
    margin-top: 10px;
    height: 35px;
    width: 325px;
    border-radius: 5px;
    border: 1px solid darkgray;
  }
  .contactInfoEmail {
    display: flex;
    flex-direction: column;
  }
  .contactInfoPhone {
    display: flex;
    flex-direction: column;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .contactInfoDropdown{
    display: flex;
    flex-direction: column;
  }
  .contactInfoMessage{
    display: flex;
    flex-direction: column;
  }
  textarea{
    resize: none;
  }
  .contactInfoMessageInput{
    margin-top: 10px;
    height: 80px;
    width: 325px;
    border-radius: 7px;
    border: 1px solid darkgray;
  }
  .contactButtonContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }  
  .contactButton{
    margin-top: 50px;
    width: 175px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--primaryColorLighter);
    background-color: var(--primaryColorLighter);
    color: white;
    font-size: 18px;
    transition: 0.2s;
    margin-bottom: 15px;

  }
  .contactButton:hover{
    background-color: var(--primaryColorDarker);
  }
`;

export default Wrapper;
