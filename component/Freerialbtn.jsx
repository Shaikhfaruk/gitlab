import React from "react";

const FreeTrialbtn = () => {
  const link = {
    url: "https://img.icons8.com/color/48/000000/gitlab.png",
    href: "/",
  };
  return (
    <>
      <a
        className="btn btn-nav-cta btn-nav-link-cta "
        id="fst-btn"
        href={link.href}
        style={{
          backgroundColor: "#e65328",
          color: "#fff",
          fontWeight: "600",
          padding: "0.2rem 0.7rem",
        }}
      >
        Get free trial
      </a>
    </>
  );
};

export default FreeTrialbtn;
