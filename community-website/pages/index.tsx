import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import ConfettiGenerator from "confetti-js";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  const typed = useRef<null | Typed>(null);

  useEffect(() => {
    const options = {
      strings: [
        "Get started with Your First Open Source Project!",
        "Submit your first open source contribution now!",
        "Join our awesome community of 88 members!",
      ],
      typeSpeed: 75,
      backSpeed: 75,
    };

    // #typing-element refers to the <code> rendered below
    typed.current = new Typed("#typing-element", options);

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const confettiSettings = { target: 'confetti-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, [])
  
  // Force 'refresh' of page when resizing it in dev tools
  // useEffect(() => {
  //   window.addEventListener('resize', ()=> {
  //     window.location.reload();
  //   })
  // }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Your First Open Source Project</title>
        <meta name="description" content="YFOSP Community Website" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <canvas id="confetti-canvas" className={`${styles.canvas} bg-white dark:bg-black`}></canvas>


      <main className={`${styles.main} text-black dark:text-white`}>
        <NavBar></NavBar>

        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://github.com/Your-First-Open-Source-Project/Hacktoberfest2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your First Open Source Project!
          </a>
        </h1>

        <p className={styles.description}>
          <code className={`${styles.code} dark:bg-black`} id="typing-element"></code>
        </p>

        <div className={styles.grid}>
          <a href="./community-members" className={styles.card}>
            <h2>Our Community &rarr;</h2>
            <p>Find information about our community members here 👬</p>
          </a>

          <a href="./contributors" className={styles.card}>
            <h2>Our Contributors &rarr;</h2>
            <p>
              Learn about those who created this website using Next.js &
              TypeScript 💻
            </p>
          </a>

          <a href="./community-guidelines" className={styles.card}>
            <h2>Our Guidelines &rarr;</h2>
            <p>The community guidelines that everyone has to follow 👨‍💻</p>
          </a>

          <a
            href="https://github.com/Your-First-Open-Source-Project"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Find us on GitHub &rarr;</h2>
            <p>Join our wonderful & growing community of 88 people 💖</p>
          </a>
        </div>
      </main>

      <footer className={`${styles.footer} text-black dark:text-white`}>
        <a
          href="https://hacktoberfest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by the community for Hacktoberfest 2022 with ❤️
        </a>
      </footer>
    </div>
  );
};

export default Home;
