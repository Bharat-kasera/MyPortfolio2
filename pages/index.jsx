import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
import WatchIcon from "./../components/icons/WatchIcon";
import Image from 'next/image'
import Typewriter from "typewriter-effect";

export default function HomePage() {
  return (
    <>
      <div className={styles.heroimg}>
        <img src="/circles.svg" layout="fill" />
      </div>
      <div className={styles.container}>
        {/* <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div> */}
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Bharat Kasera</h1>
            {/* <h6 className={styles.bio}>Frontend Developer & UI/UX designer</h6> */}
            <div className={styles.typewriter}><p className={styles.text}>Frontend Developer & UI/UX designer.  </p></div>
            <div>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
            </div>

          </div>
          {/* <Illustration className={styles.illustration} /> */}

          <div className={styles.heroimg2}>
            <img src="/vs_code_hero.svg"  />
          </div>
          <div className={styles.heroimg3}>
            <img src="/ver_icons.svg"  />
          </div>

        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
