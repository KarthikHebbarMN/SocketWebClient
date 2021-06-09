import React from "react";
import Image from "next/image";
import styles from "../items/Items.module.css";

export const Items = () => {
  return (
    <>
      <div className={styles.itemsdiv}>
        <div className={styles.first}>
          <h2 className={styles.awesome}>Awesome Chair</h2>
          <button className={styles.awesomebtn}>Buy now</button>
        </div>
        <div className={styles.second}>
          <h2 className={styles.awesome}>Awesome Chair</h2>
          <button className={styles.awesomebtn}>Buy now</button>
        </div>
        <div className={styles.third}>
          <h2 className={styles.awesome1}>Awesome Chair</h2>
          <button className={styles.awesomebtn1}>Buy now</button>
          <Image
            src="/images/Rectangle690.png"
            alt="Picture of the author"
            width={350}
            height={666}
          />
        </div>
        <button className={styles.letsgo}>Let's Go</button>
      </div>

      {/* second part */}
      <h1 className={styles.personheading}>
        Personalization to
        <br /> your dream
      </h1>

      <div className={styles.personalization}>
        <div className={styles.box}> </div>
        <div className={styles.box}> </div>
        <div className={styles.box}> </div>
        <div className={styles.square}>
          <Image
            className={styles.squareimage}
            src="/images/Rectangle108.png"
            alt="Picture of the author"
            width={683}
            height={1024}
          />
        </div>
        <h1 className={styles.floor}>Floor</h1>
        <div className={styles.floordesign}>
          <div className={styles.design}>
            <Image
              className={styles.squareimage}
              src="/images/Rectangle132.png"
              alt="Picture of the author"
              width={209}
              height={166}
            />
          </div>
          <div className={styles.design}>
            <Image
              className={styles.squareimage}
              src="/images/Rectangle133.png"
              alt="Picture of the author"
              width={209}
              height={166}
            />
          </div>
          <div className={styles.design}>
            <Image
              className={styles.squareimage}
              src="/images/Rectangle134.png"
              alt="Picture of the author"
              width={209}
              height={166}
            />
          </div>
        </div>
      </div>

      {/* Lets build something */}

      <div className={styles.banner}>
        <div className={styles.innerbanner}>
          <div className={styles.searchbarbanner}>
            <form>
              <input
                type="text"
                placeholder="Type your email for this"
                name="search"
              />
              <button type="submit">Click Now</button>
            </form>
          </div>
        </div>
      </div>

      {/* Recent Articles */}
      <div className={styles.articles}>
        <h1 className={styles.recent}>Recent Articles</h1>
        <div className={styles.article1}></div>
        <div className={styles.article2}></div>
        <div className={styles.smalldiv1}>
          <h4 className={styles.eyecare}>Eye Care</h4>
          <h2 className={styles.topic}>
            After the daily classes he no longer collapsed
          </h2>
        </div>
        <div className={styles.smalldiv2}>
          <h4 className={styles.eyecare}>Eye Care</h4>
          <h2 className={styles.topic}>
            After the daily classes he no longer collapsed
          </h2>
        </div>
        <button className={styles.morearticles}>More Articles</button>
      </div>
    </>
  );
};

export default Items;
