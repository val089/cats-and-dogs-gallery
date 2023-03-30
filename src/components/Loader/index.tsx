import Lottie from 'lottie-react';
import runningDog from '@app/assets/animations/running-dog.json';
import sleepingCat from '@app/assets/animations/sleeping-cat.json';
import classes from './Loader.module.scss';
import { Filter } from '@app/models';

interface LoaderProps {
  filter: Filter;
}

export const Loader = ({ filter }: LoaderProps) => {
  return (
    <div className={classes.loader}>
      {filter === 'dogs' ? (
        <Lottie animationData={runningDog} style={{ width: 200 }} />
      ) : (
        <Lottie animationData={sleepingCat} style={{ width: 200 }} />
      )}
    </div>
  );
};
