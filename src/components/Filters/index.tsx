import { Button } from '../Button';
import classes from './Filters.module.scss';

interface FiltersProps {
  onDogs: () => void;
  onCats: () => void;
}

export const Filters = ({ onDogs, onCats }: FiltersProps) => {
  return (
    <div className={classes.filters}>
      <Button onClick={onDogs}>Dogs</Button>
      <Button onClick={onCats}>Cats</Button>
    </div>
  );
};
