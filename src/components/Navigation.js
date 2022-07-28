import React from "react";
import { Link } from "react-router-dom";
import { BiHomeSmile, BiBookContent } from "react-icons/bi";
import { MdLocalMovies, MdFireplace } from "react-icons/md";
import { DesktopNavItem, MobileNavItem } from "./";
import useMobile from "./hooks/useMobile";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isMobile = useMobile();
  const links = [
    {
      name: "Home",
      link: "",
      icon: <BiHomeSmile />,
    },
    {
      name: "Content",
      link: "/content",
      icon: <BiBookContent />,
    },
    {
      name: "Movies",
      link: "/movies",
      icon: <MdLocalMovies />,
    },
    {
      name: "Places",
      link: "/places",
      icon: <MdFireplace />,
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLink}>
        {isMobile ? <MobileNavItem /> : <DesktopNavItem />}
      </div>
      {links.map((item, index) => {
        return (
          <div className={styles.navbarLink} key={`link-${index}`}>
            <Link to={item.link} className={styles.navbarLinkItem}>
              {isMobile ? null : item.name}
              {item.icon}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation;
