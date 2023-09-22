import styled from "styled-components";

const Wrapper = styled.div`
  height: 1450px;
  width: 350px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  .header {
    color: black;
    position: relative;
    top: 25px;
    left: 20px;
    font-size: 24px;
    font-weight: 500;
  }
  .filterContainer {
    background-color: var(--backgroundColor);
    height: 1250px;
    width: 300px;
    border: 2px solid #e6e6e6;
    position: relative;
    top: 60px;
    border-radius: 5px;
    box-shadow: rgba(9, 30, 66, 15) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    /* margin-bottom: 250px; */
    /* left: 50px; */
  }
  .filterHeader {
    font-size: 18px;
    position: relative;
    left: 20px;
  }
  .removeFilterButtonContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .button-22 {
    align-items: center;
    appearance: button;
    /* background-color: #0276ff; */
    background-color: var(--primaryColor);
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    font-family: "RM Neue", sans-serif;
    font-size: 100%;
    line-height: 1.15;
    padding: 10px 21px;
    text-align: center;
    text-transform: none;
    transition: color 0.13s ease-in-out, background 0.13s ease-in-out,
      opacity 0.13s ease-in-out, box-shadow 0.13s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    position: relative;
    top: 20px;
  }

  .button-22:active {
    background-color: #006ae8;
  }

  .button-22:hover {
    /* background-color: #1c84ff; */
    background-color: var(--primaryColorLighter);
  }
  .filterRemoveIcon{
    position: relative;
    right: 4px;
    bottom: 1px;
  }
`;

export default Wrapper;
