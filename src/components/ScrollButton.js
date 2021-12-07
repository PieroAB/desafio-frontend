import React, { memo, useState } from "react";

const ScrollButton = memo(() => {
  const [visible, setVisible] = useState(false);

  const buttonVisible = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 400) {
      setVisible(true);
    } else if (scroll <= 400) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", buttonVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-button">
      <a
        href="https://pieroab.github.io/desafio-frontend/#"
        className={visible ? "d-inline" : "d-none"}
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="currentColor"
          className="bi bi-arrow-up-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
      </a>
    </div>
  );
});

export default ScrollButton;
