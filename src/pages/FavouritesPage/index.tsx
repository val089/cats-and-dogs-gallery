import { useAuth } from '@app/hooks/useAuth';
import { GalleryFavourites } from './GalleryFavourites';
import classes from './FavouritesPage.module.scss';

export const FavouritesPage = () => {
  const { userId } = useAuth();

  if (!userId) {
    return null;
  }

  return (
    <div className={classes.favourites}>
      <h2>Favourites</h2>
      <GalleryFavourites userId={userId} />
    </div>
  );
};
