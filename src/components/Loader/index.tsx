import Lottie from 'lottie-react';
import runningDog from '@app/assets/animations/running-dog.json';
import classes from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={classes.loader}>
      <Lottie animationData={runningDog} style={{ width: 200 }} />
    </div>
  );
};
