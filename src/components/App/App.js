import styles from './styles.module.css';

import { useState } from 'react';

export const App = () => {
  const [text, setText] = useState('');
  const [mode, setMode] = useState('primary');
  const [autoClose, setAutoClose] = useState(false);
  const onFormSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Portals and Toaster</h1>
        <div className={styles.content}>
          <img src="/assets/toaster.png" alt="toaster" />
          <form onSubmit={onFormSubmit}>
            <div className={styles.autoClose}>
              <input
                type="checkbox"
                value={autoClose}
                onChange={e => setAutoClose(e.target.checked)}
              />
              <label>Auto close</label>
            </div>

            <select value={mode} onChange={e => setMode(e.target.value)}>
              <option>Primary</option>
              <option>Secondary</option>
              <option>Info</option>
              <option>Warning</option>
              <option>Danger</option>
              <option>Light</option>
              <option>Dark</option>
            </select>

            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />

            <button>Submit</button>
          </form>
        </div>
      </div>
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
