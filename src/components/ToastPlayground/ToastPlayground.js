import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";
import { useToast } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState([]);
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    addToast({ variant, message });
    setVariant(VARIANT_OPTIONS[0]);
    setMessage("");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
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
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
