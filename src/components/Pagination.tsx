import React from "react";
import PropTypes from "prop-types";
import styled from '@emotion/styled';


interface Props {
    currentPage: number;
    totalPages: number;
    handleNextPage: (page: number) => void;
    handlePrevPage: (page: number) => void;
}
const Pagination: React.FC<Props> = ({
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
}) => {
    return (
        <div 
        className="pagination-button-wrapper"
        style={{marginBottom: '20px'}}
        >
            <button
                className="pagination-button"
                onClick={() => handlePrevPage(currentPage)}
                disabled={currentPage === 1}
            >
                &larr;
            </button>

            <span className="pagination-page-info">
                Page {currentPage} of {totalPages}
            </span>

            <button
                className="pagination-button"
                onClick={() => handleNextPage(currentPage)}
                disabled={currentPage === totalPages}
            >
            &rarr;
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlePrevPage: PropTypes.func.isRequired,
    handleNextPage: PropTypes.func.isRequired,
};

export default Pagination;