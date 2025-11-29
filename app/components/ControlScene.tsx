import styles from "./ControlScene.module.css";

export function ControlScene() {
  return (
    <section className={styles.scene} aria-label="Hand interacting with floating controls">
      <div className={styles.canvas}>
        <div className={styles.hand} aria-hidden="true">
          <div className={styles.palm} />
          <div className={styles.thumb} />
          <div className={`${styles.finger} ${styles.index}`} />
          <div className={`${styles.finger} ${styles.middle}`} />
          <div className={`${styles.finger} ${styles.ring}`} />
          <div className={`${styles.finger} ${styles.pinky}`} />
        </div>

        <div className={`${styles.card} ${styles.muteCard}`} role="group" aria-labelledby="mute-label">
          <span id="mute-label" className={styles.cardLabel}>
            Mute
          </span>
          <div className={styles.iconMute} aria-hidden="true">
            <span className={styles.iconBody} />
            <span className={styles.iconWave} />
            <span className={styles.iconX} />
          </div>
          <span className={styles.status}>On</span>
        </div>

        <div
          className={`${styles.card} ${styles.brightnessCard}`}
          role="group"
          aria-labelledby="brightness-label"
        >
          <span id="brightness-label" className={styles.cardLabel}>
            Brightness
          </span>
          <div className={styles.slider} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
            <div className={styles.sliderTrack} />
            <div className={styles.sliderFill} />
            <div className={styles.sliderThumb} />
            <div className={styles.sliderGlow} />
          </div>
          <span className={styles.status}>Max</span>
        </div>
      </div>
    </section>
  );
}
