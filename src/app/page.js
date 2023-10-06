import styles from "./page.module.css";
import Button from "../components/button";
import Heading from "@/components/heading";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading heading='Home Page' number='10'/>
      <p>
        This is a boilerplate for Next.js 13 with Tailwind CSS 2.2, PostCSS 8,
        and CSS Modules.
      </p>
      <p>New line for practice</p>
      <h6>This is a random heading</h6>
      <Button text="click to know more" />

    </main>
  );
}
