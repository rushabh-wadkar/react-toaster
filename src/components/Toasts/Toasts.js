import styles from './styles.module.css';

export const Toasts = ({ id, text = '', mode = 'primary', onClose }) => {
  const classes = [styles.toast, styles[mode]].join(' ');
  return (
    <div className={classes} onClick={() => onClose(id)}>
      {text}
    </div>
  );
};
