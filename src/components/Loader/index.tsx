import { NT, Raleway } from "src/fonts";
import styles from "./index.module.css";

export default function Loader(props: { percentage: number, text: string}) {

    return (
        <div className={[styles.wrapper, NT.className].join(' ')}>
            <div className={styles.percentage}>{Math.round(props.percentage)}</div>
            <div className={styles.content}>
                <h1 className={styles.h1}>Loading...</h1>
                <div className={styles.progress_track}>
                    <div className={styles.progress_bar} style={{width: props.percentage + '%'}}></div>
                    <div className={styles.progress_bar_shadow} style={{width: props.percentage + '%'}}></div>
                </div>
                <div className={[styles.loading_text, Raleway.className].join(' ')}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}
