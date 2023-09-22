import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 410px;
  width: 300px;
  background-color: var(--backgroundColor);
  /* display: flex;
  flex-direction: column; */

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  img {
    width: 300px;
    height: 310px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .wishlistIcon {
    position: absolute;
    margin-top: 10px;
    margin-left: 270px;
    height: 20px;
    width: 20px;
    color: var(--primaryColorLighter);
    /* visibility: hidden; */
  }
  .wishlistIcon:hover {
    cursor: pointer;
    fill: var(--primaryColorDarker);
  }
  .productReviewContainer {
    position: absolute;
    width: 95px;
    height: 30px;
    background-color: var(--backgroundColor);
    /* background-color: #e8e8e8; */
    /* background-color: rgb(169, 169, 169, 0.3); */
    /* background-color: var(--primaryColorLighter); */
    /* background-color: rgb(129, 79, 58, 0.3); */
    margin-top: 270px;
    margin-left: 20px;
    /* border: 0.25px solid black; */
    border-radius: 2px;
    /* top: 10%; */
    display: flex;
    flex-direction: row;
    align-items: center;
    /* color: white; */
    color: black;
    justify-content: space-evenly;
    font-size: 14px;
    font-weight: 600;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* row-gap: 10px; */
  }
  .productBrand {
    font-weight: 700;
    font-size: 20px;
  }
  .productName {
    font-weight: 400;
    font-size: 16px;
    color: #71797e;
  }
  .productPriceInfoContainer {
    display: flex;
    flex-direction: row;
    column-gap: 5px;
    margin-top: 8px;
  }
  .productDiscountedPrice {
    font-weight: 700;
  }
  .productPrice {
    font-weight: 200;
    color: #71797e;
    font-size: 14px;
    margin-top: 3px;
    text-decoration: line-through;
    text-decoration-thickness: 1px;
  }
`;

export default Wrapper;
