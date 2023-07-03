import { NT } from "src/fonts";
import styles from "./index.module.css";
export default function KeepScrolling(props: {scrolled?: boolean}) {
  return (
    <div className={[styles.wrapper, NT.className].join(' ')}>
      <div>{props.scrolled ? 'Keep scrolling' : 'Scroll Down'}</div>
      <span>&#x2304;</span>
    </div>
  );
}
