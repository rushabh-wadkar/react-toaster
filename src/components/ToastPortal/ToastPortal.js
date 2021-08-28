import ReactDOM from 'react-dom';
import React from 'react';
import { useState, useCallback, useImperativeHandle } from 'react';
import { uuid } from 'shared';

import styles from './styles.module.css';
import { useToasts } from 'hooks';
import { Toasts } from 'components';

export const ToastPortal = React.forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);
  const [isShown, toastId] = useToasts();
  useImperativeHandle(
    ref,
    () => ({
      addToasts: toast => {
        console.log(toasts);
        setToasts([...toasts, { ...toast, id: uuid() }]);
      },
    }),
    [toasts],
  );
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
});
