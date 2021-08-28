import styles from './styles.module.css';

export const Toasts = ({ text = '', mode = 'primary' }) => {
  const classes = [styles.toast, styles[mode]].join(' ');
  return <div className={classes}>{text}</div>;
};
