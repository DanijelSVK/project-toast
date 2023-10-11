import React, { useCallback } from "react";
import { useEscapeKey } from "../../useEscapteKey/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = useCallback(({ variant = "notice", message }) => {
    setToasts((toasts) => [
      ...toasts,
      { id: crypto.randomUUID(), variant, message },
    ]);
  }, []);

  const dismissToast = useCallback(
    (id) => {
      const nextToasts = toasts.filter((toast) => toast.id !== id);

      setToasts(nextToasts);
    },
    [toasts]
  );

  const dismissAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(dismissAllToasts);

  return (
    <ToastContext.Provider value={{ addToast, dismissToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => React.useContext(ToastContext);

export default ToastProvider;
