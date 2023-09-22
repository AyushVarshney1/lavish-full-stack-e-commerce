import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  background-color: var(--backgroundColor);
  height: 70px;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 2fr 0.5fr 0.5fr;
  place-items: center;
  position: fixed;
  z-index: 1;
  top: 0px;
  .logo{
    cursor: pointer;
    width: 90px;
    height: 70px;
  }

  .navbarLinks {
    color: black;
    cursor: pointer;
    position: relative;
    font-size: 20px;
  }

  .navbarLinks:after {
    content: "";
    position: absolute;
    width: 80px;
    height: 5px;
    bottom: -10px;
    left: -11px;
    transform: scaleX(0);
    /* box-shadow: 0 5px 0 #e8476a, 0 10px 0 purple; */
    background: #663f2f;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .navbarLinks:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .navbarLinksBig {
    color: black;
    cursor: pointer;
    position: relative;
    font-size: 20px;
  }

  .navbarLinksBig:after {
    content: "";
    position: absolute;
    width: 120px;
    height: 5px;
    bottom: -10px;
    left: -11px;
    transform: scaleX(0);
    /* box-shadow: 0 5px 0 #e8476a, 0 10px 0 purple; */
    background: #663f2f;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .navbarLinksBig:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
export default Wrapper;
