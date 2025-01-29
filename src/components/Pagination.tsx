import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/episodeSlice';
import { RootState } from '../store/store';

export const Pagination: React.FC = () => {
    const dispatch = useDispatch();
    const { currentPage, paginationInfo } = useSelector(
        (state: RootState) => state.episodes
    );

    if (!paginationInfo) return null;

    return (
        <div className="flex justify-center gap-4 py-6">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                disabled={!paginationInfo.prev}
                onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            >
                Previous
            </button>
            <span className="px-4 py-2">
                Page {currentPage} of {paginationInfo.pages}
            </span>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                disabled={!paginationInfo.next}
                onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            >
                Next
            </button>
        </div>
    );
};