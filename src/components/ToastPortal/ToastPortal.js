import ReactDOM from 'react-dom';
import { useState } from 'react';
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
  return isShown
    ? ReactDOM.createPortal(
        <div className={styles.toasters}>
          {toasts.map(toast => (
            <Toasts key={toast.id} text={toast.text} mode={toast.mode} />
          ))}
        </div>,
        document.getElementById(toastId),
      )
    : null;
};
