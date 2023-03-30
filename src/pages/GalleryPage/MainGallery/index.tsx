import { useState } from 'react';
import { Pagination, Loader, Filters } from '@app/components';
import { useFetchFavouritesQuery, useFetchPhotosQuery } from '@app/store/slices/api';

import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { Filter, SelectedPage } from '@app/models';
import classes from './MainGallery.module.scss';
import { toast } from 'react-toastify';
import { HearButton } from '../HeartButton';

const totalItems = 200;
const itemsPerPage = 20;

interface MainGalleryProps {
  userId: string;
}

export const MainGallery = ({ userId }: MainGalleryProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState<Filter>('dogs');
  const [photoIndex, setPhotoIndex] = useState(-1);

  const {
    data: photos,
    isError,
    isFetching,
  } = useFetchPhotosQuery({ limit: itemsPerPage, page: currentPage, filter });

  const {
    data: favourites,
    isFetching: isFavouritesFetching,
    isError: isFavouritesError,
  } = useFetchFavouritesQuery({ filter, userId });

  const formatedPhotos =
    photos &&
    photos.map((photo) => {
      const isInFavourites = !!favourites?.find((item) => photo.id === item.image_id);

      return {
        src: photo.url,
        width: photo.width || 300,
        height: photo.height || 300,
        id: photo.id,
        isInFavourites,
      };
    });

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (selectedPage: SelectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  if (isError || isFavouritesError) {
    toast.error('Problem with fetching data');
    return null;
  }

  return (
    <>
      <Filters onCats={() => setFilter('cats')} onDogs={() => setFilter('dogs')} />
      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
      {(isFetching || isFavouritesFetching) && <Loader filter={filter} />}
      {!!formatedPhotos?.length && !isFetching && !isFavouritesFetching && (
        <>
          <div className={classes.photoAlbum}>
            <PhotoAlbum
              photos={formatedPhotos}
              layout="rows"
              targetRowHeight={300}
              spacing={5}
              onClick={({ index }) => setPhotoIndex(index)}
              renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                <div style={wrapperStyle} className={classes.photo}>
                  {renderDefaultPhoto({ wrapped: true })}{' '}
                  <HearButton
                    filter={filter}
                    isInFavourites={photo.isInFavourites}
                    photoId={photo.id}
                    userId={userId}
                  />
                </div>
              )}
            />
          </div>

          <Lightbox
            slides={formatedPhotos}
            open={photoIndex >= 0}
            index={photoIndex}
            close={() => setPhotoIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </>
      )}
    </>
  );
};
