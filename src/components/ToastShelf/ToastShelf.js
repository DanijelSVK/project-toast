import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToast } from "../ToastProvider";

function ToastShelf() {
  const { dismissToast, toasts } = useToast();

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} handleClose={() => dismissToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
