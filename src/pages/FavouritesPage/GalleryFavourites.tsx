import { useState } from 'react';
import { useRemoveFromFavouritesMutation, useFetchFavouritesQuery } from '@app/store/slices/api';

import PhotoAlbum, { RenderContainer } from 'react-photo-album';
import { toast } from 'react-toastify';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Fullscreen, Slideshow, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { Filters, Loader } from '@app/components';
import { Filter } from '@app/models';
import classes from './GalleryFavourites.module.scss';

const renderContainer: RenderContainer = ({ containerProps, children, containerRef }) => (
  <div
    style={{
      padding: '40px 0',
      maxWidth: 1280,
      margin: '0 auto',
    }}
  >
    <div ref={containerRef} {...containerProps}>
      {children}
    </div>
  </div>
);

interface GalleryFavouritesProps {
  userId: string;
}

export const GalleryFavourites = ({ userId }: GalleryFavouritesProps) => {
  const [photoIndex, setPhotoIndex] = useState(-1);
  const [filter, setFilter] = useState<Filter>('dogs');

  const { data: photos, isFetching, isError } = useFetchFavouritesQuery({ filter, userId });
  const [removeFromFavourites, { isLoading: isRemoving }] = useRemoveFromFavouritesMutation();

  const formatedPhotos = photos?.map((photo) => ({
    ...photo,
    src: photo.image.url,
    width: 300,
    height: 300,
  }));

  if (isFetching || isRemoving) {
    return <Loader filter={filter} />;
  }

  if (isError) {
    toast.error('asdas');
    return null;
  }

  return (
    <>
      {!formatedPhotos?.length && (
        <p className={classes.info}>{`You don't have any favourites at this moment.`}</p>
      )}
      {!!formatedPhotos?.length && (
        <>
          <Filters onCats={() => setFilter('cats')} onDogs={() => setFilter('dogs')} />
          <PhotoAlbum
            photos={formatedPhotos}
            layout="masonry"
            spacing={5}
            onClick={({ index }) => setPhotoIndex(index)}
            renderContainer={renderContainer}
            renderPhoto={({
              photo: { id },
              imageProps: { alt, src, style, ...restImageProps },
            }) => (
              <div style={{ width: style.width, position: 'relative' }}>
                <img
                  alt={alt}
                  src={src}
                  style={{ ...style, width: '100%', height: 'auto', aspectRatio: 'auto' }}
                  {...restImageProps}
                />
                <button
                  className={classes.deleteFromFavouritesBtn}
                  onClick={async () => {
                    const filter = src.includes('dog') ? 'dogs' : 'cats';
                    console.log(src);
                    console.log(filter);
                    console.log(id);
                    await removeFromFavourites({ filter: filter, id });
                  }}
                >
                  Remove
                </button>
              </div>
            )}
          />

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
