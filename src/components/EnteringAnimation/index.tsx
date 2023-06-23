import styles from "./index.module.css";
import { NT } from "src/fonts";

export default function EnteringAnimation() {
  return (
    <div className={styles.container}>
      <div className={[styles.text, NT.className].join(" ")}>
        {["", "h", "i"].map((elem, index) => (
          <span
            key={index}
            style={{
              animationDelay: index * 0.05 + "s",
            }}
          >
            {elem}
          </span>
        ))}
      </div>
      <div className={[styles.text, NT.className].join(" ")}>
        {["", "i", " ", "a", "m"].map((elem, index) => (
          <span
            key={index}
            style={{
              animationDelay: 2 + index * 0.05 + "s",
            }}
          >
            {elem}
          </span>
        ))}
      </div>
    </div>
  );
}
