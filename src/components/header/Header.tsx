"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import logo from "public/icons/logo/logo.svg";
import Link from "next/link";
import BurgerButton from "./BurgerButton";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  {
    id: 2,
    title: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    title: "About Us",
    link: "/about",
  },
  {
    id: 4,
    title: "Contact us",
    link: "/contactUs",
  },
  {
    id: 5,
    title: "FAQ",
    link: "/faq",
  },
];

export default function Header() {
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dis-scroll", activeState);
  }, [activeState]);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <header className={style.header}>
      <Container className={style.header__container}>
        <div className={style.header__box}>
          <Link href="/" className={style.header__logo}>
            <Image src={logo} width={98} height={60} alt="logo" />
          </Link>
          <nav
            className={`${style.nav} ${activeState ? style.menu_active : ""}`}
          >
            <ul className={style.list}>
              {data.map((item) => {
                return (
                  <li className={style.list__item} key={item.id}>
                    <Link href={item.link} className={style.item__link}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </header>
  );
}
