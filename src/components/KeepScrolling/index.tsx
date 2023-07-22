import { NT } from "src/fonts";
import styles from "./index.module.css";
import { memo } from "react";

function KeepScrolling(props: {
  scrolled?: boolean;
  done?: boolean;
}) {
  return (
    <div className={[styles.wrapper, NT.className].join(" ")}>
      <div style={{opacity: props.done ? 0 : 1}}>{props.scrolled ? "Keep scrolling" : "Scroll Down"}</div>
      <span style={{opacity: props.done ? 0 : 1}}>&#x2304;</span>
    </div>
  );
}

export default memo(KeepScrolling, (prev, next) => prev.scrolled === next.scrolled && prev.done === next.done)
