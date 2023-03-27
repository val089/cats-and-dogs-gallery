import ReactPaginate from 'react-paginate';
import { ArrowLeftIcon, ArrowRightIcon } from '@app/assets/icons';
import './Pagination.scss';
import { SelectedPage } from '@app/models';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: SelectedPage) => void;
}

export const Pagination = ({ pageCount, onPageChange }: PaginationProps) => {
  return (
    <ReactPaginate
      onPageChange={onPageChange}
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
  );
};
