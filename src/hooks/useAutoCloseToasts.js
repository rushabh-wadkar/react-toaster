import { useEffect, useCallback } from 'react';

export const useAutoCloseToasts = ({ toasts, setToasts }) => {
  const removeToast = useCallback(
    id => {
      setToasts(toasts.filter(t => t.id !== id));
    },
    [toasts, setToasts],
  );
  useEffect(() => {
    let timer;
    const filteredToasts = toasts.filter(t => t.autoClose === true);
    if (filteredToasts.length !== 0) {
      timer = setTimeout(() => {
        const firstToast = filteredToasts[0];
        if (firstToast) {
          removeToast(firstToast.id);
        }
      }, 2500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [toasts, removeToast]);
};
