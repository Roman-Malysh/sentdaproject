import React from 'react';
import './PaginatedItems.scss';
import classNames from 'classnames';
export function getNumbers(from, to){
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}
export const Pagination = ({
  total,
  perPage,
  currentPage,
  onPageChanger,
  onClick,
}) => {
  const paginsLength = Math.ceil(total / perPage);
  const pagins = [currentPage, currentPage + 1, currentPage + 2, paginsLength];

  const handlePageChange = (page) => {
    if (page === currentPage || page > paginsLength || page < 1) {
      return;
    }

    onPageChanger(page);
  };

  return (
   <>
   { paginsLength > 1 && (
    <ul className="pagination">
    <li
      className={classNames(
        'page-item',
        { disabled: currentPage === 1 },
      )}
    >
      <a
        data-cy="prevLink"
        className="page-link"
        aria-disabled={currentPage === 1}
        onClick={() => {
          handlePageChange(currentPage - 1);
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        «
      </a>
    </li>
    {pagins.map(page => {
      return (
        <li
          key={page}
          className={classNames("li",{"li_active": currentPage === page })}
          
        >
          <a
            data-cy="pageLink"
            className={classNames("page-link", {"li_active": currentPage === page })}
            onClick={() => {
              onPageChanger(page);
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            {page}
          </a>
        </li>
      );
    })}

    <li
      className={classNames(
        'page-item',
        { disabled: currentPage === paginsLength },
      )}
    >
      <a
        data-cy="nextLink"
        className="page-link"
        aria-disabled={currentPage === paginsLength}
        onClick={() => {
          handlePageChange(currentPage + 1);
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        »
      </a>
    </li>
  </ul>
   )}
   </>
  );
};