import styles from './styles.module.css';

import { useState, useRef } from 'react';
import { ToastPortal } from 'components';

export const App = () => {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('primary');
  const [autoClose, setAutoClose] = useState(false);
  const ref = useRef(null);
  const onFormSubmit = e => {
    e.preventDefault();
    const input = {
      text,
      mode,
      autoClose,
    };
    ref.current.addToasts(input);
    setText('');
  };
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Toaster Notifications</h1>
        <div className={styles.content}>
          <img src="/assets/toaster.png" alt="toaster" />
          <form onSubmit={onFormSubmit}>
            <div className={styles.autoClose}>
              <input
                name="auto-close-checkbox"
                id="auto-close-checkbox"
                type="checkbox"
                value={autoClose}
                onChange={e => setAutoClose(e.target.checked)}
              />
              <label htmlFor="auto-close-checkbox">Auto close</label>
            </div>

            <select value={mode} onChange={e => setMode(e.target.value)}>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="info">Info</option>
              <option value="success">Succes</option>
              <option value="warning">Warning</option>
              <option value="danger">Danger</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>

            <input
              type="text"
              value={text}
              placeholder="Toaster text"
              onChange={e => setText(e.target.value)}
            />

            <button>Submit</button>
          </form>
        </div>
      </div>
      <ToastPortal ref={ref} />
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};
