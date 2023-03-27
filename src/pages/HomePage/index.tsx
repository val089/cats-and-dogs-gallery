import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import sleepingCat from '@app/assets/animations/sleeping-cat.json';
import dogInBox from '@app/assets/animations/dog-in-box.json';
import classes from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={classes.screen}>
      <div className={classes.intro}>
        <div className={classes.animationsContainer}>
          <Lottie animationData={dogInBox} style={{ maxWidth: 150, width: '100%' }} />
          <Lottie animationData={sleepingCat} style={{ maxWidth: 200, width: '100%' }} />
        </div>
        <h1 className={classes.title}>Cats and Dogs Gallery</h1>
        <Link to="/gallery" className={classes.link}>
          ENTER
        </Link>
      </div>
    </div>
  );
};
