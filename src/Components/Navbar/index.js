import React, { useEffect, useState } from "react";
import { Nav, Logo, Avatar } from "./Navbar.style";
const Navbar = () => {
  const [show, handeShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handeShow(true);
      } else {
        handeShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <Nav show={show}>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix-logo"
      />
      <Avatar
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      />
    </Nav>
  );
};

export default Navbar;
