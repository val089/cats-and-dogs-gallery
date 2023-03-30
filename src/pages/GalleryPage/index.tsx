import { useAuth } from '@app/hooks/useAuth';
import { MainGallery } from './MainGallery';
import classes from './GalleryPage.module.scss';

export const GalleryPage = () => {
  const { userId } = useAuth();

  if (!userId) {
    return null;
  }

  return (
    <div className={classes.gallery}>
      <h2>Gallery</h2>
      <MainGallery userId={userId} />
    </div>
  );
};
