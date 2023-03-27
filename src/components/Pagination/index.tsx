import ReactPaginate from 'react-paginate';
import { ArrowLeftIcon, ArrowRightIcon } from '@app/assets/icons';
import './Pagination.scss';
import { SelectedPage } from '@app/models';
import useMediaQuery from '@app/hooks/useMediaQuery';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: SelectedPage) => void;
}

export const Pagination = ({ pageCount, onPageChange }: PaginationProps) => {
  const isMobile = useMediaQuery('(max-width: 700px)');

  return (
    <ReactPaginate
      onPageChange={onPageChange}
      pageRangeDisplayed={isMobile ? 1 : 5}
      pageCount={pageCount}
      renderOnZeroPageCount={undefined}
      containerClassName="pagination"
      nextClassName="next"
      previousClassName="previous"
      activeClassName="item active"
      breakClassName="item break-me"
      disabledClassName="disabled-page"
      nextLabel={<ArrowRightIcon size={isMobile ? 15 : 25} />}
      previousLabel={<ArrowLeftIcon size={isMobile ? 15 : 25} />}
      breakLabel="..."
      marginPagesDisplayed={2}
    />
  );
};
