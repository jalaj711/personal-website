import { ReactNode } from "react";
import styles from "./index.module.css";

export default function Chip(props: {
  children: string;
  color?: { r: number; g: number; b: number };
}) {
  const color = /*props.color ||*/ { r: 255, g: 255, b: 255 };
  return (
    <div
      className={styles.chip}
      style={
        //@ts-ignore
        { "--r": color.r, "--g": color.g, "--b": color.b }
      }
    >
      {props.children}
    </div>
  );
}

export function ChipGroup(props: { children: ReactNode }) {
  return <div className={styles.chip_group}>{props.children}</div>;
}
