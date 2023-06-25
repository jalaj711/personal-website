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

export function DjangoChip() { return <Chip color={{r: 100, g: 200, b: 100}}>Django</Chip> }
export function ReactChip() { return <Chip color={{r: 150, g: 255, b: 255}}>react</Chip> }
export function ReduxChip() { return <Chip color={{r: 255, g: 150, b: 255}}>redux</Chip> }
export function PostgresChip() { return <Chip color={{r: 50, g: 150, b: 255}}>postgres</Chip> }
export function MySqlChip() { return <Chip color={{r: 50, g: 150, b: 255}}>MySql</Chip> }
export function TSChip() { return <Chip color={{r: 150, g: 150, b: 255}}>TS</Chip> }
export function DRFChip() { return <Chip color={{r: 255, g: 100, b: 100}}>DRF</Chip> }
export function FlaskChip() { return <Chip color={{r: 100, g: 255, b: 100}}>Flask</Chip> }
export function JSChip() { return <Chip color={{r: 255, g: 255, b: 100}}>JS</Chip> }
export function FigmaChip() { return <Chip color={{r: 255, g: 100, b: 255}}>Figma</Chip> }
