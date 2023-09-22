import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 1356px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: relative;
  top: 71px;
  .productContainerHeader {
    font-size: 36px;
    font-weight: 500;
    margin-top: 15px;
    /* margin-left: -80px; */
  }
  .productSortContainer{
    display: flex;
    flex-direction: row;
    width: 100%;
    column-gap: 670px;
    margin-top: 50px;
    margin-left: 140px;
    
  }
  select{
    width: 170px;
    height: 35px;
    background-color: var(--backgroundColor);
    border-color: #d2d2d2;
    font-size: 16px;
    color: black;
    padding-left: 10px;
  }
  .selectClass *{
    padding-top: 10px;
  }
  .paddingSelect{
    padding-top: 10px;
  }
  .numberOfItems{
    color: #999999;
  }
  .products{
    margin-top: 30px;
    /* margin-left: -100px; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 60px;
    row-gap: 40px;
  }
`;

export default Wrapper;
