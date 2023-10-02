import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Emprov from "public/emproving/emroving.jpg";
import Image from "next/image";
import { Button } from "../button/Button";
import sideOne from "public/emproving/side-one.jpg";
import sideTwo from "public/emproving/side-two.jpg";
import sideThree from "public/emproving/side-thee.jpg";
import sideFour from "public/emproving/side-four.jpg";

export default function Emproving() {
  return (
    <section className={style.emproving}>
      <Container>
        <div className={style.title__box}>
          <h2 className={style.emproving__title}>Vital-J Empowering:</h2>
          <p className={style.emproving__subTitle}>
            Сollection, inspired by nature{" "}
          </p>
        </div>
        <div className={style.flex__group}>
          <div className={style.emproving__image}>
            <Image src={Emprov} width={716} height={477} alt="image" />
          </div>
          <div className={style.emproving__info}>
            <p className={style.emproving__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              fermentum velit. Phasellus tempor lorem eget dui commodo laoreet.
              Duis vitae malesuada felis, eu gravida felis. Integer et eleifend
              mi. Vestibulum posuere libero ac ante cursus.
            </p>
            <Button type="button__second">Buy now</Button>
          </div>
        </div>
      </Container>
      <div className={style.side__block}>
        <div className={style.image__box}>
          <Image src={sideOne} width={268} height={276} alt="image" />
        </div>
        <div className={style.image__box}>
          <Image src={sideTwo} width={268} height={276} alt="image" />
        </div>
        <div className={style.image__box}>
          <Image src={sideThree} width={268} height={276} alt="image" />
        </div>
        <div className={style.image__box}>
          <Image src={sideFour} width={268} height={276} alt="image" />
        </div>
      </div>
    </section>
  );
}
