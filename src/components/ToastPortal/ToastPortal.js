import ReactDOM from 'react-dom';
import { useState, useCallback } from 'react';
import { uuid } from 'shared';

import styles from './styles.module.css';
import { useToasts } from 'hooks';
import { Toasts } from 'components';

export const ToastPortal = () => {
  const [toasts, setToasts] = useState([
    { id: uuid(), text: 'Hello', mode: 'primary' },
    { id: uuid(), text: 'World', mode: 'danger' },
    { id: uuid(), text: 'Warning', mode: 'warning' },
  ]);
  const [isShown, toastId] = useToasts();
  const closeToastHandler = useCallback(
    id => {
      setToasts(toasts => toasts.filter(t => t.id !== id));
    },
    [setToasts],
  );
  return isShown
    ? ReactDOM.createPortal(
        <div className={styles.toasters}>
          {toasts.map(toast => (
            <Toasts
              key={toast.id}
              id={toast.id}
              text={toast.text}
              mode={toast.mode}
              onClose={closeToastHandler}
            />
          ))}
        </div>,
        document.getElementById(toastId),
      )
    : null;
};
