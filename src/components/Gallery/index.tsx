import { Cat, Dog } from '@app/models';

interface GalleryProps {
  currentItems: Dog[] | Cat[];
}

export const Gallery = ({ currentItems }: GalleryProps) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index}>
            <img key={item.id} src={item.url} width={300} />
          </div>
        ))}
    </>
  );
};
