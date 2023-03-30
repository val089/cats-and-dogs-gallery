import { ReactNode } from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  children: ReactNode | string;
  onClick: () => void;
  style?: string;
}

export const Button = ({ children, onClick, style = '' }: ButtonProps) => {
  return (
    <button className={`${classes.button} ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};
