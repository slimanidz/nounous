import React from "react";
import { BiChevronsLeft } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  return (
    <div className=" sm:w-64 h-10  flex justify-around items-center gap-3 ">
      <button
        className={currentPage === 1 ? "invisible" : null}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <BiChevronsLeft />
      </button>
      <p>
        Page {currentPage} / {totalPages}
      </p>
      <button
        className={currentPage >= totalPages ? "invisible" : null}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <BiChevronsRight />
      </button>
    </div>
  );
};

export default Pagination;
