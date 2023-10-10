import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [isDisplayed, setIsDisplayed] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* notice | warning | success | error */}
      <Toast
        isDisplayed={isDisplayed}
        variant={variant}
        handleClose={() => setIsDisplayed(false)}
      >
        {message}
      </Toast>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantOption, index) => (
              <label htmlFor={`variant-${variantOption}`} key={index}>
                <input
                  id={`variant-${variantOption}`}
                  type="radio"
                  name="current-variant"
                  value={variantOption}
                  onChange={(e) => setVariant(e.target.value)}
                  checked={variantOption === variant}
                />
                {variantOption}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setIsDisplayed(!isDisplayed)}>
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
