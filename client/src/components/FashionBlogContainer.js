import React from "react";
import { BsPinterest, BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";

const FashionBlogContainer = () => {
  return (
    <>
      <div className="fashionBlogContainer">
        <h1 className="cardContainerTitle">Elevate Your Fashion</h1>
        <div className="fashionBlogContainerCard">
          <a
            href="https://thedaileigh.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="fashionBlogLink"
          >
            <img
              className="fashionBlogImage"
              src="assets/images/fashion_blog_img.jpg"
              alt="fashion blog"
            />
          </a>
          <div className="fashionBlogTextContainer">
            <a
              href="https://thedaileigh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="fashionBlogLink"
            >
              <p className="fashionBlogHeader">The Fashion Blog</p>
              <p className="fashionBlogLinkHeader">(Daileigh)</p>
            </a>
            <p className="fashionBlogSubHeader">Where Fashion Gets Easy.</p>
            <p className="fashionBlogText">
              The Daileigh’s Ashleigh Hutchinson wants her readers to build
              their perfect closet. She aims to help women of all ages find or
              create a style they love. In particular, Ashleigh wants older
              women to feel confident in their own style. She wants to break the
              assumption that some trends are suited only to a particular age
              group. Ashleigh’s philosophy centers around the notion that “age
              is only a number.”
            </p>
            <div className="fashionBlogIcons">
              <IconContext.Provider value={{ size: "1.75em", color: "red" }}>
                <a
                  href="https://in.pinterest.com/thedaileigh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsPinterest />{" "}
                </a>
              </IconContext.Provider>
              <IconContext.Provider
                value={{ size: "1.75em", color: "#3b5998" }}
              >
                <a
                  href="https://www.facebook.com/ashleighthedaileigh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionBlogContainer;
