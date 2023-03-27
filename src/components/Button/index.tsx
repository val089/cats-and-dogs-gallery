import classes from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
  style?: string;
}

export const Button = ({ label, onClick, style = '' }: ButtonProps) => {
  return (
    <button className={`${classes.button} ${style}`} onClick={onClick}>
      {label}
    </button>
  );
};
