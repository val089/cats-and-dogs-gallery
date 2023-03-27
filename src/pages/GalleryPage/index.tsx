import { useState } from 'react';
import { Pagination, Loader, Button } from '@app/components';
import { useFetchPhotosQuery } from '@app/store/slices/api';

import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { Filter, SelectedPage } from '@app/models';
import classes from './GalleryPage.module.scss';

const totalItems = 200;
const itemsPerPage = 20;

export const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState<Filter>('dogs');
  const [photoIndex, setPhotoIndex] = useState(-1);

  const {
    data: photos,
    isError,
    isFetching,
  } = useFetchPhotosQuery({ limit: itemsPerPage, page: currentPage, filter });

  const formatedPhotos =
    photos &&
    photos.map((photo) => ({
      src: photo.url,
      width: photo.width || 300,
      height: photo.height || 300,
      id: photo.id,
    }));

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (selectedPage: SelectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  if (isError) {
    return (
      <div>
        <p>An error has occurred</p>
      </div>
    );
  }

  return (
    <div className={classes.gallery}>
      <h2>Gallery</h2>
      <div className={classes.filters}>
        <Button onClick={() => setFilter('dogs')} label="Dogs" />
        <Button onClick={() => setFilter('cats')} label="Cats" />
      </div>
      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
      {isFetching && <Loader filter={filter} />}
      {!!formatedPhotos?.length && !isFetching && (
        <>
          <div className={classes.photoAlbum}>
            <PhotoAlbum
              photos={formatedPhotos}
              layout="rows"
              targetRowHeight={300}
              spacing={5}
              onClick={({ index }) => setPhotoIndex(index)}
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
    </div>
  );
};
