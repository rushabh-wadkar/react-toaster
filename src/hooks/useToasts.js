import { uuid } from 'shared';
import { useState, useEffect } from 'react';

export const useToasts = function () {
  const [toastId] = useState(`toast-id-${uuid()}`);
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    let element = document.createElement('div');
    element.id = toastId;
    // element.classList.add(styles.toast, styles.light);
    document.getElementsByTagName('body')[0].prepend(element);
    setIsShown(true);
    return () => {
      document.getElementById(toastId).remove();
    };
  }, [toastId]);

  return [isShown, toastId];
};
