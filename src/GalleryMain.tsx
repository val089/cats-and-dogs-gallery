import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Gallery } from './Gallery';
import { ArrowLeftIcon, ArrowRightIcon } from '@app/assets/icons';
import './Pagination.scss';

import { useFetchDogsQuery } from './store/slices/api';

export const GalleryMain = ({
  itemsPerPage = 2,
  itemsLength = 10,
}: {
  itemsPerPage?: number;
  itemsLength?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const {
    data: dogs,
    isError: errorFetchindDogs,
    isLoading: loadingDogs,
  } = useFetchDogsQuery({ limit: itemsPerPage, page: currentPage });
  const pageCount = Math.ceil(itemsLength / itemsPerPage);

  const handlePageClick = (page: { selected: number }) => {
    setCurrentPage(page.selected);
  };

  return (
    <>
      {dogs && <Gallery currentItems={dogs} />}
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={undefined}
        containerClassName="pagination"
        nextClassName="next"
        previousClassName="previous"
        activeClassName="item active"
        breakClassName="item break-me"
        disabledClassName="disabled-page"
        nextLabel={<ArrowRightIcon size={25} />}
        previousLabel={<ArrowLeftIcon size={25} />}
        breakLabel="..."
        marginPagesDisplayed={2}
      />
    </>
  );
};
