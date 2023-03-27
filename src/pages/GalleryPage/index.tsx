import { useState, useCallback } from 'react';
import Gallery, { GalleryI, GalleryProps } from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Pagination } from '@app/components';
import { useFetchDogsQuery } from '@app/store/slices/api';
import { Loader } from '@app/components';
import { SelectedPage } from '@app/models';
import classes from './GalleryPage.module.scss';

const totalItems = 200;
const itemsPerPage = 20;

export const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const {
    data: dogs,
    isError: isDogsError,
    isLoading: isDogsLoading,
    isFetching,
  } = useFetchDogsQuery({ limit: itemsPerPage, page: currentPage });

  const formatedDogs =
    dogs &&
    dogs.map((dog) => ({
      src: dog.url,
      width: dog.width || 300,
      height: dog.height || 300,
      id: dog.id,
    }));

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (selectedPage: SelectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  if (isDogsError) {
    return (
      <div>
        <p>An error has occurred</p>
      </div>
    );
  }

  return (
    <div className={classes.gallery}>
      <h2>Gallery</h2>
      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
      {isFetching && <Loader />}
      {!!formatedDogs?.length && !isFetching && (
        <>
          <Gallery photos={formatedDogs} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel currentIndex={currentImage} views={formatedDogs} />
              </Modal>
            ) : null}
          </ModalGateway>
        </>
      )}
    </div>
  );
};
