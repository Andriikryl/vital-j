import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import { Button } from "../button/Button";
export default function MainHero() {
  return (
    <section className={style.hero}>
      <Container>
        <h1 className={style.hero__title}>Vital-J Empowering</h1>
        <p className={style.hero__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div className={style.center__box}>
          <Button type="button__main">Buy natural</Button>
        </div>
      </Container>
    </section>
  );
}
