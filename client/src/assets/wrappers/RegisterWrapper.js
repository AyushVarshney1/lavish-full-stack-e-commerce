import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: ${(props) => (props.isMember ? "514px" : "575px")};
  background-color: var(--whiteColor);
  /* background-color: var(--primaryColorLighter); */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  h1 {
    position: relative;
    /* color: var(--blackColor); */
    color: var(--primaryColor);
    font-weight: 600;
    font-size: 40px;
    margin-bottom: -2px;
  }
  h4 {
    /* margin-left: -70%; */
    color: black;
    font-weight: 300;
  }
  .anchorButton {
    background: none !important;
    border: none;
    padding: 0 !important;
    /*input has OS specific font-family*/
    /* color: #96969; */
    text-decoration: underline;
    cursor: pointer;
    font-size: 15px;
  }
  border-radius: 10px;
`;

export default Wrapper;
