import { ButtonHTMLAttributes } from 'react';

import styles from './OpacityButton.module.scss';

export function OpacityButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={styles.opacityButtonContainer}
      {...props}
    />
  )
}