import React, { useEffect, useState } from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import styled from "styled-components";

const ScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 900) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {showScrollButton && (
        <ScrollTo onClick={handleScrollToTop}>
          <KeyboardArrowUpIcon sx={{ color: "#108a00" }} />
        </ScrollTo>
      )}
    </>
  );
};

const ScrollTo = styled.div`
  width: 25px;
  padding: 6px;
  border-radius: 14px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 2px rgba(0, 30, 0, 0.15);
  position: fixed;
  bottom: 20px;
  right: 60px;
  border: 1px solid #108a00;
  cursor: pointer;
`;

export default ScrollButton;
