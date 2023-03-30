import { HeartEmptyIcon, HeartFilledIcon } from '@app/assets/icons';
import { useAddToFavouritesMutation } from '@app/store/slices/api';
import classes from './HeartButton.module.scss';
import { Filter } from '@app/models';

interface HearButtonProps {
  filter: Filter;
  userId: string;
  photoId: string;
  isInFavourites: boolean;
}

export const HearButton = ({ filter, userId, photoId, isInFavourites }: HearButtonProps) => {
  const [addToFavourites, { isLoading: isAddingToFavourites }] = useAddToFavouritesMutation();

  return (
    <button
      className={classes.heartButton}
      onClick={() => {
        addToFavourites({
          filter,
          sub_id: userId,
          image_id: photoId,
        });
      }}
      disabled={isInFavourites || isAddingToFavourites}
    >
      {isInFavourites ? (
        <HeartFilledIcon fill="red" />
      ) : (
        <HeartEmptyIcon fill={isAddingToFavourites ? 'rgba(255,255,255,0.5' : '#fff'} />
      )}
    </button>
  );
};
